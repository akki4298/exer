import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
