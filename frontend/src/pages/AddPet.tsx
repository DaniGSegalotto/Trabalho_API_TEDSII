import { Button, Form, Container } from 'react-bootstrap'; // Importa componentes do React Bootstrap para estilização
import { useState } from 'react'; // Importa o hook useState para gerenciar o estado
import { useRouter } from 'next/router'; // Importa o hook useRouter para manipular a navegação

const AddPet = () => {
  const [name, setName] = useState(''); // Estado para o nome do pet
  const [age, setAge] = useState(''); // Estado para a idade do pet
  const [breed, setBreed] = useState(''); // Estado para a raça do pet
  const [code, setCode] = useState(''); // Estado para o código do pet
  const [successMessage, setSuccessMessage] = useState(''); // Estado para a mensagem de sucesso
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro
  const router = useRouter(); // Cria uma instância do roteador

  const handleAdd = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const newPet = { name, age, breed, code }; // Cria um novo objeto pet com os dados do formulário

    // Mostra a mensagem de sucesso
    setSuccessMessage("Pet adicionado com sucesso!"); // Define a mensagem de sucesso
    setErrorMessage(''); // Limpa a mensagem de erro, se houver

    // Redireciona para a página ListPet após um pequeno delay
    setTimeout(() => {
      router.push('/ListPet'); // Redireciona para a página ListPet
    }, 1000); // 1 segundo de delay
  };

  const handleBack = () => {
    router.push('/ListPet'); // Redireciona para ListPet quando o botão Voltar é clicado
  };

  return (
    <Container style={{ marginTop: '200px', width: '400px' }}> {/* Container com margens e largura definida */}
      {/* Exibir a mensagem de erro se estiver definida */}
      {errorMessage && (
        <div className="alert alert-danger" style={{ zIndex: 1000, marginBottom: '30px' }}>
          {errorMessage} {/* Mensagem de erro exibida */}
        </div>
      )}

      {/* Exibir a mensagem de sucesso se estiver definida */}
      {successMessage && (
        <div className="alert alert-success" style={{ zIndex: 1000, marginBottom: '80px' }}>
          {successMessage} {/* Mensagem de sucesso exibida */}
        </div>
      )}

      <h3 style={{ marginTop: '10px' }}>Adicionar Pet</h3> {/* Título da página */}

      <Form onSubmit={handleAdd} style={{ marginTop: '20px' }}> {/* Formulário com ação de adição de pet */}
        <Form.Group>
          <Form.Label>Nome</Form.Label> {/* Rótulo para o campo de nome */}
          <Form.Control
            type="text"
            placeholder="Nome do pet" // Placeholder do campo de entrada
            value={name} // Valor do campo de entrada ligado ao estado
            onChange={(e) => setName(e.target.value)} // Atualiza o estado com o valor do input
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Idade</Form.Label> {/* Rótulo para o campo de idade */}
          <Form.Control
            type="text"
            placeholder="Idade do pet" // Placeholder do campo de entrada
            value={age} // Valor do campo de entrada ligado ao estado
            onChange={(e) => setAge(e.target.value)} // Atualiza o estado com o valor do input
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Raça</Form.Label> {/* Rótulo para o campo de raça */}
          <Form.Control
            type="text"
            placeholder="Raça do pet" // Placeholder do campo de entrada
            value={breed} // Valor do campo de entrada ligado ao estado
            onChange={(e) => setBreed(e.target.value)} // Atualiza o estado com o valor do input
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Código</Form.Label> {/* Rótulo para o campo de código */}
          <Form.Control
            type="text"
            placeholder="Código do pet" // Placeholder do campo de entrada
            value={code} // Valor do campo de entrada ligado ao estado
            onChange={(e) => setCode(e.target.value)} // Atualiza o estado com o valor do input
          />
        </Form.Group>
        <div className="d-flex justify-content-between" style={{ marginTop: '20px' }}>
          <Button variant="success" onClick={handleBack}>Voltar</Button> {/* Botão Voltar verde */}
          <Button variant="primary" type="submit">Adicionar</Button> {/* Botão de adicionar pet */}
        </div>
      </Form>
    </Container>
  );
};

export default AddPet; // Exporta o componente AddPet para uso em outras partes do aplicativo