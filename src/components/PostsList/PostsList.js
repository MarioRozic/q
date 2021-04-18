import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import PostCard from "../../containers/PostCard";
import Search from "../../containers/Search";
import { usePostContext } from "../../context/PostContext/PostContext";
import useDebounce from "../../utils/useDebounce";

export default function PostsList() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);

  const history = useHistory();
  const {
    posts,
    isLoading,
    getPostsList,
    searchPostsByUserData,
  } = usePostContext();

  useEffect(() => {
    getPostsList();
  }, []);

  useEffect(() => {
    if (posts) searchPostsByUserData(debouncedValue);
  }, [debouncedValue]);

  const onClickHandler = (post) => {
    history.push({
      pathname: `/post-details/${post.id}`,
      state: { ...post },
    });
  };

  return (
    <>
      <Search placeholder="Search users" setSearch={setSearch} value={search} />
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
