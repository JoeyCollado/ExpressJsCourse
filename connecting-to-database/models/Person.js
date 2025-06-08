import mongoose from "mongoose";

//create schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
})