import mongoose from 'mongoose';

// schema is an object that allows you to define the shape and content of documents 
// and embedded documents in a collection
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

// turn the schema to a model and export 
// can run commands such as find, delete, etc on this model when query for data.
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;