import { Link, useNavigate } from "react-router-dom";

export const NewTeamForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <Link to="/teams">Back to teams page</Link>

      <h2>New team page</h2>

      <button
        onClick={(event) => {
          event.preventDefault();
          navigate("/teams?created=baz", { replace: true });
        }}
      >
        Submit bar team and redirect
      </button>
    </>
  );
};
