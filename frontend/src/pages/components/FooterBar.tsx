import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";

const FooterBar = () => {
  return (
    <Navbar fixed="bottom" className="footer-bar">
      <Container className="text-center">
        <Navbar.Brand>
        <div className="footer">
          <p className="footer-text">Tópicos Especiais em Desenvolvimento de Software II</p>
          <p className="footer-text">Developed by Daniel & Gabriel</p>
        </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default FooterBar;
