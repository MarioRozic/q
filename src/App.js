import { Switch, Route, Redirect } from "react-router";
import PropTypes from "prop-types";
import PostDetails from "./components/PostDetails";
import PostsList from "./components/PostsList";
import Logger from "./containers/Logger/Logger";
import { useUserContext } from "./context/UsersContext/UsersContext";

function App(props) {
  const {
    state: { isLoading, userList },
  } = useUserContext();
  return isLoading || !userList ? (
    "Loading ..."
  ) : (
    <Switch>
      <Route path="/posts">
        <PostsList {...props} />
      </Route>
      <Route path="/post-details/:id">
        <PostDetails {...props} />
      </Route>
      <Redirect from="/" to="/posts" />
    </Switch>
  );
}

App.propTypes = {
  propsmessage: PropTypes.string.isRequired,
};

export default Logger(App);
