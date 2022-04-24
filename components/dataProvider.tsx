import MessageComponent from "./messageComponent";

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

const postMessage = async (data: typeof MessageComponent) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    await fetch('http://localhost:8080/api/message', requestOptions)
        .then(response => response.json())
}

const putMessage = async (data: typeof MessageComponent) => {
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