import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navigation() {
  let userNavSection;

  if (localStorage.getItem("user")) {
    userNavSection = (
    <>
      <Nav.Link as={Link} to={"/workspaces"}>
          Workspaces
      </Nav.Link>

      <Nav.Link as={Link} to={"/newWorkspace"}>
          New Workspace
      </Nav.Link>
      <Nav.Link as={Link} to={"/logout"}>
          Logout
      </Nav.Link>
    </>
    );
  } else {
    userNavSection = (
    <>
      <Nav.Link as={Link} to={"/login"}>
          Login
      </Nav.Link>
      
      <Nav.Link as={Link} to={"/forgotPassword"}>
        ForgotPassword
      </Nav.Link>

      <Nav.Link as={Link} to={"/Register"}>
        Register
      </Nav.Link>
    </>
    );
  }

  return (
    <Navbar bg="primary" variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to="/">Trello Clone</Navbar.Brand>

        <Nav className='me-auto'>

            {userNavSection}

        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;