import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <section
        className="hero-section mt-5"
        style={{
          position: "relative",
          backgroundImage: "url('public/rateify-hero-image.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <div style={{ zIndex: 2 }}>
          {" "}
          <h1 className="display-4 fw-normal">
            Your Trusted Product Reviews, All in One Place.
          </h1>
          <p className="lead fw-normal">
            Discover top-rated products and read authentic reviews from real
            users.
          </p>
          <Button className="rounded-pill" variant="primary" size="lg">
            Get Started Now.
          </Button>
        </div>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Product Reviews</h2>
          <Row>
            {/* Product Card 1 */}
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="outline-primary rounded-pill">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Product Card 2 */}
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Product 2</Card.Title>
                  <Card.Text>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="outline-primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Product Card 3 */}
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Product 3</Card.Title>
                  <Card.Text>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi.
                  </Card.Text>
                  <Button variant="outline-primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5 mb-5 px-4">
        <Container>
          <h2 className="text-center mb-4">Key Features</h2>
          <Row>
            {/* Key Feature 1 */}
            <Col sm={12} md={4} className="mb-4">
              <Card className="text-center d-flex flex-column h-100">
                <Card.Body className="d-flex flex-column">
                  <i
                    className="bi bi-star"
                    style={{ fontSize: "40px", color: "#007bff" }}
                  ></i>
                  <Card.Title className="mt-3">Authentic Reviews</Card.Title>
                  <Card.Text>
                    Our reviews come from real customers who have tested the
                    products.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Key Feature 2 */}
            <Col sm={12} md={4} className="mb-4">
              <Card className="text-center d-flex flex-column h-100">
                <Card.Body className="d-flex flex-column">
                  <i
                    className="bi bi-gift"
                    style={{ fontSize: "40px", color: "#007bff" }}
                  ></i>
                  <Card.Title className="mt-3">Top Product Picks</Card.Title>
                  <Card.Text>
                    Handpicked recommendations based on quality and value.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Key Feature 3 */}
            <Col sm={12} md={4} className="mb-4">
              <Card className="text-center d-flex flex-column h-100">
                <Card.Body className="d-flex flex-column">
                  <i
                    className="bi bi-arrow-left-right"
                    style={{ fontSize: "40px", color: "#007bff" }}
                  ></i>
                  <Card.Title className="mt-3">Easy Comparisons</Card.Title>
                  <Card.Text>
                    Compare products effortlessly with our intuitive tool.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
