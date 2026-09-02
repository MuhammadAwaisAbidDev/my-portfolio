import React from "react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { projects as projectsData } from "../data/ProjectsData";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const featuredProjects = projectsData.slice(0, 6);

  const openProject = (id) => {
    navigate(`/work/${id}`);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">
          <span className="projects-label">MY WORK</span>

          <h2>
            Selected <span>Projects</span>
          </h2>

          <p>
            A selection of projects I've worked on, from web applications
            and business platforms to desktop and mobile solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.id}>

              {/* Project Preview */}
              <div className="project-preview">

                <div className="project-preview-content">
                  <span className="project-short-title">
                    {project.shortTitle}
                  </span>

                  <span className="project-preview-title">
                    {project.title}
                  </span>
                </div>

                <span className="project-status">
                  <span className="status-dot"></span>
                  {project.status}
                </span>
              </div>

              {/* Project Content */}
              <div className="project-card-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tags">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}

                  {project.technologies.length > 5 && (
                    <span>
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="project-card-footer">

                  <button
                    className="case-study-btn"
                    onClick={() => openProject(project.id)}
                  >
                    Case study
                    <FaArrowRight />
                  </button>

                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="live-project-btn"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="projects-view-all">
          <button
            onClick={() => navigate("/work")}
            className="view-all-projects"
          >
            View all {projectsData.length} projects
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;