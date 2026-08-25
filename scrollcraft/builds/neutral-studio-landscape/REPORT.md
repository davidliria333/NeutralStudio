# Neutral Studio Landscape report

## Outcome

One continuous 40.2-second TensorPix landscape film drives the complete page. It is delivered as dedicated desktop and mobile scrub encodes and mounted as one ScrollCraft worldflight segment, preserving the source's direct cuts without adding runtime dissolves. The 4K TensorPix source remains untouched and outside Git; no page-ready encode adds audio.

The interface now uses a sans-serif Manrope system and a distilled three-part hero: oversized white "NeutralStudio", one positioning line and one "Start your path" action. On desktop, that action combines real `liquid-glass-react` refraction with a chromatic `metal-fx` WebGL ring; the duplicate header CTA and the explanatory bottom dock were removed. Desktop portfolio placeholders retain their own liquid-glass refraction, while mobile uses visually matched static surfaces to protect scroll performance. Desktop wheel and trackpad input is eased with Lenis while touch devices and reduced-motion visitors keep native scrolling.

## Journey

1. Clear value proposition over the open coast.
2. A short explanation of the connected approach.
3. Portfolio placeholders appear at the widest point in the landscape.
4. Services and starting prices return the page to a quieter, more precise rhythm.
5. The route resolves on one direct contact action.

## Signature move

A restrained topographic line advances with the master film and turns the portfolio placeholders into milestones on the same route.

## Verification

- Production build completed successfully after the TensorPix and liquid-glass integration.
- Every page-ready video leg stays below GitHub's 100 MB per-file limit.
- Desktop: the complete master segment was verified across the full scroll track.
- Mobile: the complete master segment was verified at 390 × 844.
- Reduced motion: every copy state remains available over the TensorPix poster and the video is not fetched.
- Desktop and mobile scroll passes painted the page-ready video at its intended resolution and kept its playhead moving whenever it was visible.
- Scroll controls the film, every copy window and every route state; boundaries stay on the original direct cuts with a sub-pixel seam.
- A 1,200 px desktop wheel gesture now resolves through 42 measured intermediate positions and still lands at exactly 1,200 px; the Approach route control lands at its expected 1,436 px target.
- Lenis remains inactive on touch-sized mobile input and under reduced motion.
- The hero contains exactly three direct children. Desktop mounts the MetalFx canvas; mobile uses the static equivalent, and reduced motion pauses the shader.
- Body copy remains on white glass surfaces; the oversized white hero uses a dark edge and shadow to stay legible as the sky moves behind it.
- The contact sheets exposed the package's Tailwind-dependent inner sizing; a local full-surface adapter now makes the refractor occupy each complete card.

## Approach path refinement, 24 August 2026

- Replaced the single large Approach panel with one compact editorial statement and three glass milestones placed along a drawn route.
- Added a page-local `--approach-p` timeline. The route draws forward and the milestones settle in sequence without changing the worldflight segment, video pace or section map.
- Preserved the intended feeling: Approach now reads as curiosity and progression, while the portfolio remains the single visual peak.
- Production build and `git diff --check` pass.
- Desktop, 390 × 844 mobile and reduced-motion contact sheets were checked. The master clip keeps moving, the segment paints a real frame and no dead scroll was detected. Reduced motion holds the poster, removes positional movement and keeps all three milestones available.
- Keyboard focus order and visible focus rings remain intact. The Approach itself adds no focusable controls.
- The generic worldflight assertion reports 21 passes and three seam failures because this implementation intentionally has one segment, so there is no incoming or outgoing seam to sample. Stage, spacer, copy transform, playhead interpolation, poster fallback and reduced-motion contracts all pass.
- Automated contrast values for the Approach are not reliable because the verifier hides the parent `data-sc-copy` block together with its nested glass panels, then samples the raw film. The rendered desktop, mobile and reduced-motion frames were reviewed manually; the text remains on high-opacity white surfaces. Existing portfolio contrast findings remain outside this refinement.

## Local preview

http://127.0.0.1:5174/

## Mobile performance repair, 25 August 2026

- Replaced the 82,021,105-byte 1920 × 1080 mobile source with a 19,315,532-byte 720 × 1280 portrait H.264 scrub encode derived from the enhanced TensorPix master. It uses 20 fps, no B-frames and a 0.3-second keyframe interval so the phone decodes only the visible crop and can settle short seeks quickly.
- Added a 48,232-byte portrait poster and responsive preload. Mobile no longer downloads the 1,255,479-byte 4K desktop poster.
- Mobile video uses native HTTP range loading instead of waiting for a full in-memory Blob. The verified response is `206`, the real frame paints, the 40.2-second playhead reaches the end and no page errors or browser long tasks were observed in the automated mobile pass.
- Mobile renders static composited glass surfaces and a plain hero heading. GSAP SplitText, MetalFx and LiquidGlass are dynamically deferred and were not requested in the 390 × 844 mobile run. Desktop retains the full animated/refraction treatment.
- Removed the full-frame CSS colour filter and backdrop blur from the mobile path. Higher-opacity static surfaces preserve readability without continuously filtering the video underneath.
- `npm run build` passed. ScrollCraft desktop, 390 × 844 mobile and reduced-motion passes found no dead scroll; the video painted and moved through all sampled mobile and desktop states. Reduced motion kept the poster and did not fetch video.
- A throttled production-preview check at 1.6 Mbps reached DOM-ready in about 1.25 seconds and painted the first video frame after the first touch while retaining the poster as the loading fallback. This is browser emulation, not a physical-iPhone measurement.

## Portfolio proof and carousel, 25 August 2026

- Replaced the six placeholder cards with the seven supplied UX/UI studies in a real carousel on the right.
- Added a compact proof column on the left using only figures already documented in the project: 100+ projects shipped, seven selected interface studies and five connected disciplines. No unsupported client-count claim was added.
- The carousel index follows the Portfolio portion of the worldflight timeline and remains directly controllable with previous and next buttons.
- The controls were verified with keyboard activation and visible focus at 1440 × 900 and 390 × 844. Both changed the active project while retaining focus.
- A production build passed using a temporary output folder because the NAS copy could not atomically clear the existing `dist/generated` directory.
- ScrollCraft desktop, 390 × 844 mobile and reduced-motion passes found no dead scroll or frozen clip. The new Portfolio block introduced no contrast failure; the harness continues to report the pre-existing hero, Approach and Services sampling findings.
- Desktop, mobile and reduced-motion contact sheets were inspected. The proof column leads, the carousel remains the visual peak and the mobile layout reflows to proof above work without changing DOM or focus order.

## Portfolio categories and full-image framing, 25 August 2026

- Added three category selectors inside the Portfolio carousel: Branding (five pieces), Web (five pieces) and UX/UI (seven pieces).
- Replaced cropped media framing with `object-fit: contain`, centred alignment and responsive inner spacing. Landscape, square and portrait assets now remain fully visible inside a stable carousel frame.
- Removed the viewport padding that exposed a sliver of the adjacent slide. The active slide now meets both viewport edges while the breathing room stays inside the slide.
- Added active-surface inertness to Hero, Portfolio, Services and Contact. Invisible later sections no longer intercept pointer or touch events over the Portfolio controls.
- All 17 pieces loaded successfully in desktop and mobile automation. Every category and every next action was exercised by keyboard; mobile Branding, Web and UX/UI category switching plus slide navigation was also verified by real touch events.
- Final geometry checks report zero unintended left or right slide gap, complete image loading and `contain` framing. Production build, `git diff --check` and local preview checks pass.
