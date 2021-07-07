import styles from "./MainMenuCard.module.css";

const MainMenuCard = (props: {
  id: string;
  key: string;
  word: string;
  menuCardClicked: (arg0: boolean, id: string) => void;
}) => {
  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    console.log(`Нажал на ${event.currentTarget.id}`);
    props.menuCardClicked(true, event.currentTarget.id);
  };

  return (
    <div id={props.id} className={styles.card} onClick={clickHandler}>
      <h2>{props.word}</h2>
      <p>Картинка</p>
    </div>
  );
};

export default MainMenuCard;
