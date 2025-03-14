// Define application routes as constants
export const ROUTES = {
  LOGIN: "/login",
  HOME: "/",
  CONTACTS: "/contacts",
  TAGS: "/tags", // Added this route
  TASKS: "/tasks",
  OPPORTUNITIES: "/opportunities",
};

// Define AuthRoutes - routes that require authentication
export const AUTH_ROUTES = [
  ROUTES.CONTACTS,
  ROUTES.TAGS, // Added this route
  ROUTES.TASKS,
  ROUTES.OPPORTUNITIES,
];

// Optional: Define route metadata for more complex applications
export interface RouteConfig {
  path: string;
  title: string;
  showInNav: boolean;
  icon?: string;
}

export const NAV_ROUTES: RouteConfig[] = [
  {
    path: ROUTES.CONTACTS,
    title: "Contacts",
    showInNav: true,
  },
  {
    path: ROUTES.TAGS,
    title: "Étiquettes",
    showInNav: true,
  },
  {
    path: ROUTES.OPPORTUNITIES,
    title: "Opportunités",
    showInNav: true,
  },
  {
    path: ROUTES.TASKS,
    title: "Tâches",
    showInNav: true,
  },
];
