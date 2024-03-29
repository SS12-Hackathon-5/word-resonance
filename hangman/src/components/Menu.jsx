import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Hangman</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/game" className="nav-link">Game</Link>
          <Link to="/account" className="nav-link">Account</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu