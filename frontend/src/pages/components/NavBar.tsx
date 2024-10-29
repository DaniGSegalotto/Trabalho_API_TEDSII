import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavBar = () => {
  const router = useRouter();
  const [logoutMessage, setLogoutMessage] = useState("");

  const handleLogout = () => {
    setLogoutMessage("Até mais!");
    router.push('/login');
    setTimeout(() => {
      setLogoutMessage("");
    }, 2000);
  };

  return (
    <>
      <Navbar fixed="top" className="nav-bar">
        <Container>
          <Navbar.Brand>
            <span style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}>
              <img 
                src="https://www.shutterstock.com/image-vector/dog-drawing-design-vector-illustration-600nw-2515566401.jpg"
                alt="Logo" 
                style={{ width: '50px', height: '50px', marginRight: '8px' }}
              />
              Dabi Veterinária
            </span>
          </Navbar.Brand>

          <Nav>
            {/* Condição para exibir o link de Junte-se na página de login */}
            {router.pathname === '/login' ? (
              <Nav.Link as={Link} passHref href="/cadastro">
                Junte-se
              </Nav.Link>
            ) : (
              // Condição para ocultar links na página de cadastro
              router.pathname === '/cadastro' ? (
                <Nav.Link as={Link} passHref href="/login">
                  Login
                </Nav.Link>
              ) : (
                // Exibir Home, Nosso Mascote e Nossos Family Pets em outras páginas
                <>
                  <Nav.Link as={Link} passHref href="/home">
                    Home
                  </Nav.Link>

                  <Nav.Link as={Link} passHref href="/cachorroAPI">
                    Nosso Mascote
                  </Nav.Link>

                  <Nav.Link as={Link} passHref href="/pets">
                    Nossos Family Pets
                  </Nav.Link>

                  <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    Sair
                  </Nav.Link>
                </>
              )
            )}
          </Nav>
        </Container>
      </Navbar>
      {logoutMessage && (
        <div className="logout-message" style={{
          position: 'fixed',
          top: '170px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'lightgreen',
          padding: '10px',
          borderRadius: '5px',
          zIndex: 1000,
          transition: 'opacity 0.5s ease',
        }}>
          {logoutMessage}
        </div>
      )}
    </>
  );
};

export default NavBar;
