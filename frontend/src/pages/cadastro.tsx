import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    login: '',
    senha: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // Estado para a mensagem de sucesso
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro
  const router = useRouter(); // Hook do Next.js para redirecionar

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos
    if (!formData.nome || !formData.login || !formData.senha) {
      setErrorMessage('Todos os campos são obrigatórios.'); // Mensagem de erro se algum campo estiver vazio
      return;
    }

    // Aqui você pode implementar a lógica para enviar os dados do formulário, como uma requisição API
    console.log('Dados do cadastro:', formData);

    // Exibir a mensagem de sucesso e resetar o formulário
    setSuccessMessage('Cadastro realizado com sucesso!');
    setFormData({ nome: '', login: '', senha: '' });
    setErrorMessage(''); // Limpar a mensagem de erro, se houver

    // Redireciona para a página de login após 1 segundo
    setTimeout(() => {
      router.push('/login'); // Redireciona para a página de login
    }, 1000);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1>Cadastro</h1>
      <Form onSubmit={handleSubmit} style={{ width: '700px' }}> {/* Aumente a largura do formulário aqui */}
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formLogin">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu login"
            name="login"
            value={formData.login}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formSenha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Cadastrar
        </Button>
      </Form>

      {/* Exibir a mensagem de erro se estiver definida */}
      {errorMessage && (
        <div className="alert alert-danger mt-3" style={{
          position: 'absolute',
          top: '20%', // Ajuste a posição vertical conforme necessário
          zIndex: 1000,
        }}>
          {errorMessage}
        </div>
      )}

      {/* Exibir a mensagem de sucesso se estiver definida */}
      {successMessage && (
        <div className="alert alert-success mt-3" style={{
          position: 'absolute',
          top: '20%', // Ajuste a posição vertical conforme necessário
          zIndex: 1000,
        }}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Cadastro;
