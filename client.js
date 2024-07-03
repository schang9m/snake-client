const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host:IP,
    port:PORT
  });

  conn.setEncoding("utf-8");
  conn.on("error", () => process.exit())
  conn.on("data", (msg) => {
    // code that does something when the connection is first established
    console.log(`server says: ${msg}`)
  });
  conn.on("connect",() => console.log('Client: connection established with server'))
  //send our name after connected
  conn.on("connect", () => {
    conn.write("Name: RAG")
  })
  //made a move up function that have interval of 50ms so it keeps going up
  
  return conn;
}

console.log("Connecting ...");
module.exports = connect;