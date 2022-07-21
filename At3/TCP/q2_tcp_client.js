const net = require('net')
const readline = require('readline')

const PORT = 2000
const LOCALHOST = '127.0.0.1'
const buf = Buffer.allocUnsafe(3);  // Allow only 3 bytes to send the buffer as the first and second bytes the interger and the last one will be the string operator 

// This function create a interface beetwen a input and a output
const rl = readline.createInterface({
    input: process.stdin,  // Default terminal input 
    output: process.stdout  // Default terminal output
})

const client = new net.Socket()
client.connect(PORT, LOCALHOST, () => {
    console.log('Your are now able to do some math!\n The syntax for this calculator is: <N1> <N2> <OPERATION> use whitespace.\nThe supported math operations for this implementation is (+, -, *, /)')
    rl.addListener('line', line => {
        line_split = line.split(' ');
        buf.writeInt8(line_split[0], 0)
        buf.writeInt8(line_split[1], 1)
        buf.write(line_split[2], 2)
        client.write(buf);
    })
}) 

client.on('data', (data) => {
    console.log(data.toString());
});