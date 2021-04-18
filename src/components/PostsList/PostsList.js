import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
import Logger from "../../containers/Logger/Logger";
import PostCard from "../../containers/PostCard";
import Search from "../../containers/Search";
import { usePostContext } from "../../context/PostContext/PostContext";
import useDebounce from "../../utils/useDebounce";

function PostsList(props) {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);

  const history = useHistory();
  const {
    state: { posts, isLoading },
    getPostsList,
    searchPostsByUserData,
  } = usePostContext();

  useEffect(() => {
    // stop calling api if posts exists (happens when comming back from details)
    if (!posts) getPostsList();
  }, []);

  useEffect(() => {
    // call only when dont have any posts, and when search value is not empty
    // to stop unnecessary renders
    if (posts && debouncedValue !== "") searchPostsByUserData(debouncedValue);
  }, [debouncedValue]);

  // render new cards only when posts list is updated
  const renderPosts = useMemo(() => {
    return posts?.map((post) => (
      <div key={post.id} onClick={() => onClickHandler(post)}>
        <PostCard post={post} {...props} />
      </div>
    ));
  }, [posts]);

  const onClickHandler = (post) => {
    history.push({
      pathname: `/post-details/${post.id}`,
      state: { ...post },
    });
  };

  return (
    <>
      <Search placeholder="Search users" setSearch={setSearch} value={search} />
      {isLoading || !posts ? "Loading ..." : renderPosts}
    </>
  );
}

export default Logger(PostsList);
