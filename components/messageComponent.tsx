import * as React from 'react'
import styles from './message.module.css'


const MessageComponent = () => {
    {
        return (
            <div className={styles.container}>
                <div style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div style={{alignSelf: "flex-start", fontWeight: "700"}}>Login</div>
                    <div style={{alignSelf: "flex-end"}}>13.04.2022</div>
                </div>
                <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ipsum nec metus malesuada elementum. Ut ut
                    dictum felis, eget ullamcorper tortor. Nunc condimentum velit vitae tellus congue lobortis. Morbi ut risus id nunc
                    porta lobortis. Nullam lacinia varius urna quis imperdiet. Morbi nisl quam, imperdiet sit amet lacus vitae, eleifend
                    consectetur ipsum. Proin volutpat nibh in augue bibendum sagittis. Nam non laoreet libero. </>
            </div>
        );
    }
}

export default MessageComponent;