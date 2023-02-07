import type { FormEvent, ReactElement} from 'react'
import Layout from "../components/layout";
import MessageList from "../components/messageList";
import {useState} from "react";
import {postMessage} from "../components/dataProvider";
import {Message} from "../model/Message";
import styles from './messagesPage.module.css'
import {IoMdSend } from 'react-icons/io';

const MessagesPage = () => {
    const [temporaryPosts, setTemporaryPosts] = useState<Message[]>([]);
    const [content, setContent] = useState<Message>({content: '', login: ''});
    // const [user, setUser] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(temporaryPosts)
        e.preventDefault()
        setTemporaryPosts(prevPosts => [...prevPosts, content]);
        // postMessage(content).then(() => window.location.reload());
    };

    return (
        <>
            {/*{user && (*/}
            {/*    <Modal closeModal={() => setUser('')}>*/}
            {/*        <input value={user}*/}
            {/*               onChange={(e) => {*/}
            {/*                   setUser(e.target.value)*/}
            {/*               }}/>*/}
            {/*    </Modal>*/}
            {/*)}*/}
            <MessageList temporaryPosts = {temporaryPosts}/>
            <form className={styles.uploadMessage} onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <input type={"text"}
                       placeholder={'Nazwa'}
                       style={{width: '25%'}}
                       name={'name'}
                       onChange={(e) => {
                           setContent((prevState) => ({login: e.target.value, content: prevState.content}))
                       }}/>
                <input type={"text"}
                       name={'mess'}
                       placeholder={'Treść'}
                       onChange={(e) => {
                           setContent((prevState) => ({content: e.target.value, login: prevState.login}))
                       }}/>
                <button type={"submit"}>
                    <IoMdSend size={20}/>
                </button>
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