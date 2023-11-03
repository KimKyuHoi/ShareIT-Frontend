import React from "react";
import "./home.css";
import "../Question/question2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../assets/MainBackground.png";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ShareIT from "../../assets/shareIT.png";
import ResultEngine from "../../assets/ResultEngine.png";
import Start from "../../assets/Start.png";
import Help from "../../assets/Help.png";
import Contributor from "../../assets/Contributor.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VisitUser from "../../service/VisitUser";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#000000",
  position: "absolute",
  left: "50%",
  top: "50%",
};

const Main = () => {
  const navigate = useNavigate();
  const [visited, setVisited] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log(`
  _____  _                         _____  _____ 
 /  ___|| |                       |_   _||_   _|
 \\ \`--. | |__    __ _  _ __   ___   | |    | |  
  \`--. \\| '_ \\  / _\` || '__| / _ \\  | |    | |  
 /\\__/ /| | | || (_| || |   |  __/ _| |_   | |  
 \\____/ |_| |_| \\__,_||_|    \\___| \\___/   \\_/  

                                        Share IT

 김규회 https://github.com/KimKyuHoi/
 이수현 https://github.com/DingX2
 권수현 https://github.com/kwonssshyeon
 이은지 https://github.com/leeeeunji
`);

  useEffect(() => {
    VisitUser()
      .then((data) => {
        setVisited(data.visited);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data);
        setLoading(false);
        throw new Error(error.response.data.message);
      });
  }, []);

  const onClickContributor = () => {
    navigate("/contributor");
  };

  const onClickStart = () => {
    navigate("/question");
  };

  const onClickHelp = () => {
    navigate("/help");
  };

  const onClickReload = () => {
    window.location.reload();
  };

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
        {loading ? ( // 데이터 로딩 중일 때 로딩 스피너 표시
          <div>
            <HashLoader
              color="#0077B6"
              loading={loading}
              cssOverride={override}
              size={50}
            /> {/* 디자인에 따라 로딩 스피너 컴포넌트를 사용할 수 있습니다. */}
          </div>
        ) : (
          <div className="Question-background">
            <div className="Question-wrapper">
              <div className="Question-header  Question-background-header">
                <div className="header-page-background">
                  <img
                    className="logo"
                    alt="사자이미지입니다."
                    src="./img/Lion.png"
                  />
                  <span className="header-text content-text">Share IT</span>
                </div>
                <div className="header-container">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    onClick={onClickReload}
                  />
                  <div className="header-link-background">
                    <span className="header-text link content-text">
                      http://www.ShareIT.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="Question-content Question-background-content">
                <div className="titleImg">
                  <img
                    src={ShareIT}
                    alt="제목이미지입니다."
                    className="shareIt"
                  />
                  <img
                    src={ResultEngine}
                    alt="제목이미지입니다."
                    className="ResultEngine"
                  />
                  <ul className="btnList">
                    <li>
                      <img
                        src={Contributor}
                        alt="제목이미지입니다."
                        className="contributor"
                        onClick={onClickContributor}
                      />
                    </li>
                    <li>
                      <img
                        src={Start}
                        alt="제목이미지입니다."
                        className="start"
                        onClick={onClickStart}
                      />
                    </li>
                    <li>
                      <img
                        src={Help}
                        alt="제목이미지입니다."
                        className="help"
                        onClick={onClickHelp}
                      />
                    </li>
                  </ul>
                  <span className="visitors">
                    <FontAwesomeIcon
                      icon={faStar}
                      flip
                      size="2xs"
                      style={{ color: "#fcc783" }}
                    />{" "}
                    Visitors : {visited}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Main;
