import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import Logger from "../../containers/Logger/Logger";
import PostCard from "../../containers/PostCard";
import { usePostContext } from "../../context/PostContext/PostContext";
import { useIsMount } from "../../utils/useIsMount";

function PostDetails(props) {
  const {
    state: { isLoading, comments },
    getPostComments,
  } = usePostContext();
  const { id } = useParams();
  const { state: newState } = useLocation();

  const isMounted = useIsMount();

  useEffect(() => {
    if (isMounted) getPostComments(id);
  }, [getPostComments, id, isMounted]);

  return isLoading || !comments ? (
    "Loading ..."
  ) : (
    <PostCard post={newState} comments={comments} {...props} />
  );
}

export default Logger(PostDetails);
