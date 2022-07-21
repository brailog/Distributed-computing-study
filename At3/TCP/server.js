
// Node.js program to demonstrate the 
// Buffer.writeInt8() method 
       
// Allocating buffer of size 2
const buf = Buffer.allocUnsafe(3);
  
// Printing the buffer before writing into it
console.log("Before writing into buffer:");
console.log(buf);
  
// Writing 8 bit signed integers
console.log(buf.writeInt8(120, 0));
console.log(buf.writeInt8(55, 1));
console.log(buf.write('+', 2))
// Printing buffer after writing
// 8 bit signed integers in it.
console.log("After writing into buffer:");
console.log(buf.readInt8(0));
console.log(buf.readInt8(1));
console.log(buf.toString('utf-8', 2));