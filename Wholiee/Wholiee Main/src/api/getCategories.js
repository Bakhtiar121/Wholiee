import axios from "axios";

const getCategories = async () => {
  const response = await axios.get("api/showall-cat");
  return response.data;
};

export default getCategories;
