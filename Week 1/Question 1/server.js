const net = require('net')
const readline = require('readline')

const PORT = 4000
const LOCALHOST = '127.0.0.1'
const TIMEOUT = 1000

// This function create a interface beetwen a input and a output
const rl = readline.createInterface({
    input: process.stdin,  // Default terminal input 
    output: process.stdout  // Default terminal output
})

// Function that will be executed evey time that a new request on the server was made.
const handlerConnection = socket => {
    console.log('Someone has connected!')
    // Kill server funciton
    socket.on('end', () => { 
        console.log('Someone was disconnected')
    })

    // Receive data function
    socket.on('data', data => {
        console.log('Client say:', data.toString())
    })
    rl.addListener('line', line => {
        socket.write(line);
        socket.pipe(socket);
    })
}

// Creating server instance 
const server = net.createServer(handlerConnection)
server.listen(PORT, LOCALHOST)
