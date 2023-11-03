import axios from "axios";
import { BASE_URL } from "../Constants/url";

const VisitUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/visited`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    alert(error.response.data);
    throw new Error(error.response.data.message);
  }
};

export default VisitUser;
