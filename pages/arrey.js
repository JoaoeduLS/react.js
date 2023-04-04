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
