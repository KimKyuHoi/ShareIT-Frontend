import "../Question/question.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../../assets/MainBackground.png";
import {
    faArrowLeft,
    faArrowRight,
    faArrowsRotate,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Help.css";
import { motion } from "framer-motion";

const Help = () => {
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate("/");
    }

    const onClickReload = () => {
        window.location.reload();
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6 }}
        >
            <div
                className="backGroundImg"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <div className="Question-background">
                    <div className="Question-wrapper">
                        <div className="Question-header  Question-background-header">
                            <div className="header-page-background">
                                <img className="logo" alt="사자이미지입니다." src="./img/Lion.png" />
                                <span className="header-text content-text">Share IT</span>
                            </div>
                            <div className="header-container">
                                <FontAwesomeIcon icon={faArrowLeft} onClick={onClickBack} />
                                <FontAwesomeIcon icon={faArrowRight} />
                                <FontAwesomeIcon icon={faArrowsRotate} onClick={onClickReload}/>
                                <div className="header-link-background">
                                    <span className="header-text link content-text">
                                        http://www.ShareIT.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="Question-content Question-background-content">
                            <div className="helpPage">
                                <h3>도움말 <FontAwesomeIcon icon={faQuestion} bounce size="sm" style={{ color: "#7c93fb", }} /></h3>
                                <p> 1. 시작하기
                                    (시작 버튼 이미지 삽입하면 좋을 듯)
                                    화면 중앙의 start 버튼을 눌러 시작합니다.</p>
                                <br />
                                <p>2. 질문은 총 xx문항으로 이루어져 있으며 본인에게 더 적합하다고 생각되는 선택지를 고르시면 됩니다.</p>
                                <br />
                                <p>3. 질문이 모두 끝나면 선택하신 것을 토대로 성향을 분석해서 가장 적합한 IT 직군을 추천드립니다.</p>
                                <br />
                                <p>4. 또한 추천 직업에 대한 공부 방법이 포함된 유용한 사이트를 제공해드립니다.</p>
                                <br />
                                <p>5. 결과창의 제목을 클릭하면 다시 서비스를 이용하실 수 있습니다!</p>
                                <br />
                                <p>6. 결과창의 공유하기 버튼을 통해 나의 결과를 공유해 보아요!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>)
}

export default Help;