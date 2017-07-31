const setUpSocket = (io) => {
  io.on('connection', (socket) => {
    // eslint-disable-next-line no-console
    console.log('a user connected');

    socket.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log('user disconnected');
    });
  });
};

export default setUpSocket;
