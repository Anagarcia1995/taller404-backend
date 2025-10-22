import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name:{type: String, required: true},
    date: {type:String, required: true},
    djs: {type:String, required: true},
    price: {type: Number, required:true},
    image: {type: String},
    createdAt: { type: Date, default: Date.now },

})

const Event = mongoose.model("Event", eventSchema);

export default Event;