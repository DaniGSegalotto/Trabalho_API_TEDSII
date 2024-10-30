// Importa hooks do React e componentes do React Bootstrap necessários para a aplicação.
import { useState } from 'react';
import { Tab, Tabs, Button, Table, Form, Modal, Container } from 'react-bootstrap';

// Define o componente principal que gerencia a lista de pets.
function NoAnimationExample() {
  // Estado para armazenar a lista de cachorros.
  const [petsDogs, setPetsDogs] = useState([
    { name: "Miguel", age: "8 Meses", breed: "Golden", code: "00A1" },
    { name: "Maya", age: "8 Anos", breed: "Xitsu", code: "01A2" },
    { name: "Alberto", age: "3 Anos", breed: "Guaipeca", code: "00A3" },
  ]);

  // Estado para armazenar a lista de gatos.
  const [petsCats, setPetsCats] = useState([
    { name: "Tredds", age: "3 Meses", breed: "Siberian", code: "11B1" },
    { name: "Leonildo", age: "15 Anos", breed: "Himalayan", code: "11B2" },
    { name: "Felipe", age: "15 Dias", breed: "Havana Brown", code: "11B3" },
  ]);

  // Estado para controlar a visibilidade do modal de adição/edição de pets.
  const [showModal, setShowModal] = useState(false);
  
  // Estado para armazenar o pet atual que está sendo adicionado ou editado.
  const [currentPet, setCurrentPet] = useState({ name: "", age: "", breed: "", code: "" });
  
  // Estado para indicar se estamos no modo de edição.
  const [editMode, setEditMode] = useState(false);
  
  // Estado para armazenar a aba ativa (cachorros ou gatos).
  const [activeTab, setActiveTab] = useState("dogs");

  // Função para adicionar um pet à lista correspondente (cachorros ou gatos).
  const handleAddPet = () => {
    if (activeTab === "dogs") setPetsDogs([...petsDogs, currentPet]);
    else setPetsCats([...petsCats, currentPet]);

    // Limpa o estado do pet atual após a adição.
    setCurrentPet({ name: "", age: "", breed: "", code: "" });
    setShowModal(false); // Fecha o modal após a adição.
  };

  // Função para preparar a edição de um pet selecionado.
  const handleEditPet = (index: number) => {
    setEditMode(true); // Ativa o modo de edição.
    setCurrentPet(activeTab === "dogs" ? petsDogs[index] : petsCats[index]); // Define o pet atual a ser editado.
    setShowModal(true); // Abre o modal para edição.
  };

  // Função para salvar as alterações feitas a um pet.
  const handleSaveEditPet = () => {
    const pets = activeTab === "dogs" ? [...petsDogs] : [...petsCats]; // Seleciona a lista de pets correspondente.
    const index = pets.findIndex(pet => pet.code === currentPet.code); // Encontra o índice do pet a ser editado.

    pets[index] = currentPet; // Atualiza o pet na lista.
    if (activeTab === "dogs") setPetsDogs(pets); // Atualiza a lista de cachorros.
    else setPetsCats(pets); // Atualiza a lista de gatos.

    // Limpa o estado do pet atual e fecha o modal.
    setCurrentPet({ name: "", age: "", breed: "", code: "" });
    setEditMode(false);
    setShowModal(false);
  };

  // Função para excluir um pet da lista correspondente.
  const handleDeletePet = (index: number) => {
    if (activeTab === "dogs") setPetsDogs(petsDogs.filter((_, i) => i !== index)); // Filtra o pet a ser excluído.
    else setPetsCats(petsCats.filter((_, i) => i !== index)); // Filtra o pet a ser excluído.
  };

  // Renderiza o componente principal.
  return (
    <Container style={{ marginTop: '100px' }}> {/* Aumenta a margem superior */}
      <h2 className="mb-4">Lista de Pets que já passaram por nossa clínica!</h2>
      <Tabs
        activeKey={activeTab} // Define a aba ativa.
        onSelect={(k) => setActiveTab(k || "dogs")} // Muda a aba ativa ao selecionar.
        className="mb-3 tabs-padding"
      >
        <Tab eventKey="dogs" title="Cachorros">
          {/* Renderiza a tabela de pets cães. */}
          <PetTable pets={petsDogs} handleEditPet={handleEditPet} handleDeletePet={handleDeletePet} />
        </Tab>
        <Tab eventKey="cats" title="Gatos">
          {/* Renderiza a tabela de pets gatos. */}
          <PetTable pets={petsCats} handleEditPet={handleEditPet} handleDeletePet={handleDeletePet} />
        </Tab>
      </Tabs>
      {/* Botão para abrir o modal de adição de pet. */}
      <Button variant="primary" onClick={() => setShowModal(true)}>Adicionar Pet</Button>

      {/* Modal para adicionar ou editar pet */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Editar Pet" : "Adicionar Pet"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Formulário para entrada de dados do pet */}
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={currentPet.name}
                onChange={(e) => setCurrentPet({ ...currentPet, name: e.target.value })} // Atualiza o nome do pet.
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                type="text"
                value={currentPet.age}
                onChange={(e) => setCurrentPet({ ...currentPet, age: e.target.value })} // Atualiza a idade do pet.
              />
            </Form.Group>
            <Form.Group controlId="formBreed">
              <Form.Label>Raça</Form.Label>
              <Form.Control
                type="text"
                value={currentPet.breed}
                onChange={(e) => setCurrentPet({ ...currentPet, breed: e.target.value })} // Atualiza a raça do pet.
              />
            </Form.Group>
            <Form.Group controlId="formCode">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                value={currentPet.code}
                onChange={(e) => setCurrentPet({ ...currentPet, code: e.target.value })} // Atualiza o código do pet.
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Botões para cancelar ou salvar alterações */}
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={editMode ? handleSaveEditPet : handleAddPet}>
            {editMode ? "Salvar Alterações" : "Adicionar"} {/* Texto do botão baseado no modo */}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

// Componente para renderizar a tabela de pets.
const PetTable = ({ pets, handleEditPet, handleDeletePet }) => (
  <Table bordered className="custom-table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Raça</th>
        <th>Código</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {/* Mapeia cada pet para uma linha na tabela */}
      {pets.map((pet, index) => (
        <tr key={index}>
          <td>{pet.name}</td>
          <td>{pet.age}</td>
          <td>{pet.breed}</td>
          <td>{pet.code}</td>
          <td>
            {/* Botões para editar e excluir o pet */}
            <Button variant="warning" onClick={() => handleEditPet(index)}>Editar</Button>{' '}
            <Button variant="danger" onClick={() => handleDeletePet(index)}>Excluir</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

// Exporta o componente principal como padrão.
export default NoAnimationExample;
