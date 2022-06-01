import * as React from 'react'
import styles from './messageComponent.module.css'
import {Message} from "../model/Message";


const MessageComponent = (message: Message) => {
    {
        return (
            <div className={styles.container}>
                <div className={styles.metadata}>
                    <div className={styles.login}>{message.login}</div>
                    <div className={styles.date}>{message.date?.toString().slice(0, 19).replace('T', ' ')}</div>
                </div>
                <>{message.content}</>
            </div>
        );
    }
}

export default MessageComponent;