import React from 'react';
import styles from './Root.module.scss';

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
            <div className={styles.item}>
              <span className={styles.item__name}>Begonia stale kwitnąca</span>
              <span className={styles.item__price}>6 zł</span>
            </div>
            <div className={styles.item}>
              <span className={styles.item__name}>Begonia standard</span>
              <span className={styles.item__price}>6 zł</span>
            </div>
            <div className={styles.item}>
              <span className={styles.item__name}>Niecierpek</span>
              <span className={styles.item__price}>5 zł</span>
            </div> <div className={styles.item}>
              <span className={styles.item__name}>Stokrotka</span>
              <span className={styles.item__price}>6 zł</span>
            </div> <div className={styles.item}>
              <span className={styles.item__name}>Heliotrop</span>
              <span className={styles.item__price}>6 zł</span>
            </div> <div className={styles.item}>
              <span className={styles.item__name}>Surfinia 4 zł</span>
              <span className={styles.item__price}>5 zł</span>
            </div>
            <div className={styles.item}>
              <span className={styles.item__name}>Koci ogon wiszący</span>
              <span className={styles.item__price}>25 zł</span>
            </div> <div className={styles.item}>
              <span className={styles.item__name}>Koci ogon stojący</span>
              <span className={styles.item__price}>6 zł</span>
            </div>

          </main>
        </div>
      </>
    )
  }

}

export default App;