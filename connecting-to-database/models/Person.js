import mongoose, { mongo } from "mongoose";

//create schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
})

//create model
export const Person = mongoose.model("Person", personSchema)