# 3D Cybersecurity Portfolio

## Overview

This is a modern, interactive cybersecurity portfolio website for Gaurav C Sonawane, a cybersecurity professional specializing in penetration testing, IoT security, and threat hunting. The application features a dark cybersecurity theme with Matrix/cyberpunk aesthetics, including a full-viewport 3D particle background using Three.js. The portfolio showcases education, professional experience, research projects, services offered, technical skills, and provides a contact form for inquiries.

The application is built as a full-stack React application with an Express backend, using a modern tech stack including TypeScript, Tailwind CSS, and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type safety and modern component development
- Vite as the build tool for fast development and optimized production builds
- Single-page application (SPA) architecture using wouter for client-side routing

**UI Component System**
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives as the foundation for complex interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for variant-based component styling

**3D Graphics & Animation**
- React Three Fiber (@react-three/fiber) for declarative Three.js integration
- @react-three/drei for Three.js helpers and abstractions
- Custom particle system creating a Matrix-style falling particles effect
- Interactive particles that respond to mouse movement

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form handling
- Custom hooks for mobile detection and toast notifications

**Styling System**
- Dark-only cybersecurity theme with neon green (#00ff00) accents
- Custom CSS variables for consistent theming across components
- Monospace typography (JetBrains Mono, Fira Code) for technical elements
- Space Grotesk and Inter fonts for headings and body text

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- HTTP server created with Node's native `http` module
- TypeScript for type-safe server-side code
- Middleware for JSON parsing, URL encoding, and request logging

**API Design**
- RESTful API endpoint for contact form submissions (`POST /api/contact`)
- JSON request/response format
- Zod schema validation for incoming data
- Error handling with appropriate HTTP status codes (400 for validation, 500 for server errors)

**Static File Serving**
- Production build serves static assets from `dist/public` directory
- SPA fallback to `index.html` for client-side routing support
- Development mode uses Vite middleware for hot module replacement (HMR)

**Build System**
- Custom build script using esbuild for server bundling
- Vite for client bundling with optimizations
- Dependency bundling strategy: allowlist for specific packages, external for others
- Reduces cold start times by bundling frequently used dependencies

### Data Storage Solutions

**Current Implementation**
- In-memory storage using Maps for development/demo purposes
- Implements `IStorage` interface for abstraction and future extensibility
- Stores user data and contact form submissions

**Database Configuration (Drizzle ORM)**
- Drizzle ORM configured for PostgreSQL via `drizzle.config.ts`
- Schema defined in `shared/schema.ts` with two tables:
  - `contact_submissions`: Stores contact form data (name, email, subject, message, timestamp)
  - `users`: Legacy user authentication table (username, password)
- Zod schemas for runtime validation aligned with database schema
- Migration files generated in `./migrations` directory
- Database URL expected via `DATABASE_URL` environment variable

**Storage Pattern**
- Interface-based design allows swapping between in-memory and database storage
- UUID generation for primary keys
- Timestamps for contact submissions using PostgreSQL `defaultNow()`

### Authentication and Authorization

**Current State**
- No active authentication system implemented in the portfolio
- Legacy user schema exists in database configuration but is not utilized
- Contact form is public-facing without authentication requirements

**Future Considerations**
- User schema includes username and password fields for potential admin interface
- Storage interface includes user creation and retrieval methods
- Could support basic authentication for viewing contact submissions

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Complete set of headless UI primitives for accessibility (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component system based on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer

### 3D Graphics
- **Three.js**: Core 3D graphics library via @types/three
- **React Three Fiber**: React renderer for Three.js
- **@react-three/drei**: Helper components and abstractions for R3F

### Form Handling & Validation
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### State Management
- **TanStack Query**: Server state management, caching, and synchronization

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **drizzle-zod**: Integration for generating Zod schemas from Drizzle schemas
- **pg**: PostgreSQL client for Node.js
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Development Tools
- **TypeScript**: Type safety across entire codebase
- **ESBuild**: Fast JavaScript bundler for production server build
- **Vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for development server
- **@replit/vite-plugin-***: Replit-specific development enhancements (error overlay, cartographer, dev banner)

### Routing
- **wouter**: Lightweight client-side routing library (~1KB alternative to React Router)

### Fonts
- **Google Fonts**: Inter, JetBrains Mono, Fira Code, Space Grotesk loaded via CDN

### Performance Considerations
- Lazy loading not implemented; single-page architecture loads all sections upfront
- Particle count adjusted based on device (100-200 mobile vs 500-1000 desktop)
- TanStack Query configured with infinite stale time and no automatic refetching
- Production build optimizes dependencies through selective bundling