import React, { useState } from 'react'; // Importa a biblioteca React e o hook useState
import { Button, Form } from 'react-bootstrap'; // Importa componentes Button e Form do React Bootstrap
import { useRouter } from 'next/router'; // Importa o hook useRouter do Next.js para redirecionamento

const Cadastro = () => {
  const [formData, setFormData] = useState({ // Estado para armazenar os dados do formulário
    nome: '', // Nome do usuário
    login: '', // Login do usuário
    senha: '', // Senha do usuário
  });
  const [successMessage, setSuccessMessage] = useState(''); // Estado para a mensagem de sucesso
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro
  const router = useRouter(); // Hook do Next.js para redirecionar

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Desestrutura o evento para obter o nome e o valor do campo
    setFormData({ // Atualiza o estado do formulário
      ...formData,
      [name]: value, // Atualiza o campo correspondente
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Validação dos campos
    if (!formData.nome || !formData.login || !formData.senha) { // Verifica se todos os campos estão preenchidos
      setErrorMessage('Todos os campos são obrigatórios.'); // Mensagem de erro se algum campo estiver vazio
      return; // Sai da função se houver erro
    }

    // Aqui você pode implementar a lógica para enviar os dados do formulário, como uma requisição API
    console.log('Dados do cadastro:', formData); // Loga os dados do cadastro no console

    // Exibir a mensagem de sucesso e resetar o formulário
    setSuccessMessage('Cadastro realizado com sucesso!'); // Define a mensagem de sucesso
    setFormData({ nome: '', login: '', senha: '' }); // Reseta os campos do formulário
    setErrorMessage(''); // Limpa a mensagem de erro, se houver

    // Redireciona para a página de login após 1 segundo
    setTimeout(() => {
      router.push('/login'); // Redireciona para a página de login
    }, 1000);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1>Cadastro</h1>
      <Form onSubmit={handleSubmit} style={{ width: '700px' }}> {/* Aumenta a largura do formulário aqui */}
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            name="nome" // Nome do campo
            value={formData.nome} // Valor atual do campo
            onChange={handleChange} // Função chamada ao mudar o campo
          />
        </Form.Group>

        <Form.Group controlId="formLogin">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu login"
            name="login" // Nome do campo
            value={formData.login} // Valor atual do campo
            onChange={handleChange} // Função chamada ao mudar o campo
          />
        </Form.Group>

        <Form.Group controlId="formSenha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            name="senha" // Nome do campo
            value={formData.senha} // Valor atual do campo
            onChange={handleChange} // Função chamada ao mudar o campo
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3"> {/* Botão para enviar o formulário */}
          Cadastrar
        </Button>
      </Form>

      {/* Exibir a mensagem de erro se estiver definida */}
      {errorMessage && (
        <div className="alert alert-danger mt-3" style={{
          position: 'absolute', // Posição absoluta para sobrepor outros elementos
          top: '20%', // Ajuste a posição vertical conforme necessário
          zIndex: 1000, // Camada superior
        }}>
          {errorMessage}
        </div>
      )}

      {/* Exibir a mensagem de sucesso se estiver definida */}
      {successMessage && (
        <div className="alert alert-success mt-3" style={{
          position: 'absolute', // Posição absoluta para sobrepor outros elementos
          top: '20%', // Ajuste a posição vertical conforme necessário
          zIndex: 1000, // Camada superior
        }}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Cadastro; // Exporta o componente Cadastro para uso em outras partes do aplicativo