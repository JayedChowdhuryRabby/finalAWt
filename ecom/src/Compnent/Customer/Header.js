import{Navbar,Nav}from 'react-bootstrap'
import{Link}from 'react-router-dom'
function Header()
{
    return(
        <div>
           <Navbar bg="dark" variant="dark">
           <Navbar.Brand href="#home">E-comm</Navbar.Brand>
           <Nav className="me-auto navbar_wrapper">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
          </Nav>
        
      </Navbar>
        </div>
    )
}
export default Header