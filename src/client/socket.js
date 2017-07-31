import io from 'socket.io-client';
import * as Actions from '../redux/actions';

const socket = io(window.location.host);

const setUpSocket = (store) => {
  socket.on('connect', () => {
    // eslint-disable-next-line no-console
    console.log('Socket Connected to server');
  });
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('Socket Disconnected from server');
  });
  socket.on('new_saved', () => {
    store.dispatch(Actions.getSaved());
  });
};

export default setUpSocket;
