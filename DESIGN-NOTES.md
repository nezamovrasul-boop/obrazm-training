# Pinterest component refinement — pinterest-15

Prepared: 11 November 2026. Base: published `refined-14`, commit `9778293d613fe2693011f5b79b322354ae92e956`. This release preserves the pre-Cobalt paper/orange/graphite palette, Apple system typography, real colour photographs, 27–29 November 2026 dates, +998 90 987 73 15 phone and DoYoga Studio map.

## Changes

- Added `components.css` as the single owner of the updated components. Removed obsolete component rules from the legacy stylesheets while preserving shared layout, hero motion and gallery/menu controls.
- Unified buttons: orange primary, outline secondary and quieter text links; 52 px minimum primary height, 44 px compact controls, 12 px corners, visible keyboard focus, pointer-appropriate hover and reduced-motion support. Decorative CTA arrows are removed. The hero action says “Узнать об участии”.
- Programme: three native details rows with date, activities and daily focus visible before expansion. The nine original detailed points remain available. Desktop columns become readable mobile rows. The redundant self-link inside the programme is removed; hero links still open and focus the correct day.
- FAQ: thin separators, readable questions and answers, compact plus/minus indicators and spacious click targets. Removed the obsolete instruction about contacts being added later; the real phone now accompanies the participation information.
- Practice photographs now have three distinct captions: “Живой диалог”, “Йога и движение”, “Дыхание и внимание”. Removed repeated photo blocks. PhotoSwipe opens eight photographs in four galleries; the hero deck remains separate and unchanged.
- Venue: a practical DoYoga Studio card pairs the real Wind studio photograph with city, dates, format, map action and phone. The Earth studio photograph remains available below. Mobile places the image above the information. Opening hours, entrance instructions and an unconfirmed street address have not been invented.

## References applied

The selected Pinterest references informed composition and hierarchy only: button system 01, conference programme 02, Flow Yoga photo layout 04, Namaste venue card 05 and mobile FAQ 06. Agenda 03 remains an alternative, not a second programme. Full source links and visual rationale are saved in the project-root `PINTEREST-REFERENCES.md`. Existing photographs and system font are retained; no third-party template content or new JavaScript dependency was added.

## Verification for this release

Local rendered checks at widths 320, 390, 768, 820, 821, 1024, 1440 and 1920 px found no horizontal page overflow or clipped text in the inspected headings, copy, buttons, dates and venue information. Desktop/mobile screenshots were reviewed for the hero, programme, FAQ, practice photographs and venue card. A venue image sizing defect found during review was corrected.

Functional checks passed: programme/FAQ expansion, hero-to-day navigation and focus, mobile menu Escape handling, PhotoSwipe opening/closing and focus return, and the contact dialog's `tel:+998909877315` destination. The local browser reported no console errors. Static checks passed for unique IDs, local assets, anchor targets and JavaScript syntax. These checks do not substitute for the pending physical-device and throttled-network tests in the backlog.

`qa-preview.html` is a local fixture with animation disabled and must not be published. The actual page retains reduced-motion-aware animation. Release publication and live verification are tracked in `SITE-BACKLOG.md`.

---

## Historical release: refined-14

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
