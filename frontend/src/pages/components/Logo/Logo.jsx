import "./logo.css";
import logo from "../../../assets/logo.png";

function Logo() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
