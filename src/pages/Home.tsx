import * as React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h2>Home page</h2>

      <Link to="/teams">Teams page</Link>
    </>
  );
};
