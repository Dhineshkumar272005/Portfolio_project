# replit.md

## Overview

This is a full-stack web application built as a personal portfolio website for "Dhineshkumar - Full Stack Developer". The application showcases a modern tech stack with React frontend, Express.js backend, and PostgreSQL database integration. The project demonstrates a complete web development workflow with proper separation of concerns, modern UI components, and professional deployment practices.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth UI animations
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful endpoints with proper error handling
- **Development**: Hot reloading with custom Vite integration

### UI Component System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Design System**: Consistent theming with CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA-compliant components from Radix UI

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema management
- **Tables**: 
  - `users` - User authentication data
  - `contact_messages` - Portfolio contact form submissions

### API Layer
- **Contact Endpoints**: 
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Retrieve messages (admin)
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error middleware

### Storage Layer
- **Interface**: `IStorage` abstraction for data operations
- **Implementation**: `MemStorage` for development (in-memory)
- **Future**: Ready for PostgreSQL integration via Drizzle

### Frontend Components
- **Portfolio Sections**: Hero, About, Projects, Skills, Contact
- **Navigation**: Smooth scrolling navigation with mobile responsiveness
- **Contact Form**: Form validation with toast notifications
- **UI Components**: Comprehensive set of reusable components

## Data Flow

1. **User Interaction**: User interacts with portfolio sections or contact form
2. **Form Submission**: Contact form data validated with Zod schemas
3. **API Request**: TanStack React Query handles API communication
4. **Backend Processing**: Express routes process requests with validation
5. **Data Storage**: Contact messages stored via storage interface
6. **Response Handling**: Success/error states managed with toast notifications

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL for production hosting
- **UI Components**: Radix UI primitives for accessible components
- **Animations**: Framer Motion for enhanced user experience
- **Forms**: React Hook Form + Zod for robust form handling
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build**: Vite with TypeScript and React plugins
- **Database**: Drizzle Kit for schema management
- **Development**: Custom Vite integration for full-stack development
- **Replit Integration**: Specialized plugins for Replit environment

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static assets served from built frontend

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Sessions**: PostgreSQL-backed session storage
- **Production**: Node.js server serves both API and static assets

### Development Workflow
- **Hot Reloading**: Vite middleware integrated with Express server
- **Database Migrations**: `npm run db:push` for schema updates
- **Type Safety**: Shared TypeScript types between frontend and backend

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
- July 04, 2025. Added dark mode toggle button with smooth theme transitions
- July 04, 2025. Updated portfolio name from "Alex Johnson" to "Dhineshkumar"
- July 04, 2025. Removed profile picture from hero section for cleaner design
- July 04, 2025. Updated social media links with actual GitHub, LinkedIn, and Twitter URLs
- July 04, 2025. Changed Twitter logo to X logo using react-icons
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```