import GameCard from "./GameCard";
import styles from "./GameField.module.css";

const GameField = (props: {
  id: string;
  cards: (
    | { word: string; translation: string; image: string; audioSrc: string }[]
    | string[]
  )[];
}) => {
  return (
    <div className={styles.field}>
      {props.cards[+props.id + 1].map((card) => (
        <GameCard
          image={typeof card === "object" ? card.image : ""}
          audioSrc={typeof card === "object" ? card.audioSrc : ""}
          key={typeof card === "object" ? card.word : ""}
          word={typeof card === "object" ? card.word : ""}
          translation={typeof card === "object" ? card.translation : ""}
        ></GameCard>
      ))}
    </div>
  );
};

export default GameField;
