import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewTeam } from "./pages/NewTeam";
import { Team } from "./pages/Team";
import { Teams } from "./pages/Teams";
import { paths } from "./Router";

export const App = () => {
  return (
    <>
      <h1>
        router-router with{" "}
        <a href="https://swan-io.github.io/chicane" target="_blank">
          @swan-io/chicane
        </a>
      </h1>

      <hr />

      <BrowserRouter>
        <Routes>
          <Route path={paths.Home} element={<Home />} />
          <Route path={paths.Teams} element={<Teams />} />
          <Route path={paths.Team} element={<Team />} />
          <Route path={paths.NewTeam} element={<NewTeam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
