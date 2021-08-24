import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div 
      className="App"
      
    >
      {/* <h1> Jabair Portfolio Site</h1> */}
      <br></br>
      <NavBar/>
      {/* <Home /> */}
      
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
      
     
    </div>
  );
}

export default App;
