'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _actions = require('../redux/actions');

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)(window.location.host);

var setUpSocket = function setUpSocket(store) {
  socket.on('connect', function () {
    // eslint-disable-next-line no-console
    console.log('Socket Connected to server');
  });
  socket.on('disconnect', function () {
    // eslint-disable-next-line no-console
    console.log('Socket Disconnected from server');
  });
  socket.on('saved_articles_updated', function () {
    store.dispatch(Actions.getSaved());
  });
};

exports.default = setUpSocket;