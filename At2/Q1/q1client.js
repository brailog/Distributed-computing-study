const dgram = require('dgram')
const client = dgram.createSocket('udp4')

const CLIENT_PORT = 4021
const SERVER_PORT = 4020
const LOCALHOST = '127.0.0.1'

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

client.on('listening', () => {
    const address = client.address();
    console.log('Client is listening on:' + address.port);
});

client.on('message', (msg, rinfo) => {
    console.log(`The server send the follow msg: ${msg} From: ${rinfo.address}:${rinfo.port}`)
})


readLine.on('line', data => {
    client.send(data, SERVER_PORT, 'localhost', (err) => {
        console.log(`The follow msg was sended to the server: ${data}`)
    })
})

client.bind(CLIENT_PORT)