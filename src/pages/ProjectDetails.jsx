import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiExternalLink,
} from "react-icons/fi";

import { projects } from "../data/ProjectsData";
import "./ProjectDetails.css";

function ProjectDetails() {

  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );


  /* ================= NOT FOUND ================= */

  if (!project) {

    return (
      <div className="project-not-found">

        <h1>Project Not Found</h1>

        <Link to="/work">
          <FiArrowLeft />
          Back to all projects
        </Link>

      </div>
    );

  }


  return (

    <div className="project-details-page">


      {/* ================= HERO ================= */}

      <section className="project-detail-hero">

        <div className="project-detail-container">

          {/* BREADCRUMB */}

          <div className="project-breadcrumb">

            <Link to="/home">
              Home
            </Link>

            <span>›</span>

            <Link to="/work">
              Work
            </Link>

            <span>›</span>

            <span>
              {project.title}
            </span>

          </div>


          {/* CATEGORY */}

          <div className="project-category">
            {project.category}
          </div>


          {/* TITLE */}

          <h1 className="project-detail-title">
            {project.title}
          </h1>


          {/* DESCRIPTION */}

          <p className="project-detail-description">
            {project.description}
          </p>


          {/* LIVE BUTTON */}

          {project.liveUrl &&
            project.liveUrl !== "#" && (

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="visit-project-btn"
              >
                Visit live site
                <FiExternalLink />
              </a>

            )}

        </div>

      </section>



      {/* ================= MAIN CONTENT ================= */}

      <section className="project-content-section">

        <div className="project-content-container">


          {/* ================= LEFT ================= */}

          <div className="project-main-content">


            {/* PROJECT IMAGES */}

            {project.images &&
              project.images.map((image, index) => (

                <div
                  className="project-image-block"
                  key={index}
                >

                  <img
                    src={image.src}
                    alt={image.alt || project.title}
                  />

                  {image.caption && (

                    <p className="project-image-caption">
                      {image.caption}
                    </p>

                  )}

                </div>

              ))}



            {/* ================= PROBLEM ================= */}

            <div className="detail-text-section">

              <div className="detail-label">
                THE PROBLEM
              </div>

              <h2>
                The Problem
              </h2>

              <p>
                {project.problem}
              </p>

            </div>



            {/* ================= SOLUTION ================= */}

            <div className="detail-text-section">

              <div className="detail-label">
                WHAT I BUILT
              </div>

              <h2>
                What I Built
              </h2>

              <p>
                {project.solution}
              </p>

            </div>



            {/* ================= SCALE ================= */}

            <div className="detail-text-section">

              <div className="detail-label">
                SCALE OF THE BUILD
              </div>

              <h2>
                Scale of the build
              </h2>

              <p>
                {project.scale}
              </p>

            </div>



            {/* ================= FEATURES ================= */}

            {project.features &&
              project.features.length > 0 && (

                <div className="detail-text-section">

                  <div className="detail-label">
                    KEY FEATURES
                  </div>

                  <h2>
                    What the product includes
                  </h2>

                  <div className="feature-list">

                    {project.features.map(
                      (feature, index) => (

                        <div
                          className="feature-item"
                          key={index}
                        >

                          <span>✓</span>

                          <p>
                            {feature}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )}



            {/* ================= OUTCOMES ================= */}

            <div className="detail-text-section">

              <div className="detail-label">
                OUTCOMES
              </div>

              <h2>
                Outcomes
              </h2>

              <p>
                {project.outcomes}
              </p>

            </div>



            {/* ================= BACK ================= */}

            <Link
              to="/work"
              className="all-projects-link"
            >

              <FiArrowLeft />

              All projects

            </Link>

          </div>



          {/* ================= RIGHT INFO ================= */}

          <aside className="project-info-card">


            <div className="info-item">

              <span className="info-label">
                ROLE
              </span>

              <strong>
                {project.role}
              </strong>

            </div>


            <div className="info-item">

              <span className="info-label">
                CLIENT
              </span>

              <strong>
                {project.client}
              </strong>

            </div>


            <div className="info-item">

              <span className="info-label">
                YEAR
              </span>

              <strong>
                {project.year}
              </strong>

            </div>


            <div className="info-item">

              <span className="info-label">
                STATUS
              </span>

              <strong>
                {project.status}
              </strong>

            </div>


            <div className="info-divider"></div>


            <div className="info-item">

              <span className="info-label">
                TECHNOLOGIES & TOOLS
              </span>

              <div className="technology-list">

                {project.technologies.map(
                  (technology) => (

                    <span
                      key={technology}
                      className="technology-tag"
                    >
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>

          </aside>

        </div>

      </section>



      {/* ================= MORE WORK ================= */}

      <section className="more-work-section">

        <div className="more-work-container">

          <div className="detail-label">
            MORE WORK
          </div>

          <h2>
            More work
          </h2>


          <div className="more-work-grid">

            {projects
              .filter(
                (item) => item.slug !== project.slug
              )
              .slice(0, 3)
              .map((item) => (

                <Link
                  key={item.slug}
                  to={`/work/${item.slug}`}
                  className="more-work-card"
                >

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </Link>

              ))}

          </div>

        </div>

      </section>

    </div>

  );

}

export default ProjectDetails;