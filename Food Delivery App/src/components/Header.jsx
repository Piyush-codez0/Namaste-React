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
        <a href="#" style={{ textDecoration: "none", color: "Black" }}>Home</a>
        <a href="#" style={{ textDecoration: "none", color: "Black" }}>About</a>
        <a href="#" style={{ textDecoration: "none", color: "Black" }}>Profile</a>
        <a href="#" style={{ textDecoration: "none", color: "Black" }}>Contact us</a>

        {/* Toggle Login/Logout based on state */}
        <button className="login-btn" onClick={loginHandler}>
            {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
