import React from 'react';
import Meni from './navbar'
import {Container, Col, Row, Form, Button} from 'react-bootstrap';



class NewFlight extends React.Component{

    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
        //console.log(this.state.username)
      }
      blabla = (event) => {
          alert(this.state.username)
      }
    render(){
        
        
        return(
            
            <div className="New-Flight"> 
                <Meni/>
                <div className = "booking-form">
                    
                    <Container>

                        <Row>
                            <Col>
                            <div className="info-booking">
                                <h2>Book a New Flight</h2>
                                <p>
                                    Here you can book a new flight <br />
                                    <em>The fields marked with <span style={{color: "red"}}> * </span> ARE REQUIRED</em>
                                </p>
                            </div>
                            </Col>
                        </Row>
                        {/* Ime i Prezime */}
                        <h3>Persnonal Information:</h3>
                            <br/>
                            <Form onSubmit={this.blabla}>
                        <Row>
                            
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your First Name" required="True" name="firstName"  onChange={this.myChangeHandler} />
                                </Form.Group>
                                
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Lasr Name" required="True" name="lastName"/>
                                </Form.Group>
                                
                            </Col>

                        </Row>


                         {/* Data ne ragjanje i Pasos */}
                         <Row>
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>Date of birth</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Date of Birth" required="True" name="dateBirth" />
                                </Form.Group>
                                
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>Passport Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Passport Number" required="True" name="passportNumber" />
                                </Form.Group>
                                
                            </Col>

                        </Row>

                        <Row>
                            <Col xs={6} md={8}><hr/></Col>
                        </Row>

                        {/* Broj na let */}
                        <Row>

                            <Col xs={6} md={4}>
                                
                                <Form.Group>
                                    {/* <Form.Label>Date of birth</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Date of Birth" required="True" name="dateBirth" /> */}
                                </Form.Group>
                                
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>Flight Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Flight Number"required="True"  name="flightNumber" />
                                </Form.Group>
                                
                            </Col>

                        </Row>

                        {/* Data na poletuvanje i Mesto */}
                        <Row>
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>Departure</Form.Label>
                                    <Form.Control type="text" placeholder="Enter place of Departure" required="True" name="departure" />
                                </Form.Group>
                                
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Destination"  required="True"name="destination" />
                                </Form.Group>
                                
                            </Col>

                        </Row>

                         {/* Data vrakjanje i destinacija */}
                         <Row>
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>Departure Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter date of Departure" required="True" name="departureDate" />
                                </Form.Group>
                                
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Group>
                                    <Form.Label>Return Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter your Departure Date" name="returnDate" />
                                </Form.Group>
                                
                            </Col>

                        </Row>
                        
                        <h3>Luggage Information</h3>
                        <Row>
                            
                            <Col xs={3} md={2}>
                                
                                <Form.Group>
                                    <Form.Label>Check-in</Form.Label>
                                    <Form.Control type="number"  name="checkIn" />
                                </Form.Group>
                                
                            </Col>
                            <Col xs={3} md={2}>
                                <Form.Group>
                                    <Form.Label>Trolley</Form.Label>
                                    <Form.Control type="number" name="trolley" />
                                </Form.Group>
                                
                            </Col>
                            <Col xs={3} md={2}>
                                <Form.Group>
                                    <Form.Label>Carry On</Form.Label>
                                    <Form.Control type="number" name="carryOn" />
                                </Form.Group>
                                
                            </Col>

                        </Row>
                        
                        <Row>
                            <Col md={8}>
                            <Button variant="primary" type="submit" >Submit</Button>
                            </Col>
                        </Row>
                        </Form>

                        
                        

                        


                    </Container>
                </div>
           </div>
        )
    }
}
export default NewFlight;