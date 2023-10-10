import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dadosLogin = {
        cpf,
        senha,
      };

      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosLogin),
      });

      if (response.status === 200) {
        toast.success('Login bem-sucedido!');
      } else if (response.status === 401) {
        toast.error('Usuário não encontrado ou senha incorreta.');
      } else {
        toast.error('Erro ao fazer login. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar o login:', error);
    }

    setCpf('');
    setSenha('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
