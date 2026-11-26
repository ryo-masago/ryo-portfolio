import {Link} from "react-router-dom";

function Home() {
  return (
    <section className = "home">
      <div className = "page-heading">
        <h1>My Developer Portfolio</h1>
        <p>From recruitment to software development.</p>
      </div>
      <div>
        <Link to = "/projects" className = "primary-btn">View My Projects →</Link>
        <Link to = "/about" className = "secondary-btn">About Me</Link>
      </div>
      <div className = "container">
        <div className = "card">
          <h2>Dishback</h2>
          <p>A personal meal tracking application.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
