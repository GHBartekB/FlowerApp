import React from 'react';
import styles from './Root.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FlowerList } from '../../data/FlowerList.js';
import Nav from '../../components/Nav/Nav.js';
import TariffView from '../TariffView/TariffView.js';
import OrderView from '../OrderView/OrderView.js';


class Root extends React.Component {

  state = {
    isNavBtnActive: false,
  }

  handleNavBtnChange = () => {

    if (!this.state.isNavBtnActive) {
      this.setState({
        isNavBtnActive: true,
      })
    } else
      this.setState({
        isNavBtnActive: false,
      })
  }

  render() {

    const { isNavBtnActive } = this.state;

    return (
      <Router>
        <Nav isActive={isNavBtnActive} clickBtn={this.handleNavBtnChange} />
        <main className={styles.main}>
          <Switch>
            <Route
              exact
              path="/"
              component={OrderView}
            />
            <Route
              path="/cennik"
              component={TariffView}
            />
          </Switch>
        </main>

      </Router >
    )
  }

}

export default Root;