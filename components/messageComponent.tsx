import * as React from 'react'
import styles from './message.module.css'
import {Message} from "../model/Message";


const MessageComponent = (message: Message) => {
    {
        return (
            <div className={styles.container}>
                <div style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div style={{alignSelf: "flex-start", fontWeight: "700"}}>{message.login}</div>
                    <div style={{alignSelf: "flex-end"}}>{message.date?.toString().slice(0, 19).replace('T', ' ')}</div>
                </div>
                <>{message.content}</>
            </div>
        );
    }
}

export default MessageComponent;