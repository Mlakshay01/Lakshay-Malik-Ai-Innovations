import React, { useEffect, useState, useRef } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import content from "./content";
import "./App.css";
import ContactCards from "./components/ContactUs";
import Chatbot from "./products/chatbot";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleMenuClick(id) {
    scrollToId(id);
    setMenuOpen(false);
  }

  if (location.pathname === "/products/chatbot") {
    return (
      <Routes>
        <Route path="/products/chatbot" element={<Chatbot />} />
      </Routes>
    );
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={content.logo} alt="Logo" />
        </div>

        <div className={`nav-links-wrapper ${menuOpen ? "open" : ""}`} ref={navRef}>
          <ul className="nav-links">

            <li className="close-btn" onClick={() => setMenuOpen(false)}>✕</li>
            <li onClick={() => handleMenuClick("home")}>Home</li>
            <li onClick={() => handleMenuClick("products")}>Products</li>
            <li onClick={() => handleMenuClick("about")}>About</li>
            <li onClick={() => handleMenuClick("contact")}>Contact</li>
          </ul>
        </div>

        <button
          className="menu-icon"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div className="page-wrapper">
                <section id="home" className="section home-section">
                  <div className="hero-text">
                    <div className="hero-heading">
                      <h1>
                        <span className="welcome-text">Welcome to</span>
                        
                        <span className="company-name">{content.companyName}</span>
                      </h1>
                    </div>

                    <p>{content.homeIntro}</p>
                  </div>
                  <img
                    src="/hero-graphic.png"
                    alt="Hero Graphic"
                    className="hero-graphic"
                  />
                </section>

                <section id="products" className="section products-section" data-aos="fade-up">
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
                        <a key={i} href={p.link} target="_blank" rel="noopener noreferrer">
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

                <section id="about" className="section about-section" data-aos="fade-up">
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
              </div>
            </main>
          }
        />
        <Route path="/products/chatbot" element={<Chatbot />} />
      </Routes>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} {content.companyName} — All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
