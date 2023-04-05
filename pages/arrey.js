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
  const pessoas = ["Hugo", "Diogo", "Joao"];
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
          <div>arrey</div>
        </Container>
      </Pagina>
    </>
  );
};

export default arrey;
