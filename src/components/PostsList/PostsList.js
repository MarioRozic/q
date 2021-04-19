import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useHistory } from "react-router";
import Logger from "../../containers/Logger/Logger";
import PostCard from "../../containers/PostCard";
import Search from "../../containers/Search";
import { usePostContext } from "../../context/PostContext/PostContext";
import useDebounce from "../../utils/useDebounce";
import { useIsMount } from "../../utils/useIsMount";

const PostsList = (props) => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);

  const history = useHistory();
  const {
    state: { posts, isLoading },
    getPostsList,
    searchPostsByUserData,
  } = usePostContext();

  const isMounted = useIsMount();

  useEffect(() => {
    // stop calling api if posts exists (happens when comming back from details)
    // call it only on first mount
    if (!posts && isMounted) getPostsList();
  }, [getPostsList, isMounted, posts]);

  useEffect(() => {
    // skip calling search on first render
    // to prevent unnecessary renders
    if (!isMounted) searchPostsByUserData(debouncedValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const onClickHandler = useCallback(
    (post) => {
      history.push({
        pathname: `/post-details/${post.id}`,
        state: { ...post },
      });
    },
    [history]
  );

  // render new cards only when posts list is updated
  const renderPosts = useMemo(() => {
    return posts?.map((post) => (
      <div key={post.id} onClick={() => onClickHandler(post)}>
        <PostCard post={post} {...props} />
      </div>
    ));
  }, [posts, onClickHandler, props]);

  return (
    <>
      <Search placeholder="Search users" setSearch={setSearch} value={search} />
      {isLoading || !posts ? "Loading ..." : renderPosts}
    </>
  );
};

export default Logger(PostsList);
