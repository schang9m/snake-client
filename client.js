const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host:"localhost",
    port:50541
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
  return conn;
}

console.log("Connecting ...");
module.exports = connect;