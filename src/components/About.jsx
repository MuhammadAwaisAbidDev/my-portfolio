import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      {/* Heading */}
      <div className="about-heading">
        <span>ABOUT</span>
        <h2>About me</h2>
        <div className="about-line"></div>
        <p>
          Background, experience, and how I approach building software.
        </p>
      </div>

      {/* Content */}
      <div className="about-container">

        {/* Left */}
        <div className="about-text">

          <p>
            I'm a Senior full-stack developer based in Islamabad, Pakistan,
            specialising in React, Next.js, Node.js, and MongoDB. I build
            and ship production systems that businesses depend on — from
            the data model up to the interface.
          </p>

          <p>
            At Synexus Technologies I develop internal enterprise tooling
            across the stack: React and Redux on the frontend, Next.js API
            routes and MongoDB schemas on the backend. I care about clean
            architecture, maintainable code, and systems that scale
            predictably as teams grow.
          </p>

          <p>
            Alongside that I design AI-driven automations — integrating
            language models and workflow tooling to remove repetitive
            manual work — and take on selected freelance engagements:
            SaaS MVPs, internal dashboards, marketing sites, and
            third-party API integrations.
          </p>

          <div className="about-buttons">
            <a href="#contact" className="about-primary">
              Work with me
            </a>

            <a href="/resume.pdf" className="about-resume">
              👁 Resume
            </a>
          </div>

        </div>

        {/* Right Cards */}
        <div className="about-cards">

          <div className="about-card">
            <div className="about-icon">🎓</div>
            <div>
              <span>EDUCATION</span>
              <h3>BS Software Engineering — NUML Islamabad</h3>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">💼</div>
            <div>
              <span>EXPERIENCE</span>
              <h3>3+ years shipping production software</h3>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">💡</div>
            <div>
              <span>FOCUS</span>
              <h3>Clean architecture & Building the Web with Passion</h3>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">🚀</div>
            <div>
              <span>GOAL</span>
              <h3>Scalable products with measurable impact</h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;