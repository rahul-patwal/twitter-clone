import mongoose from "mongoose";

const connect = async() =>{
    await mongoose.connect('mongodb://0.0.0.0:27017/twitter-backend').then(() =>{
        console.log(`mongo db connected successfully!`);
    }).catch((err) =>{
        console.log(err);
    })
    
}

export default connect;