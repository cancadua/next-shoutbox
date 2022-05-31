import {Message} from "../model/Message";

const getMessages = async () => {
    await fetch('http://localhost:8080/api/messages')
        .then((res) => res.json())
        .then((res) => {return res})
}

const getMessage = async () => {
    await fetch('http://localhost:8080/api/messages')
        .then((res) => res.json())
        .then((data) => {return data})
}

const postMessage = async (data: Message) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    await fetch('http://localhost:8080/api/message', requestOptions)
        .then(res => res.json())
        .then((data) => {return data})
}

const putMessage = async (data: Message) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    await fetch('http://localhost:8080/api/message/{id}', requestOptions)
        .then(response => response.json())
}

async function request<TResponse>(
    url: string,
): Promise<TResponse> {
    const response = await fetch(url);
    return await response.json();
}



export {
    getMessages,
    getMessage,
    postMessage,
    putMessage,
    request
};