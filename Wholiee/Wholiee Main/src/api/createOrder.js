import axios from "axios";

const createOrder = async (data) => {
  const response = await axios.post(
    `api/addorder?First_name=${data.First_name}&Last_name=${data.Last_name}&Email=${data.Email}&Country=${data.Country}&City=${data.City}&State=${data.State}&Address=${data.Address}&Zipcode=${data.Zipcode}&Product_ids[]=${data.Product_ids}&Total=${data.Total}&user_ids[]=${data.user_ids}&status=${data.status}&quantity=${data.quantity}`
  );
  return response;
};

export default createOrder;
