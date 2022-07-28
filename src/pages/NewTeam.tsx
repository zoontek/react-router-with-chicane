import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "../Router";

export const NewTeam = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Link to={links.Teams()}>Back to teams page</Link>

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
          navigate(links.Teams({ created: value }), { replace: true });
        }}
      >
        Submit + redirect
      </button>
    </>
  );
};
