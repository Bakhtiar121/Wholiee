import axios from "axios";

const getCategoryProducts = async (category) => {
  const response = await axios.get(`api/showprobycat/${category}`);
  return response.data;
};

export default getCategoryProducts;
