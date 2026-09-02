import React, { useEffect, useState } from "react";
import "./Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEye
} from "react-icons/fa";

function Hero() {
  const roles = [
    "Freelance Web Developer",
    "Senior Full Stack Web Developer",
    "React & Next.js Engineer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <>
      <section className="hero" id="home">

        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-content">

            <p className="hero-intro">
              Hello, I'm
            </p>

            <h1 className="hero-name">
              Muhammad Awais Abid
            </h1>

            {/* ANIMATED ROLE */}
            <div className="hero-role">
              {displayText}
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-description">
              Full-stack developer specializing in React, Next.js, Node.js
              and MongoDB. I build modern, responsive and high-performance
              web applications with clean architecture and professional
              user experiences.
            </p>

            {/* MAIN BUTTONS */}
            <div className="hero-buttons">

              <a href="#contact" className="btn-primary">
                Get in touch
              </a>

              <a href="/work" className="btn-secondary">
                View my work
              </a>

            </div>

      <div className="hero-socials">

  <a
    href="https://github.com/MuhammadAwaisAbidDev"
    target="_blank"
    rel="noreferrer"
    className="social-btn"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/muhammadawaisabid/"
    target="_blank"
    rel="noreferrer"
    className="social-btn"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="/#resume.pdf"
    className="social-btn resume-btn"
  >
    <FaEye />
    <span>Resume</span>
  </a>

</div>
</div>

          {/* RIGHT IMAGE */}
          <div className="hero-image-wrapper">

            <div className="glow glow-blue"></div>
            <div className="glow glow-orange"></div>
            <div className="glow glow-cyan"></div>

            <div className="hero-image-circle">

              <img
                src="/assets/1.jpeg"
                alt="Muhammad Awais Abid"
              />

            </div>

            <div className="code-badge">
              &lt;/&gt;
            </div>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="stats-section">

        <div className="stat-box">
          <strong>7+</strong>
          <span>Projects shipped</span>
        </div>

        <div className="stat-box">
          <strong>3+</strong>
          <span>Years of experience</span>
        </div>

        <div className="stat-box">
          <strong>12+</strong>
          <span>Technologies used</span>
        </div>

        <div className="stat-box">
          <strong>12h</strong>
          <span>Average response time</span>
        </div>

      </section>
    </>
  );
}

export default Hero;