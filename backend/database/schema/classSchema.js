import mongoose from "mongoose";


const ClassSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true, index: "text" },
    // type: {type: String, required: true},
    students: {
        type: Array,
        default: []
    }
    
    // setting: { type: String }
});

export default ClassSchema;