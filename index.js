import express from 'express'
import connect from './src/config/database.js';
import Hashtag from './src/models/hastag.js';
import TweetRepository from './src/repository/tweet-respository.js';

const app = express();


app.listen(3000, async () => {
     console.log(`server running on port 3000`);
     connect();

})