const dgram = require('dgram')
const client = dgram.createSocket('udp4')

const buf = Buffer.allocUnsafe(3);  // Allow only 3 bytes to send the buffer as the first and second bytes the interger and the last one will be the string operator 
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
    line_split = data.split(' ');
    buf.writeInt8(line_split[0], 0)
    buf.writeInt8(line_split[1], 1)
    buf.write(line_split[2], 2)
    client.send(buf, SERVER_PORT, 'localhost', (err) => {
    })
})
