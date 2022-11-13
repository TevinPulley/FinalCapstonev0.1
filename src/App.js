import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import CreateProfile from "./Pages/CreateProfile";
import ErrorPage from "./Pages/ErrorPage";
import mainlogo from "./images/mainlogo.png";

function App() {
  return (
    <Router>
      <div>
        <Link className="title" to="/">
          <img alt="App-logo" src={mainlogo} className="App-logo" />
        </Link>
        <Link className="sign-up-shortcut" to="/profile">
          {" "}
          Login/Sign Up{" "}
        </Link>
      </div>

      <nav>
        <Link to="/"> Home </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div className="foooter">
        <p>foooter</p>
      </div>
    </Router>
  );
}

export default App;
