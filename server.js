const express = require("express");
const path = require("path");
const socketio = require("socket.io");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server are up and listening to port ${process.env.PORT || 3000}.`
  );
});

const io = socketio(server);

module.exports = {
  app,
  io,
};
