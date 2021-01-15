import React from 'react';

import axios from 'axios';

export default class AllFlights extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://proektna-api.herokuapp.com/api/get-all-passengers/`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.First_Name}</li>)}
      </ul>
    )
  }
}