const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("calculator.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const protocalculetor = grpcObject.protocalculetor;

const number1 = process.argv[2];
const number2 = process.argv[3];
const operation = process.argv[4];

TAG_DEBUG = 'DEBUG'
TAG = 'CLIENT'

const client = new protocalculetor.Calculator("localhost:2000", 
grpc.credentials.createInsecure())

console.log(`${TAG_DEBUG} | Input values: ${number1}, ${number2}, ${operation}`)

client.calculator({
    "number1": number1,
    "number2": number2,
    "operation": operation
}, (err, response) => {
    console.log(`${TAG} | ANSWER: ${JSON.stringify(response.result)}`)
})
