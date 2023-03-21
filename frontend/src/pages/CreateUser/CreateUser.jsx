import LogInCreateBox from "../components/LogIn/CreateBox/LogInCreateBox";
import Header from "../components/Logo/Logo";
import "./createUser.css";

function CreateUser() {
  return (
    <div className="home">
      <Header /> <LogInCreateBox title="back" titleTwo="Create User" link="/" />
    </div>
  );
}

export default CreateUser;
