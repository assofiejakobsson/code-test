import Logo from "./";
import {Link} from "react-router-dom";

const Header = () => {
    
  return (
      <nav>
        <ul>
          <li>
          <Link className="links" to="/">
          Home
          </Link>
          </li>
          <li>
          <Link className="links" to="/About">
          About
          </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Header;

  