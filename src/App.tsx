import { match } from "ts-pattern";
import { Home } from "./pages/Home";
import { NewTeam } from "./pages/NewTeam";
import { Team } from "./pages/Team";
import { Teams } from "./pages/Teams";
import { Router } from "./Router";

export const App = () => {
  const route = Router.useRoute(["Home", "NewTeam", "Team", "Teams"]);

  return (
    <>
      <h1>
        router-router with{" "}
        <a href="https://swan-io.github.io/chicane" target="_blank">
          @swan-io/chicane
        </a>
        (chicane only)
      </h1>

      <hr />

      {match(route)
        .with({ name: "Home" }, () => <Home />)
        .with({ name: "Teams" }, ({ params: { created } }) => (
          <Teams created={created} />
        ))
        .with({ name: "Team" }, ({ params: { teamId } }) => (
          <Team teamId={teamId} />
        ))
        .with({ name: "NewTeam" }, () => <NewTeam />)
        .otherwise(() => (
          <h2>Page not found</h2>
        ))}
    </>
  );
};
