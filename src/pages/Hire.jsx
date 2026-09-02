import React, { useState } from "react";
import {
  FiCheck,
  FiClock,
  FiRefreshCw,
  FiMail,
  FiMessageCircle,
  FiMapPin,
  FiGlobe,
  FiSend,
  FiPlus,
  FiMinus,
  FiArrowRight,
} from "react-icons/fi";
import ProjectCTA from "../components/ProjectCTA";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import "./Hire.css";

const pricingPlans = [
  {
    title: "Hourly",
    subtitle: "For ongoing or open-ended work",
    price: "$12",
    suffix: "/hour",
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
    price: "From $600",
    suffix: "/project",
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
    price: "From $700",
    suffix: "/month",
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

const processSteps = [
  {
    number: "01",
    title: "Free intro call",
    description:
      "Thirty minutes. You explain the problem, I ask the awkward questions, and we both find out whether I'm the right person for it.",
  },
  {
    number: "02",
    title: "Written scope & quote",
    description:
      "You get a document listing exactly what I'll build, what I won't, when it lands, and what it costs. No surprise invoices.",
  },
  {
    number: "03",
    title: "Build, in the open",
    description:
      "Weekly demos of working software, not status reports. You see progress as it happens and can change course early, when it's cheap.",
  },
  {
    number: "04",
    title: "Launch & handover",
    description:
      "Deployment, environment config, and written documentation. You own the repository outright. Thirty days of bug fixes are included.",
  },
];

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "I work on modern websites, React and Next.js applications, dashboards, admin panels, APIs and full-stack web applications. I can work from an existing design or build the interface from scratch.",
  },
  {
    question: "How do you price work?",
    answer:
      "Pricing depends on the scope and complexity of the project. For clearly defined projects I normally provide a fixed quote, while ongoing work can be handled hourly or through a monthly retainer.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "For most projects, I can start after the initial discussion and scope confirmation. Availability depends on the current workload and project requirements.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. I can work with existing React, Next.js, Node.js and other JavaScript-based codebases, including improving UI, fixing bugs, adding features and refactoring existing code.",
  },
  {
    question: "What's your availability and time zone?",
    answer:
      "I'm based in Islamabad, Pakistan (PKT). I work remotely and can coordinate with international clients through scheduled calls and async communication.",
  },
  {
    question: "Who owns the code?",
    answer:
      "For completed client projects, the client owns the delivered project code and assets according to the agreed project terms.",
  },
];

function Hire() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="hire-page">

      {/* ================= HERO ================= */}
      <section className="hire-hero">
        <div className="hire-container">

          <div className="hire-breadcrumb">
            <span>Home</span>
            <span>›</span>
            <strong>Hire Me</strong>
          </div>

          <div className="hire-hero-label">HIRE ME</div>

          <h1>Ways to work together</h1>

          <p>
            Pick the engagement that fits your project. Every one starts
            with a free call.
          </p>

          <div className="availability-badge">
            <span></span>
            Available for freelance work
          </div>

        </div>
      </section>


      {/* ================= PRICING ================= */}
      <section className="pricing-section">
        <div className="hire-container">

          <div className="pricing-grid">

            {pricingPlans.map((plan, index) => (
              <div
                className={`pricing-card ${
                  plan.popular ? "popular-plan" : ""
                }`}
                key={index}
              >

                {plan.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <h2>{plan.title}</h2>

                <p className="pricing-subtitle">
                  {plan.subtitle}
                </p>

                <div className="pricing-price">
                  {plan.price}
                  <span>{plan.suffix}</span>
                </div>

                <p className="pricing-description">
                  {plan.description}
                </p>

                <div className="pricing-features">
                  {plan.features.map((feature, featureIndex) => (
                    <div className="pricing-feature" key={featureIndex}>
                      <FiCheck />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pricing-details">

                  <div>
                    <FiClock />
                    <span>{plan.details[0]}</span>
                  </div>

                  <div>
                    <FiRefreshCw />
                    <span>{plan.details[1]}</span>
                  </div>

                </div>

                <button
                  className={`pricing-button ${
                    plan.popular ? "primary-pricing-button" : ""
                  }`}
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {plan.button}
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="process-section">

        <div className="hire-container">

          <div className="hire-section-heading">

            <div className="section-label">
              PROCESS
            </div>

            <h2>How we'll work together</h2>

            <div className="heading-line"></div>

          </div>


          <div className="process-grid">

            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>

                <div className="process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials-section">

        <div className="hire-container">

          <div className="hire-section-heading">

            <div className="section-label">
              TESTIMONIALS
            </div>

            <h2>What people say</h2>

            <div className="heading-line"></div>

            <p>
              Feedback from the people I've built for.
            </p>

          </div>


          <div className="testimonial-grid">

            <div className="testimonial-card">

              <div className="stars">
                ★★★★★
              </div>

              <p className="testimonial-text">
                “Awais took a vague brief and came back with a clear
                plan, then shipped it ahead of schedule. The code was
                clean enough that our own team picked it up without a
                handover call.”
              </p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-person">

                <div className="testimonial-avatar">
                  MI
                </div>

                <div>
                  <strong>Muhammad Ibrahim</strong>
                  <span>Product Lead, Private Client</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
<FAQ/>
      <ProjectCTA />
      <Contact />
<Footer />

     </div>
  );
}

export default Hire;