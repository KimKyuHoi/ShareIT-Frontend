import React, { useState, useEffect } from "react";
import "./question.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../../assets/MainBackground.png";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

export default function Question() {
  const Questions = [
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
  ];
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
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부를 state로 관리
  const [stage, setStage] = useState(1);

  const [question, setQuestion] = useState("test");
  const [answer_left, setAnswerL] = useState("test");
  const [answer_right, setAnswerR] = useState("test");

  useEffect(() => {
    // setQuestion(" 프로그래밍을 할 때, 어떤 언어나 도구를 선호하나요?");
    // setQuestion(Questions[0]);
    // setAnswerL("이미 익숙한 언어나 도구를 사용한다");
    // setAnswerR("새로운 언어나 도구에 도전해보는 것을 좋아한다");
  }, []);

  const handleStage = (event) => {
    console.log(stage);
    event.stopPropagation();
    setStage((prevStage) => (prevStage < 12 ? prevStage + 1 : prevStage));
  };

  const handleImageClick = (event) => {
    console.log("이미지클릭");
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

  return (
    <>
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
                <FontAwesomeIcon icon={faArrowLeft} />
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
              <span className="Question-progress-text content-text">
                {stage}
              </span>

              <div className="bar">
                <div className="bar-progress" />
              </div>

              <span className="Question-text content-text">
                {Questions[stage]}
              </span>

              <button
                className="Question-answer-left"
                onClick={(event) => handleStage(event)}
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
                onClick={(event) => handleStage(event)}
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
                className="Lion"
                src="./img/likelion_lion_basic.gif"
                alt="Lion"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
