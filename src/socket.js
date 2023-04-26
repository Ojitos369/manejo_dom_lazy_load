
const url = 'ws://34.171.195.97:8000/ws/notifications/';
const app = document.querySelector('#app');

const socket = new WebSocket(url);

const onSocketOpen = (e) => {
    console.log('Socket Opened', e);
}
const onSocketClose = (e) => {
    console.log('Socket Closed', e);
}
const onSocketError = (e) => {
    console.log('Socket Error', e);
}
const onSocketMessage = (e) => {
    console.log('Socket Message', e);
    const data = JSON.parse(e.data);
    const { message } = data;
    const newMessage = document.createElement('p');
    newMessage.innerText = message;
    app.appendChild(newMessage);
}

socket.addEventListener('open', onSocketOpen);
socket.addEventListener('close', onSocketClose);
socket.addEventListener('error', onSocketError);
socket.addEventListener('message', onSocketMessage);