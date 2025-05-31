import React, { useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import content from "./content";
import "./App.css";
import ContactCards from "./components/ContactUs";
import Chatbot from "./products/chatbot";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const location = useLocation();

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function HeroSection() {
    return (
      <section id="home" className="section home-section">
        <div className="hero-text">
          <h1>Welcome to {content.companyName}</h1>
          <p>{content.homeIntro}</p>
        </div>
        <img
          src="/hero-graphic.png"
          alt="Hero Graphic"
          className="hero-graphic"
        />
      </section>
    );
  }

  return (
    <>
      {/* Only show Navbar if NOT on /products/chatbot */}
      {location.pathname !== "/products/chatbot" && (
        <nav className="navbar">
          <div className="logo">{content.companyName}</div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className="nav-links">
            <li onClick={() => scrollToId("home")}>Home</li>
            <li onClick={() => scrollToId("products")}>Products</li>
            <li onClick={() => scrollToId("about")}>About</li>
            <li onClick={() => scrollToId("contact")}>Contact</li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <section
                id="products"
                className="section products-section"
                data-aos="fade-up"
              >
                <h2>Our Products</h2>
                <div className="products-list">
                  {content.products.map((p, i) => {
                    const isExternal = p.link.startsWith("http");
                    const Card = (
                      <div
                        className="flip-card"
                        data-aos="fade-up"
                        data-aos-delay={`${i * 100}`}
                        key={i}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <h3>{p.title}</h3>
                          </div>
                          <div className="flip-card-back">
                            <p>{p.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                    return isExternal ? (
                      <a
                        key={i}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Card}
                      </a>
                    ) : (
                      <Link key={i} to={p.link}>
                        {Card}
                      </Link>
                    );
                  })}
                </div>
              </section>

              <section
                id="about"
                className="section about-section"
                data-aos="fade-up"
              >
                <h2>About Us</h2>
                <p>{content.about}</p>
                <h3>Meet the Founder</h3>
                <div className="founder-container">
                  <a
                    href={content.founder.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founder-container"
                  >
                    <img
                      src={content.founder.img}
                      alt={content.founder.name}
                      className="founder-img"
                    />
                    <div className="founder-info">
                      <strong>{content.founder.name}</strong>
                      <p>{content.founder.role}</p>
                    </div>
                  </a>
                </div>
              </section>

              <section id="contact" className="section contact-section">
                <ContactCards options={content.contactOptions} />
              </section>
            </main>
          }
        />
        <Route path="/products/chatbot" element={<Chatbot />} />
      </Routes>

      {location.pathname !== "/products/chatbot" && (
        <footer className="footer">
          <div className="footer-content">
            <p>
              © {new Date().getFullYear()} {content.companyName} — All rights
              reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
}
