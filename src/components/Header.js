import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./Header.css"; // Archivo CSS personalizado

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>Nombre del sitio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setOpen(!open)} />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end" in={open}>
          <Nav>
            <Nav.Link href="#">El Blog para Aprender Inglés</Nav.Link>
            <Nav.Link href="#">SUSCRÍBETE</Nav.Link>
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Inglés Por Skype Particulares</Nav.Link>
            <Nav.Link href="#">Vídeos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
            <Nav.Link href="#">Podcasts</Nav.Link>
            <Nav.Link href="#">Inglés Por Skype Empresas</Nav.Link>
            <Button variant="outline-light">Iniciar Sesión</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
