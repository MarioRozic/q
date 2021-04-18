import React, { useEffect } from "react";
import PostCard from "../../containers/PostCard";
import { usePostContext } from "../../context/PostContext.js/PostContext";

export default function PostsList() {
  const { posts, isLoading, getPostsList } = usePostContext();
  useEffect(() => {
    getPostsList();
  }, []);

  console.log(posts);
  return (
    <div>
      {isLoading
        ? "Loading ..."
        : posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
