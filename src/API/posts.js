import axios from "./axios";

const GetPostsList = async () => {
  const { data } = await axios.get(`/posts`);
  return data;
};

const GetPostComments = async (id) => {
  const { data } = await axios.get(`/comments?postId=${id}`);
  return data;
};

export { GetPostsList, GetPostComments };
