
import './App.css';
import Home from "./components/home";
import  newFlight  from "./components/newFligh";
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <main>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/all-flights" component={Home}/>
          <Route path="/book-a-new-flight" component={newFlight}/>
          
        </Switch>
      </main>
     
    </div>
  );
}

export default App;
