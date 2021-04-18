import React, { useEffect } from "react";
import { useHistory } from "react-router";
import PostCard from "../../containers/PostCard";
import { usePostContext } from "../../context/PostContext.js/PostContext";

export default function PostsList() {
  const { posts, isLoading, getPostsList } = usePostContext();
  const history = useHistory();

  useEffect(() => {
    getPostsList();
  }, []);

  const onClickHandler = (post) => {
    history.push({
      pathname: `/post-details/${post.id}`,
      state: { ...post },
    });
  };

  return (
    <>
      {isLoading
        ? "Loading ..."
        : posts?.map((post) => (
            <div key={post.id} onClick={() => onClickHandler(post)}>
              <PostCard post={post} />
            </div>
          ))}
    </>
  );
}
