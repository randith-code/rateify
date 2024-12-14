import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4 pb-4">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5>Logo</h5>
            <p className="text-muted">
              A brief description or tagline about the website can go here.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark">
                <i className="bi bi-facebook" style={{ fontSize: "20px" }}></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-twitter" style={{ fontSize: "20px" }}></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-instagram" style={{ fontSize: "20px" }}></i>
              </a>
            </div>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-primary">Privacy</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#privacy-policy"
                  className="text-dark text-decoration-none"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-dark text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#support" className="text-dark text-decoration-none">
                  Support
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-primary">Contact</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                <span>1234 Example St, City</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-telephone me-2"></i>
                <span>(123) 456-7890</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-envelope me-2"></i>
                <span>email@example.com</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        <small className="text-muted">
          © 2024 Your Company. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
