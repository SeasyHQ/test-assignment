import React from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "routes";

import logo from "./logo.png";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.links}>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to={Routes.getTo(Routes.MARINA_LIST, {})}
          >
            Marinas
          </NavLink>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to={Routes.getTo(Routes.ADD_MARINA, {})}
          >
            Add Marina
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
