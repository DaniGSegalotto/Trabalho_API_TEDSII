import Link from "next/link"; // Importa o componente Link do Next.js para navegação entre páginas
import { Navbar, Nav, Container } from "react-bootstrap"; // Importa componentes de navegação e layout do React Bootstrap
import { useRouter } from 'next/router'; // Importa o hook useRouter do Next.js para gerenciar navegação programática
import { useState } from 'react'; // Importa o hook useState do React para gerenciamento de estado

// Declaração do componente NavBar
const NavBar = () => {
  const router = useRouter(); // Cria uma instância do router para navegação
  const [logoutMessage, setLogoutMessage] = useState(""); // Estado para armazenar mensagem de logout temporária

  // Função para lidar com o logout
  const handleLogout = () => {
    setLogoutMessage("Até mais!"); // Define uma mensagem de logout para o estado
    router.push('/login'); // Redireciona o usuário para a página de login
    setTimeout(() => {
      setLogoutMessage(""); // Limpa a mensagem de logout após 2 segundos
    }, 2000); // Tempo em milissegundos
  };

  return (
    <>
      <Navbar fixed="top" className="nav-bar"> {/* Define a barra de navegação fixada no topo com a classe 'nav-bar' para estilo */}
        <Container>
          <Navbar.Brand> {/* Componente de marcação de nome ou logo */}
            <span style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}> {/* Define estilo para alinhar logo e texto */}
              <img
                src="https://www.shutterstock.com/image-vector/dog-drawing-design-vector-illustration-600nw-2515566401.jpg" // URL da imagem para o logo
                alt="Logo"
                style={{ width: '50px', height: '50px', marginRight: '8px' }} // Estilo para definir o tamanho da imagem e espaçamento
              />
              Dabi Veterinária {/* Nome do site ou organização */}
            </span>
          </Navbar.Brand>

          <Nav>
            {/* Condicional para exibir 'Junte-se' na página de login */}
            {router.pathname === '/login' ? (
              <Nav.Link as={Link} passHref href="/cadastro"> {/* Link para a página de cadastro */}
                Junte-se
              </Nav.Link>
            ) : (
              // Condicional para exibir 'Login' na página de cadastro
              router.pathname === '/cadastro' ? (
                <Nav.Link as={Link} passHref href="/login"> {/* Link para a página de login */}
                  Login
                </Nav.Link>
              ) : (
                // Exibe links adicionais para outras páginas quando não está nas rotas de login ou cadastro
                <>
                  <Nav.Link as={Link} passHref href="/home"> {/* Link para a página Home */}
                    Home
                  </Nav.Link>

                  <Nav.Link as={Link} passHref href="/cachorroAPI"> {/* Link para a página Nosso Mascote */}
                    Nosso Mascote
                  </Nav.Link>

                  <Nav.Link as={Link} passHref href="/ListPet"> {/* Link para a página Nossos Family Pets */}
                    Nossos Family Pets
                  </Nav.Link>

                  <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}> {/* Link para acionar o logout */}
                    Sair
                  </Nav.Link>
                </>
              )
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Renderização condicional da mensagem de logout */}
      {logoutMessage && (
        <div className="logout-message" style={{
          position: 'fixed', // Posiciona a mensagem de forma fixa
          top: '170px', // Define a distância do topo
          left: '50%', // Centraliza horizontalmente
          transform: 'translateX(-50%)', // Ajusta para centralização exata
          backgroundColor: 'lightgreen', // Cor de fundo verde claro para a mensagem
          padding: '10px', // Espaçamento interno
          borderRadius: '5px', // Bordas arredondadas
          zIndex: 1000, // Coloca o elemento acima de outros no layout
          transition: 'opacity 0.5s ease', // Efeito de transição suave
        }}>
          {logoutMessage} {/* Exibe o conteúdo da mensagem de logout */}
        </div>
      )}
    </>
  );
};

export default NavBar; // Exporta o componente NavBar para ser utilizado em outras partes do aplicativo
