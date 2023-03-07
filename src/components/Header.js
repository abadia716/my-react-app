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
          <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/blog">El Blog para Aprender Inglés</Nav.Link>
            <Nav.Link href="/login">Suscribete</Nav.Link>
              <Nav.Link href="/ingles">Inglés Traductor</Nav.Link>
            <Nav.Link href="/videos">Vídeos</Nav.Link>
            <Nav.Link href="/podcast">Podcasts</Nav.Link>
            <Button variant="outline-light">Iniciar Sesión</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
