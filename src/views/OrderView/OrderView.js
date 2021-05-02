import React from 'react';
import styles from './OrderView.module.scss';
import { FlowerList } from '../../data/FlowerList.js';

const productList = [...FlowerList];

class OrderView extends React.Component {

    state = {
        sum: 0,
        [productList[0].name]: productList[0].aksCount,
        [productList[1].name]: productList[1].ampCount,
        [productList[2].name]: productList[2].bakCount,
        [productList[3].name]: productList[3].bakWCount,
        [productList[4].name]: productList[4].batCount,
        [productList[5].name]: productList[5].begStandCount,
        [productList[6].name]: productList[6].begDragCount,
        [productList[7].name]: productList[7].begSolCount,
        [productList[8].name]: productList[8].begStalKwiCount,
        [productList[9].name]: productList[9].dalCount,
        [productList[10].name]: productList[10].fukCount,
        [productList[11].name]: productList[11].helCount,
        [productList[12].name]: productList[12].kacCount,
        [productList[13].name]: productList[13].kocCount,
        [productList[14].name]: productList[14].kocWisCount,
        [productList[15].name]: productList[15].komCount,
        [productList[16].name]: productList[16].lewCount,
        [productList[17].name]: productList[17].lobCount,
        [productList[18].name]: productList[18].milCount,
        [productList[19].name]: productList[19].niecCount,
        [productList[20].name]: productList[20].pelCount,
        [productList[21].name]: productList[21].pelBorCount,
        [productList[22].name]: productList[22].stoCount,
        [productList[23].name]: productList[23].sunCount,
        [productList[24].name]: productList[24].surfCount,
        [productList[25].name]: productList[25].wilCount,

    }

    handleAddBtn = (price, stateName) => {
        const productPrice = parseInt(price);
        this.setState(prevState => (
            {
                sum: prevState.sum + productPrice,
                [stateName]: prevState.[stateName] + 1,

            }))
    }

    handleSubstractBtn = (price, stateName) => {
        const productPrice = parseInt(price);
        this.setState(prevState => ({
            sum: prevState.sum - productPrice,
            [stateName]: prevState.[stateName] - 1,
        }))
    }

    render() {

        const productList = FlowerList.map((product) => {



            return (



                <div key={product.id} className={styles.item}>
                    <span>{product.name}</span>
                    <button name={product.name} onClick={() => this.handleSubstractBtn(product.price, product.name)} className={styles.btn}>-</button>
                    <button name={product.name} onClick={() => this.handleAddBtn(product.price, product.name)} className={styles.btn}>+</button>
                    <span>{this.state.[product.name]}</span>
                    <span>szt.</span>
                </div>
            )
        })

        return (
            <>
                {productList}
                <div>
                    <h2>Do zapłaty: {this.state.sum} zł</h2>
                </div>
            </>
        )
    }
}

export default OrderView;

