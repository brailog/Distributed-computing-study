const net = require('net');
const PORT = 2000

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const waitForUsername = new Promise(resolve => {
    readLine.question(
`You are now listening to 103.5 Dawn FM
You've been in the dark for way too long
It's time to walk into the light
And accept your fate with open arms
Scared? Don't worry
We'll be there to hold your hand and guide you through this painless transition
But what's the rush?
Just relax and enjoy another hour of commercial
Free yourself music on 103.5 Dawn FM
To stay tuned, please say your name: `, answer => {
        resolve(answer);
    });
});

waitForUsername.then((username) => {

    const socket = net.connect({
        port: PORT
    });

    readLine.on('line', data => {
        if (data === 'quit') {
            socket.write(`${username} has left the Dawn FM.`);
            socket.setTimeout(1000);
        } else {
            socket.write(username + ': ' + data);
        }
    });

    socket.on('connect', () => {
        socket.write(username + ' has joined the Dawn FM.');
    });

    socket.on('data', data => {
        console.log(data.toString());
    });

    socket.on('end', () => {
        process.exit();
    });

    socket.on('error', () => {
        console.log('The server seems to have been shut down...');
    });
});