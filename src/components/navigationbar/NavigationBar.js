import React from "react";
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
`;

export const NavigationBar = props => {
  return (
    <Styles style={{ position: "sticky", top: 0, zIndex: 1 }}>
      <Navbar expand="lg">
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavigationBarUserContent />
        </Container>
      </Navbar>
    </Styles>
  );
};

const NavigationBarUserContent = () => (
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav fill variant="pills" className="ml-auto">
      <Nav.Item>
        <Nav.Link>
          <NavLink className="linkstyle" exact to="/">
            Home
          </NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <NavLink className="linkstyle" exact to="/About">
            Über uns
          </NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <NavLink className="linkstyle" exact to="/Contact">
            Kontakt
          </NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <NavLink className="linkstyle" exact to="/Impressum">
            Impressum
          </NavLink>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
);
