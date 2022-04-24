import Link from 'next/link';
import * as React from 'react'
import styles from './header.module.css'

const Header = () => {

    return (
        <div className={styles.navbar}>
            <Link href={"/"}>
                <a className={styles.logo}>Logo</a>
            </Link>
            <input type="checkbox" id="menu"/>
            <label htmlFor="menu">Menu</label>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <Link href={"/"}><li><a>Home</a></li></Link>
                    <Link href={"messagesPage"}><li><a>Messages</a></li></Link>
                    <Link href={"/"}><li><a>Change name</a></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;