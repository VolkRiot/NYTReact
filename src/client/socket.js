import io from 'socket.io-client';

const socket = io(window.location.host);

// eslint-disable-next-line
const setUpSocket = (store) => {
  socket.on('connect', () => {
    // eslint-disable-next-line no-console
    console.log('Socket Connected to server');
  });
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('Socket Disconnected from server');
  });
};

export default setUpSocket;
