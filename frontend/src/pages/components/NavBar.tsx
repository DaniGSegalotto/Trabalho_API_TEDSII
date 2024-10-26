import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar fixed="top" className="nav-bar">
        <Container>
        <Navbar.Brand>
                    <Nav.Link as={Link} passHref href="/">
                        <img 
                            src="https://www.shutterstock.com/image-vector/dog-drawing-design-vector-illustration-600nw-2515566401.jpg" // Coloque aqui a URL da sua imagem
                            alt="Logo" 
                            style={{ width: '50px', height: '50px', marginRight: '8px' }} // Estilização da imagem
                        />
                        Dabi Veterinária
                    </Nav.Link>
                </Navbar.Brand>

          <Nav>

            <Nav.Link as={Link} passHref href="/cachorroAPI">
              Nosso Mascote
            </Nav.Link>

            <Nav.Link as={Link} passHref href="/pets">
              Nossos Family Pets
            </Nav.Link>

            <Nav.Link as={Link} passHref href="/cadastro">
              Junte-se
            </Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
