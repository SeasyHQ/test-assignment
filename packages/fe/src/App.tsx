import React from "react";
import { Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import NotFound from "./scenes/NotFound";
import MarinaList from "./scenes/MarinaList";
import MarinaDetail from "./scenes/MarinaDetail";

function App() {
  return (
    <>
      <Switch>
        <Route path="/marina-list" exact component={MarinaList} />
        <Route path="/marina-detail/:id" exact component={MarinaDetail} />
        <Route component={NotFound} />
      </Switch>
    </>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //     <section>
  //     </section>
  //   </div>
  // );
}

export default App;
