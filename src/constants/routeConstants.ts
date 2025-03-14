export const ROUTES = {
  LOGIN: "/login",
  HOME: "/",
  CONTACTS: "/contacts",
  TAGS: "/tags", 
  TASKS: "/tasks",
  OPPORTUNITIES: "/opportunities",
};

export const AUTH_ROUTES = [
  ROUTES.CONTACTS,
  ROUTES.TAGS, 
  ROUTES.TASKS,
  ROUTES.OPPORTUNITIES,
];

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
