import axios from "axios";

const sendEmail = async (data) => {
  try {
    const response = await axios.post(
      `api/set-contact?full_name=${data.full_name}&email=${data.email}&Message_Content=${data.Message_Content}&subject=${data.subject}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export default sendEmail;
