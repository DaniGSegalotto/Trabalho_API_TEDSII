import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";
// Importa `Link` do Next.js para navegação, e `Container` e `Navbar` do React Bootstrap para estruturar o layout e estilo do rodapé

const FooterBar = () => {
  return (
    <Navbar fixed="bottom" className="footer-bar">
      {/* Define a barra de navegação como fixa no rodapé da página, com uma classe CSS personalizada 'footer-bar' */}

      <Container className="text-center">
        {/* Centraliza o conteúdo dentro do Container */}

        <Navbar.Brand>
          {/* Representa a marca ou o conteúdo principal do rodapé */}

          <div className="footer">
            {/* Div com uma classe personalizada 'footer' para organizar e estilizar o conteúdo textual */}

            <p className="footer-text">Tópicos Especiais em Desenvolvimento de Software II</p>
            {/* Parágrafo que exibe o título do curso ou tema do projeto */}

            <p className="footer-text">Developed by Daniel & Gabriel</p>
            {/* Parágrafo que exibe os nomes dos desenvolvedores */}
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default FooterBar;
// Exporta o componente `FooterBar` para que ele possa ser usado em outras partes do aplicativo