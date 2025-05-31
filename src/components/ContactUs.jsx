import React from 'react';

export default function ContactCards({ options }) {
  return (
    <section className="contact-cards-section">
      <h2>Get in Touch</h2>
      <div className="contact-cards-container">
        {options.map(({ title, description, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Go</button>
          </a>
        ))}
      </div>
    </section>
  );
}
