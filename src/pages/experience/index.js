import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, experience } from "../../content_option";

export const Experience = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Experience | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp main">
          <Col lg="10">
            {experience.map((data, i) => {
              return (
                <div className="experience-item py-4" key={i}>
                  <div className="experience-title">
                    <h5 className="service__title">{data.title}</h5>
                  </div>
                  <ul className="experience-descriptions">
                    <li>{data.description1}</li>
                    <li>{data.description2}</li>
                    <li>{data.description3}</li>
                  </ul>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
