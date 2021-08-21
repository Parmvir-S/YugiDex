import { Navbar, Nav, Container } from "react-bootstrap";

const Nabvar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yugi-Dex!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cards">Cards</Nav.Link>
            <Nav.Link href="https://github.com/Parmvir-S">Github</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Nabvar;