<h3 align="center">
  Desafio 05: Primeiro projeto Node.js
</h3>

## :rocket: Sobre o desafio

Nesse desafio, você deve criar uma aplicação para continuar treinando o que você aprendeu até agora no Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!

### Rotas da aplicação

- **`POST /transactions`**: A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato.

```bash
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}

```


- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir.

```bash
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```



## ⌨ Como Executar o Projeto:

```bash
# Clonar o repositório
git clone https://github.com/GustavoDev764/gostack-desafio-fundamentos-node

# Entrar no diretório
cd gostack-desafio-fundamentos-node

# Baixar as dependências
npm i

# Executar o servidor
npm start

# Link do servido
http://localhost:3333/
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.
