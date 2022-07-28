import { createRouter } from "@swan-io/chicane";

// Here we list all our application pages
const routes = {
  Home: "/",
  Teams: "/teams?:created",
  Team: "/teams/:teamId",
  NewTeam: "/teams/new",
  // Note that chicane "createGroup" works perfectly here! (for nesting)
} as const;

// We avoid exporting chicane routing methods
const { useRoute, push, replace, ...rest } = createRouter(routes);

// We exports all the link creation methods
export const links = rest;

// We export paths (without search and hash params, as react-router doesn't support them)
export const paths = (Object.keys(routes) as (keyof typeof routes)[]).reduce(
  (acc, key) => ({ ...acc, [key]: routes[key].replace(/[?#].*/, "") }),
  {} as Record<keyof typeof routes, string>
);
