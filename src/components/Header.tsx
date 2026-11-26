import {Link, NavLink} from "react-router-dom";

interface HeaderProps {
  name: string;
}

function Header(props: HeaderProps) {
  return (
    <header className = "portfolio-header">
      <Link to = "/" className = "portfolio-name">{props.name}</Link>
      <nav className = "navbar">
          <ul className = "navbar-options">
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/about">About</NavLink></li>
            <li><NavLink to = "/journey">My Journey</NavLink></li>
            <li><NavLink to = "/projects">My Projects</NavLink></li>
            <li><NavLink to = "/skills">Skills</NavLink></li>
            <li><NavLink to = "/learning-lab">Learning Lab</NavLink></li>
            <li><NavLink to = "/contact">Contact</NavLink></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
