import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./FAQ.css";

const questions = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "I work on modern websites, web applications, dashboards, e-commerce platforms and custom software solutions using React, Next.js, Node.js and modern databases.",
  },
  {
    question: "How do you price your work?",
    answer:
      "Pricing depends on the project scope, features, timeline and technical requirements. After understanding the requirements, I provide a clear estimate.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "For most projects, I can start after the requirements and project scope are finalized.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. I can work with existing React, Next.js and Node.js codebases, fix issues, improve UI, add features and refactor existing code.",
  },
  {
    question: "What's your availability and time zone?",
    answer:
      "I'm based in Islamabad, Pakistan and can collaborate remotely with clients and teams across different time zones.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        <div className="faq-header">
          <span>FAQ</span>
          <h2>Common questions</h2>
          <div className="faq-line"></div>
          <p>
            Everything you might want to know before we start.
          </p>
        </div>

        <div className="faq-list">

          {questions.map((item, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? "faq-open" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                <FiPlus
                  className={
                    openIndex === index ? "faq-icon rotate" : "faq-icon"
                  }
                />
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;