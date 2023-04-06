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

  //obejto e chave
  /*const pessoa = {
    nome: "joao",
    idade: "21",
    telefone: "(61) 9 9999-9999",
  };

  const nome = "joao";
  const idade = "21";
  const telefone = "(61) 9 9999-9999";

  let endereco = "ABC";

  endereco;*/

  // string
  // number
  // boolean
  // object
  // float
  // arrey

  const camisas = [
    "Camisa do Naruto",
    "Camisa do Batman",
    "Camisa do Leo Stronda",
    "Camisa do Ban",
    "Camisa do Pedrin Matador",
    "Camisa Diogo Gay",
  ];

  return (
    <>
      <Pagina titulo="arreys">
        {/* <div>{camisas[1]}</div> */}
        {/* <div>{camisas.nome}</div> */}
        <h2>lista ordenada</h2>
        <ol>
          {camisas.map((item) => (
            <li>{item}</li>
          ))}
        </ol>

        {/* <p>{camisas[1]}</p> 
          <p>{camisas[2]}</p>
          <p>{camisas[3]}</p>
          <p>{camisas[4]}</p>
          <p>{camisas[5]}</p>*/}
      </Pagina>
    </>
  );
};

export default arrey;
