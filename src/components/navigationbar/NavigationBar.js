import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Image,
  Container,
  DropdownButton,
  Dropdown,
  Col,
  Row
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo-round.png";
import { LinkContainer } from "react-router-bootstrap";
import AuthContext from "../../AuthContext";

const Styles = styled.div`
  .navbar {
    background: white;
    padding: 0px 12px;
    box-shadow: 0px 5px 5px rgb(0,0,0,0.2);
  }
  .navbar-brand{
    padding: 20px 0px;
    display: flex
  }

  .nav-link{
    padding: 0px 0px;
  }

  .linkstyle{
    color: black;
    padding: 10px 12px;
    margin: 0px 0px;
    display: flex;

    &:hover {
      color: grey;
      text-decoration-line: none;
    }
  }

  .active {
    color: #3ed77c;
  }
  }

  h2{
    font-family: Comfortaa;
    margin-bottom: 0px;
    display: flex;
    align-items:center
  }

  button{
    border: 0;
    padding: 0;
    background: white;
  }
`;

export const NavigationBar = props => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Styles style={{ position: "sticky", top: 0, zIndex: 3 }}>
      <Navbar expanded={expanded} collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <h2>PlanetPoints</h2>
            <Image
              src={logo}
              width={50}
              height={50}
              style={{ marginLeft: 5 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer
                onClick={() => setExpanded(false)}
                className="linkstyle"
                exact
                to="/"
              >
                <button>Home</button>
              </LinkContainer>

              <LinkContainer
                onClick={() => setExpanded(false)}
                className="linkstyle"
                exact
                to="/About"
              >
                <button>Über uns</button>
              </LinkContainer>

              <LinkContainer
                onClick={() => setExpanded(false)}
                className="linkstyle"
                exact
                to="/Contact"
              >
                <button>Kontakt</button>
              </LinkContainer>

              <LinkContainer
                onClick={() => setExpanded(false)}
                className="linkstyle"
                exact
                to="/Impressum"
              >
                <button>Impressum</button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};
