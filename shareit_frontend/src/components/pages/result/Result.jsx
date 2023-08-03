import React from "react";
// import { useEffect, useState } from "react";
import styles from "./Result.module.css";
// import Printer from "../../../assets/Printer.png";
import frontendTitle from "../../../assets/FrontendTitle.png";
import frontendPrinter from "../../../assets/FrontendPrinter.png";
import frontendFlag from "../../../assets/FrontendFlag.png";
import BackgroundImage from "../../../assets/background.png";
import snsBtn from "../../../assets/SNSBtn.png";
// import ShowResult from "../../../service/ShowResult";

const DUMMY_DATA = [
  {
    id: "1",
    title: frontendTitle,
    printer: frontendPrinter,
    flags: frontendFlag,
  },
];


const Result = () => {
  // const [title, setTitle] = useState("");
  // const [printer, setPrinter] = useState("");
  // const [flags, setFlags] = useState("");

  // useEffect(() => {
  //   ShowResult().then((data)=>{
  //     setTitle(data.title);
  //     setPrinter(data.printer);
  //     setFlags(data.flags);
  //   }).catch((error)=>{
  //     console.log(error);
  //   });
  // }, []);
  

  return (
    <div className={styles.container}>
      <div
        className={styles.backGroundImg}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />
      <header className={styles.titleBox}>
        {DUMMY_DATA.map((data) => (
          <img src={data.title} alt={data.title} className={styles.title} />
        ))}
      </header>
      <main className={styles.contentBox}>
        {DUMMY_DATA.map((data) => (
          <img src={data.printer} alt={data.title} className={styles.printer} />
        ))}
        <div className={styles.etcBox}>
          {DUMMY_DATA.map((data) => (
            <img src={data.flags} alt={data.title} className={styles.flags} />
          ))}
          <img src={snsBtn} alt="공유 이미지입니다." className={styles.sns} />
        </div>
      </main>
    </div>
  );
};

export default Result;
