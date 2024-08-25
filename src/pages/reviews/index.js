import React from "react";
import "./style.css"; // Ensure this CSS file has the required styles
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

// Import local images
import reviewImg1 from "../../assets/images/1.jpg"; 
import reviewImg2 from "../../assets/images/2.jpg";
import reviewImg3 from "../../assets/images/3.jpg";
import reviewImg4 from "../../assets/images/4.jpg";
import reviewImg5 from "../../assets/images/5.jpg";
import reviewImg7 from "../../assets/images/7.jpg";
import reviewImg8 from "../../assets/images/8.jpg";

const imageMap = {
  "1.jpg": reviewImg1,
  "2.jpg": reviewImg2,
  "3.jpg": reviewImg3,
  "4.jpg": reviewImg4,
  "5.jpg": reviewImg5,
  "7.jpg": reviewImg7,
  "8.jpg": reviewImg8,
};

const imageFiles = [
  "8.jpg",
  "1.jpg",
  "5.jpg",
  "7.jpg",
  "3.jpg",
  "2.jpg",
  "4.jpg",
];

export const Reviews = () => {
  return (
    <HelmetProvider>
      <Container className="Reviews-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reviews | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 Reviews-title">Reviews</h1>
            <hr className="Reviews-border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="po_items_ho">
          {imageFiles.map((filename) => (
            <div key={filename} className="po_item">
              <img src={imageMap[filename]} alt={`Review ${filename}`} />
            
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
