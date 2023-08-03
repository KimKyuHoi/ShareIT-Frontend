import React from "react";
import "./home.css";
import "../Question/question.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../../assets/MainBackground.png";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import ShareIT from "../../../assets/shareIT.png"
import ResultEngine from "../../../assets/ResultEngine.png"
import Start from "../../../assets/Start.png";
import Help from "../../../assets/Help.png";
import Contributor from "../../../assets/Contributor.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Main = () => {
  const navigate = useNavigate();

  const onClickContributor = () =>{
    navigate("/contributor");
  }

  const onClickStart = () =>{
    navigate("/question");
  }

  const onClickHelp = () =>{
    navigate("/help");
  }



  return (
    <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
         transition={{duration: 1.6}}
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
                <FontAwesomeIcon icon={faArrowLeft}/>
                <FontAwesomeIcon icon={faArrowRight} />
                <FontAwesomeIcon icon={faArrowsRotate} />
                <div className="header-link-background">
                  <span className="header-text link content-text">
                    http://www.ShareIT.com
                  </span>
                </div>
              </div>
            </div>

            <div className="Question-content Question-background-content">
              <div className="titleImg">
                <img src={ShareIT} alt="제목이미지입니다." className="shareIt" />
                <img src={ResultEngine} alt="제목이미지입니다." className="ResultEngine" />
                <ul className="btnList">
                  <li><img src={Contributor} alt="제목이미지입니다." className="contributor" onClick={onClickContributor}/></li>
                  <li><img src={Start} alt="제목이미지입니다." className="start" onClick={onClickStart}/></li>
                  <li><img src={Help} alt="제목이미지입니다." className="help" onClick={onClickHelp}/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Main;