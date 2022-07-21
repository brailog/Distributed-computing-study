const net = require('net')
const readline = require('readline')
const { Buffer } = require('buffer');

const PORT = 2000
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

    // Receive data function
    socket.on('data', data => {  // The client send a buffer with 3 of allocation. This way I can parse the buffer in three.
        n1 = data.readInt8(0);
        n2 = data.readInt8(1);
        op = data.toString('utf-8', 2);
        socket.write(`The result is: ${calculator(n1, n2, op)}`) 
    })
}

function calculator(n1, n2, operator){  // Support function to handler the basic math
    if(operator === '+'){
        return (n1 + n2).toString()
    }

    if(operator === '-'){
        return (n1 - n2).toString()
    }

    if(operator === '/'){
        return (n1 / n2).toString()
    }

    if(operator === '*'){
        return (n1 * n2).toString()
    }
}

// Creating server instance 
const server = net.createServer(handlerConnection)
server.listen(PORT, LOCALHOST)
