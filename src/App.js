
import './App.css';
import Home from "./components/home";
import  NewFlight  from "./components/newFlight";
import {Route, Switch } from 'react-router-dom';
import AllFlights from './components/allFlights';

function App() {
  return (
    <div className="App">

    <main>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/new-flight" component={NewFlight} />
      <Route path="/booked-flights" component={AllFlights}/>
                
      </Switch>
    </main>
     
    </div>
  );
}

export default App;
