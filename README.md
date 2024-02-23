# Deployment

## Building
You can build the static site locally by running `npm run build`. This will generate a static site in the `docs` folder.

## How it gets deployed on GitHub
This site is using a standard functionality of GitHub Pages with the `nextjs-nojekyll` selected as a branch and `/docs` selected as a folder.

Next.js stores static in `/docs/_next` folder and GitHub Pages by default is using Jekyll to publish the static site. Jekyll in turn ignores all folders starting with a `_`. To overcome this issue, you need to make sure that there is `.nojekyll` file is published in the `docs/` folder.