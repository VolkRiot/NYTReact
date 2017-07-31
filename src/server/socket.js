import Article from './models/Articles';

const setUpSocket = (io) => {
  io.on('connection', (socket) => {
    // eslint-disable-next-line no-console
    console.log('a user connected w/', socket);

    socket.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log('user disconnected w/', socket);
    });

    socket.on('new_saved', () => {
      Article.find({}).exec((err, doc) => {
        if (!err) {
          io.emit('update_saved', doc);
        }
      });
    });
  });
};

export default setUpSocket;
