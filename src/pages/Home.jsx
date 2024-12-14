import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Col, Button, Card } from "react-bootstrap";

import { fetchProducts } from "../api/api";
import { testimonials } from "../utils/staticdata";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(12, 10);
        setProducts(data.products);
      } catch (error) {
        setError("Error fetching products");
      }
    };

    getProducts();
  }, []);

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
            Your Trusted Product Reviews, All in One Place
          </h1>
          <p className="lead fw-normal">
            Discover top-rated products and read authentic reviews from real
            users
          </p>
          <Button
            href="#product-list"
            className="rounded-pill"
            variant="primary"
            size="lg"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <section id="product-list" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Product Reviews</h2>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={4} className="mb-4" key={product.id}>
                <Card className="h-100 shadow-sm border-light rounded">
                  <Card.Img
                    variant="top"
                    alt={`Image of ${product.title}`}
                    src={product.images[0]}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <div className="d-flex align-items-center">
                      <span className="text-warning">
                        {"⭐".repeat(Math.round(product.rating))}
                      </span>
                      <span className="ms-2">({product.rating})</span>
                    </div>
                    <Card.Text>{product.description}</Card.Text>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill"
                      style={{}}
                    >
                      View Reviews
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5 mb-5 px-4">
        <Container>
          <h2 className="text-center mb-4">Key Features</h2>
          <Row>
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

      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <Carousel>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  <Col sm={12} md={6} lg={6} className="mb-4">
                    <Card className="h-100">
                      <Card.Body className="d-flex flex-column">
                        {/* Avatar and Name */}
                        <div className="d-flex align-items-center mb-3">
                          {/* Avatar image or icon */}
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                          />
                          {/* Client's name */}
                          <Card.Title style={{ fontWeight: "bold" }}>
                            {testimonial.name}
                          </Card.Title>
                        </div>
                        {/* Location */}
                        <Card.Subtitle
                          className="mb-3"
                          style={{ color: "#007bff" }}
                        >
                          {testimonial.location}
                        </Card.Subtitle>
                        {/* Testimonial */}
                        <Card.Text>{testimonial.testimonial}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
