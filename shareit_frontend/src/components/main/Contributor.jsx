import "../Question/question2.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../assets/MainBackground.png";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
  faCrown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Contributor.css";
import { motion } from "framer-motion";

const Contributor = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
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
                <FontAwesomeIcon icon={faArrowLeft} onClick={onClickBack} />
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
              <div className="teamList">
                <h3>Frontend</h3>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faCrown}
                      bounce
                      size="2xs"
                      style={{ color: "#fcc783" }}
                    />
                    김규회
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      flip
                      size="2xs"
                      style={{ color: "#fcc783" }}
                    />
                    이강현
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      flip
                      size="2xs"
                      style={{ color: "#fcc783" }}
                    />
                    이수현
                  </li>
                </ul>
                <h3>Backend</h3>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      flip
                      size="2xs"
                      style={{ color: "#fcc783" }}
                    />
                    황효성
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      flip
                      size="2xs"
                      style={{ color: "#fcc783" }}
                    />
                    이은지
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faStar}
                      flip
                      size="2xs"
                      style={{ color: "#fcc783" }}
                    />
                    권수현
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contributor;
