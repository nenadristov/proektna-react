import React from 'react';
import  {Navbar, Nav} from 'react-bootstrap'
 

class Meni extends React.Component{
    render() {
        return (
            <div>
               <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Vinica Airways</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/booked-flights">Booked Flights</Nav.Link>
                            <Nav.Link href="/book-a-new-flight">Book a New Flight</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> 
            </div>
        )
    }    
       
}

export default Meni;