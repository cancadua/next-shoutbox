import './messageList.module.css';
import MessageComponent from "./messageComponent";
import {request} from "./dataProvider";
import {useEffect, useState} from "react";
import {Message} from "../model/Message";


const MessageList = () => {

    const [messages, setMessages] = useState<Message[]>();

    useEffect(() => {(async () => {
            try {
                const res = await request<Message[]>('http://localhost:8080/api/messages');
                setMessages(res.reverse())
            } catch (error) {
            }
        })()
    }, []);

    return (
        <>
            {messages?.map((message: Message, index: number) => {
                return (
                    <MessageComponent key={index} {...message}/>
                )})}
        </>
    )
};

export default MessageList;
