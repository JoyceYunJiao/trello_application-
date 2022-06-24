import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="primary" variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to="/">Trello Clone</Navbar.Brand>

        <Nav className='me-auto'>
            <Nav.Link as={Link} to={"/workspaces"}>
                Workspaces
            </Nav.Link>

            <Nav.Link as={Link} to={"/newWorkspace"}>
                New Workspace
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;