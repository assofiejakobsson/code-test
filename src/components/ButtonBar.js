import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const ButtonBar = () => {
    return (
      <ButtonToolbar className="custom-btn-toolbar">
          <Link to="/">
          <button className="colord-btn">Home</button>
          </Link>
          <Link to="/About">
          <button>About</button>
          </Link>
          <Link to="/Users">
          <button>Users</button>
          </Link>
          <Link to="/Login">
          <button>Login</button>
          </Link>
      </ButtonToolbar>
    );
  };
  
  export default ButtonBar;