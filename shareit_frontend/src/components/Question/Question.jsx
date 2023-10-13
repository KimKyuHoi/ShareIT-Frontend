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
  // const AnswersL = [
  //   "질문없음",
  //   "에이 모르겠다. 내가 해야겠다.",
  //   "아 그냥 내가 하지뭐 그대신 이름 무조건 뺀다",
  //   "잘 소통해서 좋은 코드를 선택을 하자",
  //   "일단은 생존에 앞서 생존물자를 구하고 주저리주저리..",
  //   "미리 개발 구조를 생각하면서 개발을 진행한다.",
  //   "전반적인 아이디어를 고려하며 디자인과 함께 작업물을 만든다",
  //   "네이버 지도켜서 젤 빠른 길로 간다",
  //   "너 표정이 안좋아 괜찮아?",
  //   "(코드를 자세히 본다) 흠...그거 그대로 복사해서 구글링해봐.(",
  //   "아 내가 여기 찾아본 맛집이 있어 그냥 거기 더 가고싶은데 거기로 가자",
  //   "당황하지 않고, 조금씩 정리해서 어떻게 할지 계획하자",
  //   "차근차근 서로서로 역할을 맡아서 기획서 쓰시죠?",
  // ];

  // const AnswersR = [
  //   "질문없음",
  //   "아 좀 어색한데? 걍 조용히 있어야지",
  //   "아 어떡하지?어떡하지?",
  //   "어...음...알아서 얘기 잘 해주시겠지? 안되면 내 코드 밀지 뭐...",
  //   "그걸 왜 생각하나요?",
  //   "일단 프로그램 잘 돌아가는거 보기위해 개발을 진행한다",
  //   "일단 작업물을 만들고 디자인은 나중에 생각하자",
  //   "에이 그냥 내가 알던 길로 걍 빨리 달려가자",
  //   "너 표정이 안좋아 뭔일있어? ",
  //   "고생이 많네 머리 아프지? 나도 좀 같이 고민해보자",
  //   "아 맛있겠당 빨리 가서 먹어야지~",
  //   "일단 맛난거부터 먹고 생각하자(배민을 키면서)",
  //   "일단 서로 의논하면서 써볼까요?",
  // ];

  // const [Questions, setQuestions] = useState([
  //   "질문없음",
  //   "첫 조별과제다. 다들 말이없다. 내가 먼저 말을 꺼내야하나? 이러면 조장인데?",
  //   "시간이 흘러 조별과제 발표날이 되었다. 발표하기로 맡은 팀원이 갑자기 연락이 안된다. 어떡하지???",
  //   " 팀원이 소통의 문제로 똑같은 부분의 코드를 짜왔다. 어떻게 해결해야되지?",
  //   "당신은 좀비 아포칼립스 세상에 있습니다. 어떻게 해야하지?",
  //   "개발을 진행할 때, 보통 어떤스타일로 개발을 하더라...",
  //   " 당신은 친구들과 해커톤에 나가기로 결심했습니다. 친구들과 아이디어를 논의 후 작업물을 만들기로 했습니다. 어떻게 만들어볼까?",
  //   "친구랑 약속때문에 가는데 살짝 지각이다. 이대로는 늦겠어!!! 어떡하지???",
  //   "친구를 만났는데 친구 표정이 뚱하다.",
  //   "개발을 진행하다가 같은 팀원이 원인모를 에러로 당신에게 코드리뷰를 부탁하고 있다. 어떻게 얘기를 할까?",
  //   "친구랑 여행을 갔다! 기차역에서 내리니까 공기가 좋다. 밥은 뭐먹지? 아 저기 맛있어 보인다! 저기로 가볼까?",
  //   "작업물 할 게 왜 이렇게 많지? 회의하다 보니까 너무 작업물이 쌓였네.이거 어떻게 해결하지?",
  //   " 학교에서 기획서를 써야되는 상황이 발생하였다. 팀원들과 논의를 하게 되었다. 어떤 의견을 내야할까?",
  //   "보너스질문",
  // ]);

  const [isClicked, setIsClicked] = useState(false);
  const [stage, setStage] = useState(1);
  const barProgressWidth = (100 / 12) * stage;

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

  const [urlQuestion, setUrlQuestion] = useState("");
  const [urlAnswer, setUrlAnswer] = useState("");
  const [urlAnswer2, setUrlAnswer2] = useState("");
  const [urlAnswerIdL, setUrlAnswerIdL] = useState();
  const [urlAnswerIdR, setUrlAnswerIdR] = useState();
  const [result, setResult] = useState("null");

  /* API 통신 코드가 필요한 부분 */
  useEffect(() => {
    axios
      .get(`${BASE_URL}/question/${stage}`, {withCredentials: true})
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
      axios.post(`${BASE_URL}/answer/1/${urlAnswerIdR}`, {withCredentials: true},).then((res) => {
        console.log(res.data);
      });

      setWalking((prevWalking) => 2);
    } else if (direction === "Left") {
      console.log("왼쪽이동");
      /* API 통신 코드가 필요한 부분 */
      axios.post(`${BASE_URL}/answer/1/${urlAnswerIdL}`, {withCredentials: true},).then((res) => {
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
      axios.get(`${BASE_URL}/result/1`, {withCredentials: true},).then((res) => {
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