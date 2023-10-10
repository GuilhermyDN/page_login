const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const cadastros = [];

app.post('/cadastros', (req, res) => {
  const { nome, email, cpf, senha } = req.body;

  const novoCadastro = {
    nome,
    email,
    cpf,
    senha,
  };

  cadastros.push(novoCadastro);

  res.status(200).json({ message: 'Cadastro recebido com sucesso!' });
});

app.get('/cadastros', (req, res) => {
  res.status(200).json(cadastros);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.post('/login', (req, res) => {
  const { cpf, senha } = req.body;

  const usuarioExistente = cadastros.find((cadastro) => cadastro.cpf === cpf);

  if (!usuarioExistente) {
    res.status(401).json({ message: 'Usuário não encontrado.' });
  } else if (usuarioExistente.senha !== senha) {
    res.status(401).json({ message: 'Senha incorreta.' });
  } else {
    res.status(200).json({ message: 'Login bem-sucedido!' });
  }
});
