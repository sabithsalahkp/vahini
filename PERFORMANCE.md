Performance improvements:
- External images now request appropriately sized and compressed Unsplash variants.
- Home hero loads eagerly; below-the-fold images use native lazy loading and async decoding.
- Gallery grid requests 720px/quality 65 thumbnails; full originals load only in lightbox.
- Videos do not download on initial gallery page load.
- Preconnect to the Unsplash image host.
- Service worker precaches only the essential home shell instead of every page.
- Updated service worker cache key to refresh previously installed copies.

Limitations: images still depend on the external Unsplash host. For guaranteed production performance, replace demo images with locally hosted optimized WebP/AVIF assets and use a CDN. Existing admin is a browser-local demo.
