import  moongose,{ Schema } from 'mongoose';

const userSchema = new Schema({
    name : String,
    detail : String,
    age : Number,
    created : Date,
    hidden : Boolean,

})


export const User = moongose.model('User', userSchema);