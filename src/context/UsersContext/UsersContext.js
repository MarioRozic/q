import { createContext, useState, useContext, useEffect } from "react";
import { GetUserList } from "../../API/user";

const userContext = createContext();

function ProvideUserContext({ children }) {
  const user = useProvideUserContext();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

function useUserContext() {
  return useContext(userContext);
}

function useProvideUserContext() {
  const [userList, setUserList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const asyncFun = async () => {
      const data = await GetUserList();
      console.log(data);

      setUserList(data);
      setIsLoading(false);
    };

    asyncFun();
  }, []);

  return { userList, isLoading };
}

export { ProvideUserContext, useUserContext };
