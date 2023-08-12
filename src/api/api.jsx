import axios from "axios";

const getAPI = async () => {
  const response = await axios.get("http://localhost:3000/Featured");
  return response.data;
};

export default getAPI;
