import React from "react";
import { Route, Switch } from "react-router-dom";

import { Routes } from "routes";

import MarinaList from "scenes/MarinaList";
import MarinaDetail from "scenes/MarinaDetail";
import NotFound from "scenes/NotFound";
import AddMarina from "scenes/AddMarina";

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route path={Routes.MARINA_LIST} exact component={MarinaList} />
        <Route path={Routes.MARINA_DETAIL} exact component={MarinaDetail} />
        <Route path={Routes.ADD_MARINA} exact component={AddMarina} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
