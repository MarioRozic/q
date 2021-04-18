import { Switch, Route, Redirect } from "react-router";
import PostDetails from "./components/PostDetails";
import PostsList from "./components/PostsList";
import { useUserContext } from "./context/UsersContext/UsersContext";

function App() {
  const {
    state: { isLoading, userList },
  } = useUserContext();
  return isLoading || !userList ? (
    "Loading ..."
  ) : (
    <Switch>
      <Route path="/posts">
        <PostsList />
      </Route>
      <Route path="/post-details/:id">
        <PostDetails />
      </Route>
      <Redirect from="/" to="/posts" />
    </Switch>
  );
}

export default App;
