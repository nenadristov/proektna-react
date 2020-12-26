import React from 'react';
import Meni from './navbar'
import {Container/* , Col, Row, Carousel, Button */} from 'react-bootstrap';



class newFlight extends React.Component{
    render(){
        return(
            <div className="new-flights">
                <Container.Fluid>
                    <Meni/>
                    <h1>BlaBla</h1>
                </Container.Fluid>

            </div>
        )
    }
}
export default newFlight;