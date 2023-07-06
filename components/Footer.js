import React from "react";
import { Button } from "./Buttons";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subs">
          <p className="footer-subs-heading">
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className="footer-subs-text">You can unsubscribe at any time.</p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              ></input>
              <Button>Subscription</Button>
            </form>
          </div>
        </section>
        {/* <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="">How it works</Link>
              <Link to="">Testimonials</Link>
              <Link to="">Careers</Link>
              <Link to="">Terms of Service</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/Contact">How it works</Link>
              <Link to="">Testimonials</Link>
              <Link to="">Careers</Link>
              <Link to="">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link to="">How it works</Link>
              <Link to="">Testimonials</Link>
              <Link to="">Careers</Link>
              <Link to="">Terms of Service</Link>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link to="">Twitter</Link>
              <Link to="">Instagram</Link>
              <Link to="">Snapchat</Link>
              <Link to="">Terms of Service</Link>
            </div>
          </div>
        </div> */}

        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                TRAVUS
              </Link>
            </div>
            <small className="website-rights">TRAVUS © 2023</small>
            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook" />
              </Link>
              <Link
                className="social-icon-link Instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram" />
              </Link>
              <Link
                className="social-icon-link Twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
