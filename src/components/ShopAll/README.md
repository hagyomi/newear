# Lookbook scroll interaction

Reference: https://www.thefutureinblack.com/?ref=siteinspire
Section: `69fccadb04df5912baa33f92` (For You list).

The reference uses CSS view timelines, including the time each card spends sticky.
`cover 10%` is a percentage of that element's complete view timeline, not 10% of
the page, viewport height, or a fixed GSAP duration.

- Card: `rotate(30deg) translateY(40px)` → `rotate(0deg) translateY(0)`.
- Pivot: center bottom. Linear easing, `entry 0%` → `cover 10%`.
- Card dimensions and text remain unchanged during scrolling.
- Upper-body portraits retain their original layout size without image scaling.
- Desktop full-body images: scale 2 → 1 from card entry until its sticky top.
  Previous cards remain visible when the next card overlaps them.
  Final size equals the original layout
  size. Their cutout wrappers allow overflow so the enlarged images are not clipped.
- Desktop: sticky top `5rem`, first-card lead-in `35vh`, subsequent gaps
  `calc(100vh + 100px)` keep the next enlarged cutout outside the
  viewport until the previous image reaches 1x. No timed autoplay is involved.
- Mobile below 768px: sticky top `4rem`, gaps `12vh`; image shrinking is desktop
  only, matching the reference's media query. Original local card assets and
  layout dimensions are retained.
- A `90vh` tail provides release space without duplicating a hidden product.

Native rotation timelines run on supported browsers. `useLookbookStack.js`
controls full-body image completion and supplies a rotation fallback. Keep cutout
overflow set to `clip`: `hidden` would create an unintended scroll container for
the image's view timeline.

Browser checks: `.tools/verify-lookbook-framing.mjs` verifies all five portraits
stay at 1x, all five full-body images move through 2x/1.5x/1x, final dimensions
match the original layout, proportions stay unchanged, reverse scrolling works,
and mobile keeps the original static image sizes.
