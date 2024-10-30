import { Container, Form, Button } from 'react-bootstrap'; // Importa componentes do React Bootstrap
import { useState, useEffect } from 'react'; // Importa hooks do React
import { useRouter } from 'next/router'; // Importa o hook useRouter do Next.js para redirecionamento

const EditPet = () => {
  const router = useRouter(); // Hook do Next.js para redirecionar
  const { petCode } = router.query; // Obtém o código do pet da URL

  const [name, setName] = useState(''); // Estado para o nome do pet
  const [age, setAge] = useState(''); // Estado para a idade do pet
  const [breed, setBreed] = useState(''); // Estado para a raça do pet
  const [code, setCode] = useState(''); // Estado para o código do pet
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

  // Hook para buscar os dados do pet ao carregar a página
  useEffect(() => {
    if (petCode && typeof petCode === 'string') { // Verifica se petCode está disponível
      const pet = pets.find((pet) => pet.code === petCode); // Encontra o pet correspondente ao código

      if (pet) {
        setName(pet.name); // Define o nome do pet
        setAge(String(pet.age)); // Converte a idade para string
        setBreed(pet.breed); // Define a raça do pet
        setCode(pet.code); // Define o código do pet
      } else {
        console.error('Pet não encontrado para o código:', petCode); // Loga um erro caso o pet não seja encontrado
      }
    }
  }, [petCode]); // Executa o efeito sempre que petCode mudar

  // Função para salvar as alterações do pet
  const handleSave = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const updatedPet = { name, age, breed, code }; // Cria um objeto com os dados atualizados
    console.log('Pet atualizado:', updatedPet); // Loga os dados do pet atualizado

    // Mostra a mensagem de sucesso
    setSuccessMessage("Pet editado com sucesso!"); // Define a mensagem de sucesso
    setErrorMessage(''); // Limpa a mensagem de erro, se houver

    // Redireciona para a página ListPet após um pequeno delay
    setTimeout(() => {
      router.push('/ListPet'); // Redireciona para ListPet
    }, 1000); // 1 segundo de delay
  };

  // Função para voltar para a página ListPet
  const handleBack = () => {
    router.push('/ListPet'); // Redireciona para ListPet
  };

  // Verifica se o código do pet está presente
  if (!petCode) {
    return <p>Código do pet não encontrado.</p>; // Mensagem caso o código não seja encontrado
  }

  return (
    <Container style={{ marginTop: '200px', width: '400px' }}> {/* Estilo do contêiner */}
      {/* Exibir a mensagem de erro se estiver definida */}
      {errorMessage && (
        <div className="alert alert-danger" style={{ zIndex: 1000, marginBottom: '30px' }}>
          {errorMessage} {/* Mensagem de erro */}
        </div>
      )}

      {/* Exibir a mensagem de sucesso se estiver definida */}
      {successMessage && (
        <div className="alert alert-success" style={{ zIndex: 1000, marginBottom: '80px' }}>
          {successMessage} {/* Mensagem de sucesso */}
        </div>
      )}

      <h3>Editar Pet</h3>

      <Form onSubmit={handleSave}> {/* Formulário para edição do pet */}
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={name} // Valor atual do nome
            onChange={(e) => setName(e.target.value)} // Atualiza o nome ao mudar
            required // Adiciona um requisito para preenchimento
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Idade</Form.Label>
          <Form.Control
            type="number" // Altera para type="number" para validação
            value={age} // Valor atual da idade
            onChange={(e) => setAge(e.target.value)} // Atualiza a idade ao mudar
            required // Adiciona um requisito para preenchimento
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Raça</Form.Label>
          <Form.Control
            type="text"
            value={breed} // Valor atual da raça
            onChange={(e) => setBreed(e.target.value)} // Atualiza a raça ao mudar
            required // Adiciona um requisito para preenchimento
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Código</Form.Label>
          <Form.Control
            type="text"
            value={code} // Valor atual do código
            onChange={(e) => setCode(e.target.value)} // Atualiza o código ao mudar
            required // Adiciona um requisito para preenchimento
          />
        </Form.Group>
        <div className="d-flex justify-content-between" style={{ marginTop: '20px' }}>
          <Button variant="success" onClick={handleBack}>Voltar</Button> {/* Botão Voltar */}
          <Button variant="primary" type="submit">Salvar</Button> {/* Botão para salvar alterações */}
        </div>
      </Form>
    </Container>
  );
};

export default EditPet; // Exporta o componente EditPet para uso em outras partes do aplicativo