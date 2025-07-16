import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className="navbar">
        <div id="logo">
            <img src={LOGO_URL} alt="Food Express Logo" />
        </div>
        <div id="menus">
            <a href="#" style={{textDecoration: "none", color: "Black"}}>Home</a>
            <a href="#" style={{textDecoration: "none", color: "Black"}}>About</a>
            <a href="#" style={{textDecoration: "none", color: "Black"}}>Profile</a>
            <a href="#" style={{textDecoration: "none", color: "Black"}}>Contact us</a>
        </div>
    </div>
)

export default Header;