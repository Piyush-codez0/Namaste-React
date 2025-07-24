import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react"; 

const Header = () => {

    const [isLogin, setIsLogin] = useState(false);

  // Toggle function
  const loginHandler = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div className="navbar">
      <div id="logo">
        <img src={LOGO_URL} alt="Food Express Logo" />
      </div>

      <div id="menus">
        <Link to={"/"} style={{ textDecoration: "none", color: "Black" }}>Home</ Link >
        <Link to={"/about"} style={{ textDecoration: "none", color: "Black" }}>About</ Link >
        <Link to={"/contact"} style={{ textDecoration: "none", color: "Black" }}>Contact us</ Link >

        {/* Toggle Login/Logout based on state */}
        <button className="login-btn" onClick={loginHandler}>
            {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
