import axios from "axios";

const getAPI = async () => {
  const response = await axios.get("http://localhost:3000/featured");
  return response.data;
};

export default getAPI;
