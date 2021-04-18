import axios from "./axios";

const GetUserList = async () => {
  const { data } = await axios.get(`/users`);
  return data;
};

export { GetUserList };
