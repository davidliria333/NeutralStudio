from collections import deque
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[3]
SOURCE = ROOT / "UXUI"
OUT = ROOT / "public/generated/neutral/uxui-frames"
OUT.mkdir(parents=True, exist_ok=True)

MANUAL = {
    "3e5df3f14ce4d721d7a349aedfc7450a.webp": [
        (125, 245, 690, 1490), (750, 245, 1310, 1490), (1370, 245, 1930, 1490),
    ],
    "e988f543eb494eccd7dd549cfd933223.webp": [
        (75, 125, 690, 1465), (690, 125, 1325, 1465), (1330, 125, 1970, 1465),
    ],
}


def exterior_alpha(source: Image.Image) -> Image.Image:
    keyed = source.convert("RGB")
    fill = (1, 2, 3)
    step = max(18, min(source.size) // 36)
    seeds = []
    for x in range(0, source.width, step):
        seeds.extend(((x, 0), (x, source.height - 1)))
    for y in range(0, source.height, step):
        seeds.extend(((0, y), (source.width - 1, y)))
    for seed in seeds:
        if keyed.getpixel(seed) != fill:
            ImageDraw.floodfill(keyed, seed, fill, thresh=58)
    data = bytearray(0 if pixel == fill else 255 for pixel in keyed.getdata())
    return Image.frombytes("L", source.size, bytes(data)).filter(ImageFilter.GaussianBlur(0.7))


def component_boxes(mask: Image.Image):
    scale = min(1, 760 / mask.width)
    small = mask.resize((round(mask.width * scale), round(mask.height * scale)), Image.Resampling.BILINEAR)
    width, height = small.size
    foreground = bytearray(1 if value > 110 else 0 for value in small.getdata())
    seen = bytearray(width * height)
    boxes = []
    minimum = width * height * 0.018
    for start, active in enumerate(foreground):
        if not active or seen[start]:
            continue
        queue = deque([start])
        seen[start] = 1
        count = 0
        min_x = max_x = start % width
        min_y = max_y = start // width
        while queue:
            current = queue.popleft()
            x, y = current % width, current // width
            count += 1
            min_x, max_x = min(min_x, x), max(max_x, x)
            min_y, max_y = min(min_y, y), max(max_y, y)
            for candidate in (current - 1, current + 1, current - width, current + width):
                if candidate < 0 or candidate >= len(foreground) or seen[candidate] or not foreground[candidate]:
                    continue
                cx, cy = candidate % width, candidate // width
                if abs(cx - x) + abs(cy - y) != 1:
                    continue
                seen[candidate] = 1
                queue.append(candidate)
        if count >= minimum:
            pad = 5
            boxes.append((
                max(0, round((min_x - pad) / scale)), max(0, round((min_y - pad) / scale)),
                min(mask.width, round((max_x + pad) / scale)), min(mask.height, round((max_y + pad) / scale)),
            ))
    return sorted(boxes, key=lambda box: (box[0], box[1]))


index = 1
for source_path in sorted(SOURCE.glob("*.webp")):
    source = Image.open(source_path).convert("RGBA")
    alpha = exterior_alpha(source)
    boxes = MANUAL.get(source_path.name)
    manual = boxes is not None
    if not manual:
        boxes = [box for box in component_boxes(alpha) if (box[3] - box[1]) / (box[2] - box[0]) > 1.35]
    if not boxes:
        raise RuntimeError(f"no frames detected in {source_path.name}")
    for box in boxes:
        frame = source.crop(box)
        if manual:
            mask = Image.new("L", frame.size, 0)
            ImageDraw.Draw(mask).rounded_rectangle(
                (3, 3, frame.width - 4, frame.height - 4), radius=64, fill=255
            )
            frame.putalpha(mask.filter(ImageFilter.GaussianBlur(0.7)))
        else:
            frame.putalpha(alpha.crop(box))
        if frame.width > 720:
            height = round(frame.height * 720 / frame.width)
            frame = frame.resize((720, height), Image.Resampling.LANCZOS)
        frame.save(OUT / f"frame-{index:02d}.png", optimize=True)
        index += 1

for stale in OUT.glob("frame-*.png"):
    number = int(stale.stem.split("-")[-1])
    if number >= index:
        stale.unlink()

print(f"created {index - 1} frames in {OUT}")
