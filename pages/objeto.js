import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import Cabecalho from "../components/Cabecalho";

const objeto = () => {
  return (
    <>
      <Pagina titulo="Objetos">
        <Container>
          <div>Objeto</div>
        </Container>
      </Pagina>
    </>
  );
};

export default objeto;
