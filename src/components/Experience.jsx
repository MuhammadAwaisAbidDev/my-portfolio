import React from "react";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

import "./Experience.css";

const ExperienceItem = ({
  title,
  company,
  location,
  duration,
  description,
  points,
  technologies,
}) => {
  return (
    <div className="experience-item">

      <div className="experience-dot"></div>

      <div className="experience-content">

        <div className="experience-top">

          <h3>{title}</h3>

          <span className="experience-duration">
            {duration}
          </span>

        </div>

        <div className="experience-company">

          <span className="company-name">
            {company}
          </span>

          {company !== "Freelance" && (
            <FaExternalLinkAlt className="company-link" />
          )}

          <span className="separator">•</span>

          <span className="job-type">
            {company === "Freelance" ? "Freelance" : "Full-time"}
          </span>

          <span className="separator">•</span>

          <span className="location">
            <FaMapMarkerAlt />
            {location}
          </span>

        </div>

        <p className="experience-description">
          {description}
        </p>

        <ul className="experience-points">

          {points.map((point, index) => (
            <li key={index}>
              {point}
            </li>
          ))}

        </ul>

        <div className="experience-tags">

          {technologies.map((technology, index) => (
            <span key={index}>
              {technology}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
};


function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-container">

        {/* ==============================
            SECTION HEADING
        ============================== */}

        <div className="experience-heading">

          <span className="experience-label">
            EXPERIENCE
          </span>

          <h2>
            Where I've worked
          </h2>

          <div className="experience-heading-line"></div>

          <p>
            Roles, responsibilities, and what I shipped.
          </p>

        </div>


        {/* ==============================
            EXPERIENCE GRID
        ============================== */}

        <div className="experience-grid">


          {/* ============================
              WORK
          ============================ */}

          <div className="work-column">

            <div className="column-title">
              <FaBriefcase />
              <span>WORK</span>
            </div>


            <div className="experience-timeline">


              {/* ============================
                  EXPERIENCE 1
              ============================ */}

              <ExperienceItem
                title="Frontend Web Developer"
                company="SYNEXUS TECHNOLOGIES"
                location="Remote"
                duration="2026 — Present"
                description="Building and maintaining modern web applications and user interfaces with a focus on performance, usability, and clean architecture."
                points={[
                  "Built reusable UI components using React, Next.js, and TypeScript.",
                  "Managed application state and complex user workflows with Redux Toolkit.",
                  "Integrated REST APIs and backend services into responsive frontend applications.",
                  "Worked with MySQL, PostgreSQL, MongoDB, Mongoose, and modern JavaScript technologies.",
                ]}
                technologies={[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "FastAPI",
                  "Redux Toolkit",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                  "Tailwind CSS",
                ]}
              />


              {/* ============================
                  EXPERIENCE 2
              ============================ */}

              <ExperienceItem
                title="MERN Developer"
                company="Alestra Solutions"
                location="Islamabad, Pakistan"
                duration="2024 — 2026"
                description="Developed and maintained modern full-stack web applications using the MERN stack, with a focus on responsive interfaces, backend APIs, and database integration."
                points={[
                  "Built responsive and user-friendly web interfaces using React.js.",
                  "Developed backend APIs and server-side functionality using Node.js and Express.js.",
                  "Worked with MongoDB for database design, data management, and application integration.",
                  "Integrated frontend and backend services to build complete full-stack web applications.",
                ]}
                technologies={[
                  "MongoDB",
                  "Express.js",
                  "React",
                  "Node.js",
                  "REST APIs",
                  "JavaScript",
                ]}
              />


              {/* ============================
                  EXPERIENCE 3
              ============================ */}

              <ExperienceItem
                title="Full Stack Developer"
                company="Freelance"
                location="Remote"
                duration="2023 — Present"
                description="Designing and developing web applications for clients including dashboards, business websites, and full-stack applications."
                points={[
                  "Developed responsive websites and web applications from concept to deployment.",
                  "Built frontend interfaces with React, JavaScript, and modern CSS.",
                  "Developed backend functionality using Node.js and Express.js.",
                  "Worked with databases, APIs, authentication, and deployment workflows.",
                ]}
                technologies={[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                ]}
              />

            </div>

          </div>


          {/* ============================
              EDUCATION
          ============================ */}

        <div className="education-column">
  <div className="column-title">
    <FaGraduationCap />
    <span>EDUCATION</span>
  </div>

  {/* Education 1 */}


  
  <div className="education-item">
    <div className="education-dot"></div>

    <div className="education-content">
      <div className="education-top">
        <h3>Bachelor of Science, Software Engineering</h3>
        <span>2025 — 2029</span>
      </div>

      <h4>National University of Modern Languages (NUML)</h4>

      <p className="education-location">
        Islamabad, Pakistan
      </p>



      <p className="education-description">
        Coursework across data structures, algorithms, databases,
        software architecture, web engineering, and software development.
      </p>
    </div>
  </div>




  {/* Education 2 */}
<div className="education-item">
    <div className="education-dot"></div>
<br></br>
    <div className="education-content">
      <div className="education-top">
        
        <h3>Diploma of Information Communication Technology (ICT)</h3>
        <span>2021 — 2024</span>
      </div>

      <h4>Construction Technology Training Institute (CTTI)</h4>

      <p className="education-location">
        Islamabad, Pakistan
      </p>

      <p className="education-description">
        Studied information and communication technology with practical
        experience in computer applications, programming, networking,
        and modern IT technologies.
      </p>
    </div>
  </div>
</div>  
</div>
      </div>

    </section>
  );
}

export default Experience;