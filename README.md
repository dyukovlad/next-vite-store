# Product Catalog App

A modern, responsive product catalog built with Next.js 16, featuring real-time search, infinite scroll, and a clean UI powered by shadcn/ui components.

## 🚀 Features

- **Real-time Search**: Instant client-side filtering of products by title and description
- **Infinite Scroll**: Smooth loading of additional products as you scroll
- **Responsive Design**: Optimized grid layout for all screen sizes
- **Loading States**: Skeleton loaders for better user experience
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: ARIA labels and semantic HTML for screen readers
- **SEO Optimized**: Proper meta tags and page structure

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context + useReducer
- **API**: DummyJSON (for demo purposes)
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/product-catalog.git
   cd product-catalog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main catalog page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── CatalogLayout.tsx   # Shared layout component
│   ├── ErrorBoundary.tsx   # Error boundary component
│   ├── ProductCard.tsx     # Product display component
│   └── ProductCardSkeleton.tsx # Loading skeleton
├── contexts/
│   └── ProductContext.tsx  # State management
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── product.ts          # TypeScript interfaces
```

## 🏗️ Architecture

### State Management
The app uses React Context with useReducer for predictable state updates:
- Product fetching and caching
- Search query management
- Loading and error states
- Infinite scroll pagination

### Data Flow
1. Initial load: Fetch all products from API
2. Search: Filter products client-side instantly
3. Infinite scroll: Load more filtered products on demand

### Components
- **ProductProvider**: Context provider managing global state
- **CatalogLayout**: Reusable layout wrapper
- **ProductCard**: Individual product display with memoization
- **ErrorBoundary**: Catches and displays React errors gracefully

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 API

This demo uses [DummyJSON](https://dummyjson.com/) for product data. In a real application, replace with your own API endpoints.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DummyJSON](https://dummyjson.com/) - Fake API for testing
