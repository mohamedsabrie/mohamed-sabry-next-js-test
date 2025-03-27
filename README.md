# FASCO - Modern E-commerce Platform

A modern e-commerce platform built with Next.js, offering a seamless shopping experience with real-time cart management and responsive design.

## Project Structure

```plaintext
src/
├── app/          # Next.js app router pages
├── components/   # Reusable UI components
└── lib/         # Utilities, types, and store

public/
└── assets/      # Static assets and images
```

## Tech Stack

- **Framework**: Next.js 15.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand with persistence
- **Font Families**: Volkhov, Poppins, Jost

## Key Features

- Responsive product grid layout
- Real-time cart management with localStorage persistence
- Product details with quantity selection
- Optimized images with Next.js Image component
- Custom fonts implementation
- Mobile-first design approach

## Getting Started

First, install the dependencies:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.





## Deploy on Vercel

please check the link below
https://fasco-sabry-store.vercel.app/


## Performance & SEO Optimizations

- **Static Site Generation (SSG)**
  - Product listing page is statically generated at build time
  - Improved initial page load performance
  - Better SEO optimization

- **Incremental Static Regeneration (ISR)**
  - Product detail pages use ISR with 1-hour revalidation
  - Dynamic content stays fresh while maintaining performance
  - Reduces database load

- **Next.js Caching Strategies**
  - Route cache for faster navigation
  - Data cache for optimized API responses
  - Static assets caching

- **Component Optimizations**
  - React.memo for preventing unnecessary re-renders
  - Image optimization with next/image
  - Code splitting and lazy loading

- **SEO Enhancements**
  - Dynamic metadata generation for product pages
  - OpenGraph tags for better social sharing
  - Twitter card integration
  - Custom titles and descriptions
  - Proper HTML semantics
  - Robots directives configuration
  - Structured site navigation
