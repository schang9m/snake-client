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

  return conn;
}

console.log("Connecting ...");
module.exports = connect;