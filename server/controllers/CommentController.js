const Blog = require("../models/Blog");
const Comment = require("../models/Comment");


const getComment = async(req, res) => {
    //Fetch Id from Request Params
    const {id} = req.params;
    try{
        //Find By ID
        let blog = await Blog.findById(id).populate("comments");
        //Validation
        if(!blog){
            return res.status(404).json({
                success:false,
                message:"Blog is Not Found"
            })
        }
        //Return response
        return res.status(200).json({
            success:true,
            message:"Comment Fetched Successfully",
            comments: blog.comments,
        })

    }catch(error){
        console.log(error)
        return res.status(200).json({
            success:false,
            message:"Comment is not Find"
        })
    }
}


const addComment = async (req, res) => {
    //fetch data from request params
    const {id} = req.params;
    //fetch data from request Body
    const {comment, userName, userImage, userId} = req.body;
    try{
        //Find Blog By ID
        let blog = await Blog.findById(id);
        //Validation
        if(!blog){
            return res.status(404).json({
                success:false,
                message:"Blog is Not Found"
            })
        }
        //Create New Comment
        const newComment = await Comment.create({
            comment,
            userName,
            userImage,
            userId,
            postId: id,
        });

        blog.comments.push(newComment);
        await blog.save();
        //Return Response
        return res.status(201).json({
            success:true,
            message:"Comment Added Successfully",
        })

    }catch(error){
        console.log(error)
        return res.status(200).json({
            success:false,
            message:"Comment is not Added"
        })
    }
}

const updateComment = async(req, res) => {

    //fetch blogId and commentId from request params
    const {blogId, commentId} = req.params;
    //fetch comment from request body
    const { comment } = req.body;

    try{
        //Find Comment Id
        let commentToUpdate = await Comment.findById(commentId);
        //validation
        if(!commentToUpdate){
            return res.status(404).json({
                success:false,
                message:"Comment is not Found"
            })
        }

        if(commentToUpdate.postId.toString() !== blogId) {
            return res.status(400).json({
                success:false,
                message:"Invalid Comment fot this blog",
            })
        }

        commentToUpdate.comment = comment;
        await commentToUpdate.save();

        //return res
        return res.status(200).json({
            success:true,
            message:"Comment updated successfully"
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Comment is not updated"
        })
    }    
}


const deleteComment = async (req, res) => {
    //fetch ID's from request params
    const { blogId, commentId } = req.params;
    try{
        //Find comment Id
        let commentToDelete = await Comment.findById(commentId);
        //Validation
        if(!commentToDelete){
            return res.status(404).json({
                success:false,
                message:"Comment no found"
            })
        }
        //if check postId equal to blogId
        if(commentToDelete.postId.toString() !== blogId) {
            return res.status(404).json({
                success:false,
                message:"invalid comment for this blog"
            })
        }

        //Find Blog
        let blog = await Blog.findById(blogId);
        //validate
        if(!blog) {
            return res.status(404).json({
                success:false,
                message:"Blog Not Found"
            })
        }
        //Update Blog
        blog.comments.pull(commentId);
        await blog.save();
        await commentToDelete.deleteOne();
        //return response
        return res.status(200).json({
            success:true,
            message:"Comment Deleted successfully"
        });

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Comment not Delete"
        })
    }
}





module.exports = {getComment, addComment, deleteComment, updateComment};







