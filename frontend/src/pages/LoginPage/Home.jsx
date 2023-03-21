import Header from "../components/Logo/Logo";
import LogInCreateBox from "../components/LogIn/CreateBox/LogInCreateBox";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Header />{" "}
      <LogInCreateBox
        title="Create Account"
        titleTwo="Login"
        link="/createUser"
      />
    </div>
  );
}

export default Home;
