import {Link} from "react-router-dom";
import "./Home.css";
import homeImage from "../assets/home-image.png";
import projectData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import {Project} from "../project";

function Home() {
  return (
    <div className = "home">
      <section className = "home-hero">
        <div className = "home-hero-content">
          <div className = "page-heading">
            <h1>Hi, I'm <span className = "home-name">Ryo</span>!</h1>
            <p>
              I'm a software development graduate student at Boston University Metropolitan College
              with a background in IT and SaaS recruitment.
            </p>
          </div>
          <div className = "home-actions">
            <Link to = "/projects" className = "primary-btn">View My Projects →</Link>
            <Link to = "/about" className = "secondary-btn">About Me</Link>
          </div>
        </div>
        <div className = "home-image">
          <img className = "home-code-editor" src = {homeImage} alt = "Code Editor"/>
        </div>
      </section>
    </div>
  );
}

export default Home;
