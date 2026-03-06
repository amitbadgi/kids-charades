# Kids Dumb Charades App (Installable)

This app is now set up as a **PWA** (Progressive Web App), so it can be installed on phones from a link without Play Store/App Store fees.

## What's Added
- `manifest.webmanifest`
- `service-worker.js` (offline cache)
- app icons in `icons/`
- service worker registration in `app.js`

## Important
You must host it on **HTTPS** (or localhost for testing). It will not install as an app from `file:///...`.

## Fastest Free Hosting (Netlify Drop)
1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. In Finder, open this folder:
   - `/Users/amit.badgi/Documents/New project`
3. Drag the whole folder onto the Netlify Drop page.
4. Wait for deploy. Netlify gives you a live HTTPS URL.
5. Copy and share that URL with friends.

## Install On iPhone (exact steps)
1. Open the Netlify URL in **Safari** (not Chrome).
2. Tap the **Share** icon (square with up arrow).
3. Scroll and tap **Add to Home Screen**.
4. Tap **Add**.
5. Open the new icon from your home screen.

## Install On Android (exact steps)
1. Open the Netlify URL in **Chrome**.
2. Tap the 3-dot menu.
3. Tap **Install app** (or **Add to Home screen**).
4. Confirm install.
5. Open the app icon from your launcher/home screen.

## Share With Friends
- Send them the same URL.
- Ask them to follow the install steps above based on their phone type.

## Updating The App Later
1. Edit files in this folder.
2. Re-upload the folder to Netlify Drop.
3. Use the new URL, or set up a permanent site name in Netlify for stable link.

## Files
- `index.html` - UI
- `styles.css` - styles
- `app.js` - game logic
- `manifest.webmanifest` - PWA metadata
- `service-worker.js` - offline support
- `icons/icon-192.svg`, `icons/icon-512.svg` - app icons
