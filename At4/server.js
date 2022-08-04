const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("calculator.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const protocalculetor = grpcObject.protocalculetor;

TAG_DEBUG = 'DEBUG'
TAG = 'SERVER'

const server = new grpc.Server();
server.bind("localhost:2000", grpc.ServerCredentials.createInsecure()); // No need to create a credential for study purpose 


// Add the Service and the implementation from the proto file to the server
server.addService(protocalculetor.Calculator.service, {
    "calculator": calculator,
});

server.start();

function calculator (call, callback) {
    const input_calculator = {
        "number1": call.request.number1,
        "number2": call.request.number2,
        "operation": call.request.operation,
        "result": null
    }
    console.log(`${TAG_DEBUG} | The input received by the client was: ${input_calculator.number1}, ${input_calculator.number2}, ${input_calculator.operation}`)

    const result = operator(input_calculator.number1, input_calculator.number2, input_calculator.operation)
    input_calculator.result = result
    callback(null, input_calculator);
}


function operator(n1, n2, operator){  // Support function to handler the basic math
    if(operator === '+'){
        return (n1 + n2)
    }

    if(operator === '-'){
        return (n1 - n2)
    }

    if(operator === '/'){
        return (n1 / n2)
    }

    if(operator === '*'){
        return (n1 * n2)
    }
}