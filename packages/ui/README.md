# UI Package

This package contains the shared UI components and frontend application for Atlassian Forge apps (Jira and Confluence).

## Overview

Built with React, Vite, and Atlassian's Design System (Atlaskit), this package provides a reusable UI layer that can be deployed to different Forge apps.

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Atlaskit** - Atlassian's Design System components
- **Redux Toolkit** - State management
- **Vitest** - Unit testing

## Development

### Prerequisites

Install dependencies from the workspace root:
```bash
npm install
```

### Available Scripts

**Development mode:**
```bash
npm run dev:jira    # Run dev server for Jira module
npm run dev:conf    # Run dev server for Confluence module
```

**Build:**
```bash
npm run build:jira  # Build for Jira module
npm run build:conf  # Build for Confluence module
```

**Testing:**
```bash
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage report
```

**Linting:**
```bash
npm run lint        # Check for linting errors
npm run lint:fix    # Fix linting errors
```

## Project Structure

```
src/
├── app/              # Main app component and Redux store
├── components/       # React components (JiraIssuePanel, etc.)
├── hooks/            # Custom React hooks
├── shared/           # Shared utilities and libraries
├── index.tsx         # Entry point
└── styles.css        # Global styles
```

## Environment Variables

The build process uses environment variables to configure the target module:

- `VITE_IS_JIRA` - Build for Jira
- `VITE_IS_CONF` - Build for Confluence

## Development Server

The dev server runs on `http://localhost:3003` by default.