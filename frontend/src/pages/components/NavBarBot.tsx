import Button from 'react-bootstrap/Button'; // Importa o componente de botão do React Bootstrap
import Container from 'react-bootstrap/Container'; // Importa o componente de contêiner para layout responsivo
import Form from 'react-bootstrap/Form'; // Importa o componente de formulário do React Bootstrap
import Nav from 'react-bootstrap/Nav'; // Importa o componente de navegação do React Bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importa o componente de barra de navegação do React Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown'; // Importa o componente de dropdown para o menu de navegação

// Declaração do componente NavBarBot
function NavBarBot() {
  return (
    // Define a barra de navegação com a classe de fundo 'bg-body-tertiary' e permite expansão no ponto lg (tela grande)
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid> {/* Contêiner fluido para ocupar a largura total */}
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> {/* Título ou logo da barra de navegação */}
        <Navbar.Toggle aria-controls="navbarScroll" /> {/* Toggle para abrir/fechar o menu em telas pequenas */}
        <Navbar.Collapse id="navbarScroll"> {/* Colapsa o conteúdo da navegação para dispositivos móveis */}
          <Nav
            className="me-auto my-2 my-lg-0" // Define margens para centralizar o menu
            style={{ maxHeight: '100px' }} // Limita a altura do menu
            navbarScroll // Permite rolagem no menu caso o conteúdo ultrapasse a altura definida
          >
            <Nav.Link href="#action1">Home</Nav.Link> {/* Link para a página inicial */}
            <Nav.Link href="#action2">Link</Nav.Link> {/* Link para outra página ou seção */}
            <NavDropdown title="Link" id="navbarScrollingDropdown"> {/* Menu dropdown para links adicionais */}
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item> {/* Item de ação no dropdown */}
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item> {/* Outro item de ação no dropdown */}
              <NavDropdown.Divider /> {/* Linha divisória no dropdown */}
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> {/* Outro item de dropdown */}
            </NavDropdown>
            <Nav.Link href="#" disabled> {/* Link desabilitado no menu */}
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex"> {/* Formulário de busca com layout flexível */}
            <Form.Control
              type="search" // Define o tipo de entrada como pesquisa
              placeholder="Search" // Placeholder para o campo de busca
              className="me-2" // Margem à direita para o layout
              aria-label="Search" // Acessibilidade para o rótulo do campo de pesquisa
            />
            <Button variant="outline-success">Search</Button> {/* Botão de busca com contorno e estilo de sucesso */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBot; // Exporta o componente NavBarBot para uso em outras partes do aplicativo