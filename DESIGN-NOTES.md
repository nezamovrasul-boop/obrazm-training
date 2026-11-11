# Refinement of the restored Your Move site

Base: 59c8dca81c0ff1a24b7b74f5e9e493332a52558f (the full pre-Cobalt restoration).
Version: refined-14. Preserve the existing orange/paper/graphite palette, Apple system type, original photographs, event copy, dates, phone and map. No Cobalt hero or display fonts.

## Grid first

layout.css owns shared geometry. Container max1220, outer gutters48/32/20/16; desktop12 columns with24px gaps, mobile4 columns with16px gaps. Paired content uses5+1+6 then6+6 at1100; sections stack at820. The restored photo-stack hero uses6+6 and stacks at900 to avoid a narrow tablet headline. Shared section spacing104/88/64 and block spacing48/40/32. Photos use aspect ratios. Program titles/expanded text use shared indentation variables. Migrated161 conflicting declarations out of styles.css. Removed body-gallery tilt/vertical offsets; the decorative hero deck keeps its original motion.

## Useful interactions

- Sticky navigation and native mobile menu; Esc, focus restoration, section links and active desktop section.
- Hero steps link to day-1/2/3, open the corresponding details and focus its summary.
- PhotoSwipe5.4.4 opens13 existing body photographs in4 section galleries. Original file dimensions, keyboard controls, zoom, mobile gestures, Russian labels, reduced-motion and a WebKit focus-return safeguard. Local vendor files; core loads only after opening a photo. Ordinary photo links remain usable without JavaScript.
- Fixed mobile participation action hides when the main hero/final action is visible or a native dialog is open.
- SVG controls replace Unicode arrow/close controls; decorative arrows removed from CTA buttons. Contact and map destinations are unchanged.
- Removed an unrelated copied Cloudflare challenge script from the original scraped HTML. Added intrinsic image dimensions and async decoding.

## References and scope

- Skillry Angled Gallery Hero: https://skillry.dev/skills/bs-hero-angled-gallery — photo-deck depth, user-driven motion and consistent controls. Existing vanilla implementation retained and refined; no React dependency.
- Skillry Editorial Studio: https://skillry.dev/skills/bs-editorial-studio-saas — mobile navigation, focus handling and steps that lead to real content. Used interaction patterns only; the event's palette, fonts and content override the SaaS template's visual contract.
- PhotoSwipe: https://github.com/dimsemenov/PhotoSwipe/tree/v5.4.4 (MIT). See PHOTOSWIPE-NOTES.md and vendor/photoswipe/LICENSE.
- Inline controls follow the Lucide geometry provided by Skillry's icon reference (1.5px strokes); simple menu/close/zoom paths require no icon runtime.

## Verification

Browser review: desktop/mobile hero, menu, practice/studio frames, programme and community; shared-container and text-overflow checks at320,390,768,820,821,900,1024,1440,1920. Corrected the narrowest hero title to72px. Native menu closes on Escape and returns focus; menu navigation focuses destination heading; day2 link opens the correct accordion; contact opens tel:+998909877315. Photo viewer cycles and returns focus to the original photo link after Escape.

JS syntax checks passed. Static checks: unique IDs, all runtime assets local and present, image width/height/alt, correct event contacts, no Cobalt markup, no challenge iframe. Skillry block checker passes the new CSS/JS. Its whole-page checker flags only two Yandex Maps hrefs as remote assets; those are user-requested navigation links, not runtime assets, and are intentionally retained.

qa-preview.html is a local visual-test fixture with animation disabled; excluded from publication. The real page retains reduced-motion-aware hero/gallery motion.
