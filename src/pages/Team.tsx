import { Link, useParams } from "react-router-dom";

export const Team = () => {
  const { teamId } = useParams();

  if (typeof teamId === "undefined") {
    return <p>No :teamId param provided!</p>;
  }

  return (
    <>
      <Link to="/teams">Back to teams page</Link>

      <h2>Team {teamId} page</h2>

      <p>Hello from the team {teamId} page!</p>
    </>
  );
};
