import * as React from 'react'
import styles from './header.module.css'

const Header = () => {

    return (
        <div className={styles.navbar}>
            <a href={"message_list"} className={styles.logo}>LOGO</a>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li><a href={"a"}>Home</a></li>
                    <li><a href={"a"}>Home</a></li>
                    <li><a href={"a"}>Home</a></li>
                </ul>
            </div>
        </div>
    )
    
}

export default Header;