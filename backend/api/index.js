import express from "express"
import authRoutes from "../routes/auth.route.js"
import messageRoutes from "../routes/message.route.js"
import { connectDB } from "../lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import "dotenv/config"
import { app, server } from "../lib/socket.js"
import path from "path"

const port = process.env.PORT || 5000
const __dirname = path.resolve()

app.use(express.json({ limit: "10mb" }))
app.use(cookieParser())

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (process.env.NODE_ENV === "production") {
    const staticPath = path.join(__dirname, "../frontend/dist");
    app.use(express.static(staticPath))
    app.get("*", (req, res) => {
        res.sendFile(path.join(staticPath, "index.html"))
    })
}

const startServer = async () => {
    await connectDB()
    console.log("✅ Database Connected.")

    server.listen(port, () => {
        console.log(`🚀 Server running at http://localhost:${port}`)
    })
}

startServer()