import React from 'react';
import styles from './Root.module.scss';
// import { FlowerList } from '../../data/FlowerList.js';
import TariffView from '../TariffView/TariffView.js';


class Root extends React.Component {

  state = {}

  render() {

    return (
      <>
        <div className={styles.app}>
          <aside className={styles.panel}>
            <nav>
              <ul>
                <li><a href="/#">Opisy</a></li>
                <li><a href="/#">Cennik</a></li>
                <li><a href="/#">Zamówienia</a></li>
                <li><a href="/#">Dzienny Utarg</a></li>
              </ul>
            </nav>
          </aside>
          <main className={styles.main}>
            <TariffView />
          </main>
        </div>
      </>
    )
  }

}

export default Root;