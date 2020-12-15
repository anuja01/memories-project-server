// controllers for logic, after hitting the routes

import PostMessage from "../models/postMessage.js"; // schema

export const getPosts = async (req, res) => {
    try {
        // retrieve all posts in database (getting values from DB is asynchronous)
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}