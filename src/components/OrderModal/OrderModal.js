import React from 'react';
import styles from './OrderModal.module.scss';

const OrderModal = ({ isModalActive, summary, closeModal, closeDeal }) => {

    return (
        <>
            <div className={isModalActive ? styles.modalActive : styles.modal}>
                <h3 className={styles.modal__sumTitle}>Do zapłaty: {summary} zł </h3>
                <button onClick={closeModal} className={styles.modal__checkBtn}>sprawdź dodane produkty</button>
                <button className={styles.modal__closeBtn} onClick={closeDeal}>Zakońćż</button>
                <button className={styles.modal__resetBtn} onClick={closeDeal}>usuń</button>
            </div>
        </>

    )
}

export default OrderModal;