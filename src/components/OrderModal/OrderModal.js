import React from 'react';
import styles from './OrderModal.module.scss';

const OrderModal = ({ isModalActive, summary, closeModal }) => {

    return (
        <>
            <div className={isModalActive ? styles.modalActive : styles.modal}>
                <h2>Do zapłaty: {summary} </h2>
                <button onClick={closeModal}>Zakończ rachunek</button>
            </div>
        </>

    )
}

export default OrderModal;