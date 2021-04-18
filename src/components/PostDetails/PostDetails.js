import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import Logger from "../../containers/Logger/Logger";
import PostCard from "../../containers/PostCard";
import { usePostContext } from "../../context/PostContext/PostContext";

function PostDetails(props) {
  const {
    state: { isLoading, comments },
    getPostComments,
  } = usePostContext();
  const { id } = useParams();
  const { state: newState } = useLocation();

  useEffect(() => {
    getPostComments(id);
  }, []);

  return isLoading || !comments ? (
    "Loading ..."
  ) : (
    <PostCard post={newState} comments={comments} {...props} />
  );
}

export default Logger(PostDetails);
