const net = require('net')
const readline = require('readline')

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
    socket.on('data', data => {
        console.log('Client math input was:', data.toString())
        const client_input = data.toString()
        socket.write(`The result is: ${calculator(client_input)}`)
    })
}

function calculator(input){  // Support function to handler the basic math
    splited_input = input.split(' ')
    n1 = parseFloat(splited_input[0])
    n2 = parseFloat(splited_input[1])
    operator = splited_input[2]

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
