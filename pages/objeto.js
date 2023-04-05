import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import Cabecalho from "../components/Cabecalho";

const objeto = () => {
  const camisas = [
    {
      nomedacamisa: "Camisa do Naruto",
      marca: "css anime",
      modelo: "manga longa",
      tamanho: "pp",
      id: 1,
      preço: 23.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa do Batman",
      marca: "css anime",
      modelo: "manga longa",
      tamanho: "pp",
      id: 2,
      preço: 23.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa do Leo Stronda",
      marca: "css anime",
      modelo: "manga longa",
      tamanho: "pp",
      id: 3,
      preço: 23.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa do Ban",
      marca: "css anime",
      modelo: "manga longa",
      tamanho: "pp",
      id: 4,
      preço: 23.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa do Pedrin Matador",
      marca: "css anime",
      modelo: "manga longa",
      tamanho: "pp",
      id: 5,
      preço: 23.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa Diogo Gay",
      marca: "css anime",
      modelo: "manga longa",
      tamanho: "pp",
      id: 6,
      preço: 23.0,
      foto: "",
    },

    /* "Camisa do Naruto",
    "Camisa do Batman",
    "Camisa do Leo Stronda",
    "Camisa do Ban",
    "Camisa do Pedrin Matador",
    "Camisa Diogo Gay",*/
  ];

  return (
    <>
      <Pagina titulo="Objetos">
        <Container>{camisas[3].nomedacamisa}</Container>
      </Pagina>
    </>
  );
};

export default objeto;
