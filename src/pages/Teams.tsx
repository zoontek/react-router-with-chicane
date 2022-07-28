import { Link } from "@swan-io/chicane";
import { Router } from "../Router";

type Props = {
  created?: string;
};

export const Teams = ({ created }: Props) => {
  return (
    <>
      <Link to={Router.Home()}>Back to home page</Link>

      <h2>Teams page</h2>

      <nav>
        <Link to={Router.Team({ teamId: "foo" })}>Team foo page</Link>
        <Link to={Router.Team({ teamId: "bar" })}>Team bar page</Link>

        {created != null && (
          <Link to={Router.Team({ teamId: created })}>
            Team {created} page ✨
          </Link>
        )}
      </nav>

      <div style={{ height: 24 }} />
      <Link to={Router.NewTeam()}>+ Add new team</Link>
    </>
  );
};
