import { createContext, useContext, useState } from "react";
import { GetPostComments, GetPostsList } from "../../API/posts";
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
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState(null);
  const [isLodaingComments, setIsLodaingComments] = useState(true);

  const { userList } = useUserContext();

  const getPostsList = async () => {
    let data = await GetPostsList();

    data = data.map((post) => {
      let user = userList.filter((user) => user.id === post.userId)[0];
      return { ...post, user: { ...user } };
    });

    setPosts(data);
    setIsLoading(false);
  };

  const getPostComments = async (id) => {
    const data = await GetPostComments(id);
    setComments(data);
    setIsLodaingComments(false);
  };

  return {
    posts,
    comments,
    isLodaingComments,
    isLoading,
    getPostsList,
    getPostComments,
  };
}

export { ProvidePostContext, usePostContext };
