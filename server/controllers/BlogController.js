const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
    //Fetch Data from request body
    const { title, content, author, tags, thumbnail, publicId } = req.body;
   
    try{
        //Validation - All Fields are required
        if(!title || !content || !author || !tags || !thumbnail || !publicId) {
            return res.status(400).json({
                success:false,
                message:"Please fill all the fields"
            })
        }
        //Blog Created
        let blog = await Blog.create({
          title,
          content,
          author,
          tags,
          thumbnail,
          publicId,
        });

        await blog.save();

        //Return response
        return res.status(201).json({
            success:true,
            message:"Blog Created Successfully"
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Blog is not created, please try again.."
        })
    }
}


const getAllBlogs = async (req, res) => {
    
    try{
        //Find All Blogs
        let blogs = await Blog.find().sort({createdAt: -1});
        //Validation
        if(!blogs){
            return res.status(404).json({
                success:false,
                message:"No Blogs Found"
            })
        }
        //return response
        return res.status(200).json({
            success:true,
            blogs,
            message:"All Blogs Fetched",
            
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Blogs Not Found, please try again.."
        })
    }
}

const getBlogById = async(req, res) => {
    //Fetch data from request params
    const {id} = req.params;
    try{
        //findById
        const blog = await Blog.findById(id);
        //validation
        if(!blog){
            return res.status(404).json({
                success:false,
                message:"Blog is not exist"
            })
        }
        //return response
        return res.status(200).json({
            success:true,
            message:"Blog is fetched successfully",
            blog
        });
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"getBlog By Id is Not Found"
        })
    }
}


module.exports = { createBlog, getAllBlogs, getBlogById };















