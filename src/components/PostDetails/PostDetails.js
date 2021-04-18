import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import PostCard from "../../containers/PostCard";
import { usePostContext } from "../../context/PostContext/PostContext";

export default function PostDetails() {
  const { comments, isLodaingComments, getPostComments } = usePostContext();
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    getPostComments(id);
  }, []);

  return isLodaingComments ? (
    "Loading ..."
  ) : (
    <div>
      <PostCard post={state} comments={comments} />
    </div>
  );
}
