// src/pages/login.tsx
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';

// Componente funcional Login
const Login = () => {
  // Estados para armazenar o nome de usuário, senha e mensagens de erro/sucesso
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Mensagem de erro exibida caso login falhe
  const [successMessage, setSuccessMessage] = useState(''); // Mensagem de sucesso exibida caso login seja bem-sucedido
  const router = useRouter(); // Hook para navegação de rotas no Next.js

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar ao enviar o formulário

    // Validação do login fixo: verifica se o nome de usuário e senha estão corretos
    if (username === 'teste' && password === 'testando') {
      setSuccessMessage('Login realizado com sucesso!'); // Exibe a mensagem de sucesso
      setTimeout(() => {
        router.push('/home'); // Redireciona para a página 'home' após 1 segundo
      }, 1000);
    } else {
      setErrorMessage('Usuário ou senha inválidos.'); // Exibe mensagem de erro se o login for incorreto
      setTimeout(() => {
        setErrorMessage(''); // Limpa a mensagem de erro após 2 segundos
      }, 2000);
    }
  };

  return (
    // Container que centraliza o formulário de login vertical e horizontalmente
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>

      {/* Exibe a mensagem de erro se estiver definida */}
      {errorMessage && (
        <div className="alert alert-danger" style={{
          position: 'absolute',
          top: '170px',
          left: '50%',
          transform: 'translateX(-50%)', // Centraliza horizontalmente
          zIndex: 1000, // Garante que a mensagem apareça acima de outros elementos
        }}>
          {errorMessage}
        </div>
      )}

      {/* Exibe a mensagem de sucesso se estiver definida */}
      {successMessage && (
        <div className="alert alert-success" style={{
          position: 'absolute',
          top: '170px',
          left: '50%',
          transform: 'translateX(-50%)', // Centraliza horizontalmente
          zIndex: 1000, // Garante que a mensagem apareça acima de outros elementos
        }}>
          {successMessage}
        </div>
      )}

      {/* Formulário de login */}
      <Form onSubmit={handleSubmit} className="w-50 mt-5">
        <h2 className="mb-4">Login</h2>

        {/* Campo para o nome de usuário */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu usuário"
            value={username} // Liga o valor do campo ao estado `username`
            onChange={(e) => setUsername(e.target.value)} // Atualiza `username` conforme o usuário digita
          />
        </Form.Group>

        {/* Campo para a senha */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password} // Liga o valor do campo ao estado `password`
            onChange={(e) => setPassword(e.target.value)} // Atualiza `password` conforme o usuário digita
          />
        </Form.Group>

        {/* Botão de envio do formulário */}
        <Button variant="primary" type="submit" className="mt-3">
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

// Exporta o componente Login
export default Login;