import './messageList.module.css';
import MessageComponent from "./messageComponent";
import {getMessages, request} from "./dataProvider";
import {useEffect, useState} from "react";
import {Message} from "../model/Message";
import {log} from "util";

const MessageList = () => {

    const [messages, setMessages] = useState<Message[]>();

    useEffect(() => {(async () => {
            try {
                const res = await request<Message[]>('http://localhost:8080/api/messages');
                setMessages(res)
                console.log(messages)
            }
            catch (error) {
            }
        })()
    }, []);

    return (
        <MessageComponent/>
    );
};

export default MessageList;
