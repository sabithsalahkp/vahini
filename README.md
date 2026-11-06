VAHINI WEDDINGS — Responsive Website, revision 6
================================================

Pages:
- index.html — extended home with services, story, gallery previews, process, supplied Google Maps review excerpts, FAQ and booking CTA.
- about.html — full editorial studio introduction.
- services.html — detailed service descriptions.
- gallery.html — existing demo image/video gallery and Film filter; lightbox retained.
- contact.html — business details and WhatsApp enquiry builder.
- admin.html — browser-local demo media manager (not a cloud backend).

Behavior:
- Menu is hidden at all viewport widths until the hamburger button is clicked; closes on link, outside click and Escape.
- Dark/light colors follow OS settings automatically. Manual theme toggle is temporary and not persisted. A device theme change resets any manual override.
- All public pages and demo admin share the same responsive header and footer.
- Installable PWA preserves the black wordmark app icon. Updates have new service worker cache version and ?v=6 URLs to help prevent stale asset loads.

IMPORTANT: The sample external photos/videos are ILLUSTRATIVE and are not presented as actual Vahini Studio photographs. Replace with studio-approved files before production.
Google Maps rating of 4.3 with 50 reviews and review excerpt attribution came from the supplied Google Maps transcript, not fresh live verification. Check before launch.
Existing demo media uploads are LOCAL to the browser, not shared with visitors. Real cloud upload needs a backend and storage.
The developer credit links to Quartz Web Solutions' previously provided GitHub organization: https://github.com/quartz-digital-solution. Replace with the official corporate URL if preferred.

Deployment:
Extract ZIP files into the root of your GitHub Pages repo (where index.html exists). Do not upload the ZIP itself without extracting.
GitHub Pages should be configured to serve the correct branch/folder or Pages Actions workflow. With updates online, a hard refresh may help if an old service worker cached earlier HTML.

Mobile dropdown (<=767px), desktop/tablet visible inline nav (>=768px). No developer credit.
