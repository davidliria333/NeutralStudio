# Neutral Studio Flagship — Final report

## Outcome

The existing React/Vite home has been rebuilt as an English, chaptered editorial scroll experience. The page uses the explicitly supplied `UXUI/` work and no VIRA, ARKUOS, Galeón or CircleHome material. No client, quote, result, award or performance claim was invented.

Local URL: `http://127.0.0.1:5173/`

## Grammar and fingerprint

Grammar: **Chaptered editorial**. Filmic one-shot lost because it repeats the previous Neutral build. Live surface misrepresents a studio as software. Continuous world contradicts the requested scenes. Typographic poster underuses the UX/UI work. Gallery/catalog weakens the argument. Split stage is too binary. Rhythmic cutlist cannot carry the quiet and relief beats.

The planned and shipped build differs from the existing Neutral row on grammar, navigation, hero, act sequence, close and signature move: **6/6 dimensions**.

## Journey and feeling curve

1. Curiosity and respect: a type-only proposition with enough space to hold.
2. Recognition and unease: five disconnected makers refuse to align.
3. Relief: the fragments resolve into one connected system.
4. Desire: seven supplied UX/UI studies move through four different visual worlds.
5. Identification: a quiet editorial spread names Neutral's role.
6. Agency and confidence: Personality changes the whole composition under the visitor's hand.
7. Security: seven pieces of work provide factual proof, then the engagement becomes legible.
8. Impulse: the project begins with one clear invitation.

Peak: **“It's the site where everything breaks into pieces, then one control turns the same underlying system into completely different personalities.”** Personality is the longest act at 3.4 viewport-heights, with the quiet Philosophy chapter immediately before it.

## Feel-check diff

Cold read from the final contact sheets: **confidence → discomfort → relief → desire → reflection → agency → security → impulse**.

This matches the intended curve. The first mobile pass felt longer than intended during the information chapters, so System and Offer were compressed. The initial proof was implicit in the portfolio; the final build names the factual evidence directly without adding an unsupported testimonial.

## Scroll score

| Beat | Device |
|---|---|
| Respect | Flow title page |
| Recognition | Pin + bespoke fragmentation |
| Relief | Full-width reveal |
| Desire | Pan through four UX/UI compositions |
| Identification | Flow + restrained parallax |
| Agency | Pin + Personality range control |
| Security | Flow + factual proof + stagger |
| Impulse | Flow colophon + resolving fragments |

Device families: flow/in, pin, reveal, pan, parallax and bespoke range/input interaction. No family repeats in adjacent acts. No scrub video was required.

## Generated assets

Built-in Imagegen was used. The user-shared API key was not stored or used.

Common prompt direction: high-end photographic editorial still life, physically built materials, medium-format realism, strong negative space, visible paper/metal/acrylic texture and film grain; no text, logo, watermark, CGI, clay, low-poly, glow, glassmorphism or purple-blue lighting.

- `public/generated/neutral/personality-structure.jpg`: registration sheets, rulers, paper and acid acrylic under hard side light.
- `public/generated/neutral/personality-human.jpg`: hand-cut paper collage on a warm-black worktable.
- `public/generated/neutral/personality-play.jpg`: folded paper, acetate and registration pins on cobalt.
- `public/generated/neutral/personality-edge.jpg`: aluminium mesh, clamps, paper and an acid translucent blade in low-key light.

The desktop web copies are JPEG quality 82, 1.2 MB total. Four 900 px responsive variants add 395 KB and are selected through `srcset`/`sizes` on smaller viewports. Source PNGs remain preserved in Codex's generated-image store, outside the project.

## Verification

- `npm run build`: pass.
- `git diff --check`: pass.
- ScrollCraft desktop, mobile and reduced-motion contact sheets: pass, no dead scroll.
- Page length: 13.6 viewport-heights desktop, 14.0 mobile.
- Viewports checked: 390, 430, 768, 1024, 1440 and 1728 px.
- Horizontal overflow: zero at every checked width.
- Console and page errors: none at every checked width.
- Semantic check: one `h1`, English document language, eight labelled sections.
- Portfolio check: seven images from `UXUI/`.
- Keyboard: focus ring visible; Personality range advances with arrow keys and announces its value.
- Reduced motion: meaning remains present; the rail remains reachable through ScrollCraft's native fallback.

## Anti-slop status

No unsafe casts, runtime shape guessing, module mocks, `transition: all`, or invented data were introduced. The permanent animation-frame loop identified during independent review was replaced with scroll/resize-triggered updates. Copy passed the Deslop audit for specificity, density and voice preservation.

## Remaining limitation

The project has no automated unit, lint or typecheck scripts. Verification therefore covers production build, static anti-slop inspection, browser behavior, keyboard interaction and rendered scroll states.
