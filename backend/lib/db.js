import mongoose from "mongoose"
import "dotenv/config"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log("Database Connection Error : " , error)
    }
}