import { Switch, Route, Redirect } from "react-router";
import PostDetails from "./components/PostDetails";
import PostsList from "./components/PostsList";

function App() {
  return (
    <>
      <Switch>
        <Route path="/posts">
          <PostsList />
        </Route>
        <Route path="/post-details/:id">
          <PostDetails />
        </Route>
        <Redirect from="/" to="/posts" />
      </Switch>
    </>
  );
}

export default App;
