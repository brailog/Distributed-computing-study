const net = require('net')
const fs = require('fs')

const PORT = 2000
const LOCALHOST = '127.0.0.1'
let sockets = []

const handlerConnection = socket => {
    sockets.push(socket)
    console.log('Client connected.');

    socket.on('data', data => {
        broadcast(data, socket);
    })

    socket.on('error', err => {
        console.log('A client has disconnected.');
    })

    socket.on('close', () => {
        console.log("A client has left the Dawn FM.");
    })
}

function broadcast(message, socketSent) {
    if (sockets.length === 0) {
		process.stdout.write('Everyone left the Dawn FM');
		return
	}
    if (message === 'quit') {
        const index = sockets.indexOf(socketSent);
        sockets.splice(index, 1)
    } else {
        sockets.forEach(socket => {
            if (socket !== socketSent) // Removing the selfline when the user type 
            socket.write(message)
            fs.appendFile('log.txt', `${Date.now()} | ${message}\n`, function (err) {  // Generate the log file. 
                if (err) return console.log(err)
              })
        })
    }
}

const server = net.createServer(handlerConnection)
server.listen(PORT, LOCALHOST)
