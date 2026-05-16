import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/">
        Home
      </Link>
      <Link className="navbar__link" to="/Quests">
        Quest Board
      </Link>
      <Link className="navbar__link" to="/Stats">
        Stats
      </Link>
      <Link className="navbar__link" to="/DevLogs">
        Dev Logs
      </Link>
    </nav>
  );
}

export default NavBar;
