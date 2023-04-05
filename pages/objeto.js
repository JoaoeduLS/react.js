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
      tamanho: "PP",
      id: 1,
      preço: 23.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa do Batman",
      marca: "anime mapa",
      modelo: "manga longa",
      tamanho: "G4",
      id: 2,
      preço: 150.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa do Leo Stronda",
      marca: "loja leo",
      modelo: "regata",
      tamanho: "GG",
      id: 3,
      preço: 100.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa do Ban",
      marca: "css anime",
      modelo: "manga curta",
      tamanho: "M",
      id: 4,
      preço: 50.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa do Pedrin Matador",
      marca: "anime ganabara",
      modelo: "manga longa",
      tamanho: "G",
      id: 5,
      preço: 74.0,
      foto: "",
    },
    {
      nomedacamisa: "Camisa Diogo Gay",
      marca: "css anime",
      modelo: "manga longa",
      tamanho: "P",
      id: 6,
      preço: 38.0,
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
        <Container>{camisas[3].preço}</Container>
      </Pagina>
    </>
  );
};

export default objeto;
