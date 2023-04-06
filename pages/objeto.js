import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
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
      foto: "https://th.bing.com/th/id/OIP.Jp_QaToLaTTd1a1feLsVwQHaIs?pid=ImgDet&rs=1",
    },
    {
      nomedacamisa: "Camisa do Batman",
      marca: "anime mapa",
      modelo: "manga longa",
      tamanho: "G4",
      id: 2,
      preço: 150.0,
      foto: "https://th.bing.com/th/id/R.0a0734128cca32c1fce4a10e9cb9a150?rik=b2E5Px3YlXL7Dg&pid=ImgRaw&r=0",
    },
    {
      nomedacamisa: "Camisa do Leo Stronda",
      marca: "loja leo",
      modelo: "regata",
      tamanho: "GG",
      id: 3,
      preço: 100.0,
      foto: "https://th.bing.com/th/id/R.b837b98615b0c832c15d3b64c9544c65?rik=9N365xgPFMzl0A&riu=http%3a%2f%2fs2.glbimg.com%2fn4voBy6LuXLa5NxB5uxUN9Qm_D8%3d%2fe.glbimg.com%2fog%2fed%2ff%2foriginal%2f2017%2f12%2f13%2fstronda1.jpg&ehk=YAcbY%2bfWOkxxXvSU4zD5MI%2bZz4nzv1l07UdE4abj6Jo%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      nomedacamisa: "Camisa do Ban",
      marca: "css anime",
      modelo: "manga curta",
      tamanho: "M",
      id: 4,
      preço: 50.0,
      foto: "https://th.bing.com/th/id/R.e690c3a92597176973acebb3530bf8fe?rik=9bvOmp9%2bt4v3%2fw&pid=ImgRaw&r=0",
    },
    {
      nomedacamisa: "Camisa do falsh",
      marca: "anime ganabara",
      modelo: "manga longa",
      tamanho: "G",
      id: 5,
      preço: 74.0,
      foto: "https://th.bing.com/th/id/R.9ad0c80ce8ebfcc5b3ff5421104e7608?rik=vWkHdAehZTG6aQ&pid=ImgRaw&r=0",
    },
    {
      nomedacamisa: "Camisa Diogo Gay",
      marca: "css anime",
      modelo: "manga longa",
      tamanho: "P",
      id: 6,
      preço: 38.0,
      foto: "https://th.bing.com/th/id/R.a68581cca0e62671d148fc70648a31c3?rik=OHEEh%2ffklc%2fjlg&pid=ImgRaw&r=0",
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
        <Row>
          {camisas.map((item) => (
            <Col md={3}>
              <Card className="mb-3 col-12 row-3 ">
                <Card.Img variant="top" src={item.foto} />
                <Card.Body>
                  <Card.Title>{item.nomedacamisa}</Card.Title>
                  <Card.Text>
                    <b>marca: </b>
                    {item.marca}
                    <br></br>
                    <b>preço: </b>
                    {item.preço}
                    <br></br>
                    <b>tamanho: </b>
                    {item.tamanho}
                    <br></br>
                    <b>modelo: </b>
                    {item.modelo}
                  </Card.Text>
                  <Button variant="primary">Compra</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Pagina>
    </>
  );
};

export default objeto;
