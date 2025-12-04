# turbones-next

A bare bones Turborepo starter template for Next.js development with React, TailwindCSS, and TypeScript. This template provides a minimal, opinionated foundation that enforces strict code practices through Biome, eliminating linting configuration hassles while remaining flexible for any UI framework or design system.

## Purpose

This template is designed for developers who want:

- **Zero lint configuration** - Biome and Ultracite handle linting, formatting, and code quality out of the box
- **Strict code practices** - Enforces very strict code quality standards through Biome's comprehensive ruleset
- **Minimal assumptions** - No UI framework or design system assumptions; use whatever you need
- **TypeScript-first** - Full TypeScript support with shared configs across the monorepo
- **Tailwind CSS ready** - Basic Tailwind setup with PostCSS, but no style assumptions
- **Developer experience** - VS Code settings pre-configured for seamless development

## What's Inside?

### Apps

- `apps/web` - A minimal Next.js application with TypeScript and Tailwind CSS setup

### Configs Workspace

The `configs` workspace provides shared configurations:

- **`@config/typescript`** - TypeScript configurations:
  - `base.json` - Base TypeScript config with strict settings
  - `react.json` - React-specific TypeScript config
  - `next.json` - Next.js-specific TypeScript config

- **`@config/tailwind`** - Tailwind CSS configuration:
  - Basic Tailwind stylesheet setup (`styles.css`)
  - PostCSS configuration exports
  - VS Code settings point to `configs/tailwind/styles.css` for Tailwind IntelliSense

### Code Quality Tools

- **[Biome](https://biomejs.dev/)** - Fast formatter and linter (replaces ESLint + Prettier)
- **[Ultracite](https://ultracite.dev/)** - Config-free linting presets for Biome
  - Extends `ultracite/core`, `ultracite/react`, and `ultracite/next` presets
  - Provides strict code quality rules without configuration

### Turborepo Tasks

Pre-configured tasks for optimal developer experience:

- `build` - Build all apps and packages
- `dev` - Start development servers
- `check` - Run Biome checks via Ultracite
- `fix` - Auto-fix issues via Ultracite
- `check:types` - TypeScript type checking across the monorepo
- `clean` - Clean build artifacts

## Philosophy

This template is intentionally **minimal and bare bones**:

- ✅ Provides TypeScript, Tailwind, and Next.js foundations
- ✅ Enforces strict code quality through Biome
- ✅ Pre-configured VS Code settings for optimal DX
- ❌ **No UI component library** - Choose your own (shadcn/ui, Radix, Base, etc.)
- ❌ **No design system assumptions** - Build your own or use any design system
- ❌ **No Tailwind style presets** - Start with a clean slate

The goal is to give you a solid foundation without imposing design decisions, allowing you to build exactly what you need.

## Getting Started

### Prerequisites

- Node.js >= 22
- pnpm >= 10.24.0 (recommended) or npm/yarn

### Installation

```sh
# Clone or use this template
git clone <your-repo-url>
cd turbones-next

# Install dependencies
pnpm install
```

### Development

Start the development server:

```sh
# With global turbo installed (recommended)
turbo dev

# Without global turbo
pnpm exec turbo dev
```

Develop a specific app:

```sh
turbo dev --filter=web
```

### Building

Build all apps and packages:

```sh
turbo build
```

Build a specific app:

```sh
turbo build --filter=web
```

### Code Quality

Check code quality:

```sh
# Run Biome checks via Ultracite
pnpm check

# Auto-fix issues
pnpm fix

# Type check
pnpm check:types
```

## Configuration Details

### TypeScript

TypeScript configs are shared via the `@config/typescript` package:

- **Base config** (`base.json`) - Strict TypeScript settings with:
  - `strict: true` and `strictNullChecks: true`
  - `noUncheckedIndexedAccess: true` for safer array/object access
  - Modern ES2022 target with NodeNext module resolution

- **React config** (`react.json`) - Extends base with React-specific settings

- **Next.js config** (`next.json`) - Extends base with Next.js-specific settings

### Tailwind CSS

Tailwind is configured in `configs/tailwind/`:

- Basic `styles.css` with `@import "tailwindcss"`
- PostCSS configuration exported for use in apps
- VS Code settings configured to use `configs/tailwind/styles.css` for Tailwind IntelliSense

Apps can import the Tailwind config package and use it in their PostCSS setup.

### Biome & Ultracite

Biome configuration (`biome.jsonc`) extends Ultracite presets:

- `ultracite/core` - Core linting rules
- `ultracite/react` - React-specific rules
- `ultracite/next` - Next.js-specific rules

No additional configuration needed - Ultracite provides strict, opinionated rules out of the box.

### VS Code Settings

Pre-configured settings (`.vscode/settings.json`):

- Biome as default formatter for JS/TS/JSON files
- Format on save and paste enabled
- Tailwind IntelliSense pointing to config stylesheet
- TypeScript SDK configured

## Remote Caching

Turborepo supports [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share build caches across machines and CI/CD pipelines.

To enable Remote Caching with Vercel:

```sh
# Login to Vercel
turbo login

# Link your repository
turbo link
```

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

## Useful Links

Learn more about the tools and technologies used:

- [Turborepo Documentation](https://turborepo.com/docs)
  - [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
  - [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
  - [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
  - [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Biome Documentation](https://biomejs.dev/)
- [Ultracite Documentation](https://ultracite.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
