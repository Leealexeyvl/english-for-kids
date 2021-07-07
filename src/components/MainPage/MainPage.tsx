import MainMenuField from "./MainMenuField";

const MainPage = (props: {
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
    <MainMenuField
      cards={props.cards}
      menuCardClicked={menuCardClickedHandler}
      className={props.className}
    ></MainMenuField>
  );
};

export default MainPage;
