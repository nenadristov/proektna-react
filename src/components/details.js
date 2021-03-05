import React from 'react';
import Meni from './navbar';
import {Container, Col, Row} from 'react-bootstrap';
import GetPassenger from './getPassenger';



export default class DetailsFlight extends React.Component{
    
    
    
    render(){
        return(
            <div id="Details-page">
                <Meni/>
                <GetPassenger/>
                <div className="detali ">
                   <Container/>
                   <Row>
                       <Col xs={6} md={6}>
                           <h5>First Name:</h5>
                           <p>Nenad</p>

                           <h5>Last Name</h5>
                           <p>Ristov</p>
                           
                           <h5>Birth Date</h5>
                           <p>28/04/2002</p>

                           <h5>Passport #No</h5>
                           <p>A1234567</p>
                       </Col>

                       <Col xs={6} md={6}>
                           <h5>Flight Number</h5>
                           <p>Nenad</p>

                           <h5>Departure:</h5>
                           <p>Ristov</p>

                           <h5>Destination:</h5>
                           <p>Ristov</p>
                           
                           <h5>Departure Date</h5>
                           <p>28/04/2002</p>

                           <h5>Return Date</h5>
                           <p>A1234567</p>

                       </Col>
                   </Row>

                </div>
            </div>

        )}
    }
