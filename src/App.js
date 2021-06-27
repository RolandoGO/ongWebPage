import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import Nosotros from "./Screens/Nosotros";
import Novedades from "./Screens/Novedades";
import Actividades from "./Screens/Actividades";
import Contacto from "./Screens/Contacto";
import Contribuye from "./Screens/Contribuye";
import Testimonios from "./Screens/Testimonios";




function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
=======
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Nosotros} />
        <Route exact path="/" component={Actividades} />
        <Route exact path="/" component={Novedades} />
        <Route exact path="/" component={Testimonios} />
        <Route exact path="/" component={Contacto} />
        <Route exact path="/" component={Contribuye} />
      </Switch>
    </BrowserRouter>
>>>>>>> master
  );
}

export default App;
