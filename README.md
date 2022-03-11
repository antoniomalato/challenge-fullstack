Version: 1.0.0

Sistema com o objetivo de criar um cadastro para o controle de container. Até o momento o backend com o db foram criados, o próximo objetivo é
implementar validações mais eficientes no back, criar o frontend, onde poderá ser incluído novos cadastros, listar os clientes e os containers
e gerar um relatório de cada cliente.

Para testar o projeto;

1. Clone o repositório
  
  `git clone git@github.com:antoniomalato/challenge-fullstack.git`

2. Instale as dependências
  - `npm install`
- Ferramentas utilizadas
  - `nodejs - mysql2 - sequelize - nodemon - joi`
  
- Para povoar o banco utilize o comando
  - `npx sequelize-cli db:create` Esse comando cria o banco
  - `npx sequelize-cli db:migrate` Esse comando adiciona as migrations no banco
  - `npx sequelize-cli db:seed:all` Esse comando adiciona as informações do seed no banco
        ou se preferir
  - `npm run db:reset` Esse comando dropa o banco, cria o banco, cria as migrations e adiciona as informaçoes contindas no seed,
  porém cuidado ao usar, se você cadastrar informações no banco e usar esse comando, elas seram perdidas
  
-Para simular o frontend utiliza alguma das ferramentas
  - `postman - insomnia - thunderclient`

## Config

O banco está configurado com variáveis de ambiente, você pode criar um `.env` na raiz do projeto ou colocar as informações do seu banco local direto
no arquivo local, basta acessar a pasta `src > config > config.js`


# API

## CLIENT

A api do cliente possui 6 Endpoints:
 - [POST] Criar cliente 
 - [GET] Listar todos os clientes        
 - [GET] Listar pelo id
 - [PUT] Atualizar cliente pelo id
 - [DELETE] Deletar cliente pelo id

  
### Endpoints
 
#### [POST] Criando novo cliente

Recebe um JSON com cliente e salva o cliente no banco de dados.
  
##### Path: 

>   /register

##### Example:

```
{
    "cliente": "CONT1234567",
    "numero": "0,
    "tipo": "cheio",
    "categoria": "masculino"
}
```

##### Return

Retornará um JSON com cliente criado ou mensagem de erro

##### HTTP Status return:

* 201: Success on client creation
* 400: Invalid request parameters
* 500: Server internal error

#### [GET] Listar todos clientes

##### Path: 

>    /client

Retornará uma matriz JSON com todos os clientes

 
#### [GET] Listar cliente por id

##### Path:

>    /cliente/:id
    
##### Return

Retornará um JSON com o cliente ou erro

##### HTTP Status return:

* 200: Success on list clients
* 404: Not found - no clients saved on database with the received ID
* 500: Server internal error

 
#### [PUT] Atualizar por id

##### Path:

>    /cliente/update/:id
    
##### Return

Retornará um JSON com o cliente atualizado ou mensagem de erro

##### HTTP Status return:

* 200: Success on update
* 404: Not found - no clients saved on database with the received ID
* 500: Server internal error


#### [DELETE] Deleta cliente pelo id


##### Path:

>    /remove/:id
    
##### Return

Retornará um JSON com o cliente excluído ou mensagem de erro.

##### HTTP Status return:

* 200: Success on delete
* 404: Not found - no clients saved on database with the received ID
* 500: Server internal error


---

## Tipos de Movimentação

A api do cliente possui 6 Endpoints:
 - [POST] Criar tipo de movimentaçao 
 - [GET] Listar todas as movimentaçoes       
 - [GET] Listar pelo id
 - [PUT] Atualizar movimentação pelo id
 - [DELETE] Deletar pelo id

  
### Endpoints
 
#### [POST] Criar tipo de movimentaçao 

Recebe um JSON com movimentaçao e salva o cliente no banco de dados.
  
##### Path: 

>   /create

##### Example:

```
{
  id: 1,
  tipo: 'embarque',
  inicio: '2022-02-01T19:58:00.000Z',
  fim: '2022-02-01T22:58:00.000Z',
}
```

##### Return

Retornará um JSON com movimentação criado ou mensagem de erro

##### HTTP Status return:

* 201: Success on client creation
* 400: Invalid request parameters
* 500: Server internal error

#### [GET] Listar todas as movimentações

##### Path: 

>    /moviment

Retornará uma matriz JSON com todos os clientes

 
#### [GET] Listar movimento por id

##### Path:

>    /moviment/:id
    
##### Return

Retornará um JSON com a movimentação ou erro

##### HTTP Status return:

* 200: Success on list clients
* 404: Not found - no clients saved on database with the received ID
* 500: Server internal error

 
#### [PUT] Atualizar por id

##### Path:

>    /moviment/update/:id
    
##### Return

Retornará um JSON com a movimentação atualizada ou mensagem de erro

##### HTTP Status return:

* 200: Success on update
* 404: Not found - no clients saved on database with the received ID
* 500: Server internal error


#### [DELETE] Deleta movimentação pelo id


##### Path:

>    /moviment/remove/:id
    
##### Return

Retornará um JSON com a movimentação excluído ou mensagem de erro.

##### HTTP Status return:

* 200: Success on delete
* 404: Not found - no clients saved on database with the received ID
* 500: Server internal error

---
