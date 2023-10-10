import axios from "axios";
import { BASE_URL } from "../Constants/url";

const ShowResult = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/result/1`,
        );

        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
        throw new Error(error.response.data.message);
    }
};

export default ShowResult;