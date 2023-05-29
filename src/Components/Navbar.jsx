import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiBigWave } from "react-icons/gi";
import "../Styles/navbar.css";

function ColorSchemesExample() {
  return (
    <>
      <div className="container-title">
        {" "}
        <h1
          className="title-color"
          style={{ textAlign: "center", color: "rgb(100, 149, 237)" }}
        >
          Marbella Piscinas <GiBigWave />
        </h1>{" "}
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#home">Estilos</Nav.Link>
            <Nav.Link href="#features">Galería</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
