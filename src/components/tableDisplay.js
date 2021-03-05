import React from 'react';
import GetFlight from "./getFlight";
import GetPassenger from './getPassenger'


export default function TableDisplay(props){
    let red = []
    let listaPatnici = props.patnici;
    let listaLetovi = props.letovi
    setTimeout(3000)
    
    for (let i = 0; i < listaPatnici.length; i++) {
        //console.log(patnici.patnici[i])
       red.push(
            <tr>
              <td>{listaPatnici[i].id}</td>
              <td>{listaPatnici[i].First_Name}</td>
              <td>{listaPatnici[i].Last_Name}</td>
              <td>{listaPatnici[i].Passport_Number}</td>
              <td>{listaLetovi[i].Departure}</td>
              <td>{listaLetovi[i].Destination}</td>
              <td>{listaLetovi[i].Departure_date}</td>
              <td><a href={"details/" + listaPatnici[i].id}>Details<GetFlight let = {listaLetovi[i].id}/>
                                                            <GetPassenger patnik = {listaPatnici[i].id}/> </a></td>
            </tr>
          ) 
      }
      return red

    
  
        
  }