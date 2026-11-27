import {Project} from "../project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className = "project-card">
      <div className = "project-card-content">
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
        <div className = "project-technologies">
          {props.project.technologies.map((technology) => (
            <span className = "technology-type">{technology}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
