# REACT JS

## Criando o projeto React JS "framework next js"


npx create-next-app@latest introducao --use-npm --example https://github.com/vercel/next-learn/tree/master/basics/learn-starter

* se o node nao estiver atualizado usa a função:

 npm i -g npm@9.6.2


 #### Executar o projeto (startar o projeto)

 * npm run dev

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
  )
}

```

 ### criar a pasta
  * "components"

  * coloca a extensao "ES7+ React/Redux/React-Native snippets"

### base do codigo 2 

```jsx
import React from 'react'

const Cabecalho = () => {
  return (
    <div>Cabecalho</div>
  )
}

export default Cabecalho

```
 * dica usa "rafce" no jsx

### Componentes

```
* import no index

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
