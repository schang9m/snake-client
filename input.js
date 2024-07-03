// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  connection = conn
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};
let movement;
const handleUserInput = function (key) {
  // code handling the key press will go here
  if (key === "\u0003") {
    process.exit();
  };
  if (movement) {
    clearInterval(movement);
  }
  if (key === "w") {
    movement = setInterval(()=> connection.write("Move: up"), 50)
  } else if (key === "s") {
    movement = setInterval(()=> connection.write("Move: down"), 50)
  } else if (key === "a") {
    movement = setInterval(()=> connection.write("Move: left"), 50)
  } else if (key === "d") {
    movement = setInterval(()=> connection.write("Move: right"), 50)
  }
  if (key === "1") {
    connection.write("Say: That was close!")
  }
  if (key === "2") {
    connection.write("Say: Too easy!")
  }
  if (key === "3") {
    connection.write("Say: GG!")
  }
};

module.exports = setupInput;