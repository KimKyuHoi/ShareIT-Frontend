import React from "react";
import "./question.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../../assets/MainBackground.png";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


export default function Question() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
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
                <img className="logo" alt="사자이미지입니다." src="./img/Lion.png" />
                <span className="header-text content-text">Share IT</span>
              </div>
              <div className="header-container">
                <FontAwesomeIcon icon={faArrowLeft} onClick={onClickBack}/>
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
              <span className="Question-progress-text content-text">1/12</span>

              <div className="bar">
                <div className="bar-progress" />
              </div>

              <span className="Question-text content-text">
                프로그래밍을 할 때, 어떤 언어나 도구를 선호하나요?
              </span>

              <div className="aligncenter Question-answer-leftimg">
                <img
                  className=" Question-answer-leftimg"
                  src="./img/Question-answer-left.png"
                  alt="left"
                ></img>
                <span className="Question-answer-text-left content-text">
                  {" "}
                  이미 익숙한 언어나 도구를 사용한다.
                </span>
              </div>

              <div className="aligncenter Question-answer-rightimg">
                <img
                  className=" Question-answer-rightimg"
                  src="./img/Question-answer-right.png "
                  alt="right"
                ></img>
                <span className="Question-answer-text-right content-text">
                  새로운 언어나 도구에 도전해보는 것을 좋아한다.
                </span>
              </div>
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
