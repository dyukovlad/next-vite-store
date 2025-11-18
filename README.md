# Next.js Product Catalog

A Next.js application featuring a product catalog page with infinite scroll, built using React components, TypeScript, and shadcn/ui.

## Features

- Product catalog page with grid layout
- Infinite scroll for loading more products
- Product card component styled with shadcn/ui
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd next-vite-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Navigate to the catalog page: [http://localhost:3000/catalog](http://localhost:3000/catalog)

### Building for Production

```bash
npm run build
npm start
```

### Linting and Type Checking

```bash
npm run lint
npm run type-check
```

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - React components
- `src/data/` - Mock data
- `src/types/` - TypeScript type definitions
- `src/components/ui/` - shadcn/ui components
