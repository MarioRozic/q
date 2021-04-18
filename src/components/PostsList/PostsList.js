import React, { useEffect } from "react";
import { usePostContext } from "../../context/PostContext.js/PostContext";

export default function PostsList() {
  const { isLoading, getPostsList } = usePostContext();
  useEffect(() => {
    getPostsList();
  }, []);

  console.log(isLoading);
  return <div>Posts list</div>;
}
