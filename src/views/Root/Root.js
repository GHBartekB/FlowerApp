import React from 'react';
import styles from './Root.module.scss';
import { FlowerList } from '../../data/FlowerList.js';

const product = FlowerList.map(item => (
  <div className={styles.item}>
    <span className={styles.item__name}>{item.name}</span>
    <span className={styles.item__price}>{item.price} zł</span>
  </div>
))

class App extends React.Component {

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
            {product}
          </main>
        </div>
      </>
    )
  }

}

export default App;