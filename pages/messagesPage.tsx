import type { ReactElement } from 'react'
import styles from "./messagesPage.module.css"
import Layout from "../components/layout";
import Page from "./index";
import MessageList from "../components/messageList";


const MessagesPage = () => {

    return (
        <MessageList/>
    )
}

MessagesPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default MessagesPage;