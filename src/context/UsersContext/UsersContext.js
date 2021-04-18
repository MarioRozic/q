import { createContext, useContext, useEffect, useReducer } from "react";
import { GetUserList } from "../../API/user";
import {
  GET_LIST_OF_ALL_USERS_FAIL,
  GET_LIST_OF_ALL_USERS_START,
  GET_LIST_OF_ALL_USERS_SUCCESS,
} from "../../store/actionTypes";
import { initialState, reducer } from "../../store/reducer/userReducer";

const userContext = createContext();

function ProvideUserContext({ children }) {
  const user = useProvideUserContext();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

function useUserContext() {
  return useContext(userContext);
}

function useProvideUserContext() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const asyncFun = async () => {
      try {
        dispatch({ type: GET_LIST_OF_ALL_USERS_START });
        const data = await GetUserList();
        dispatch({ type: GET_LIST_OF_ALL_USERS_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: GET_LIST_OF_ALL_USERS_FAIL, payload: error });
      }
    };

    asyncFun();
  }, []);

  return { state };
}

export { ProvideUserContext, useUserContext };
