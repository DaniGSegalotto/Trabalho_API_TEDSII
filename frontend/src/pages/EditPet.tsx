import { Container, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditPet = () => {
  const router = useRouter();
  const { petCode } = router.query; // Obtém o código do pet da URL

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [code, setCode] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Estado para a mensagem de sucesso
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro

  // Lista de pets (substitua por dados reais conforme necessário)
  const pets = [
    { name: 'Rex', age: 3, breed: 'Labrador', code: 'D01' },
    { name: 'Fido', age: 2, breed: 'Poodle', code: 'D02' },
    { name: 'Mia', age: 2, breed: 'Siamese', code: 'C01' },
    { name: 'Luna', age: 3, breed: 'Persian', code: 'C02' },
    // Adicione mais pets conforme necessário
  ];

  useEffect(() => {
    if (petCode && typeof petCode === 'string') {
      const pet = pets.find((pet) => pet.code === petCode);

      if (pet) {
        setName(pet.name);
        setAge(String(pet.age)); // Converta para string
        setBreed(pet.breed);
        setCode(pet.code);
      } else {
        console.error('Pet não encontrado para o código:', petCode);
      }
    }
  }, [petCode]);

  const handleSave = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const updatedPet = { name, age, breed, code };
    console.log('Pet atualizado:', updatedPet); // Aqui você pode implementar a lógica para atualizar o pet

    // Mostra a mensagem de sucesso
    setSuccessMessage("Pet editado com sucesso!");
    setErrorMessage(''); // Limpa a mensagem de erro, se houver

    // Redireciona para a página ListPet após um pequeno delay
    setTimeout(() => {
      router.push('/ListPet'); // Redireciona para ListPet
    }, 1000); // 1 segundo de delay
  };

  const handleBack = () => {
    router.push('/ListPet'); // Redireciona para ListPet
  };

  if (!petCode) {
    return <p>Código do pet não encontrado.</p>;
  }

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

      <h3>Editar Pet</h3>
      
      <Form onSubmit={handleSave}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Adiciona um requisito para preenchimento
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Idade</Form.Label>
          <Form.Control
            type="number" // Altera para type="number" para validação
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required // Adiciona um requisito para preenchimento
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Raça</Form.Label>
          <Form.Control
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required // Adiciona um requisito para preenchimento
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Código</Form.Label>
          <Form.Control
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required // Adiciona um requisito para preenchimento
          />
        </Form.Group>
        <div className="d-flex justify-content-between" style={{ marginTop: '20px' }}>
          <Button variant="success" onClick={handleBack}>Voltar</Button> {/* Botão Voltar */}
          <Button variant="primary" type="submit">Salvar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditPet;
