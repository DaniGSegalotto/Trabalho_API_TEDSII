import { Button, Table, Container, Tab, Tabs, Modal } from 'react-bootstrap';
import Link from 'next/link'; // Importe o Link do Next.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const ListPet = () => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [editPet, setEditPet] = useState(null);
  const [petsDogs, setPetsDogs] = useState([
    { name: 'Rex', age: 3, breed: 'Labrador', code: 'D01' },
    { name: 'Fido', age: 2, breed: 'Poodle', code: 'D02' },
    { name: 'Spike', age: 4, breed: 'Bulldog', code: 'D03' },
    { name: 'Max', age: 5, breed: 'Beagle', code: 'D04' },
    { name: 'Buddy', age: 1, breed: 'Golden Retriever', code: 'D05' },
  ]);

  const [petsCats, setPetsCats] = useState([
    { name: 'Mia', age: 2, breed: 'Siamese', code: 'C01' },
    { name: 'Luna', age: 3, breed: 'Persian', code: 'C02' },
    { name: 'Oliver', age: 4, breed: 'Maine Coon', code: 'C03' },
    { name: 'Bella', age: 2, breed: 'Bengal', code: 'C04' },
    { name: 'Charlie', age: 3, breed: 'Sphynx', code: 'C05' },
  ]);

  const handleDeletePet = (pet) => {
    setSelectedPet(pet);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Lógica para excluir o pet
    if (selectedPet.code.startsWith('D')) {
      // Se for um cachorro
      setPetsDogs((prevPets) => prevPets.filter((pet) => pet.code !== selectedPet.code));
    } else if (selectedPet.code.startsWith('C')) {
      // Se for um gato
      setPetsCats((prevPets) => prevPets.filter((pet) => pet.code !== selectedPet.code));
    }
    setShowDeleteModal(false);
    setSelectedPet(null);
  };

  const handleEditPet = (pet) => {
    setEditPet(pet);
    setShowEditModal(true);
  };

  const confirmEdit = () => {
    // Redireciona para a página de edição com o código do pet
    router.push(`/EditPet?petCode=${editPet.code}`);
    setShowEditModal(false);
  };

  return (
    <Container style={{ marginTop: '120px' }}>
      <Tabs defaultActiveKey="dogs" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="dogs" title="Cachorros">
          <Table bordered>
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
              {petsDogs.map((pet, index) => (
                <tr key={index}>
                  <td>{pet.name}</td>
                  <td>{pet.age}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.code}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleEditPet(pet)}>Editar</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeletePet(pet)}>Excluir</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="cats" title="Gatos">
          <Table bordered>
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
              {petsCats.map((pet, index) => (
                <tr key={index}>
                  <td>{pet.name}</td>
                  <td>{pet.age}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.code}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleEditPet(pet)}>Editar</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeletePet(pet)}>Excluir</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>

      {/* Link para Adicionar Pet */}
      <Link href="/AddPet" passHref>
        <Button variant="primary" style={{ marginTop: '20px' }}>Adicionar Novo Pet</Button>
      </Link>

      {/* Modal de confirmação de edição */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Edição</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Você tem certeza que deseja editar o pet <strong>{editPet?.name}</strong>?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancelar
          </Button>
          <Button variant="warning" onClick={confirmEdit}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Você tem certeza que deseja excluir este pet?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ListPet;
