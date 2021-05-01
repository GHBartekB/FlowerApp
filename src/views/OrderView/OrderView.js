import React from 'react';
import styles from './OrderView.module.scss';

const OrderView = () => {

    return (
        <>
            <div className={styles.item}>
                <span>Begonia stale kwitnąca</span>
                <button className={styles.btn}>-</button>
                <button className={styles.btn}>+</button>
                <span>10</span>
                <span>szt.</span>
            </div>
            <div className={styles.item}>
                <span>Begonia stale kwitnąca</span>
                <button className={styles.btn}>-</button>
                <button className={styles.btn}>+</button>
                <span>10</span>
                <span>szt.</span>
            </div>
            <div className={styles.item}>
                <span>Begonia stale kwitnąca</span>
                <button className={styles.btn}>-</button>
                <button className={styles.btn}>+</button>
                <span>10</span>
                <span>szt.</span>
            </div>
        </>
    )
}

export default OrderView;

