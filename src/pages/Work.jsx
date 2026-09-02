import React from "react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { projects as projectsData } from "../data/ProjectsData";
import "./Work.css";
import ProjectCTA from "../components/ProjectCTA";
import Footer from "../components/Footer";

const Work = () => {
  const navigate = useNavigate();

  return (
    <main className="work-page">

      {/* =========================
          WORK HEADER
      ========================== */}
      <section className="work-header">
        <div className="work-container">

          {/* Breadcrumb */}
          <div className="work-breadcrumb">
            <button onClick={() => navigate("/")}>
              Home
            </button>

            <span>›</span>

            <span>Work</span>
          </div>

          <div className="work-heading">
            <span className="work-heading-label">
              WORK
            </span>

            <h1>Projects</h1>

            <p>
              A few things I've designed, built, and shipped
              to production.
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          PROJECTS
      ========================== */}
      <section className="work-projects">
        <div className="work-container">

          <div className="work-grid">

            {projectsData.map((project, index) => (

              <article
                className="work-project-card"
                key={project.slug}
              >

                {/* =========================
                    PROJECT PREVIEW
                    NO IMAGE HERE
                ========================== */}
                <div
                  className={`work-project-image project-color-${index + 1}`}
                >

                  {/* Featured badge */}
                  {index < 3 && (
                    <span className="project-featured">
                      Featured
                    </span>
                  )}

                  {/* Status */}
                  <div className="work-project-status">
                    <span></span>
                    {project.status}
                  </div>

                  {/* Project Short Logo */}
                  <div className="project-preview-content">

                    <div className="project-preview-short">
                      {project.shortTitle}
                    </div>

                    <div className="project-preview-name">
                      {project.title}
                    </div>

                  </div>

                </div>


                {/* =========================
                    PROJECT INFORMATION
                ========================== */}
                <div className="work-project-content">

                  <span className="work-project-category">
                    {project.category}
                  </span>

                  <h2>
                    {project.title}
                  </h2>

                  <p>
                    {project.description}
                  </p>


                  {/* Technologies */}
                  <div className="work-project-technologies">

                    {project.technologies
                      .slice(0, 5)
                      .map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}

                    {project.technologies.length > 5 && (
                      <span>
                        +{project.technologies.length - 5}
                      </span>
                    )}

                  </div>


                  {/* Bottom */}
                  <div className="work-project-bottom">

                    <button
                      className="work-case-study"
                      onClick={() =>
                        navigate(`/work/${project.slug}`)
                      }
                    >
                      Case study
                      <FaArrowRight />
                    </button>


                    {project.liveUrl &&
                      project.liveUrl !== "#" && (

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="work-external-link"
                          aria-label={`Visit ${project.title}`}
                        >
                          <FaExternalLinkAlt />
                        </a>

                      )}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>
<ProjectCTA />
<Footer />
    </main>
  );
};

export default Work;