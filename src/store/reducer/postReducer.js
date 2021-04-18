import {
  GET_POSTS_LIST_FAIL,
  GET_POSTS_LIST_START,
  GET_POSTS_LIST_SUCCESS,
  GET_POST_COMMENTS_FAIL,
  GET_POST_COMMENTS_START,
  GET_POST_COMMENTS_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: true,
  posts: null,
  postsCopy: null,
  comments: null,
};

function reducer(state, action) {
  switch (action.type) {
    case GET_POSTS_LIST_START:
      return { ...state, isLoading: true, posts: null };
    case GET_POSTS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...action.payload],
        postsCopy: action.setCopy ? [...action.payload] : [...state.postsCopy],
      };
    case GET_POSTS_LIST_FAIL:
      return { ...state, isLoading: false };
    case GET_POST_COMMENTS_START:
      return {
        ...state,
        isLoading: true,
        comments: null,
      };
    case GET_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case GET_POST_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export { initialState, reducer };
