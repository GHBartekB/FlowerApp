import React from 'react';
import styles from './Root.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FlowerList } from '../../data/FlowerList.js';
import Nav from '../../components/Nav/Nav.js';
import TariffView from '../TariffView/TariffView.js';
import OrderView from '../OrderView/OrderView.js';


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
            <Switch>
              <Route
                path="/cennik"
                component={TariffView}
              />
              <Route
                path="/zamowienia"
                component={OrderView}
              />
            </Switch>
          </main>
        </div>
      </Router >
    )
  }

}

export default Root;