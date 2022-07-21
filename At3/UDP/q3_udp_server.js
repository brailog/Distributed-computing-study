const dgram = require('dgram')
const readline = require('readline')


// This function create a interface beetwen a input and a output
const rl = readline.createInterface({
    input: process.stdin,  // Default terminal input 
    output: process.stdout  // Default terminal output
})


const server = dgram.createSocket('udp4')
const PORT = 4020

server.on('message', (msg, rinfo) => {
    console.log(`${msg}`)
    n1 = msg.readInt8(0);
    n2 = msg.readInt8(1);
    op = msg.toString('utf-8', 2);
    server.send(`The result is: ${calculator(n1, n2, op)}`, rinfo.port)
})

server.on('listening', () => {
    const address = server.address()
    console.log(`The server is listening ${address.address}:${address.port}`)
})

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

server.bind(PORT)