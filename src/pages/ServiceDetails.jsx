import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { services } from "../data/ServicesData";
import "./ServiceDetails.css";

function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>

        <Link to="/services">
          <FiArrowLeft />
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="service-details-page">

      {/* HERO */}
      <section className="service-detail-hero">
        <div className="service-detail-container">

          <div className="service-detail-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>

            <Link to="/services">Services</Link>
            <span>›</span>

            <span>{service.title}</span>
          </div>

          <div className="service-detail-heading">

            <div className="service-detail-icon">
              <Icon />
            </div>

            <div>
              <div className="service-detail-label">
                SERVICE {service.number}
              </div>

              <h1>{service.title}</h1>

              <p>{service.description}</p>

              <div className="service-detail-action">

                <a href="#contact" className="discuss-btn">
                  Discuss this project
                  <FiArrowRight />
                </a>

                <div className="starting-price">
                  Starting at <strong>{service.price}</strong>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="service-detail-content">

        <div className="service-detail-container">

          <div className="service-content-grid">

            {/* LEFT */}
            <main className="service-main">

              <div className="service-section">

                <div className="service-section-label">
                  WHAT YOU GET
                </div>

                <h2>What you get</h2>

                <div className="service-benefits">

                  <div className="service-benefit">
                    <FiCheckCircle />
                    <span>Clean and responsive user interface</span>
                  </div>

                  <div className="service-benefit">
                    <FiCheckCircle />
                    <span>Modern and scalable application structure</span>
                  </div>

                  <div className="service-benefit">
                    <FiCheckCircle />
                    <span>API integration and data management</span>
                  </div>

                  <div className="service-benefit">
                    <FiCheckCircle />
                    <span>Authentication and role-based functionality</span>
                  </div>

                  <div className="service-benefit">
                    <FiCheckCircle />
                    <span>Deployment support and project handover</span>
                  </div>

                </div>

              </div>

              <div className="service-section">

                <div className="service-section-label">
                  HOW I WORK
                </div>

                <h2>How I approach the work</h2>

                <p>
                  I start by understanding the project requirements,
                  business goals and user needs. From there, I plan the
                  architecture, build the required functionality and
                  continuously refine the experience.
                </p>

                <p>
                  The goal is to deliver a solution that is responsive,
                  maintainable and ready to grow with your business.
                </p>

              </div>

              <Link to="/services" className="all-services-link">
                <FiArrowLeft />
                All services
              </Link>

            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="service-sidebar">

              <div className="service-info-card">

                <div className="sidebar-label">
                  TECHNOLOGIES
                </div>

                <div className="service-tech-list">

                  {service.technologies.map((technology, index) => (
                    <span key={index}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

              <div className="service-info-card">

                <div className="sidebar-label">
                  SERVICE
                </div>

                <h3>{service.title}</h3>

                <p>
                  A professional development service focused on
                  delivering reliable and practical solutions.
                </p>

              </div>

              <div className="service-info-card">

                <div className="sidebar-label">
                  STARTING PRICE
                </div>

                <strong className="sidebar-price">
                  {service.price}
                </strong>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ServiceDetails;