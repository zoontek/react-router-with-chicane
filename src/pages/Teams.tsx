import { Link, useSearchParams } from "react-router-dom";

export const Teams = () => {
  const [searchParams] = useSearchParams();
  const created = searchParams.get("created");

  return (
    <>
      <Link to="/">Back to home page</Link>

      <h2>Teams page</h2>

      <nav>
        <Link to="/teams/foo">Team foo page</Link>
        <Link to="/teams/bar">Team bar page</Link>
        {created != null && <Link to="/teams/baz">Team {created} page ✨</Link>}
      </nav>

      <div style={{ height: 24 }} />
      <Link to="/teams/new">+ Add new team</Link>
    </>
  );
};
