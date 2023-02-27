import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="pe-none">PIOFILM</Navbar.Brand>
          <Nav>
            <Nav.Link>TRENDING</Nav.Link>
            <Nav.Link>ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
