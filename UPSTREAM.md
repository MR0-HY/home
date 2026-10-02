# Upstream and local configuration

This site follows [imsyy/home](https://github.com/imsyy/home). On 2026-10-02,
the original default branch `dev` was merged through commit
`869cf47` (package version **4.1.4**). The original repository is archived.

The preceding local version was 4.0.3 at `4dfec99`. A local rollback branch is
`backup/home-before-4.1.4-20261002`. Do not reset the production branch to the
upstream tree: it would discard the personal settings below.

## Personal settings to preserve

- `.env`: site identity, description, weather configuration, analytics, start
  date, and existing playlist. `VITE_SITE_DISPLAY_NAME` preserves the Welcome
  heading separately from the actual `VITE_SITE_URL`.
- `src/assets/siteLinks.json`: six service cards, including **:88** for
  pan/cloud/www.linhy.net.
- `src/assets/socialLinks.json`: the existing six personal social links.
- `public/images/background*.webp`: the ten original wallpapers. Background.vue
  uses these assets instead of the upstream JPGs.
- `public/font/Pacifico-Regular.ttf`: the original complete custom logo font.
- `src/components/Footer.vue`: Copyright © 2022–current year Rizon_Lin, using
  the original default typography. Lyrics visibility and blur settings remain
  supported. Do not restyle it during text-only edits.
- `public/404.html`, `public/css/404.css`, and the existing ownership verification
  file: preserve the original site's custom assets in the build output.
- `package.json`: personal author/repository metadata; version follows upstream.

## Build and deployment

Use Node.js 24 and pnpm 9.15.9 with the upstream lockfile:

```sh
npx --yes pnpm@9.15.9 install --frozen-lockfile
npm run build
```

`vercel.json` and the GitHub workflow use the same locked installation. Production
is the Vercel `home` project, deploying `master` to linhongyu.cn and
www.linhongyu.cn. The old npm and Yarn locks were removed by the upstream merge.

## Compatibility adjustments

The existing Welcome heading needs a separate display-name setting and a smaller
size only on narrow phones to fit beside the logo. The desktop heading and font
asset are preserved. The former footer style is retained rather than replaced
with the upstream default footer.

The existing music API currently fails to connect from the tested network. Its
URL and playlist have not been changed. Playlist HTTP/format failures and rejected
requests are caught, display a failure notice, and do not interrupt the rest of
the page. A successful site build is not evidence that the external music service
or audio playback works.

## Validation

Production build passed with the upstream lockfile unchanged. Local Chromium
checks passed at desktop 1440×900 and phone 390×844: all six service links,
all six social links, custom wallpaper/font, copyright text, mobile service menu,
and footer blur setting persistence. No uncaught page errors remained; the
external music request failure was recorded separately.
