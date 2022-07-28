import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewTeam } from "./pages/NewTeam";
import { Team } from "./pages/Team";
import { Teams } from "./pages/Teams";

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
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<Team />} />
          <Route path="/teams/new" element={<NewTeam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
