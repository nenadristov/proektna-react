import React from 'react';

import axios from 'axios';
import Meni from './navbar';
import {Table, Container} from 'react-bootstrap';
import TableDisplay from './tableDisplay';


export default class AllFlights extends React.Component {
  state = {
    passengers: [],
    flights:[],
    id:0
    }  

  componentDidMount() {
    axios.get(`https://proektna-api.herokuapp.com/api/get-all-passengers/`)
      .then(res => {
        const passengers = res.data.patnici;
        const flights = res.data.letovi;
            
		this.setState({ passengers, flights });
    
    //console.log(res.data)
    console.log(this.state.flights)
      })
  }

  render() {
    return (
     <div className="lista-letovi">
       <Meni/>
       <div className="Tabela">
		   <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Passport No.</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Departure Date</th>
                <th>Details</th>
              </tr>
            </thead>
          <tbody>
            <TableDisplay patnici = {this.state.passengers} letovi = {this.state.flights}/>
            
              
            
          </tbody>
        </Table>
		</Container>
          </div>
          
        </div>
        
    )
  }
}