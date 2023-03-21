import "./home.css";
import Navbar from "./components/Navbar/Navbar";
import AddBox from "./components/AddBox/AddBox";
import UserDataBox from "./components/UserDataBox/UserDataBox";
import Logo from "../components/Logo/Logo";
import Chart from "./components/Chart/Chart";
import BudgetBox from "./components/BudgetBox/BudgetBox";

function Home() {
  return (
    <>
      {" "}
      <div className="LoggedInContainer">
        <div className="headerLoggedIn">
          <Logo />
          <div className="navbar">
            <Navbar />
          </div>
        </div>{" "}
        <div className="budgetBox">
          {" "}
          <BudgetBox />
        </div>
        <div className="boxContainer">
          <UserDataBox />
          <AddBox />
          <Chart />
        </div>
      </div>
    </>
  );
}

export default Home;
