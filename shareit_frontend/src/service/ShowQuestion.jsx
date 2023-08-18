import axios from "axios";
import { BASE_URL } from "../Constants/url";
import { num } from "../Constants/number"  

const ShowResult = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/question/${num}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,

                },
            }
        );

        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
        throw new Error(error.response.data.message);
    }
};

export default ShowResult;