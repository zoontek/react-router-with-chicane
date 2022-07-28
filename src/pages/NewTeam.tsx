import { Link } from "@swan-io/chicane";
import { useState } from "react";
import { Router } from "../Router";

export const NewTeam = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Link to={Router.Teams()}>Back to teams page</Link>

      <h2>New team page</h2>

      <input
        type="text"
        required={true}
        style={{ marginRight: 8 }}
        value={value}
        onChange={(event) => {
          event.preventDefault();
          setValue(event.target.value);
        }}
      />

      <button
        onClick={(event) => {
          event.preventDefault();
          Router.replace("Teams", { created: value });
        }}
      >
        Submit + redirect
      </button>
    </>
  );
};
