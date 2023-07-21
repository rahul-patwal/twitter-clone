import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const data = req.body;
        const response = await tweetService.create(data);

        return res.status(201).json({
            success: true,
            message: 'Successfully created a tweet',
            data: response,
            error: {}
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Error Encountered',
            data: {},
            err: error
        })

    }
}

export const getTweet = async (req, res) => {
    try {
        const respone = await tweetService.getTweet(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'successfully fetched a Tweet',
            data: respone,
            err: {}

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error Encounter getting a Tweet',
            data: {},
            err: error
        })

    }
}