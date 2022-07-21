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
    console.log(`The server receive the follow msg: ${msg} From: ${rinfo.address}:${rinfo.port}`)
})

server.on('listening', () => {
    const address = server.address()
    console.log(`The server is listening ${address.address}:${address.port}`)
})

rl.addListener('line', line => {
    server.send(line, 4021, 'localhost', (err) => {
        console.log(`The follow msg was sended to the client: ${line}`)
    });
})


server.bind(PORT)