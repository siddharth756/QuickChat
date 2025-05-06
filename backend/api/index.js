import express from "express"
import authRoutes from "../routes/auth.route.js"
import messageRoutes from "../routes/message.route.js"
import { connectDB } from "../lib/db.js"
import cookieParser from 'cookie-parser'
import cors from "cors"
import "dotenv/config"
import { app, server } from "../lib/socket.js"
import path from "path"

const port = process.env.PORT || 4000
const __dirname = path.resolve()

app.use(express.json({limit: '10mb'}))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(async (req,res,next) => {
    await connectDB()
    console.log("Database Connected.")
    next()
})


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../../frontend/dist")))

    app.get("/*",(req,res) => {
        res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"))
    })
}
    
server.listen(port,() => {
    console.log(`Running at http://localhost:${port}`)
})