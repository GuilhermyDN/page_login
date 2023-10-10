import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (nome && email && cpf && senha) {
      try {
        const cadastroData = {
          nome,
          email,
          cpf,
          senha,
        };

        const response = await fetch('http://localhost:3000/cadastros', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cadastroData),
        });

        if (response.status === 200) {
          toast.success('Cadastro bem-sucedido!');
        } else {
          toast.error('Erro ao cadastrar. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao enviar o cadastro:', error);
      }
    } else {
      console.log('Preencha todos os campos.');
    }

    setNome('');
    setEmail('');
    setCpf('');
    setSenha('');
  };

  return (
    <div className="Cadastro_page">
      <h2>Cadastro Bancário</h2>
      <form onSubmit={handleCadastro}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
            <label htmlFor='cpf'>CPF:</label>
            <input 
            type="text" 
            name="cpf" 
            pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}' 
            title='xxx.xxx.xxx-xx'
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
        <button type="submit">Cadastrar</button>
        <Link to="/login" className='link-to'>Login</Link>
      </form>
    </div>
  );
}

export default Cadastro;
