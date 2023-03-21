import { Link } from "react-router-dom";
import { useState } from "react";
import { handleSubmitCreate } from "./functions/submitHandlers";
import { handleSubmitLogin } from "./functions/submitHandlers";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import "./logInCreateBox.css";

function LogInCreateBox({ userName, password, title, titleTwo, link }) {
  /* ----Input-------- */
  const [inputName, setInputUserName] = useState(userName);
  const [inputPassword, setInputPassword] = useState(password);

  const handleSubmit = (event) => {
    if (titleTwo === "Login") {
      handleSubmitLogin(inputName, inputPassword, event);
    } else {
      handleSubmitCreate(inputName, inputPassword, event);
    }
  };

  return (
    <div className="BoxContainer">
      <h1>{titleTwo}</h1>
      <form onSubmit={handleSubmit}>
        <h5>Username</h5>
        <Input
          type="username"
          onChange={(event) => {
            setInputUserName(event.target.value);
          }}
        />
        <h5>Password</h5>
        <Input
          type="password"
          onChange={(event) => {
            setInputPassword(event.target.value);
          }}
        />
        <Button title={titleTwo} type="submit" />
      </form>
      <Link to={link}>
        <Button title={title} style={{ backgroundColor: "#576B82" }} />
      </Link>
    </div>
  );
}

export default LogInCreateBox;
