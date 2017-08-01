'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setUpSocket = function setUpSocket(io) {
  io.on('connection', function (socket) {
    // eslint-disable-next-line no-console
    console.log('a user connected');

    socket.on('disconnect', function () {
      // eslint-disable-next-line no-console
      console.log('user disconnected');
    });
  });
};

exports.default = setUpSocket;