import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import RecipeCreator from "./components/RecipeCreator/RecipeCreator";

function App() {
  let { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <Nav />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipecreator" element={<RecipeCreator />} />
      </Routes>
    </div>
  );
}

export default App;
