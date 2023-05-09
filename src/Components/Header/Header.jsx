import "./Header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
const Header = () => {
  const {userr,logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((result) => {
     
      })
      .catch((error) => {
    console.error(error);
      });
  };
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>

      <div>
        <Link to="/">shop</Link>
        <Link to="/orders">order</Link>
        <Link to="/inventory">inventory</Link>
        <Link to="signup">sign up</Link>
        <Link to="/login">login</Link>
        <button onClick={handleLogout}>logout</button>
        {userr && <p className="">{userr.email}</p>} 
      </div>
    </nav>
  );
};

export default Header;
