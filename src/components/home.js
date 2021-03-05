import React from 'react';
import Meni  from "./navbar";
import {Container, Col, Row, Carousel, Button} from 'react-bootstrap';

import havana from '../images/havana.jpg';
import   paris  from "../images/paris.jpg";
import  petra  from "../images/petra.jpg";
import  zanzibar from "../images/zanzibar.jpg";


class Home extends React.Component{
    render(){
        return(
            <div className="home-page">
                <Container fluid>
                <Meni/>
                
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={paris}
                                alt="ne ja ucituva bahamas"
                                />
                                {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={petra}
                                alt="Third slide"
                                />

                                {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={havana}
                                alt="Third slide"
                                />

                                {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={zanzibar}
                                alt="Third slide"
                                />

                                {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                        {/* Kolona 2 */}
                     </Col>
                       



                     <Col>
                     <div className="home-kopcinja">
                            <h1 className="naslov">Vinica Airways</h1>
                            <p className="opis-kompanija">We make dreams come true!</p>
                            <Button href="/new-flight" variant="outline-primary" className="kopce-newFlight">Book a new Flight</Button>
                            <Button href="/booked-flights" variant="outline-primary" className="kopce-allFlights">Booked Flights</Button>
                        </div>
                     </Col>
                </Row>
                </Container>
                
                
            </div>
        )
    }
}
export default Home;