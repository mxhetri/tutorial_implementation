import React from 'react';
import logo from '../img/logo.png';
import cart from '../img/cart.png';
import styles from '../FakeApp.module.css';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className={styles['header']}>
            <div className={styles["container"]}>
                <div className={styles["navbar"]}>
                    <div className={styles["logo"]}>
                        <img src={logo} width="125px" alt="logo"/>
                    </div>
                    <nav>
                        <ul>
                            <li><Link href="">Home</Link></li>
                            <li><Link href="">Product</Link></li>
                            <li><Link href="">About</Link></li>
                            <li><Link href="">Contact</Link></li>
                            <li><Link href="">Account</Link></li>
                        </ul>
                    </nav>
                    <img src={cart} alt='' width="30px" height="30px"/>
                </div>
            </div>
        </div>
    );
}

export default Header;