import { Link } from "@swan-io/chicane";
import { Router } from "../Router";

export const Home = () => {
  return (
    <>
      <h2>Home page</h2>

      <Link to={Router.Teams()}>Teams page</Link>
    </>
  );
};
