import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Modal, ModalBody, ModalHeader, ModalTitle, Row, Spinner } from "react-bootstrap";

const CachorroDoDia = () => {
  const [imgRandom, setImgRandom] = useState(""); // Estado para a imagem aleatória
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(true);

  const buscaImgRandomAxios = () => {
    setLoading(true);
    axios.get("https://picsum.photos/id/237/400/600")
      .then((response) => {
        setImgRandom(response.config.url); // Usa a URL da imagem
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  useEffect(() => {
    buscaImgRandomAxios(); // Chama a função para buscar a imagem aleatória
  }, [update]);

  return (
    <>
      <Container className="mt-5 p-5">
        <Row className="align-items-center mb-4 sticky-top">
          <Col>
            <h2 className="latita-title">Conheçam Latita</h2>
            <br></br>
            <p className="latita-description">Latita, uma adorável cachorrinha de pelo macio e olhos brilhantes, chegou à nossa veterinária em um momento de desespero. 
              Resgatada de uma situação de abandono, ela enfrentava não apenas desafios físicos, mas também emocionais. 
              Após meses de tratamento e carinho, Latita mostrou uma incrível força de vontade. 
              Cada passo que ela dava em direção à recuperação era um testemunho de sua resiliência. 
              Hoje, ela não só caminha com confiança, mas também se tornou a estrela da nossa clínica, alegrando o dia de todos com seu amor incondicional. 
              Latita nos ensinou que, mesmo nas circunstâncias mais difíceis, o amor e a esperança sempre encontram um caminho para brilhar.</p>
          </Col>

        </Row>
        <Row>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Image 
              fluid 
              alt="Imagem aleatória" 
              src={imgRandom} 
              className="mt-4 shadow-lg"
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "calc(100vh - 200px)",
                backgroundColor: "white",
              }}
              
            />
          )}
        </Row>
      </Container>
    </>
  );
};

export default CachorroDoDia;
