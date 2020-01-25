import React, {useState} from "react";
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
import { LinkContainer } from 'react-router-bootstrap'
import AuthContext from "../../AuthContext";

const Styles = styled.div`
  .row{
      margin-right: 0px
      margin-bottom: 40px
  }
`;

export const Footer = props => {

  return (
    <Styles>
        <Row style={{marginRight: 0}}></Row>
    </Styles>
  );
};
