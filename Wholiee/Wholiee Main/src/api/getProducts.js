import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("api/approve-products");
  return response.data;
};

export default getProducts;
