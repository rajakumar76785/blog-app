const Comment = require("../models/commentModels");
const Post = require("../models/postModels");

//Business logic

exports.createComment = async (req,res) => {
    try{
        const{ post, user, body}= req.body;
        const comment = new Comment({post,user,body});
        const savedcomment = await comment.save();
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments:savedcomment._id}},{new:true})
                            .populate("comments")
                            .exec();
         res.json({
            post : updatedPost,
        });

    }catch(error){
        res.status(500).json({
            error:"error while creating comments",
        });
    }
}

