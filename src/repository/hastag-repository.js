import Hashtag from "../models/hastag.js";

class HashtagRepository {

    async createHashtag(data) {
        try {
            let hastag = await Hashtag.create(data);
            return hastag;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    async bulkCreate(data){
        try{
 
            const tags = await Hashtag.insertMany(data);
            return tags;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async getHashtag(id) {
        try {
            let hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

  // get byname
    async getHashtagByName(text) {
        try {
            let hashtag = await Hashtag.find({
                text:text
            });
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
    
    async deleteHashtag(data) {
        try {
            let hashtag = await Hashtag.deleteOne({data});
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }


}

export default HashtagRepository