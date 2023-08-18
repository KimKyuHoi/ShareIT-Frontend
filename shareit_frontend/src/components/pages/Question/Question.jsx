import React, { useState, useEffect, useRef } from "react";
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
// import JsonQuestionResource from "../../../service/api";

console.log("QuestionDataArray check");
// const QuestionData = await JsonQuestionResource.fetchBooking();
// const QuestionDataArray = await JsonQuestionResource.fetchBookingAry();

function Modal({ showModal, setShowModal }) {
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
  const AnswersL = [
    "질문없음",
    "답변1",
    "답변2",
    "답변3",
    "답변4",
    "답변5",
    "답변6",
    "답변7",
    "답변8",
    "답변9",
    "답변10",
    "답변11",
    "답변12",
    "보너스답변",
  ];

  const AnswersR = [
    "질문없음",
    "답변1",
    "답변2",
    "답변3",
    "답변4",
    "답변5",
    "답변6",
    "답변7",
    "답변8",
    "답변9",
    "답변10",
    "답변11",
    "답변12",
    "보너스답변",
  ];
  const [isClicked, setIsClicked] = useState(false);
  const [stage, setStage] = useState(1);
  const barProgressWidth = (100 / 12) * stage;

  const [Questions, setQuestions] = useState([
    "질문없음",
    "질문1",
    "질문2",
    "질문3",
    "질문4",
    "질문5",
    "질문6",
    "질문7",
    "질문8",
    "질문9",
    "질문10",
    "질문11",
    "질문12",
    "보너스질문",
  ]);

  const [walking, setWalking] = useState(false);
  const [motion, setMotion] = useState(false);
  const [Lmotion, setLMotion] = useState(false);
  const [Rmotion, setRMotion] = useState(false);
  const [position, setPosition] = useState(0);

  const [Lposition, setLposition] = useState(0);
  const [Rposition, setRposition] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const lionRef = useRef(null);
  const wrapperRef = useRef(null);

  const toggleWalking = (direction) => {
    if (direction === "Right") {
      console.log("오른쪽이동");
      setWalking((prevWalking) => 2);
    } else if (direction === "Left") {
      console.log("왼쪽이동");
      setWalking((prevWalking) => 1);
    }
  };

  useEffect(() => {
    // setQuestions(QuestionData);
  }, []);

  useEffect(() => {
    if (walking === 2 && position < Rposition) {
      const interval = setInterval(() => {
        setMotion((prevMotion) => !prevMotion);
        // setRMotion((prevMotion) => !prevMotion);
        // setLMotion((prevMotion) => false);
        setPosition((prevPosition) => prevPosition + 10);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    } else if (walking === 1 && position > Lposition) {
      const interval = setInterval(() => {
        setMotion((prevMotion) => !prevMotion);
        // setLMotion((prevMotion) => !prevMotion);
        // setRMotion((prevMotion) => false);
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

  function handleClickLeft(index) {
    // Check if the index is valid
    if (index >= 0 && index < AnswersL.length) {
      const loadedValue = AnswersL[index];
      console.log("Loaded value:", loadedValue);
      // setAnswerL(loadedValue);
      // You can now use the loadedValue as needed
    } else {
      console.log("Invalid index");
    }
  }

  function handleClickRight(index) {
    // Check if the index is valid
    if (index >= 0 && index < AnswersR.length) {
      const loadedValue = AnswersR[index];
      console.log("Loaded right value:", loadedValue);
      // setAnswerR(loadedValue);
    } else {
      console.log("Invalid right index");
    }
  }

  const onClickBack = () => {
    navigate("/");
  }

  const onClickReload = () =>{
    window.location.reload();
  }

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
                <FontAwesomeIcon icon={faArrowLeft} onClick={onClickBack}/>
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

              <span className="Question-text content-text">
                {Questions[stage]}
              </span>

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
                  {AnswersL[stage]}
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
                  {AnswersR[stage]}
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
