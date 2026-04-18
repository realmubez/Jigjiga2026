# Hostinger deployment

This project is ready to deploy to **Hostinger** from GitHub as a static Vite site.

## Recommended Hostinger setup
- **Project root / repository root**: this repository root
- **Install command**: `npm install`
- **Build command**: `npm run build`
- **Publish directory**: `artifacts/jigjiga-portal/dist/public`
- **Node version**: 20+ (24 is fine)

## Why this works
- The real frontend app lives in `artifacts/jigjiga-portal`.
- The root `postinstall` automatically installs that app's dependencies.
- The root `build` command builds the portal app.
- The production output includes a `.htaccess` file for Apache SPA routing on Hostinger.

## GitHub → Hostinger steps
1. Push this repo to GitHub.
2. In Hostinger, create a new site/project from your GitHub repository.
3. Set the build settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Publish directory: `artifacts/jigjiga-portal/dist/public`
4. Deploy.
5. Point your domain to the Hostinger site.

## SPA routing
This app uses client-side routing. The build copies `public/.htaccess` into the final output so deep links like `/about` or `/history-culture/dhaanto` load correctly on Apache/Hostinger.

## If you deploy to a subfolder instead of the domain root
Set `BASE_PATH` before building.

Example:
- `BASE_PATH=/portal/ npm run build`

If the site is deployed at the root domain, you do not need to set `BASE_PATH`.

## What to upload if you ever deploy manually
Upload the contents of:

`artifacts/jigjiga-portal/dist/public`

into your Hostinger public web directory.
