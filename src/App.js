import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
// used for ReactBootstrap.
// import CollapsibleExample from "./Components/Nav.js";
// import { Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <Link className="title" to="/">
          {" "}
          PageTitle{" "}
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <p>foooter</p>
    </Router>
  );
}

export default App;
