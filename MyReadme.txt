
________________________________________________________________________________________________________________________
# NLW 4 - Trilha React
[Benefícios ao se utilizar NextJS](https://medium.com/techbloghotmart/o-que-%C3%A9-server-side-rendering-e-como-usar-na-pr%C3%A1tica-a840d76a6dca)   
_Com o Next.js ganhamos agilidade no desenvolvimento e pergformance na aplicação, uma vez que temos um servidor intermediário para rodar nosso SPA (Entre o back e o front)_

## Iniciando a aplicação com Next.js
`yarn create next-app nome-da-app`

- Instalar dependencias para trabalhar com Typescript:   
`yarn add typescript @types/react @types/react-dom @types/node -D`

## Como executar o projeto   
`yarn dev`

## Usando cookies para armazenar os dados
- Instalando a biblioteca: `yarn add js-cookie`;
- Instalando as tipagens para tal: `yarn add @types/js-cookie -D`
### Estrutura inicial para um Context
```
import { createContext, ReactNode } from "react";

interface CountdownContextData {}

interface CountdownProviderProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }) {
  return (
    <CountdownContext.Provider value={{}}>
      {children}
    </CountdownContext.Provider>
  );
} 
```

## Iniciando o projeto (Aula 1)
- Criando o projeto
`yarn create react-app nomedoprojeto --template=typescript`
## Ferramentas mencionadas nas aulas
- Figma
- [whimsical](https://whimsical.com/)