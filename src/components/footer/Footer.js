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
  .row{
      margin-right: 0px
      margin-bottom: 40px
      margin-top: 20px
  }

  button{
    border: 0;
    padding: 0;
    background: white;
    color: grey;
    margin-right: 20px
    outline: none;
`;

export const Footer = props => {
  return (
    <Styles>
      <Row className="justify-content-center">
        <LinkContainer to="/dataprotection"><button>Datenschutz</button></LinkContainer>
      </Row>
    </Styles>
  );
};
