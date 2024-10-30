import "@/styles/globals.css"; // Importa o arquivo de estilos globais do aplicativo
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap para estilização dos componentes
import type { AppProps } from "next/app"; // Define o tipo de propriedade do aplicativo usando AppProps do Next.js
import NavBar from "./components/NavBar"; // Importa o componente de barra de navegação NavBar
import { Container } from "react-bootstrap"; // Importa o componente Container do React Bootstrap para layout responsivo
import FooterBar from "./components/FooterBar"; // Importa o componente de rodapé FooterBar

// Função principal do aplicativo que envolve todas as páginas
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}> {/* Define um contêiner flexível verticalmente para ocupar toda a altura da viewport */}
        <NavBar></NavBar> {/* Renderiza o componente de navegação no topo */}
        <Container className="flex-grow-1 d-flex justify-content-center"> {/* Contêiner principal para o conteúdo da página, ajustável ao crescimento */}
          <Component {...pageProps} /> {/* Renderiza o componente da página atual com as propriedades passadas */}
        </Container>
        <FooterBar></FooterBar> {/* Renderiza o componente de rodapé no final da página */}
      </div>
    </>
  );
}
