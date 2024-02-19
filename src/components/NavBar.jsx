import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import pandaImg from "../assets/panda.png";
import { translate } from "../translation/translation";
import { Button } from "react-bootstrap";
const isAuth = true

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navBar" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={pandaImg}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Pandish
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
{   isAuth &&     
          <Nav className="me-auto navtabs">
            <Nav.Link href="#home">{translate("Dashboard", "es")}</Nav.Link>

            <NavDropdown title={translate("Menu")} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{translate("Add meal", "es")}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">{translate("Settings", "es")}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              {translate("logout", "es")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>}
        {
            !isAuth && <Button>Login</Button>
        }
      </Container>
    </Navbar>
  );
}

export default BasicExample;
