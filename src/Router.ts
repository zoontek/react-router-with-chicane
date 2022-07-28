import { createRouter } from "@swan-io/chicane";

export const Router = createRouter({
  Home: "/",
  Teams: "/teams?:created",
  Team: "/teams/:teamId",
  NewTeam: "/teams/new",
  // You can use "createGroup" for nesting here
});
