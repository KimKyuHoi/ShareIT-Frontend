import axios from "axios";
import { BASE_URL } from "../Constants/url";
import { num } from "../Constants/number"
import { memberId, answerId2} from "../Constants/url"  

const ShowResult = async (answerContent2) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/answer/${memberId}/${answerId2}`,
            answerContent2,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,

                },
            }
        );
        // console.log("데이터값입니다" + response.data);
        // console.log(num);
        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
        throw new Error(error.response.data.message);
    }
    num = num + 1;
};

export default ShowResult;