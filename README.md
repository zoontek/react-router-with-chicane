# React Router + @swan-io/chicane example

This repository is an example on how you can incrementaly adopt [`@swan-io/chicane`](https://github.com/swan-io/chicane) in your React Router codebase, in order to add type safety on your internal links creation.

👉 Note that [`@swan-io/chicane`](https://github.com/swan-io/chicane) is a fully featured router that provides type safety on link creation **and** on route matching (and other cool features!). This repository give you three examples of the same codebase so you can briefly compare the approaches:

- [Example with react-router-dom + @swan-io/chicane](https://github.com/zoontek/react-router-with-chicane/tree/react-router-and-chicane/src) (type safe links creation)
- [Example with react-router-dom only](https://github.com/zoontek/react-router-with-chicane/tree/react-router-only/src) (no type safety)
- [Example with @swan-io/chicane only](https://github.com/zoontek/react-router-with-chicane/tree/chicane-only/src) (type safe links creation and type safe route matching)

### How to adopt @swan-io/chicane incrementaly in your React Router codebase

First create a `Router.ts` file:

```ts
import { createRouter } from "@swan-io/chicane";

// Here we list all our application pages
const routes = {
  Home: "/",
  Teams: "/teams?:created", // chicane support search / hash params declaration
  Team: "/teams/:teamId",
  NewTeam: "/teams/new",
  // Note that chicane "createGroup" works perfectly here! (for routes nesting)
} as const;

// We avoid exporting chicane routing methods
const { useRoute, push, replace, ...rest } = createRouter(routes);

// We exports all the link creation methods
export const links = rest;

// We export paths (without search and hash params, as react-router doesn't support them)
export const paths = (Object.keys(routes) as (keyof typeof routes)[]).reduce(
  (acc, key) => ({ ...acc, [key]: routes[key].replace(/[?#].*/, "") }),
  {} as Record<keyof typeof routes, string>
);
```

Then, replace your React Router Route component paths declarations:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "./Router"

<BrowserRouter>
  <Routes>
    {/* we use paths from Router.ts */}
    <Route path={paths.Home} element={<Home />} />
    <Route path={paths.Teams} element={<Teams />} />
    <Route path={paths.Team} element={<Team />} />
    <Route path={paths.NewTeam} element={<NewTeam />} />
  </Routes>
</BrowserRouter>
```

Finally, enjoy safe link creation!

```ts
import { Link, useNavigate } from "react-router-dom";
import { links } from "./Router"

const SomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Link to={links.Home()}>Back to home page</Link>✨

      <Link to={links.Team({ teamId: "foo" })}>Team foo page</Link>
      <Link to={links.Team({ teamId: "bar" })}>Team bar page</Link>

      <button
        onClick={(event) => {
          event.preventDefault();
          navigate(links.Teams({ created: "baz" }), { replace: true });
        }}
      >
        Click me
      </button>
    </>
  );
};
```

✨ Once your links are type safe, you can start migrating your [routes matching](https://swan-io.github.io/chicane/matching-some-routes).
