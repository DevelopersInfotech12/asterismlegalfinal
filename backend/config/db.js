import express from 'express'
import mongoose from 'mongoose'

const connectDb = async() => {
     try {
        await mongoose.connect(process.env.MONGO_URL)
        useNewUrlParser: true,
        
        console.log(`Connected to Mongoose at ${process.env.MONGO_URL}`)
     } catch (error) {
        console.log(`Mongodb Database Error ${error}`)
     }
}

export default connectDb