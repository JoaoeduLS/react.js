# REACT JS

## Criando o projeto React JS "framework next js"

    npx create-next-app@latest introducao --use-npm --example https://github.com/vercel/next-learn/tree/master/basics/learn-starter

- se o node nao estiver atualizado usa a função:

       npm i -g npm@9.6.2

#### Executar o projeto (startar o projeto)

    npm run dev

### Axios para API

    npm i axios

### base do codigo

```jsx
export default function Home() {
  return (
    ///<div> - outra forma de se fazer
    <>
      <h1>Hello World!</h1>
      <h1>Hello World!</h1>
    </>
    ///</div>
  );
}
```

### criar a pasta

- "components"

- coloca a extensao "ES7+ React/Redux/React-Native snippets"

### base do codigo 2

```jsx
import React from "react";

const Cabecalho = () => {
  return <div>Cabecalho</div>;
};

export default Cabecalho;
```

- dica usa "rafce" no jsx

### Componentes

- import no index cabecalho

```
import Cabecalho from "../components/Cabecalho";


export default function Home() {
  return (
  <>
       <Cabecalho></Cabecalho>
       <h1>Hello World!</h1>
  </>
  )
}
```

- cabecalho

```
import React from 'react'

const Cabecalho = () => {
  return (
    <>Cabecalho</>
  )
}

export default Cabecalho

```

# React-Bootstrap

    npm install react-bootstrap bootstrap

## css para pode funcionar o bootstrap

    import 'bootstrap/dist/css/bootstrap.min.css';

```
/// cabecalho.jsx

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Cabecalho = () => {
  return (

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho
```

```
///index.js

import Cabecalho from "../components/Cabecalho";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
  <>
       <Cabecalho></Cabecalho>
       <h1 className='text-primary text-center'>Hello World!</h1>
  </>
  )
}

```

### "Com style e sem o style"

```
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Cabecalho from '../components/Cabecalho';


const arrey = () => {

/* fazer com style

    const style={
        with:'100%'
    }

*/
  return (

<>
    <Cabecalho/>
          <div className='bg-secondary py-3 text-white text-center mb-3'>
            <Container>
            <h1>Arrey</h1>
            </Container>
          </div>

          <div>Arrey</div>

          <div style={{width:'100%'}} className='bg-secondary position-fixed bottom-0 py-1 text-white text-center'>
            <p>Todos os direitos Reservados</p>
          </div>
</>
  )
}

export default arrey
```
