import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = ({ isActive, clickBtn }) => (

    <>
        <button onClick={clickBtn} className={isActive ? styles.burgerActive : styles.burger}>

            <span className={isActive ? styles.burger__spanFirstActive : styles.burger__spanFirst}></span>
            <span className={isActive ? styles.burger__spanSecondActive : styles.burger__spanSecond}></span>
            <span className={isActive ? styles.burger__spanThirdActive : styles.burger__spanThird}></span>

        </button>

        <nav className={isActive ? styles.navActive : styles.nav}>

            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <NavLink
                        className={styles.list__link}
                        activeClassName={styles.list__linkActive}
                        to="/opisy">

                        Opisy
                </NavLink>
                </li>
                <li className={styles.list__item}>
                    <NavLink
                        className={styles.list__link}
                        activeClassName={styles.list__linkActive}
                        to="/cennik">

                        Cennik
                </NavLink>
                </li>
                <li className={styles.list__item}>
                    <NavLink
                        className={styles.list__link}
                        activeClassName={styles.list__linkActive}
                        to="/zamowienia">

                        Zamówienia
                </NavLink>
                </li>
                <li className={styles.list__item}>
                    <NavLink
                        className={styles.list__link}
                        activeClassName={styles.list__linkActive}
                        to="/utarg">

                        Utarg
                </NavLink>
                </li>
            </ul>
        </nav>
    </>

)

export default Nav;