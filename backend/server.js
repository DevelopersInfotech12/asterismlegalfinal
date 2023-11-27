import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import routes from './routes/contactRoutes.js';

// ENV CONFIG
dotenv.config();

// MONGODB CONNECTION
connectDB();

const app = express()

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api", routes )

const PORT = process.env.PORT|| 8080;

app.listen(PORT, ()=> {
    console.log(`Node Server Running In ${process.env.DEV_MODE} modeOn POrt at ${process.env.PORT}`)
})