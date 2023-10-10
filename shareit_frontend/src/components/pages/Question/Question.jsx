import React, { useState, useEffect, useRef } from "react";
import { BASE_URL, answerId1 } from "../../../Constants/url";
import "./question.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../../assets/MainBackground.png";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useNavigate,
} from "react-router-dom";
import showAnswer from "../../../service/ShowAnswer";
import axios from "axios";


function Modal({ showModal, setShowModal, dimensionValues }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    setShowModal(false);
    navigate("/result");
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={handleNavigate}>결과 보기</button>
      </div>
    </div>
  );
}

export default function Question() {
 

  const [isClicked, setIsClicked] = useState(false);
  const [stage, setStage] = useState(1);
  const barProgressWidth = (100 / 12) * stage;

  

  const [walking, setWalking] = useState(false);
  const [motion, setMotion] = useState(false);
  const [position, setPosition] = useState(0);

  const [Lposition, setLposition] = useState(0);
  const [Rposition, setRposition] = useState(0);
 

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const lionRef = useRef(null);
  const wrapperRef = useRef(null);

  const [urlQuestion, setUrlQuestion] = useState("");
  const [urlAnswer, setUrlAnswer] = useState("");
  const [urlAnswer2, setUrlAnswer2] = useState("");
  const [urlAnswerIdL, setUrlAnswerIdL] = useState();
  const [urlAnswerIdR, setUrlAnswerIdR] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/question/${stage}`, {})
      .then((response) => {
        console.log(response.data);
        setUrlQuestion(response.data.questionContent);
        setUrlAnswer(response.data.answerContent1);
        setUrlAnswer2(response.data.answerContent2);
        setUrlAnswerIdL(response.data.answerId1);
        setUrlAnswerIdR(response.data.answerId2);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [stage]);

  const toggleWalking = (direction) => {
    if (direction === "Right") {
      console.log("오른쪽이동");
      axios.post(`${BASE_URL}/answer/1/${urlAnswerIdR}`, {}).then((res) => {
        console.log(res.data);
      });
      setWalking((prevWalking) => 2);
    } else if (direction === "Left") {
      console.log("왼쪽이동");
       axios.post(`${BASE_URL}/answer/1/${urlAnswerIdL}`, {}).then((res) => {
        console.log(res.data);
      });
      setWalking((prevWalking) => 1);
    }
  };

  useEffect(() => {
    if (walking === 2 && position < Rposition) {
      const interval = setInterval(() => {
        setMotion((prevMotion) => !prevMotion);
        setPosition((prevPosition) => prevPosition + 10);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    } else if (walking === 1 && position > Lposition) {
      const interval = setInterval(() => {
        setMotion((prevMotion) => !prevMotion);
        setPosition((prevPosition) => prevPosition - 10);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [walking, position]);

  useEffect(() => {
    const lionElement = lionRef.current;
    const wrapperElement = wrapperRef.current;
    if (lionElement && position === 0) {
      const lionRect = lionElement.getBoundingClientRect();
      const wrapperRect = wrapperElement.getBoundingClientRect(); // 수정된 부분
      const initialPosition = wrapperRect.width / 2 - lionRect.width / 2;
      console.log("Lion의 초기 위치:", initialPosition);
      setPosition(initialPosition);
      setLposition(initialPosition - 100);
      setRposition(initialPosition + 100);
    }
  }, [position]);

  const handleStage = (event) => {
    console.log(stage);
    event.stopPropagation();
    setStage((prevStage) => (prevStage < 12 ? prevStage + 1 : prevStage));
    if (stage === 12) {
      console.log("modal");
      setShowModal(true);
    }
  };

  const handleImageClick = (event) => {
    console.log("이미지클릭됨");
    event.stopPropagation();
  };

  const handleClick = (index) => {
    if (isClicked) {
      setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setIsClicked(true); // true일 땐 변경될 이미지 src
    }
  };

  const onClickBack = () => {
    navigate("/");
  };

  const onClickReload = () => {
    window.location.reload();
  };

  const onClickAnswer1 = async (event) => {
    event.preventDefault();

    try {
      const create = await showAnswer(urlAnswer);
      console.log(create);
    } catch (error) {
      throw new error(error);
    }
  };

  const onClickAnswer2 = async (event) => {
    event.preventDefault();

    try {
      const create = await showAnswer(urlAnswer2);
      console.log(create);
    } catch (error) {
      throw new error(error);
    }
  };

  return (
    <>
      <div
        className="backGroundImg"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="Question-background">
          <div className="Question-wrapper" ref={wrapperRef}>
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
              {showModal && (
                <Modal showModal={showModal} setShowModal={setShowModal} />
              )}
              <span className="Question-progress-text content-text">
                {stage}
              </span>

              <div className="bar">
                <div
                  className="bar-progress"
                  style={{ width: `${barProgressWidth}%` }}
                />
              </div>

              <span className="Question-text content-text">{urlQuestion}</span>

              <button
                className="Question-answer-left"
                onClick={(event) => {
                  handleStage(event);
                  toggleWalking("Left");
                }}
              >
                <img
                  className=" Question-answer-leftimg"
                  src="./img/Question-answer-left.png"
                  alt="left"
                  onClick={(event) => handleImageClick(event)}
                ></img>
                <span className="Question-answer-text-left content-text">
                  {" "}
                  {urlAnswer}
                </span>
              </button>

              <button
                className="Question-answer-right"
                onClick={(event) => {
                  handleStage(event);
                  toggleWalking("Right");
                }}
              >
                <img
                  className=" Question-answer-rightimg"
                  src="./img/Question-answer-right.png "
                  alt="right"
                  onClick={(event) => handleImageClick(event)}
                ></img>
                <span className="Question-answer-text-right content-text">
                  {urlAnswer2}
                </span>
              </button>

              <img
                ref={lionRef}
                className={`Lion image ${motion ? "walking" : ""}`}
                src={
                  walking === 1
                    ? motion
                      ? "./img/likelion_lion_runLeft.png"
                      : "./img/likelion_lion_basicL.gif"
                    : walking === 2 && motion
                    ? "./img/likelion_lion_runRight.png"
                    : "./img/likelion_lion_basicR.gif"
                }
                alt={
                  motion
                    ? walking === "Left"
                      ? "walking left"
                      : "walking right"
                    : "standing"
                }
                style={{ left: `${position}px` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}