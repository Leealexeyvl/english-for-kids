import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderPlayLearnToggle from "./HeaderPlayLearnToggle";

const Header = (props: { menuClick: () => void }) => {
  const menuHandler = () => {
    props.menuClick();
  };
  return (
    <div>
      <h2>Это заголовок!</h2>
      <HeaderBurgerMenu onClick={menuHandler}></HeaderBurgerMenu>
      <HeaderPlayLearnToggle></HeaderPlayLearnToggle>
    </div>
  );
};

export default Header;
