import React from "react";
import {
  FiClock,
  FiRefreshCw,
  FiCheck,
} from "react-icons/fi";
import "./HireMeSection.css";

const hireOptions = [
  {
    title: "Hourly",
    subtitle: "For ongoing or open-ended work",
    price: "$12",
    unit: "/hour",
    description:
      "Best when the scope is still moving, or you need a developer on call.",
    features: [
      "Billed weekly, in arrears",
      "Minimum 8 hours per week",
      "Async updates in your channel of choice",
      "Cancel any time, no notice period",
    ],
    details: [
      "Start within 3 days",
      "Unlimited within retained hours",
    ],
    button: "Book a call",
  },

  {
    title: "Fixed-Scope Project",
    subtitle: "For a defined build with a defined end",
    price: "$600",
    unit: "/project",
    description:
      "We agree the scope, the price, and the date up front. No surprise invoices.",
    features: [
      "Written scope and milestone plan",
      "50% up front, 50% on delivery",
      "Weekly demo of working software",
      "Two rounds of revisions included",
      "30 days of post-launch bug fixes",
    ],
    details: [
      "2 – 6 weeks, scope depending",
      "2 rounds included",
    ],
    button: "Get a quote",
    popular: true,
  },

  {
    title: "Retainer",
    subtitle: "For continuous product work",
    price: "$700",
    unit: "/month",
    description:
      "A reserved block of my time every month — for teams shipping continuously.",
    features: [
      "40 hours per month, reserved",
      "Priority response within 4 hours",
      "Monthly roadmap and review call",
      "Rolls over one month",
    ],
    details: [
      "Ongoing",
      "Unlimited within retained hours",
    ],
    button: "Discuss a retainer",
  },
];

function HireMeSection() {
  return (
    <section className="hire-section" id="hire">
      <div className="hire-container">

        {/* HEADER */}
        <div className="hire-header">
          <div className="hire-label">HIRE ME</div>

          <h2>Ways to work together</h2>

          <div className="hire-title-line"></div>

          <p>
            Pick the engagement that fits your project.
            Every one starts with a free call.
          </p>

          <div className="availability-badge">
            <span></span>
            Available for freelance work
          </div>
        </div>

        {/* CARDS */}
        <div className="hire-grid">
          {hireOptions.map((option, index) => (
            <div
              className={`hire-card ${
                option.popular ? "popular-card" : ""
              }`}
              key={index}
            >

              {/* POPULAR */}
              {option.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="hire-card-content">

                <h3>{option.title}</h3>

                <p className="hire-subtitle">
                  {option.subtitle}
                </p>

                <div className="hire-price">
                  <strong>{option.price}</strong>
                  <span>{option.unit}</span>
                </div>

                <p className="hire-description">
                  {option.description}
                </p>

                {/* FEATURES */}
                <div className="hire-features">
                  {option.features.map((feature, featureIndex) => (
                    <div
                      className="hire-feature"
                      key={featureIndex}
                    >
                      <FiCheck />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* DETAILS */}
                <div className="hire-extra-details">

                  <div className="hire-extra-item">
                    <FiClock />
                    <span>{option.details[0]}</span>
                  </div>

                  <div className="hire-extra-item">
                    <FiRefreshCw />
                    <span>{option.details[1]}</span>
                  </div>

                </div>

                {/* BUTTON */}
                <button
                  className={`hire-button ${
                    option.popular ? "primary-hire-button" : ""
                  }`}
                  onClick={() => {
                    const contactSection =
                      document.getElementById("contact");

                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  {option.button}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HireMeSection;