import axios from "./axios";

const GetPostsList = async () => {
  const { data } = await axios.get("/posts");
  return data;
};

export { GetPostsList };
