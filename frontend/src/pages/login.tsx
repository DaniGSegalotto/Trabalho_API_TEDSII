// src/pages/login.tsx
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro
  const [successMessage, setSuccessMessage] = useState(''); // Estado para a mensagem de sucesso
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Verifica se o usuário e senha estão corretos
    if (username === 'teste' && password === 'testando') {
      setSuccessMessage('Login realizado com sucesso!');
      setTimeout(() => {
        router.push('/home'); // Redireciona após 1 segundo
      }, 1000);
    } else {
      setErrorMessage('Usuário ou senha inválidos.');
      setTimeout(() => {
        setErrorMessage(''); // Limpa a mensagem após 2 segundos
      }, 2000);
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      {/* Exibir a mensagem de erro se estiver definida */}
      {errorMessage && (
        <div className="alert alert-danger" style={{
          position: 'absolute',
          top: '170px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}>
          {errorMessage}
        </div>
      )}

      {/* Exibir a mensagem de sucesso se estiver definida */}
      {successMessage && (
        <div className="alert alert-success" style={{
          position: 'absolute',
          top: '170px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}>
          {successMessage}
        </div>
      )}

      <Form onSubmit={handleSubmit} className="w-50 mt-5">
        <h2 className="mb-4">Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
