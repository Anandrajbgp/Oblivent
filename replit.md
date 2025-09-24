# Oblivent Multi-Platform Digital Ecosystem

## Overview

Oblivent is India's leading multi-platform digital ecosystem that unifies six distinct platforms under a single account architecture. The project leverages Next.js as the primary framework, providing seamless navigation between E-Learning, Digital Agency, Trading, Apps, Mart, and Test platforms. Each platform maintains its own specialized interface while sharing common authentication, theming, and navigation systems.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15.5.3 with App Router and Turbopack for enhanced performance
- **Language**: TypeScript for type safety across all platforms
- **Styling**: TailwindCSS v4 with CSS variables for theming and Shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Geist Sans and Geist Mono) with automatic optimization

### Component Structure
- **Layout System**: Platform-specific navbars and footers with shared root layout
- **Shared Components**: Counter animations, theme provider, utility functions
- **Platform Components**: Specialized components for each platform (e-learning, agency, trading, mart, test, apps)
- **UI Components**: Shadcn/ui based design system with custom styling

### Navigation & Routing
- **Unified Navigation**: Single navbar with platform-specific menu items
- **Admin Panel**: Role-based navigation with expanded options for administrators
- **Platform Isolation**: Each platform maintains its own layout while sharing core navigation
- **Mobile Responsive**: Collapsible navigation with smooth animations

### State Management & Data
- **Theme System**: Dark/light/system theme preferences with localStorage persistence
- **Database Integration**: Drizzle ORM with Neon Database (PostgreSQL) support
- **Session Management**: Express-session with connect-pg-simple for PostgreSQL session storage
- **Authentication**: Passport.js integration ready for multiple authentication strategies

### Platform-Specific Features
- **E-Learning**: Course management, affiliate dashboard, student tracking, certification system
- **Digital Agency**: Service portfolio, client management, project tracking
- **Trading**: Market analysis, portfolio management, trading tools
- **Apps**: Tool discovery, bundle deals, creator spotlight, AI recommendations
- **Mart**: E-commerce functionality, product catalogs, shopping cart
- **Test**: Exam management, mock tests, performance analytics, leaderboards

### Performance Optimizations
- **Image Optimization**: Next.js Image component with remote pattern configuration
- **Code Splitting**: Platform-specific code splitting for optimal loading
- **Caching**: Built-in Next.js caching with API route optimization
- **CORS Configuration**: Development-friendly CORS settings for Replit environment

## External Dependencies

### Core Framework Dependencies
- **Next.js**: React-based full-stack framework with built-in optimizations
- **React & React-DOM**: v19.1.0 for modern React features
- **TypeScript**: Static typing for enhanced development experience

### UI & Styling
- **TailwindCSS**: Utility-first CSS framework with PostCSS integration
- **Shadcn/ui**: Component library built on Radix UI primitives
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Class Variance Authority**: Component variant management
- **clsx & tailwind-merge**: Conditional class name utilities

### Database & Backend
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider
- **Express.js**: Backend server framework for API routes
- **Express-session**: Session management middleware
- **connect-pg-simple**: PostgreSQL session store adapter
- **Passport.js**: Authentication middleware (configured for future implementation)

### Development Tools
- **ESLint**: Code linting with Next.js specific rules
- **TypeScript**: Type checking and development tooling
- **Drizzle Kit**: Database migration and schema management tools

### Communication & Real-time Features
- **WebSocket (ws)**: Real-time communication for trading and live features
- **Various @types packages**: TypeScript definitions for enhanced development experience

### External Services Integration
- **Dicebear API**: Avatar generation service with configured remote patterns
- **Image Hosting**: Remote image pattern configuration for various external sources