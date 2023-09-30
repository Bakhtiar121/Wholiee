import axios from "axios";

const getSearchProducts = async (query) => {
  const response = await axios.post(`api/search-item/${query}`);
  return response.data;
};

export default getSearchProducts;
