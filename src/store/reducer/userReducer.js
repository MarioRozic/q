import {
  GET_LIST_OF_ALL_USERS_FAIL,
  GET_LIST_OF_ALL_USERS_START,
  GET_LIST_OF_ALL_USERS_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: true,
  userList: null,
};

function reducer(state, action) {
  switch (action.type) {
    case GET_LIST_OF_ALL_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LIST_OF_ALL_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: [...action.payload],
      };
    case GET_LIST_OF_ALL_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}

export { initialState, reducer };
