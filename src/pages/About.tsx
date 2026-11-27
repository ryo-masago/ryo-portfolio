import "./About.css";
import {Link} from "react-router-dom";
import aboutImage from "../assets/about-image.png";
import worldMap from "../assets/about-world-map.png";

function About() {
  return (
    <div className = "about">
      <div className = "page-heading">
        <h1>About Me</h1>
        <p>Get to know me and my background.</p>
      </div>
      <div className = "about-intro">
        <div className = "about-content">
          <h2>From working with people to building for people.</h2>
          <p>
            I'm a software development graduate student at Boston University
            Metropolitan College with a professional background in IT and SaaS recruitment.
          </p>
          <p>
            After spending four years working in recruitment in Japan and Singapore,
            I decided to pursue a career in software development.
          </p>
          <Link to = "/journey" className = "primary-btn">Explore My Journey</Link>
        </div>
        <div className = "about-image-container">
          <img className = "about-image" src = {aboutImage} alt = "Ryo Profile"/>
        </div>
      </div>
      <div className = "about-background">
        <h2>My Background</h2>
        <p>The places and experiences that shaped who I am today.</p>
        <img className = "world-map" src = {worldMap} alt = "World Map"/>
        <div className = "background-content">
          <p>
            I was born in Japan and grew up in Texas before going to borading school
            in Switzerland. I moved to Boston, where I attended Northeastern University.
            After spending two years in Singapore, I returned to Japan, where I'm currently based.
          </p>
        </div>
        <div className = "background-languages">
          <span>English</span>
          <span>Japanese</span>
        </div>
      </div>
    </div>
  );
}

export default About;
