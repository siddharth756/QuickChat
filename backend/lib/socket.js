import { Server } from "socket.io"
import http from "http"
import express from "express"
import "dotenv/config"

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: [process.env.ALLOWED_ORIGIN1],
        credentials: true
    }
})


export function getReceiverSocketId(userId) {
    return userSocketMap[userId]
}

// used to store online users
const userSocketMap = {}

io.on("connection", (socket) => {
    console.log("User connected : ", socket.id)

    const userId = socket.handshake.query.userId
    if (userId) {
        userSocketMap[userId] = socket.id
    }

    // used to send events to all connected users
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("User disconnected : ", socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export { io, app, server };