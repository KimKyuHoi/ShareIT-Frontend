import React from "react";
import { useEffect, useState } from "react";
import ShowResult from "../../service/ShowResult";
import { useRef } from "react";
import styles from "./Result.module.css";
import frontendTitle from "../../assets/FrontendTitle.png";
import frontendPrinter from "../../assets/FrontendPrinter.png";
import frontendFlag from "../../assets/FrontendFlag.png";
import AITitle from "../../assets/title_AI.png";
import AIPrinter from "../../assets/printer_AI.png";
import AIFlag from "../../assets/flag_AI.png";
import AndroidTitle from "../../assets/title_Android.png";
import AndroidFlag from "../../assets/flag_android.png";
import AndroidPrinter from "../../assets/printer_android.png";
import BackendTitle from "../../assets/title_backend.png";
import BackendFlag from "../../assets/flag_backend.png";
import BackendPrinter from "../../assets/printer_backend.png";
import IOSFlag from "../../assets/flag_IOS.png";
import IOSTitle from "../../assets/title_IOS.png";
import IOSPrinter from "../../assets/printer_IOS.png";
import BigDataFlag from "../../assets/flag_BigData.png";
import BigDataTitle from "../../assets/title_BigData.png";
import BigDataPrinter from "../../assets/printer_bigData.png";
import WebDesignFlag from "../../assets/flag_web_design.png";
import WebDesignTitle from "../../assets/title_web_design.png";
import WebDesignPrinter from "../../assets/printer_web_design.png";
import GraphicFlag from "../../assets/flag_graphic.png";
import GraphicTitle from "../../assets/title_Graphic.png";
import GraphicPrinter from "../../assets/printer_Graphic.png";
import GameFlag from "../../assets/flag_Game.png";
import GameTitle from "../../assets/title_Game.png";
import GamePrinter from "../../assets/printer_Game.png";
import SecurityFlag from "../../assets/flag_Security.png";
import SecurityTitle from "../../assets/title_Security.png";
import SecurityPrinter from "../../assets/printer_security.png";
import NetworkFlag from "../../assets/flag_network.png";
import NetworkTitle from "../../assets/title_Network.png";
import NetworkPrinter from "../../assets/printer_network.png";
import EmbededFlag from "../../assets/flag_embedded.png";
import EmbededTitle from "../../assets/title_Embedded.png";
import EmbededPrinter from "../../assets/printer_embedded.png";
import BlockChainFlag from "../../assets/flag_blockChain.png";
import BlockChainTitle from "../../assets/title_blockChain.png";
import BlockChainPrinter from "../../assets/printer_blockChain.png";
import PlannerTitle from "../../assets/title_planner.png";
import PlannerPrinter from "../../assets/printer_planner.png";
import PlannerFlag from "../../assets/flag_planner.png";
import devOpsFlag from "../../assets/flag_devops.png";
import devOpsTitle from "../../assets/title_devOps.png";
import devOpsPrinter from "../../assets/printer_devOps.png";
import fullstackTitle from "../../assets/title_full_stack.png";
import fullstackPrinter from "../../assets/printer_full_stack.png";
import fullstackFlag from "../../assets/flag_full_stack.png";

import BackgroundImage from "../../assets/background.png";
import snsBtn from "../../assets/SNSBtn.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_FRONT } from "../../Constants/url";

const DUMMY_DATA = [
  {
    id: "1",
    title: frontendTitle,
    printer: frontendPrinter,
    flags: frontendFlag,
  },
  {
    id: "2",
    title: AITitle,
    printer: AIPrinter,
    flags: AIFlag,
  },
  {
    id: "3",
    title: AndroidTitle,
    printer: AndroidPrinter,
    flags: AndroidFlag,
  },
  {
    id: "4",
    title: BackendTitle,
    printer: BackendPrinter,
    flags: BackendFlag,
  },
  {
    id: "5",
    title: IOSTitle,
    printer: IOSPrinter,
    flags: IOSFlag,
  },
  {
    id: "6",
    title: BigDataTitle,
    printer: BigDataPrinter,
    flags: BigDataFlag,
  },
  {
    id: "7",
    title: fullstackTitle,
    printer: fullstackPrinter,
    flags: fullstackFlag,
  },
  {
    id: "8",
    title: WebDesignTitle,
    printer: WebDesignPrinter,
    flags: WebDesignFlag,
  },
  {
    id: "9",
    title: GraphicTitle,
    printer: GraphicPrinter,
    flags: GraphicFlag,
  },
  {
    id: "10",
    title: GameTitle,
    printer: GamePrinter,
    flags: GameFlag,
  },
  {
    id: "11",
    title: SecurityTitle,
    printer: SecurityPrinter,
    flags: SecurityFlag,
  },
  {
    id: "12",
    title: NetworkTitle,
    printer: NetworkPrinter,
    flags: NetworkFlag,
  },
  {
    id: "13",
    title: EmbededTitle,
    printer: EmbededPrinter,
    flags: EmbededFlag,
  },
  {
    id: "14",
    title: BlockChainTitle,
    printer: BlockChainPrinter,
    flags: BlockChainFlag,
  },
  {
    id: "15",
    title: PlannerTitle,
    printer: PlannerPrinter,
    flags: PlannerFlag,
  },
  {
    id: "16",
    title: devOpsTitle,
    printer: devOpsPrinter,
    flags: devOpsFlag,
  },
];

const Result = () => {
  const [tenType, setTenType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    ShowResult()
      .then((data) => {
        setTenType(data.tenType);
      })
      .catch((error) => {
        console.error("에러가 발생했습니다. 처음부터 다시 시도해주세요.");
        alert(error.response.data);
        throw new Error(error.response.data.message);
      });
  }, []);

  const onClickBack = () => {
    navigate("/");
  };

  let selectedData;

  if (tenType === "INTP") {
    selectedData = DUMMY_DATA.find((data) => data.id === "2"); // 예시에 따라 선택한 값 설정
  } else if (tenType === "INTJ") {
    selectedData = DUMMY_DATA.find((data) => data.id === "7");
  } else if (tenType === "INFP") {
    selectedData = DUMMY_DATA.find((data) => data.id === "8");
  } else if (tenType === "INFJ") {
    selectedData = DUMMY_DATA.find((data) => data.id === "11");
  } else if (tenType === "ISTP") {
    selectedData = DUMMY_DATA.find((data) => data.id === "14");
  } else if (tenType === "ISTJ") {
    selectedData = DUMMY_DATA.find((data) => data.id === "4");
  } else if (tenType === "ISFP") {
    selectedData = DUMMY_DATA.find((data) => data.id === "12");
  } else if (tenType === "ISFJ") {
    selectedData = DUMMY_DATA.find((data) => data.id === "6");
  } else if (tenType === "ENTP") {
    selectedData = DUMMY_DATA.find((data) => data.id === "5");
  } else if (tenType === "ENTJ") {
    selectedData = DUMMY_DATA.find((data) => data.id === "10");
  } else if (tenType === "ENFP") {
    selectedData = DUMMY_DATA.find((data) => data.id === "9");
  } else if (tenType === "ENFJ") {
    selectedData = DUMMY_DATA.find((data) => data.id === "1");
  } else if (tenType === "ESTP") {
    selectedData = DUMMY_DATA.find((data) => data.id === "3");
  } else if (tenType === "ESTJ") {
    selectedData = DUMMY_DATA.find((data) => data.id === "16");
  } else if (tenType === "ESFP") {
    selectedData = DUMMY_DATA.find((data) => data.id === "13");
  } else if (tenType === "ESFJ") {
    selectedData = DUMMY_DATA.find((data) => data.id === "15");
  }

  if (!selectedData) {
    selectedData = DUMMY_DATA[0]; // 예를 들어 기본값으로 첫 번째 데이터 항목을 선택
  }

  const urlRef = useRef(`${BASE_URL_FRONT}`);

  const copyToClipboard = () => {
    if (urlRef.current) {
      urlRef.current.select();
      document.execCommand("copy");
      urlRef.current.blur(); // 선택 해제
      alert("URL이 복사되었습니다. 링크를 공유해보세요!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
      className={styles.container}
    >
      <div
        className={styles.backGroundImg}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />
      <header className={styles.titleBox}>
        <img
          src={selectedData.title}
          alt={selectedData.title}
          className={styles.title}
          onClick={onClickBack}
        />
        {/* <img key={images[0]} src={images[0]} alt={`제목입니다.`} onClick={onClickBack} className={styles.title} /> */}
      </header>
      <main className={styles.contentBox}>
        <img
          src={selectedData.printer}
          alt={selectedData.title}
          className={styles.printer}
        />
        {/* <img key={images[1]} src={images[1]} alt={`프린터기입니다.`} className={styles.printer} onClick={onClickUrl} /> */}
        <div className={styles.etcBox}>
          <img
            src={selectedData.flags}
            alt={selectedData.title}
            className={styles.flags}
          />
          {/* <img key={images[1]} src={images[2]} alt={`프린터기입니다.`} className={styles.printer} /> */}
          <img
            src={snsBtn}
            alt="공유 이미지입니다."
            className={styles.sns}
            onClick={copyToClipboard}
          />
          <input
            type="text"
            ref={urlRef}
            defaultValue="http://share-it.p-e.kr" // 클립보드에 복사할 URL 설정
            readOnly
            style={{ position: "absolute", left: "-9999px" }}
          />
        </div>
      </main>
    </motion.div>
  );
};

export default Result;
