import React from 'react';
import styles from './Root.module.scss';
import { BrowserRouter as Router } from 'react-router-dom';
// import { FlowerList } from '../../data/FlowerList.js';
import Nav from '../../components/Nav/Nav.js';
import TariffView from '../TariffView/TariffView.js';


class Root extends React.Component {

  state = {}

  render() {

    return (
      <Router>
        <div className={styles.app}>
          <aside className={styles.panel}>
            <Nav />
          </aside>
          <main className={styles.main}>
            <TariffView />
          </main>
        </div>
      </Router>
    )
  }

}

export default Root;