# react-app-template

[![CI](https://github.com/Syhlex/react-app-template/actions/workflows/ci.yml/badge.svg)](https://github.com/Syhlex/react-app-template/actions/workflows/ci.yml)

Starter template for React projects using TypeScript, Sass with CSS modules, Vitest, and Vite.

## Setup

After cloning, install dependencies and enable the git hooks:

```sh
npm install
npm run setup:hooks
```

The pre-commit hook checks formatting, lints, and type-checks before each commit. Git hooks are not enabled by cloning, so run `setup:hooks` once in every new clone.

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run setup:hooks`  | Setup git hooks                      |
| `npm run dev`          | Start the development server         |
| `npm run build`        | Build for production                 |
| `npm run preview`      | Serve the production build locally   |
| `npm test`             | Run tests                            |
| `npm run test:watch`   | Run tests in watch mode              |
| `npm run lint`         | Lint files with ESLint               |
| `npm run format`       | Format files with Prettier           |
| `npm run format:check` | Check formatting with Prettier       |
| `npm run typecheck`    | Type-check with TypeScript           |
| `npm run check`        | Run all checks and build, as CI does |
| `npm run clear`        | Remove build output and node_modules |
