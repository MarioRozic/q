import { createContext, useContext, useReducer } from "react";
import { GetPostComments, GetPostsList } from "../../API/posts";
import {
  GET_POSTS_LIST_FAIL,
  GET_POSTS_LIST_START,
  GET_POSTS_LIST_SUCCESS,
  GET_POST_COMMENTS_FAIL,
  GET_POST_COMMENTS_START,
  GET_POST_COMMENTS_SUCCESS,
} from "../../store/actionTypes";
import { initialState, reducer } from "../../store/reducer/postReducer";
import { useUserContext } from "../UsersContext/UsersContext";

const postContext = createContext();

function ProvidePostContext({ children }) {
  const post = useProvidePostContext();
  return <postContext.Provider value={post}>{children}</postContext.Provider>;
}

function usePostContext() {
  return useContext(postContext);
}

function useProvidePostContext() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    state: { userList },
  } = useUserContext();

  const getPostsList = async () => {
    dispatch({ type: GET_POSTS_LIST_START });
    try {
      let data = await GetPostsList();

      data = data.map((post) => {
        let user = userList.filter((user) => user.id === post.userId)[0];
        return { ...post, user: { ...user } };
      });

      dispatch({ type: GET_POSTS_LIST_SUCCESS, payload: data, setCopy: true });
    } catch (error) {
      dispatch({ type: GET_POSTS_LIST_FAIL, payload: error });
    }
  };

  const getPostComments = async (id) => {
    dispatch({ type: GET_POST_COMMENTS_START });
    try {
      const data = await GetPostComments(id);
      dispatch({ type: GET_POST_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_POST_COMMENTS_FAIL, payload: error });
    }
  };

  const searchPostsByUserData = async (search) => {
    dispatch({ type: GET_POSTS_LIST_START });
    const data = state.postsCopy.filter((post) =>
      post.user.name.toLowerCase().includes(search.toLowerCase())
    );

    // stall, simulate api call
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

    if (data.length) {
      dispatch({ type: GET_POSTS_LIST_SUCCESS, payload: data, setCopy: false });
    } else {
      dispatch({ type: GET_POSTS_LIST_SUCCESS, payload: [], setCopy: false });
    }
  };

  return {
    state,
    getPostsList,
    getPostComments,
    searchPostsByUserData,
  };
}

export { ProvidePostContext, usePostContext, postContext };
