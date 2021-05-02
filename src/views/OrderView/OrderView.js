import React from 'react';
import styles from './OrderView.module.scss';

class OrderView extends React.Component {

    state = {
        sum: 0,
        aksCount: 0,
        ampCount: 0,
        bakCount: 0,
        bakWCount: 0,
        batCount: 0,
        begStandCount: 0,
        begDragCount: 0,
        begSolCount: 0,
        begStalKwiCount: 0,
        dalCount: 0,
        fukCount: 0,
        helCount: 0,
        kacCount: 0,
        kocCount: 0,
        kocWisCount: 0,
        komCount: 0,
        lewCount: 0,
        lobCount: 0,
        milCount: 0,
        niecCount: 0,
        pelCount: 0,
        pelBorCount: 0,
        stoCount: 0,
        sunCount: 0,
        surCount: 0,
        wilCount: 0,

    }

    handleAddBtn = (count) => {
        const productPrice = parseInt(count);
        this.setState(prevState => ({
            sum: prevState.sum + productPrice,
        }))
    }

    handleSubstractBtn = (count) => {
        const productPrice = parseInt(count);
        this.setState(prevState => ({
            sum: prevState.sum - productPrice,
        }))
    }

    render() {

        return (
            <>
                <div className={styles.item}>
                    <span>Begonia stale kwitnąca</span>
                    <button onClick={() => this.handleSubstractBtn('5')} className={styles.btn}>-</button>
                    <button onClick={() => this.handleAddBtn('5')} className={styles.btn}>+</button>
                    <span>{this.state.aksCount}</span>
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
                <div>
                    <h2>Do zapłaty: {this.state.sum} zł</h2>
                </div>
            </>
        )
    }
}

export default OrderView;

