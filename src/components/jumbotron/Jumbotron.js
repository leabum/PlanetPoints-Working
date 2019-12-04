import React from "react";
import { Jumbotron as Jumbo, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import apple from "../../assets/images/apple-logo.png";
import android from "../../assets/images/android-logo.png";
import bg from "../../assets/images/background2.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${bg}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    padding: 70px 0px;
    position: relative;
    margin-bottom: 0px;
    box-shadow: 0px 5px 5px rgb(0,0,0,0.2);
    
  }
  h1, h2, h3{
    font-family: Comfortaa;
    text-align: center;
  }

  .zoom {
    transition: transform .2s; /* Animation */
    width: 80px;
    height: 80px;
    margin: 20px auto;
    margin-right: 20px;
    filter: drop-shadow(0 0 5px rgb(255,255,255,0.65));
  }
  
  .zoom:hover {
    transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid={true} className="jumbo">
      <Container>
        <Row className="justify-content-center">
          <h1>Willkommen bei PlanetPoints</h1>
        </Row>
        <Row className="justify-content-center">
          <h3>Punkte sammeln, Geld sparen und dabei den Planeten retten!</h3>
        </Row>
        {/*
        <Row className="justify-content-center">
          <div>
            <Image src={apple} className={"zoom"}/>
            <Image src={android} className={"zoom"}/>
          </div>
        </Row>
        */}
      </Container>
    </Jumbo>
  </Styles>
);
