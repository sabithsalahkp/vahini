# VAHINI WEDDINGS — GitHub Pages deployment

1. Upload **the contents of this folder** into the root of your GitHub repository (not another nested folder). `index.html` must be at repository root.
2. Repository Settings → Pages → Build and deployment: choose **Deploy from a branch** → `main` → `/ (root)` → Save. This uses the simple branch-based deployment and does not require a custom workflow file.
3. If you prefer GitHub Actions, choose that source instead and allow GitHub to generate the standard Pages workflow. Do not run competing workflows simultaneously.
4. Wait a few minutes, then visit `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.
5. If GitHub Pages shows `updating_pages` until timeout while the build succeeded, it is a GitHub Pages deployment status timeout; changing HTML alone cannot guarantee a fix. Retry the workflow, inspect the Pages status, and check GitHub Status.

## Important limitations
- `admin.html` is a **local demo**, not authenticated and not connected to a server. Uploads exist only in the browser that uploaded them, and can be lost when browser data is cleared.
- The sample images and videos use external URLs. The MP4 files are **not** bundled offline.
- GitHub Pages is static hosting, not 20 TB storage. For production uploads use a real authenticated backend and object storage.
