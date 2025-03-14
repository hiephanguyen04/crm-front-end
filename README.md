
## Getting Started

Follow these steps to set up and run the project locally:

## account Login

email: "admin@admin.com",
password: "admin",

### 1. Clone the repository

```bash
git clone [repository-url]
cd crm-front-end
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the development server

```bash
yarn dev
```

This will start the development server, typically on http://localhost:3000 (the terminal will show the exact URL).

### 4. Build for production

When you're ready to build the application for production:

```bash
yarn build
```

The optimized build will be created in the `dist` directory.

### 5. Preview production build

To preview the production build locally:

```bash
yarn preview
```

## Project Structure

```
crm-project/
├── src/
│   ├── assets/         # Icons, images and static assets
│   ├── components/     # Reusable UI components
│   ├── data/           # Mock data and data utilities
│   ├── sections/       # Main application sections
│   ├── types/          # TypeScript type definitions
│   └── App.tsx         # Main application component
```

## Features

- Contact management
- Opportunity tracking
- Pipeline visualization
- Task management
- User-friendly interface

## Technologies

- React
- TypeScript
- SCSS for styling
- Vite (assumed as the build tool)
