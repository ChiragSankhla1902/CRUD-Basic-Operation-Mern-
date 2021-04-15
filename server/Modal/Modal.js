import mongoose from "mongoose";

const struct = mongoose.Schema({
    email:String,
    pass:String
})

const contact= mongoose.model('pratice', struct);

export default contact;