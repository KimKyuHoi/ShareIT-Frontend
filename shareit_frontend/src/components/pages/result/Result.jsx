import React from "react";
import styles from "./Result.module.css";
import Maintitle from "../../../assets/MainTitle.png";
import Printer from "../../../assets/Printer.png";
import Flags from "../../../assets/Flags.png";
import BackgroundImage from "../../../assets/background.png";

const Result = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.backGroundImg}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />
      <header className={styles.topTitle}>
        <div className={styles.Subtitle}>
          <h5 className={styles.subtTitleContent}>당신의 개발자 성향은?</h5>
        </div>
        <div className={styles.Maintitle}>
          <h5 className={styles.MainTitleContent}>프론트엔드 개발자</h5>
        </div>
        <div className={styles.titleContentBox}>
          <div className={styles.titleContent}>
            눈에 보이는 화면을 개발하는 프론트엔드. 디자이너, PM, 백엔드
            사이에서 구체적인 요구사항을 표현합니다. 보다 나은 사용자 경험(UX)를
            위해 개발합니다.
          </div>
        </div>
      </header>
      {/* <main className={styles.contentBox}>
        <div className={styles.printBox}>
          <img
            src={Printer}
            alt="프린터 이미지입니다."
            className={styles.printer}
          />
        </div>
        <div className={styles.etcBox}>
          <img src={Flags} alt="깃발 이미지입니다." className={styles.Flags} />
        </div>
      </main> */}
    </div>
  );
};

export default Result;
