import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";

const Pagina = () => {
  return (
    <>
      <Cabecalho />
      <div className="bg-secondary py-3 text-white text-center mb-3">
        <Container>
          <h1>Pagina</h1>
        </Container>
      </div>
      <div
        style={{ width: "100%" }}
        className="bg-secondary position-fixed bottom-0 py-1 text-white text-center"
      >
        <p>Todos os direitos Reservados®</p>
      </div>
    </>
  );
};

export default Pagina;
