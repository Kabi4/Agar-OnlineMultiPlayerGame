const { io } = require("../server");

io.on("connect", (socket) => {
  console.log(`A User connected with socket id ${socket.id}.`);
  socket.on("disconnect", (payload) => {
    console.log(`A user with socket id ${socket.id} disconnected.`);
  });
});
