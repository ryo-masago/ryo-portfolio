import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import LearningLab from "./pages/LearningLab";
import Contact from "./pages/Contact";
import {Routes, Route} from "react-router-dom";

function App() {
  const name = "Ryo Masago"

  return (
    <div className = "app">
      <Header name = {name}/>
      <div className = "main-content">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/journey" element = {<Journey/>}/>
          <Route path = "/projects" element = {<Projects/>}/>
          <Route path = "/skills" element = {<Skills/>}/>
          <Route path = "/learning-lab" element = {<LearningLab/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
      </div>
      <Footer name = {name}/>
    </div>
  );
}

export default App;
