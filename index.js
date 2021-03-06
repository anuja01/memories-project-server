import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js';

const app = express(); // initialize the app

app.use('/posts', postsRoutes);
// setting up bodyParser to properly send the requests
// limit is set to 30MB because we need to upload images
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://anuja:testuser1989@momories-cluster.mgpsp.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// DB connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Connected to DB. Server running on port: ${PORT}`)) )
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false); // avoid console warnings