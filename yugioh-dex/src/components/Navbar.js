import { Navbar, Nav, Container, Image } from "react-bootstrap";
import applogo from "../images/applogo.png";

const Nabvar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Image style={{width: "3.5%", marginRight: "2%"}} src={applogo} roundedCircle />
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