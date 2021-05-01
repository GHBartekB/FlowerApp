import React from 'react';
import styles from './TariffView.module.scss';
import { FlowerList } from '../../data/FlowerList.js';



const TariffView = () => {

    const product = FlowerList.map(item => (
        <div key={item.id} className={styles.item}>
            <span className={styles.item__name}>{item.name}</span>
            <span className={styles.item__price}>{item.price} zł</span>
        </div>
    ));

    return (
        <>
            { product}
        </>
    )

}

export default TariffView;
