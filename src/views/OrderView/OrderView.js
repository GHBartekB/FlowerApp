import React from 'react';
import styles from './OrderView.module.scss';
import { FlowerList } from '../../data/FlowerList.js';

class OrderView extends React.Component {

    state = {
        sum: 0,
        aks: 0,
        amp: 0,
        bak: 0,
        bakWis: 0,
        bat: 0,
        begSta: 0,
        begDra: 0,
        begSol: 0,
        begStaKwi: 0,
        dal: 0,
        fuk: 0,
        hel: 0,
        kac: 0,
        kocOgo: 0,
        kocOgoWis: 0,
        kom: 0,
        lew: 0,
        lob: 0,
        mil: 0,
        nie: 0,
        pel: 0,
        pelBor: 0,
        stoAfr: 0,
        sun: 0,
        sur: 0,
        wil: 0,
    }

    handleAddBtn = (price, stateName) => {
        const productPrice = parseInt(price);
        this.setState(prevState => (
            {
                sum: prevState.sum + productPrice,
                [stateName]: prevState[stateName] + 1,

            }))
    }

    handleSubstractBtn = (price, stateName) => {
        const productPrice = parseInt(price);

        if (this.state[stateName] > 0) {

            this.setState(prevState => ({
                sum: prevState.sum - productPrice,
                [stateName]: prevState[stateName] - 1,
            }))
        }

    }

    handleResetbtn = () => {
        this.setState({
            sum: 0,
            aks: 0,
            amp: 0,
            bak: 0,
            bakWis: 0,
            bat: 0,
            begSta: 0,
            begDra: 0,
            begSol: 0,
            begStaKwi: 0,
            dal: 0,
            fuk: 0,
            hel: 0,
            kac: 0,
            kocOgo: 0,
            kocOgoWis: 0,
            kom: 0,
            lew: 0,
            lob: 0,
            mil: 0,
            nie: 0,
            pel: 0,
            pelBor: 0,
            stoAfr: 0,
            sun: 0,
            sur: 0,
            wil: 0,
        })
    }

    render() {

        const productList = FlowerList.map((product) => {

            return (

                <div key={product.id} className={styles.item}>
                    <span className={styles.item__name}>{product.name}</span>
                    <button name={product.name} onClick={() => this.handleSubstractBtn(product.price, product.stateName)} className={styles.btnMin}>-</button>
                    <button name={product.name} onClick={() => this.handleAddBtn(product.price, product.stateName)} className={styles.btnAdd}>+</button>
                    <span className={styles.item__count} >{this.state[product.stateName]} szt.</span>
                </div >
            )
        })

        return (
            <>
                <div>
                    <h2>Do zapłaty: {this.state.sum} zł</h2>
                </div>
                { productList}

                <button className={styles.btnRes} onClick={() => this.handleResetbtn()}>Resetuj stan</button>
            </>
        )
    }
}

export default OrderView;

