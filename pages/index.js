import Cabecalho from "../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Pagina titulo="pagina 1 ">
        <Container>
          <h1>hellow word</h1>
          <p>paragrafo 1</p>
          <p>paragrafo 2</p>
          <p>paragrafo 3</p>
          <p>paragrafo 4</p>
        </Container>
      </Pagina>
    </>
  );
}
