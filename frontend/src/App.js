import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/LoginPage/Home";
import CreateUser from "./pages/CreateUser/CreateUser";
import LoggedInPage from "./pages/LoggedInPage/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/LoggedInPage" element={<LoggedInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
