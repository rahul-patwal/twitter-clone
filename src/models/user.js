import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
    email :{
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String
    },
    bio : {
        type: String
    },
    name:{
      type: String
    },

    tweets: [ 
        {
        type: mongoose.Schema.Types.ObjectId
     }
]

});


// userSchema.method.comparePassword = function compare(password){
//     const user = this;
//     return bcrypt.compareSync(password, user.password)
// }

// userSchema.pre('save', function(next){
//     // const user = this;
//     const salt = bcrypt.genSaltSync(9);
//     const ecryptedPassword = bcrypt.hashSync(user.pssword, salt);
//     console.log("inside model", ecryptedPassword)
//     user.password = ecryptedPassword;
//     console.log(" user.password", user.password)

//     next();

// })

const User = mongoose.model('User', userSchema);

export default User;