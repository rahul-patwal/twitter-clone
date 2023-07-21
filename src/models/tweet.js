import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    noOfRetweets: {
        type: Number
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
})

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;