import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo-row">

              <div className="footer-logo">
                MA
              </div>

              <h3>
                Muhammad Awais Abid
              </h3>

            </div>

            <p>
              Full-stack developer specialising in React, Next.js, Node.js, and MongoDB, with a focus on AI automation. I turn complex requirements into fast, maintainable products — from multi-tenant SaaS platforms to internal dashboards
            </p>

            <div className="footer-availability">
              <span></span>
              Available for freelance work
            </div>

          </div>


          {/* EXPLORE */}

          <div className="footer-column">

            <span className="footer-heading">
              EXPLORE
            </span>

            <Link to="/work">
              Work
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/hire">
              Hire Me
            </Link>

            <a href="#contact">
              Contact
            </a>

          </div>


          {/* MORE */}

          <div className="footer-column">

            <span className="footer-heading">
              MORE
            </span>

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#experience">
              Experience
            </a>

            <a href="#testimonials">
              Testimonials
            </a>

          </div>


          {/* CONNECT */}

          <div className="footer-column">

            <span className="footer-heading">
              CONNECT
            </span>

            <a
              href="https://github.com/MuhammadAwaisAbidDev"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/muhammadawaisabid/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
              LinkedIn
            </a>

            <a href="#contact">
              <FiMail />
              Email
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Muhammad Awais Abid. All rights reserved.
          </span>

          <span>
            Built with React.js · Islamabad, Pakistan
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;