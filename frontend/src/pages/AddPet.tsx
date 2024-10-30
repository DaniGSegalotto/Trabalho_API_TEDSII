import { Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';

const AddPet = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [code, setCode] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Estado para a mensagem de sucesso
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro
  const router = useRouter(); // Cria uma instância do roteador

  const handleAdd = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const newPet = { name, age, breed, code };

    // Mostra a mensagem de sucesso
    setSuccessMessage("Pet adicionado com sucesso!");
    setErrorMessage(''); // Limpa a mensagem de erro, se houver

    // Redireciona para a página ListPet após um pequeno delay
    setTimeout(() => {
      router.push('/ListPet'); // Redireciona para ListPet
    }, 1000); // 1 segundo de delay
  };

  const handleBack = () => {
    router.push('/ListPet'); // Redireciona para ListPet
  };

  return (
    <Container style={{ marginTop: '200px', width: '400px' }}>
      {/* Exibir a mensagem de erro se estiver definida */}
      {errorMessage && (
        <div className="alert alert-danger" style={{ zIndex: 1000, marginBottom: '30px' }}>
          {errorMessage}
        </div>
      )}

      {/* Exibir a mensagem de sucesso se estiver definida */}
      {successMessage && (
        <div className="alert alert-success" style={{ zIndex: 1000, marginBottom: '80px' }}>
          {successMessage}
        </div>
      )}

      <h3 style={{ marginTop: '10px' }}>Adicionar Pet</h3>
      
      <Form onSubmit={handleAdd} style={{ marginTop: '20px' }}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do pet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Idade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Idade do pet"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Raça</Form.Label>
          <Form.Control
            type="text"
            placeholder="Raça do pet"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Código</Form.Label>
          <Form.Control
            type="text"
            placeholder="Código do pet"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-between" style={{ marginTop: '20px' }}>
          <Button variant="success" onClick={handleBack}>Voltar</Button> {/* Botão Voltar verde */}
          <Button variant="primary" type="submit">Adicionar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddPet;
