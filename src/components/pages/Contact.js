import React, { Component, View } from "react";
import {
  Card,
  Container,
  Row,
  Button,
  Accordion,
  Col,
  Form,
  Image
} from "react-bootstrap";
import styled from "styled-components";
import contactImg from "../../assets/images/contact_bg3.png";
import MediaQuery from "react-responsive";

const Styles = styled.div`
  h1{
    font-family: Comfortaa;
    margin-top: 25px
    margin-bottom: 25px
    text-align: center;
  }

  h2{
    color: white;
  }

  .radialBg{
    background-color: #003087;
    background-image: radial-gradient(circle farthest-side at center bottom, #3ed77c, #08412d 125%);
    margin-top: 0px;
  }
  .card-cust{
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 20px
    margin-bottom: 20px
  }

  .btn-link{
    font-weight: 600;
    text-decoration-line: none;
    color: #3ed77c;

    &:hover {
      color: grey;
  }
}
.center{
  display: flex;
  justify-content: center;
}
.row{
  margin-right: 0px;
  margin-left: 0px;
}

.btn-primary{
  background-color: #3ed77c !important;
  border-style: none;
}

.image { 
  position: relative; 
  width: 100%; 
  filter: drop-shadow(2px 4px 0.2rem rgba(0,0,0,0.5));
}

h2 { 
  position: absolute; 
  top: 36px; 
  left: 32px; 
  width: 100%; 
}

.h4-special { 
  color: white
  position: absolute; 
  top: 30px; 
  left: 22px; 
  width: 100%; 
}

`;

export const Contact = () => {
  return (
    <Styles>
      <React.Fragment>
        <Row className="justify-content-center">
          <h1>Kontakt bei Geschäfts&shy;anfragen</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs lg="3">
            <h4>
              Hast du Interesse an einer Kooperation? Du willst Partnershop oder
              Spendenpartner werden, oder hast ganz eigene Vorstellungen über
              eine mögliche Kooperation? Melde dich gerne bei uns.
            </h4>
          </Col>
          <Col xs="10" lg="3">
            <div class="image">
              <MediaQuery query="(min-width: 1024px)">
                <Image src={contactImg} width={"400px"} alt="" />
                <h2>partner@planetpoints.de</h2>
              </MediaQuery>
              <MediaQuery query="(max-width: 1024px)">
                <Image src={contactImg} width={"300px"} alt="" />
                <h4 className="h4-special">partner@planetpoints.de</h4>
              </MediaQuery>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <h1>Sonstige Anliegen?</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs lg="3">
            <h4>
              Hast du Fragen zu PlanetPoints oder Anregungen, wie wir uns
              verbessern können? Wir freuen uns von dir zu hören!
            </h4>
          </Col>
          <Col xs="10" lg="3">
            <div class="image">
              <MediaQuery query="(min-width: 1024px)">
                <Image src={contactImg} width={"400px"} alt="" />
                <h2>kontakt@planetpoints.de</h2>
              </MediaQuery>
              <MediaQuery query="(max-width: 1024px)">
                <Image src={contactImg} width={"300px"} alt="" />
                <h4 className="h4-special">kontakt@planetpoints.de</h4>
              </MediaQuery>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    </Styles>
  );
};
