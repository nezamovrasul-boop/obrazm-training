# Photo plates — photo-19

11 November 2026. The three recognition situations and the three method entries (Осмыслить / Прожить / Сделать иначе) are now six editorial photo plates. Original headings and descriptions remain live HTML. Three columns above 1100 px, horizontal photo-and-copy rows at 621–1100 px, and stacked photo/copy below 621 px. Warm paper surfaces, flat edges, restrained rules and the system font keep the plates aligned with the site.

Six fictional illustrative photographs were generated using the built-in image_gen tool in a consistent warm linen / clay / graphite palette. They are stored locally as WebP, 1024 × 683, with explicit dimensions, lazy loading and async decoding; total weight 486850 bytes. See GENERATED-ASSETS.md for provenance. Existing real photographs elsewhere remain unchanged.

The contact was updated across all visible text, telephone links and the registration dialog to +998 95 029 00 40 (tel:+998950290040), first published in contact-18.

Local browser verification: 320 / 390 / 620 / 621 / 768 / 1100 / 1101 / 1440 px: no horizontal overflow or clipped card copy. Both sections visually reviewed on desktop and phone; all six photographs loaded. Registration dialog displays and links to the new phone. No console errors observed. Release and live verification recorded in SITE-BACKLOG.md.

---

# Quiet section labels and background drawings — quiet-17

11 November 2026. Replaces decorative chapter codes such as `01 / УЗНАТЬ СЕБЯ` with ten short sentence-case rubrics and a 24 px hairline. Method headings retain their verbs without the numeric slash prefix. Hero and PhotoSwipe counters now use the natural Russian “из” wording.

Pinterest reference: [Beckley Retreats pin saved by BIOM Design Lab](https://www.pinterest.com/pin/314196511518354492/), opened and visually reviewed. The reference uses a plain small rubric above the heading; its restrained hierarchy informed this change. The short rule is our adaptation. No artwork, font or content was copied.

Two original local SVGs add barely visible themed line drawings: lotus, a branching path, balanced stones and meditation. Stroke opacity is 0.035, width 1.5; variants use dark ink on paper and pale ink on graphite. The central area is mostly empty. CSS positions the edge motifs differently across sections and mobile views. The drawings are static decorative backgrounds, with no scripts, external references, requests or hit targets.

Local verification: 320, 390, 768 and 1440 px have no horizontal overflow or clipped rubrics. Light desktop and dark mobile sections were visually reviewed. The two-image hero counter changes correctly, images load and console errors were absent. All existing CSP restrictions remain. Deployment and live checks are recorded in SITE-BACKLOG.md.

---

# Editorial redesign — editorial-16

Prepared: 11 November 2026. Base: published `pinterest-15`, commit `cc16a2d35171cfb92f2dec87c66c8f8b4e3dce79`. Local implementation and browser checks are complete; publication and live verification are tracked in the project backlog. The pre-Cobalt paper/orange/graphite palette, Apple system font, real colour photographs, event dates, phone and DoYoga Studio map remain the project constraints.

## Visible design changes

- **Poster-style first screen.** Replaced the left-copy/right-photo-stack layout with a large upright title, a separate orange date panel and one dominant landscape photograph. A compact side column holds the invitation and participation action. Two real photographs remain available through the manual slider. On mobile the photograph follows the title immediately, with the text and action below; at 390 px its top was measured at approximately 300 px of page height.
- **An earlier, contrasting programme.** The programme is now the third section. Its top was measured at approximately 2121 px at a 1440 px viewport; the earlier 7065 px measurement belongs to refined-14. A graphite background, white text, orange dates and thin rules give it a distinct chapter. The three dates, native details, daily focus, all nine detailed programme points and hero-to-day links are preserved.
- **Editorial content rhythm.** Recognition uses a narrow label rail beside the main content. The approach section separates the large introduction from three ruled method entries. Practice photographs form an asymmetric composition with different image sizes and purposeful captions instead of three identical cards; mobile reorders these into a readable photo sequence. Community copy now centres on real group experience rather than the unverified numerical claims previously shown.
- **A portrait spread for the facilitator.** A large upright name, five-column photograph and six-column biography replace the previous conventional split block. The existing 27-year experience fact is treated typographically. The original biography, photograph and PhotoSwipe metadata are preserved, with stacked content on mobile.
- **Results and final invitation.** Outcomes are three numbered horizontal rows with rules rather than equal cards. The final invitation is a graphite composition with a large heading, compact explanation and orange participation action. Site headings use upright system typography and stronger scale contrast; button corners are quieter and consistent with the editorial layout.

The existing FAQ and venue card remain integrated with the new page rhythm. Body photographs are still grouped as eight images in four PhotoSwipe galleries; the two first-screen images are separate.

## Design references and applied scope

The following Pinterest references were opened and visually reviewed by the primary agent. Their composition informed the work; their images, copy, colours and fonts were not imported.

- [Mezzanine](https://www.pinterest.com/pin/603693525089567946/): full-width masthead and photography at different scales, adapted to the poster hero.
- [Threshold](https://www.pinterest.com/pin/931330397984309612/): strong upright typography, a dominant image and restrained orange section accents, adapted to hierarchy and pacing.
- [Sommelith Event Studio](https://www.pinterest.com/pin/1041105638865870474/): asymmetric paired photographs and editorial spreads, adapted to practice, approach and facilitator sections.
- [Design Conference / Danil Olenin](https://www.pinterest.com/pin/57491332734419815/): graphite conference programme, thin rules and clear hierarchy, adapted to the three-day section.

Skillry patterns supplemented the Pinterest direction: [Split Frame Portfolio](https://skillry.dev/skills/bs-split-frame-portfolio) for the portrait/biography relationship, [Single Frame Hero](https://skillry.dev/skills/bs-hero-single-frame) for the dominant image, and [Editorial Studio SaaS](https://skillry.dev/skills/bs-editorial-studio-saas) for restrained entry motion and adaptive structure. Only relevant patterns were adapted; no complete template, new framework or template-specific font/palette was imported.

Two easing values from [Open Props](https://github.com/argyleink/open-props/blob/f39ab7c377a0e047f930982e3611bbc95254a260/src/props.easing.css) are used locally in `editorial.css`: `--ease-out-3` and `--ease-3`. Its MIT notice is retained in `vendor/OPEN-PROPS-LICENSE.txt`. No Open Props runtime or full stylesheet is loaded. Existing reduced-motion handling is preserved; content remains available without animation.

## Implementation and security

`editorial.css` owns this release's new composition and responsive adjustments. New markup preserves section anchors, native controls and the existing gallery/contact/quiz behaviour. Contacts moved from inline JavaScript into the existing local `script.js` configuration. An early CSP meta element restricts scripts to the same origin, blocks inline scripts, and restricts frames, connections, objects and form submissions. A `strict-origin-when-cross-origin` referrer policy is declared. See the local project audit `SECURITY-NOTES.md` for the full policy, its scope and limitations; a meta policy is not a substitute for HTTP response headers.

## Verification completed locally

- Viewports 320, 390, 768, 820, 821, 1024, 1440 and 1920 px: no horizontal document overflow or clipped headings/copy in inspected states.
- Visual review passed for desktop hero, programme, facilitator and practice sections, and mobile hero and programme. The first screen and programme position were measured on the rendered page, rather than inferred from source.
- On the actual CSP-protected page: contact dialog resolves to `tel:+998909877315`; PhotoSwipe closes with Escape and restores focus; mobile menu closes with Escape; the three-question reflection flow completes; the day-two link opens its details and focuses its summary; the hero slider changes between both real images.
- No console errors were reported during these local interaction checks. Existing phone, dates and map remain intact.

`qa-preview.html` is an animation-disabled local test fixture and is excluded from publication. Live deployment status belongs in the project-root `SITE-BACKLOG.md`; it must not be inferred from the local checks above.

---

## Historical release: pinterest-15

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
