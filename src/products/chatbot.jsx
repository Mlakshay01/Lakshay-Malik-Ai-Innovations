import React from "react";
import "./Chatbot.css"; // Style this uniquely for the chatbot page

export default function Chatbot() {
  return (
    <div className="chatbot-page">
      <header className="chatbot-header">
        <h1>Embeddable AI Chatbot</h1>
        <p>
          Instantly integrate an AI chatbot into your website or store. Easy to
          use, fully customizable.
        </p>
      </header>

      <section className="chatbot-demo">
        <div className="chatbot-box">
          <p>This is where your chatbot preview or demo could go.</p>
          {/* You can integrate the chatbot widget iframe or component here */}
        </div>
      </section>

      <section className="pricing-section">
        <h2>Pricing Plans</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Free Plan</h3>
            <p>✅ 1 chatbot</p>
            <p>✅ 5MB file upload</p>
            <p>✅ Basic embedding</p>
            <p className="price">$0/month</p>
          </div>
          <div className="pricing-card">
            <h3>Pro Plan</h3>
            <p>✅ 5 chatbots</p>
            <p>✅ 50MB upload each</p>
            <p>✅ Custom branding</p>
            <p className="price">$15/month</p>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p>✅ Unlimited bots</p>
            <p>✅ 500MB uploads</p>
            <p>✅ Priority support</p>
            <p className="price">Contact Us</p>
          </div>
        </div>
      </section>

      <footer className="chatbot-footer">
        <p>&copy; {new Date().getFullYear()} Your AI Company</p>
      </footer>
    </div>
  );
}
