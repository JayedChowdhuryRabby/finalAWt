import{Navbar,Nav}from 'react-bootstrap'
import{Link}from 'react-router-dom'
function Header()
{
    return(
        <div>
           <Navbar bg="dark" variant="dark">
           <Navbar.Brand href="#home">E-comm</Navbar.Brand>
           <Nav className="me-auto navbar_wrapper">
            <Link to="/register">Customer Register</Link>
            <Link to="/client/register">Client Register</Link>
            <Link to="/dashboard">Customer Dashboard</Link>
            <Link to="/clientlist">Client List</Link>
            <Link to="/customerlist">Customer List</Link>
            <Link to="/addproduct">Add Product</Link>
            <Link to="/productlist">Product List</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/mailer">Contact</Link>

          </Nav>
        
      </Navbar>
        </div>
    )
}
export default Header