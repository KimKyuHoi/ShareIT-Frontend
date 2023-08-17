import React from "react";
// import { useEffect, useState } from "react";
// import ShowResult from "../../../service/ShowResult";
import styles from "./Result.module.css";
import frontendTitle from "../../../assets/FrontendTitle.png";
import frontendPrinter from "../../../assets/FrontendPrinter.png";
import frontendFlag from "../../../assets/FrontendFlag.png";
import BackgroundImage from "../../../assets/background.png";
import snsBtn from "../../../assets/SNSBtn.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: "1",
    title: frontendTitle,
    printer: frontendPrinter,
    flags: frontendFlag,
  },
];


const Result = () => {
  // const [images, setImages] = useState([]);
  // const [url, setUrl] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   ShowResult().then((data) => {
  //     setImages(data.imageUrls);
  //     setUrl(data.url);
  //   }).catch((error) => {
  //     console.error(error);
  //     alert(error.response.data);
  //     throw new Error(error.response.data.message);
  //   });

  // }, []);

  const onClickBack = () => {
    navigate("/");
  }

  // const onClickUrl = () => {
  //   window.open(url);
  // }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
      className={styles.container}>
      <div
        className={styles.backGroundImg}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />
      <header className={styles.titleBox}>
        {DUMMY_DATA.map((data) => (
          <img src={data.title} alt={data.title} className={styles.title} onClick={onClickBack}/>
        ))}
        {/* <img key={images[0]} src={images[0]} alt={`제목입니다.`} onClick={onClickBack} className={styles.title} /> */}
      </header>
      <main className={styles.contentBox}>
        {DUMMY_DATA.map((data) => (
          <img src={data.printer} alt={data.title} className={styles.printer}/>
        ))}
        {/* <img key={images[1]} src={images[1]} alt={`프린터기입니다.`} className={styles.printer} onClick={onClickUrl} /> */}
        <div className={styles.etcBox}>
          {DUMMY_DATA.map((data) => (
            <img src={data.flags} alt={data.title} className={styles.flags} />
          ))}
          {/* <img key={images[1]} src={images[2]} alt={`프린터기입니다.`} className={styles.printer} /> */}
          <img src={snsBtn} alt="공유 이미지입니다." className={styles.sns} />
        </div>
      </main>

    </motion.div>
  );
};

export default Result;
