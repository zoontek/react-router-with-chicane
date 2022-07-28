import { Link } from "react-router-dom";
import { links } from "../Router";

export const Home = () => {
  return (
    <>
      <h2>Home page</h2>

      <Link to={links.Teams()}>Teams page</Link>
    </>
  );
};
