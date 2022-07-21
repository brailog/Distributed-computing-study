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
    const math_input = msg.toString()
    server.send(`The result is: ${calculator(math_input)}`, rinfo.port)
})

server.on('listening', () => {
    const address = server.address()
    console.log(`The server is listening ${address.address}:${address.port}`)
})

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

server.bind(PORT)