import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="#" alt="Logo" />
      </div>
      <div className="header__navbar">
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
