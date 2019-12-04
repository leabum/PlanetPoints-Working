import React from "react";
import { Container } from "react-bootstrap";

export const Layout = props => (
  <Container>
    {" "}
    {/*Element von Bootstrap das Text centered usw*/}
    {props.children}
  </Container>
);
