import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/homepage";
import Signin from "./components/signin";
import "./App.css";
import "./components/signin.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}
export default App;
