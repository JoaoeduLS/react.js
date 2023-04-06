import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";

const Pagina = (props) => {
  return (
    <>
      {/* Cabecalho */}
      <Cabecalho />
      <div className="bg-secondary py-3 text-white text-center mb-3">
        <Container className="mb-5 pb-3">
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      {/* tudo que vai fica dentro da pagina */}
      <Container className="mb-5 pb-3">{props.children}</Container>
      {/* final da pagina  */}
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
