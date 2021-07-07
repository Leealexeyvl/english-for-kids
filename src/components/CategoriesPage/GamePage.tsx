import GameField from "./GameField";

const GamePage = (props: {
  id: string;
  className: string;
  cards: (
    | string[]
    | { word: string; translation: string; image: string; audioSrc: string }[]
  )[];
}) => {
  return (
    <div className={`${props.className}`}>
      <GameField id={props.id} cards={props.cards}></GameField>
    </div>
  );
};

export default GamePage;
