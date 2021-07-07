import styles from "./App.module.css";
import Footer from "./components/Footer";
import GamePage from "./components/CategoriesPage/GamePage";
import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";
import cards from "./cards";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [id, setId] = useState("");
  const menuCardClickedHandler = (isClicked: boolean, id: string) => {
    setIsClicked(isClicked);
    setId(id);
  };

  return (
    <div className="App">
      <Header menuClick ={() => setIsClicked(false)}></Header>
      <MainPage
        cards={cards}
        menuCardClicked={menuCardClickedHandler}
        className={!isClicked ? "" : styles.hide}
      ></MainPage>
      <GamePage
        id={id}
        cards={cards}
        className={isClicked ? "" : styles.hide}
      ></GamePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
