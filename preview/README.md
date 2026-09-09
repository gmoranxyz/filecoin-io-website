# Homepage redesign preview

`index.html` is a **generated snapshot** of the rebuilt homepage, not source. It
is one self-contained file: styles, fonts and images are inlined, links point at
the live filecoin.io, and the two tab groups work as real controls.

It exists so the redesign can be shared as a plain URL without standing up the
whole Next.js app, which needs Tina Cloud credentials to build.

## Deploying it

Static. No build step, no environment variables.

1. Vercel, then Add New, then Project, then this repository.
2. Root Directory: `preview`
3. Framework Preset: Other. Leave Build Command empty.
4. Settings, then Git, then Production Branch: the branch carrying this file.

`vercel.json` sends `X-Robots-Tag: noindex` and `index.html` carries a matching
`robots` meta tag, so the preview will not be indexed. Both matter: filecoin.io's
search authority should not have to compete with a placeholder copy of its own
homepage.

Vercel deployments are public by default. Turn on Settings, then Deployment
Protection, if the link should require sign-in.

## Regenerating it

The snapshot comes from a local dev server via a Playwright script that inlines
every asset and flattens the tab panels into the document. Ask Claude to
regenerate it after homepage changes, otherwise this file drifts from the code.

Verified at 1440px and 390px: no horizontal scroll, no console errors, both tab
groups switching.

## Content warning

Every headline, figure and quote is placeholder. The customer quotes are
invented text attributed to real organisations, marked `[Name], [Title]` where a
real attribution would go. Replace them before this page reaches anyone outside
the project.
