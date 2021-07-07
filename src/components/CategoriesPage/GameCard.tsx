import styles from "./GameCard.module.css";
import { useState } from "react";

const GameCard = (props: {
  word: string;
  translation: string;
  audioSrc: string;
  image: string;
}) => {
  const [isFlipped, setFlipped] = useState(false);
  const playSound = () => {
    const audio = new Audio(props.audioSrc);
    audio.play();
    console.log(props.image);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={() => (isFlipped ? setFlipped(false) : setFlipped(true))}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.front} style={{ position: "relative" }}>
        <h2>{props.word}</h2>
        <div className={styles.soundBtn} onClick={playSound}>
          <img style={{ width: "20px" }} src="/audio.svg" alt="audio" />
        </div>
      </div>
      <div className={styles.back}>
        <h2>{props.translation}</h2>
      </div>
    </div>
  );
};

export default GameCard;
