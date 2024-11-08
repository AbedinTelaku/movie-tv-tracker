import React, { useState } from 'react';
import './FaqStyle.css';

const FAQData = [
  {
    question: "How does movie-tv-tracker work?",
    answer: "movie-tv-tracker allows you to track your favorite movies and shows, discover the latest releases, and share recommendations with a user community."
  },
  {
    question: "Is there a free plan available?",
    answer: "Yes, movie-tv-tracker offers a basic free plan with limited features. For more functionality, you can subscribe to premium plans."
  },
  {
    question: "How can I subscribe to premium plans?",
    answer: "You can subscribe to our premium plans by going to the 'Subscriptions' section in your profile and choosing the plan that best suits your needs."
  },
  {
    question: "Can I track my favorite movies?",
    answer: "Yes, with movie-tv-tracker, you can add movies and shows to your personal favorites list and receive recommendations based on your preferences."
  }
];

const FaqPageComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-container">
        {FAQData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPageComponent;
