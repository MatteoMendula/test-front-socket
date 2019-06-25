var socket_url = 'wss:sdasfaffsfssf';

var connectionOptions = {
	'force new connection' : true,
	'reconnectionAttemps':'Infinity',
	'timeout':1000,
	'transports':['websocket']
};

const io = require('socket.io-client');

var socket = io.connect(socket_url,connectionOptions);

socket.on('message', function(payload){
	console.log('received data',payload);
});