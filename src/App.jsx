import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Favorite from "./pages/favorite";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite" activeClassName="active">
              Favorite
            </NavLink>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
