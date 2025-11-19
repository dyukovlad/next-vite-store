# Agent Guidelines for next-vite-store

## Commands
- **Build**: `npm run build`
- **Dev server**: `npm run dev`
- **Lint**: `npm run lint`
- **Start**: `npm run start`
- **Storybook**: `npm run storybook`
- **Build Storybook**: `npm run build-storybook`
- **No test runner configured**

## Code Style
- **TypeScript**: Strict mode enabled, target ES2017
- **Imports**: React first, external libs, then internal (@/ aliases)
- **Components**: PascalCase, use React.memo with displayName
- **Functions/Hooks**: camelCase, useCallback for stable refs
- **Props**: Interface definitions with descriptive names
- **Error Handling**: try/catch with console.warn for fallbacks
- **Styling**: Tailwind CSS with shadcn/ui components
- **Path Aliases**: @/* maps to ./src/*