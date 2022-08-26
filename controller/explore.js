
const Post= require('../models/PostContainer');


module.exports.Explore= async function(req,res){

    let post= await Post.find({}).sort({'vote':-1});
    console.log(post);

    return res.status(200).json({"message":post})

}
