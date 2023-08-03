import styles from "./Error.module.css";
import BackgroundImage from "../../../assets/background.png";

const Error = () => {
    return (
        <div className={styles.Container}>
            <div
                className={styles.backGroundImg}
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            />
            <h1 className={styles.Error}>404에러 페이지입니다.</h1>
        </div>)
}

export default Error;