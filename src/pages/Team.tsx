import { Link } from "@swan-io/chicane";
import { Router } from "../Router";

type Props = {
  teamId: string;
};

export const Team = ({ teamId }: Props) => {
  return (
    <>
      <Link to={Router.Teams()}>Back to teams page</Link>

      <h2>Team {teamId} page</h2>

      <p>Hello from the team {teamId} page!</p>
    </>
  );
};
