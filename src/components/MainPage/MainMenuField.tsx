import MainMenuCard from "./MainMenuCard";
import styles from "./MainMenuField.module.css";

const MainMenuField = (props: {
  className: string;
  cards: (
    | string[]
    | { word: string; translation: string; image: string; audioSrc: string }[]
  )[];
  menuCardClicked: (arg0: boolean, id: string) => void;
}) => {
  const menuCardClickedHandler = (isClicked: boolean, id: string) => {
    props.menuCardClicked(isClicked, id);
  };

  return (
    <div className={`${props.className} ${styles.field} `}>
      {props.cards[0].map((card, index) => (
        <MainMenuCard
          id={index.toString()}
          key={index.toString()}
          word={card.toString()}
          menuCardClicked={menuCardClickedHandler}
        ></MainMenuCard>
      ))}
    </div>
  );
};

export default MainMenuField;
