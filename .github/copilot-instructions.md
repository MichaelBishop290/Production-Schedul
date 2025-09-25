# Copilot Instructions for Production-Schedul

## Project Overview
This is the **Phoenix Sawing Operations Dashboard**, a production scheduling and management system built for manufacturing operations. The application helps manage machines, orders, shifts, and production planning for sawing operations.

## Technical Stack
- **Framework**: Next.js 14.2.5 with App Router
- **Language**: TypeScript 5.4.5
- **UI**: React 18.3.1 with Tailwind CSS 3.4.3
- **Styling**: PostCSS, Autoprefixer
- **Data**: CSV parsing with PapaParse
- **Linting**: ESLint with Next.js configuration

## Project Structure
```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx            # Main dashboard page (production scheduling)
└── components/
    └── ui/                 # Reusable UI components
        ├── button.tsx      # Button component
        ├── card.tsx        # Card component
        ├── badge.tsx       # Badge component
        ├── tabs.tsx        # Tabs component
        └── select.tsx      # Select dropdown component
```

## Domain Context
This application manages:
- **Machines**: Sawing equipment with different blade types, capabilities, and safety requirements
- **Orders**: Customer orders with material specifications, dimensions, quantities, and due dates
- **Shifts**: A/B/C shift scheduling with headcount management
- **Scheduling**: Automatic and manual order assignment to machines based on various strategies
- **Materials**: Steel, Aluminum, Stainless Steel, Brass, and Plate Steel processing
- **Safety & Training**: Equipment-specific safety and training requirements

## Key Features
- Production scheduling dashboard
- CSV import/export for orders
- Multi-shift planning (A/B/C shifts)
- Machine capability matching
- Material and thickness constraints
- Speed optimization (SFM - Surface Feet per Minute)
- Operator headcount management
- Priority-based scheduling

## Development Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

## Code Style and Standards

### React/Next.js
- Use TypeScript for all components
- Follow Next.js 14 App Router patterns
- Use `"use client"` directive for components that need client-side features (useState, useEffect, etc.)
- Prefer server components when possible for better performance

### Component Structure
- Keep components focused and single-responsibility
- Use proper TypeScript interfaces for props and data structures
- Follow the established UI component pattern in `components/ui/`
- Use Tailwind CSS for styling consistently

### Data Management
- Use proper TypeScript interfaces for all data structures
- Key interfaces include: `Machine`, `Order`, `ScheduledOrder`, `Shift`, `Strategy`
- Handle CSV parsing with proper error handling
- Maintain data consistency across shifts and scheduling operations

### Naming Conventions
- Use PascalCase for components and interfaces
- Use camelCase for functions and variables
- Use descriptive names that reflect manufacturing terminology
- Follow existing patterns for machine IDs, shift codes, etc.

## Important Notes
- The main application logic is in `src/app/page.tsx` - this is a complex scheduling component
- UI components are built on a consistent design system in `components/ui/`
- The application handles real-world manufacturing constraints and requirements
- Consider performance when handling large orders datasets
- Maintain backwards compatibility with existing CSV formats

## Common Tasks
When working on this codebase, you might be:
- Adding new machine types or capabilities
- Implementing new scheduling strategies
- Enhancing the UI/UX of the dashboard
- Adding new material support
- Improving the CSV import/export functionality
- Optimizing scheduling algorithms
- Adding new safety or training requirements

## Manufacturing Domain Knowledge
- **SFM (Surface Feet per Minute)**: Critical for blade speed optimization
- **Blade Types**: Different materials require different blade types and sizes
- **Changeover Time**: Time required to switch between different materials or setups
- **Safety Requirements**: Equipment-specific safety certifications needed
- **Shift Planning**: Overlapping shifts with specific headcount requirements
- **Material Properties**: Different cutting parameters for Steel, Aluminum, Stainless Steel, etc.

Remember to consider the real-world manufacturing context when making changes, as this system directly impacts production operations and scheduling decisions.