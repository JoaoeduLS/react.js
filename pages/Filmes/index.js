import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import apiFilmes from "../../services/apiFilmes";

const index = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    apiFilmes.get("/movie/popular").then((resultado) => {
      setFilmes(resultado.data.results);
    });
  }, []);

  return (
    <Pagina titulo="Filmes">
      <ul>
        {filmes.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Pagina>
  );
};

export default index;
