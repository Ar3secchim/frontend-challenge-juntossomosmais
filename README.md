# frontend-challenge-juntossomosmais
[DEPLOY](https://frontend-challenge-juntossomosmais.vercel.app/)

🚀 A solução do desafio front-end da organização "Juntos somos mais"

## Sobre a API

O JSON que você precisa desenvolver para este aplicativo está disponível em:
`https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json`

## Soluções proposta para atender os requisitos do projeto:

- [x] Escolha de bibliotecas e tecnologias:

  - React: Por ter mais conhecimento nessa bibliotecas e por saber que eu teria a necessidate de manipular vários estados na aplicação para assim poder rederizar os dados de acordo com os filtros;
  - Vite: Por oferecer uma experiência de configuração. Ele é pré-configurado com as melhores práticas e opções de desenvolvimento, para não peder muito tempo com config e também não ter um servidor pesado e robusto sem a necessidade desse projeto.
  - React Router DOM: para permite a passagem de parâmetros para suas rotas, o que facilita a criação de URLs dinâmicas e a recuperação desses parâmetros dentro dos componentes correspondentes.
  - Decisão de ter um servidor intermediário com express para lidar com as requisições feitas para API externas além de ter possibilidades de trabalhar com endpoints diferentes conseguirndo manipular os dados que são retornado para o aplicação front end.

## Requisitos do projeto:

- [x] Filtrar por estado;
- [x] ordenar por ordem alfabética nome ou sobrenome;
- [x] Busca por nome e/ou sobrenome;
- [x] Paginação para navegar entre cartões;
- [x] Uma página interna com mais detalhes dos clientes (use sua criatividade);
- [x] Navegação ao clicar em cartões de clientes;
- [ ] Testes;
