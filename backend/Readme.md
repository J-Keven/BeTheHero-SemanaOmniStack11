<div align="center">
  <h1>API para o BeTheHero</h1>

---

 # [Usage](https://github.com/J-Keven/Blog_NodeJs#tecnologias) | [Rotas](https://github.com/J-Keven/Blog_NodeJs#Routes)
  </div> 
## Usage
- Com o repisitorio clonado na sua maquina, navegue até a pasta `backend`:

		$ cd backend/

- Execute o comando para instalar as depedências:

		$ npm isntall

   ou, para instalar com yarn 

		$ yarn 

- Para inicializar a plicação execulte:
	
		& npm run start

+ Acesse `http://localhost:3000` e utilize as rotas abaixo.

## Rotas

O Browser por padrão faz requisições do tipo GET, então para utilizar as requisições do tipo POST e DELETE recomenda-se usar o [*Insomnia*](https://insomnia.rest/) ou [*Postman*](https://www.postman.com/downloads/)

###### Rotas para a entidade Ong


+ GET - `/ongs` Retorna todas as Ongs cadastradas.

- POST - `/ongs` Cadastra uma nova Ong.

+ POST - `/login` Retornara um `token`. Recebe no corpo da requisição uma variavel `Id` contendo o id de uma determinada Ong. 

- DELETE - `/ongs` Deleta uma determinada Ong(no cabeçalho da requisição é necessario passar uma variável `Authorization` contendo o token, `Authorization: <Meu token>`).

###### Rotas para a entidade Caso
+ GET - `/incidents?page=<num>` Retorna todos os casos cadastrados. (Essa rota utiliza a técnica de [paginação](https://www.devmedia.com.br/paginacao-em-paginas-jsp/28672) onde sera retornado 5 casos por vez. Substitua `<num>` por um numero de uma pagina. exemplo: `/incidents?page=1`).

- GET - `/profile/<id>` Retorna todos os casos de uma determinada Ong(é necessário informar o Id da Ong no parametro da requisição, exemplo: `/profile/1`).

+ POST - `/incidents` Cadastra um novo caso(no cabeçalho da requisição é necessario passar uma variável Authorization contendo o token, `Authorization: <Meu token>`).

- DELETE - `/incidents/<id>` Deleta o caso correspondete ao id informado(no cabeçalho da requisição é necessario passar uma variável Authorization contendo o token, `Authorization: <Meu token>`).