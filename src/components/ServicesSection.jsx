import React from "react";
import {
  FaGlobe,
  FaMagic,
  FaPaintBrush,
  FaThLarge,
  FaCode,
  FaBolt,
  FaLightbulb,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./ServicesSection.css";

const services = [
  {
    number: "01",
    icon: <FaGlobe />,
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web applications built with modern frontend, backend, database, authentication, and business logic.",
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB"],
    price: "$900",
    slug: "full-stack-web-applications",
  },
 
  {
    number: "02",
    icon: <FaPaintBrush />,
    title: "Frontend Development",
    description:
      "Modern, responsive and user-friendly interfaces built from designs or developed from scratch.",
    technologies: ["React.js", "Next.js", "JavaScript", "Tailwind CSS"],
    price: "$600",
    slug: "frontend-development",
  },
  {
    number: "03",
    icon: <FaThLarge />,
    title: "Admin Panels & Dashboards",
    description:
      "Professional dashboards with CRUD operations, roles, analytics, tables, charts and management features.",
    technologies: ["React.js", "MongoDB", "Charts", "RBAC"],
    price: "$800",
    slug: "admin-panels-dashboards",
  },
  {
    number: "04",
    icon: <FaCode />,
    title: "API Development & Integration",
    description:
      "Secure and well-structured REST APIs designed for modern web applications and third-party integrations.",
    technologies: ["Node.js", "Express", "FastAPI", "REST API"],
    price: "$500",
    slug: "api-development-integration",
  },

  {
    number: "05",
    icon: <FaLightbulb />,
    title: "Consulting & Code Review",
    description:
      "Technical guidance, architecture review, debugging and practical recommendations for existing projects.",
    technologies: ["Architecture", "Code Review", "Mentoring"],
    price: "$200",
    slug: "consulting-code-review",
  },
];

function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="home-services-section" id="services">
      <div className="home-services-container">

        {/* Heading */}
        <div className="services-heading">
          <div className="services-label">SERVICES</div>

          <h2>How I can help</h2>

          <div className="services-heading-line"></div>

          <p>
            Focused engagements, scoped clearly, delivered on time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-home-grid">
          {services.map((service) => (
            <div className="service-home-card" key={service.number}>

              <div className="service-card-top">
                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-number">
                  {service.number}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-technologies">
                {service.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="service-card-bottom">

                <div className="service-price">
                  <span>From</span>
                  <strong>{service.price}</strong>
                </div>

                <button
                  onClick={() =>
                    navigate(`/services/${service.slug}`)
                  }
                  className="service-details-btn"
                >
                  Details
                  <FiArrowRight />
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* See All */}
        <div className="services-see-all">
          <button
            onClick={() => navigate("/services")}
            className="see-all-services-btn"
          >
            See all services
            <FiArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;