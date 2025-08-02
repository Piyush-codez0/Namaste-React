import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useConnectionStatus from "../utils/useConnectionStatus";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    // Toggle function
    const loginHandler = () => {
        setIsLogin(!isLogin);
    };

    const connectionStatus = useConnectionStatus();

    if (connectionStatus == false)
        return (
            <h1>
                Looks like you're not connected to internet. Please check your
                internet connection.
            </h1>
        );

    return (
        <div className="navbar">
            <div id="logo">
                <img src={LOGO_URL} alt="Food Express Logo" />
            </div>

            <div id="menus">
                <p>Connection status: {connectionStatus ? "🟢" : "🔴"}</p>
                <Link to={"/grocery"}> Grocery</Link>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact us</Link>

                {/* Toggle Login/Logout based on state */}
                <button className="login-btn" onClick={loginHandler}>
                    {isLogin ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Header;
