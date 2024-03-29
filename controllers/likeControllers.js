const Like = require("../models/likeModels");
const Post = require("../models/postModels");

exports.likepost = async(req,res) => {
    try{
        const{post,user} = req.body;
        const like = new Like({post,user});
        const savedlike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{likes:savedlike._id}},{new:true})
                            .populate("likes")
                            .exec();
         res.json({
            post : updatedPost,
        });
    }catch(error){
        return res.status(400).json({
            error: "error while liking post",
        });
    }
}

exports.unlikepost = async(req,res) => {
    try{
        const {post,like} = req.body;
        const deletelike= await Like.findByIdAndDelete(like);
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:like}},{new:true})
                            .populate("likes")
                            .exec();
        res.json({
            post:updatedPost,
        });        
    }catch(error){
        return res.status(400).json({
            error: "error while unliking post",
        });
    }
}

