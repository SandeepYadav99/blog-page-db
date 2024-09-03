import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    image: {  type: String,required: false },
    category: {  type: String,required: true },
    date: {  type: String,required: true },
    title: {  type: String,required: true },
    des: {  type: String,required: true },
    avatar: {  type: String,required: true },
    author: {  type: String,required: true },
    top: {  type: Boolean,required: false },
    trending: {  type: Boolean,required: false },
    large:{type:Boolean, required:false}
    // top: {  type: Boolean,required: false },
});
const Person = mongoose.model('news-posts', postSchema);

export default Person;



