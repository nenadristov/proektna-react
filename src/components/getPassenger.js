import axios from 'axios';


export default function GetPassenger(props){
    axios.get(`https://proektna-api.herokuapp.com/api/get-passenger-by-id/1` )
      .then(res => {
          console.log(res.data)
        /* const passengers = res.data.patnici;
        const flights = res.data.letovi;
            
		this.setState({ passengers, flights });
    
    //console.log(res.data)
    console.log(this.state.flights) */
      })
    return null
}