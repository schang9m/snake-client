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
  //made a move up function that have interval of 50ms so it keeps going up
  const moveUp = function() { 
    conn.write("Move: up")
    setTimeout(moveUp, 50)
  }
  //move down
  const moveDown = function() { 
    conn.write("Move: down")
    setTimeout(moveDown, 50)
  }
  //move left
  const moveleft = function() { 
    conn.write("Move: left")
    setTimeout(moveleft, 50)
  }
  //move right
  const moveright = function() { 
    conn.write("Move: right")
    setTimeout(moveright, 50)
  }

  // conn.on("connect", moveUp)
  
  return conn;
}

console.log("Connecting ...");
module.exports = connect;