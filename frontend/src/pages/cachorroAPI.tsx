import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import { useEffect, useState } from "react"; // Importa hooks do React para gerenciamento de estado e efeitos colaterais
import { Button, Col, Container, Image, Modal, ModalBody, ModalHeader, ModalTitle, Row, Spinner } from "react-bootstrap"; // Importa componentes do React Bootstrap para a interface

const CachorroDoDia = () => {
  const [imgRandom, setImgRandom] = useState(""); // Estado para armazenar a URL da imagem aleatória
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal (não usado no código atual)
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento da imagem
  const [update, setUpdate] = useState(true); // Estado para controle de atualização (não utilizado no código atual)

  // Função para buscar uma imagem aleatória usando Axios
  const buscaImgRandomAxios = () => {
    setLoading(true); // Inicia o carregamento
    axios.get("https://picsum.photos/id/237/400/600") // Requisição GET para obter a imagem
      .then((response) => {
        setImgRandom(response.config.url); // Define a URL da imagem obtida
        setLoading(false); // Finaliza o carregamento
      })
      .catch((error) => {
        console.error(error); // Log de erro no console em caso de falha na requisição
      });
  };

  useEffect(() => {
    buscaImgRandomAxios(); // Chama a função para buscar a imagem aleatória sempre que 'update' mudar
  }, [update]);

  return (
    <>
      <Container className="mt-5 p-5"> {/* Container principal com margens e preenchimento */}
        <Row className="align-items-center mb-4 sticky-top"> {/* Linha para o título e descrição */}
          <Col>
            <h2 className="latita-title">Conheçam Latita</h2> {/* Título */}
            <br></br>
            <p className="latita-description">Latita, uma adorável cachorrinha de pelo macio e olhos brilhantes, chegou à nossa veterinária em um momento de desespero.
              Resgatada de uma situação de abandono, ela enfrentava não apenas desafios físicos, mas também emocionais.
              Após meses de tratamento e carinho, Latita mostrou uma incrível força de vontade.
              Cada passo que ela dava em direção à recuperação era um testemunho de sua resiliência.
              Hoje, ela não só caminha com confiança, mas também se tornou a estrela da nossa clínica, alegrando o dia de todos com seu amor incondicional.
              Latita nos ensinou que, mesmo nas circunstâncias mais difíceis, o amor e a esperança sempre encontram um caminho para brilhar.</p> {/* Descrição da cachorrinha */}
          </Col>
        </Row>
        <Row>
          {loading ? ( // Condição para verificar se a imagem está carregando
            <Spinner animation="border" /> // Exibe um spinner de carregamento
          ) : (
            <Image
              fluid // Define a imagem como responsiva
              alt="Imagem aleatória" // Texto alternativo da imagem
              src={imgRandom} // Fonte da imagem
              className="mt-4 shadow-lg" // Classes para margens e sombra
              style={{
                objectFit: "contain", // Ajusta a imagem para se manter dentro dos limites
                maxWidth: "100%", // Define a largura máxima da imagem
                maxHeight: "calc(100vh - 200px)", // Define a altura máxima da imagem
                backgroundColor: "white", // Cor de fundo da imagem
              }}
            />
          )}
        </Row>
      </Container>
    </>
  );
};

export default CachorroDoDia; // Exporta o componente CachorroDoDia para uso em outras partes do aplicativo