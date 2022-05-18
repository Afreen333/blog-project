import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './ArticleList.css'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ArticleList() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="bright" variant="bright">
  <Container>
  <Navbar.Brand href="#home">Unboxing art</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      <NavDropdown title="Courses" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">About Us</Nav.Link>
      
      <Nav.Link href="#pricing">Checkout</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
<section id="fff">
<Row>
    <Col lg={1}></Col>
        <Col lg={4}>
            <h1>Browse our courses curated with the best artists in the industry only for you.</h1>
            <p>Gain access to a thriving community of artists when you take a course with us.</p>
        </Col>
    <Col lg={7}></Col>
</Row>
</section>
<Container className={"mt-5"} id="titles">
     
     <Row>
         <Col>
         <img src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png"></img>
         <Link to='/article/100'> <h3>Unboxing Content Creation</h3></Link>
         </Col>
     
         <Col>
         <img src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png"></img>
         <Link to='/article/101'> <h3>Unboxing Content Creation</h3></Link>
         </Col>
     
         <Col>
         <img src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png"></img>
         <Link to='/article/102'> <h3>Unboxing Content Creation</h3></Link>
         </Col>
     </Row>

</Container>
    </>
  )
}
