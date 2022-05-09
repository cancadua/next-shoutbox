import type { FormEvent, ReactElement} from 'react'
import styles from "./messagesPage.module.css"
import Layout from "../components/layout";
import Page from "./index";
import MessageList from "../components/messageList";
import {useState} from "react";
import {postMessage} from "../components/dataProvider";
import {PostMessage} from "../model/PostMessage";
import {Message} from "../model/Message";


const MessagesPage = () => {
    const [content, setContent] = useState<PostMessage>({});

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        postMessage(content).then(() => window.location.reload());
    };

    return (
        <>
            <MessageList/>
            <form style={{display: "flex", width: '100%', padding: "20px 0px 40px 0px"}} onSubmit={(e) => {handleSubmit(e)}}>
                <input type={"text"} name={'mess'} onChange={(e) => {setContent({content: e.target.value, login: e.target.value})}} style={{display: "flex", width: "100%", height: '4vh'}}/>
                <button type={"submit"} value={'>'} style={{display: "flex", width: "30px"}}/>
            </form>
        </>

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