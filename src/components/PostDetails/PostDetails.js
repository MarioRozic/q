import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import PostCard from "../../containers/PostCard";
import { usePostContext } from "../../context/PostContext/PostContext";

export default function PostDetails() {
  const {
    state: { isLoading, comments },
    getPostComments,
  } = usePostContext();
  const { id } = useParams();
  const { state: newState } = useLocation();

  useEffect(() => {
    getPostComments(id);
  }, []);

  return isLoading ? (
    "Loading ..."
  ) : (
    <div>
      <PostCard post={newState} comments={comments} />
    </div>
  );
}
