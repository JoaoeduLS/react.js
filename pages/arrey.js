import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Pagina from "../components/Pagina";

const arrey = () => {
  /* fazer com style
    
    const style={
        with:'100%'
    }

*/

  // arrey  com conchete
  const pessoas = [
    "Camisa do Naruto",
    "Camisa do Batman",
    "Camisa do Leo Stronda",
    "Camisa do Ban",
    "Camisa do Pedrin Matador",
    "Camisa Diogo Gay",
  ];
  //obejto e chave
  const pessoa = {
    nome: "joao",
    idade: "21",
    telefone: "(61) 9 9999-9999",
  };

  const nome = "joao";
  const idade = "21";
  const telefone = "(61) 9 9999-9999";

  let endereco = "ABC";

  endereco;

  // string
  // number
  // boolean
  // object
  // float
  // arrey

  return (
    <>
      <Pagina titulo="arreys">
        <Container>
          {/* <div>{pessoas[1]}</div> */}
          {/* <div>{pessoa.nome}</div> */}
          <div>{pessoas[0]}</div>
          <div>{pessoas[1]}</div>
          <div>{pessoas[2]}</div>
          <div>{pessoas[3]}</div>
          <div>{pessoas[4]}</div>
          <div>{pessoas[5]}</div>
        </Container>
      </Pagina>
    </>
  );
};

export default arrey;
