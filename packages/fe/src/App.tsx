import React from "react";
import { Route, Switch } from "react-router-dom";

import MarinaList from "./scenes/MarinaList";
import MarinaDetail from "./scenes/MarinaDetail";
import NotFound from "./scenes/NotFound";

import { Routes } from "routes";

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route path={Routes.MARINA_LIST} exact component={MarinaList} />
        <Route path={Routes.MARINA_DETAIL} exact component={MarinaDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
