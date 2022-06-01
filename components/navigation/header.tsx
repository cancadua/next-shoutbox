import Link from 'next/link';
import * as React from 'react'
import styles from './header.module.css'
import {AiOutlineMessage} from "react-icons/ai";

const Header = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <Link href={"/"}>
                    <a className={styles.logo}><AiOutlineMessage size={40}/></a>
                </Link>
                {/*<p>Name</p>*/}
            </div>

            {/*<label htmlFor="menu">Menu</label>*/}
            {/*<div className={styles.menu}>*/}
            {/*    <ul className={styles.list}>*/}
            {/*        <Link href={"/"}><li><a>Change name</a></li></Link>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    )
}

export default Header;