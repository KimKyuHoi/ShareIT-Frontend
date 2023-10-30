import React, { useState, useEffect, useRef } from "react";
import { BASE_URL } from "../../Constants/url";
import "./question2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../assets/MainBackground.png";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* 결과 모달 창 */
function Modal({ showModal, setShowModal, result }) {
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
        <button onClick={handleNavigate}>{result}</button>
      </div>
    </div>
  );
}

/* 질문지 창 */
export default function SQuestion() {
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
  const [result, setResult] = useState("null");

  /* API 통신 코드가 필요한 부분 */
  useEffect(() => {
    axios
      .get(`${BASE_URL}/question/${stage}`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setUrlQuestion(response.data.questionContent);
        setUrlAnswer(response.data.answerContent1);
        setUrlAnswer2(response.data.answerContent2);
        setUrlAnswerIdL(response.data.answerId1);
        setUrlAnswerIdR(response.data.answerId2);
      })
      .catch((res) => {
        throw new Error("Network");
      });
  }, [stage]);

  const toggleWalking = (direction) => {
    if (direction === "Right") {
      console.log("오른쪽이동");
      /* API 통신 코드가 필요한 부분 */
      axios
        .get(`${BASE_URL}/answer/1/${urlAnswerIdR}`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
        });

      setWalking((prevWalking) => 2);
    } else if (direction === "Left") {
      console.log("왼쪽이동");
      /* API 통신 코드가 필요한 부분 */
      axios
        .get(`${BASE_URL}/answer/1/${urlAnswerIdL}`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
        });

      setWalking((prevWalking) => 1);
    }
  };

  /*사자의 위치 설정 함수*/
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
      axios
        .get(`${BASE_URL}/result/1`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setResult(res.data.tenType);
          console.log(result);
        });
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
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  result={result}
                />
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
