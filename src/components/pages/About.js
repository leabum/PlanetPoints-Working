import React, { useState } from "react";
import { Card, Container, Row, Button, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import ceo1 from "../../assets/images/ceo_state1.png";
import leander from "../../assets/images/leander2.jpg";
import maurice from "../../assets/images/maurice2.jpg";
import leander2 from "../../assets/images/leander2_toggle.jpg";
import maurice2 from "../../assets/images/maurice2_toggle.jpg";
import DynamicScrollTop from "../dynamicScrollTop/DynamicScrollTop"

const Styles = styled.div`
  h1{
    font-family: Comfortaa, Arial;
    margin-top: 20px
    margin-bottom: 40px
  }
  .radialBg{
    background-color: #003087;
    background-image: radial-gradient(circle farthest-side at center bottom, #3ed77c, #08412d 125%);
    margin-top: 0px;
  }
  .card{
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 20px
    margin-bottom: 20px
  }
  .row{
    margin-right: 0px;
    margin-left: 0px;
  }
  .imageSwitch{
    transition: transform .5s; 
    &:hover {
      transform: scale(1.03);
    }
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

export const About = () => {
  const [src, setSrc] = useState(leander);
  const [src2, setSrc2] = useState(maurice);

  const onMouseOver = () => {
    setSrc(leander2);
  };

  const onMouseLeave = () => {
    setSrc(leander);
  };

  const onMouseOver2 = () => {
    setSrc2(maurice2);
  };

  const onMouseLeave2 = () => {
    setSrc2(maurice);
  };

  return (
    <Styles>
      <DynamicScrollTop/>
      <React.Fragment>
        <Row className="justify-content-center" style={{ paddingTop: 0 }}>
          <div>
            <Row className="justify-content-center">
              <h1>Wer wir sind</h1>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" lg="3">
                <Image
                  fluid
                  src={src}
                  onMouseOver={() => onMouseOver()}
                  onMouseLeave={() => onMouseLeave()}
                  style={{
                    width: "400px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                />
              </Col>
              <Col xs lg="3">
                <h1 style={{ marginBottom: "20px" }}>Leander Burgmer</h1>
                <h4>
                  Leander studiert Wirtschaftsinformatik an der Universität zu
                  Köln und wurde dafür bereits mit dem Dean's Award
                  ausgezeichnet. Zuvor sammelte er Berufserfahrung als
                  3D-Designer an Spielfilmen und Serien wie Fast and Furious 8
                  und Star Trek Discovery. Leander engagiert sich schon seit
                  einigen Jahren als WWF-Pate und hofft durch PlanetPoints
                  unsere Um- und Tierwelt vor den Folgen von Plastikmüll zu
                  schützen.
                </h4>
              </Col>
            </Row>
            <Row>
              <h1></h1>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" lg="3">
                <Image
                  fluid
                  src={src2}
                  onMouseOver={() => onMouseOver2()}
                  onMouseLeave={() => onMouseLeave2()}
                  style={{
                    width: "400px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                />
              </Col>
              <Col xs lg="3">
                <h1 style={{ marginBottom: "20px" }}>Maurice Weber</h1>
                <h4>
                  Maurice studiert Betriebswirtschaftslehre an der Universität
                  zu Köln. Er sammelte bereits wertvolle Erfahrungen während
                  seines Auslandssemesters in China und seinen zahlreichen
                  Praktika in namhaften Unternehmen. Maurice engagiert sich
                  schon seit langem beim NABU und WWF und brennt für die Idee,
                  Kunden für die Umsetzung ihrer guten Vorsätze beim Einkaufen
                  zu belohnen.
                </h4>
              </Col>
            </Row>
          </div>
        </Row>
      </React.Fragment>
    </Styles>
  );
};
