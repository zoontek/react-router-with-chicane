import { Link, useSearchParams } from "react-router-dom";
import { links } from "../Router";

export const Teams = () => {
  const [searchParams] = useSearchParams();
  const created = searchParams.get("created");

  return (
    <>
      <Link to={links.Home()}>Back to home page</Link>

      <h2>Teams page</h2>

      <nav>
        <Link to={links.Team({ teamId: "foo" })}>Team foo page</Link>
        <Link to={links.Team({ teamId: "bar" })}>Team bar page</Link>

        {created != null && (
          <Link to={links.Team({ teamId: created })}>
            Team {created} page ✨
          </Link>
        )}
      </nav>

      <div style={{ height: 24 }} />
      <Link to={links.NewTeam()}>+ Add new team</Link>
    </>
  );
};
