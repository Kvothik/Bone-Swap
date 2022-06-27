// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

// db
mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB Connected")).catch(err => console.log("DB Conncetion ERROR", err));

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));

// routes
const testRoutes = require('./routes/test');
const usersRoutes = require('./routes/usersRoutes');
const postsRoutes = require('./routes/postsRoutes');
const chatsRoutes = require('./routes/chatsRoutes');
app.use('/', testRoutes);
app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/chats', chatsRoutes);

// port
const port = process.emitWarning.PORT || 8080;

// listener
const server = app.listen(port, () =>
    console.log(`Server is running on ${port}`)
);

//Chat
const http = require("http");
const { Server } = require("socket.io");
const chatApp = express();

const chatServer = http.createServer(chatApp);

const io = new Server(chatServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

chatServer.listen(8001, () => {
  console.log("chatServer RUNNING");
});
