import HashtagRepository from "../repository/hastag-repository";
import TweetRepository from "../repository/tweet-respository";


class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }


    async create(data) {
    

    }

}