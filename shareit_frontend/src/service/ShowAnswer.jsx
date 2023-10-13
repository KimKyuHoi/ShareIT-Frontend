import axios from "axios";
import { BASE_URL } from "../Constants/url";
import { num } from "../Constants/number"
import { answerId1} from "../Constants/url"

const ShowResult = async (answerContent1) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/answer/1/${answerId1}`,
            answerContent1,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,

                },
            }
        );
        num += 1;
        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
        throw new Error(error.response.data.message);
    }
};

export default ShowResult;