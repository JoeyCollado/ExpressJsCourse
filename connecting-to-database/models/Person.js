import mongoose from "mongoose";

//create schema
const personSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique:true},
}, {timestamps:true})

//create model
export const Person = mongoose.model("Person", personSchema)