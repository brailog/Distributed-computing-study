const net = require('net')
const readline = require('readline')

const PORT = 4000
const LOCALHOST = '127.0.0.1'

// This function create a interface beetwen a input and a output
const rl = readline.createInterface({
    input: process.stdin,  // Default terminal input 
    output: process.stdout  // Default terminal output
})

const client = new net.Socket()
client.connect(PORT, LOCALHOST, () => {
    console.log('Your connected!')
    rl.addListener('line', line => {
        client.write(line)
    })
}) 

client.on('data', (data) => {
    console.log('Server say: ' + data);
});