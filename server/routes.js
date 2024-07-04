const router = require("express").Router();
const verifyToken = require("./middlewares/verifyToken")
const { signup, login, checkAuth } = require("./controllers/AuthController");
const { createBlog, getAllBlogs, getBlogById } = require("./controllers/BlogController");
const {
        getComment,
        addComment,
        updateComment,
        deleteComment,
    } = require("./controllers/CommentController");


router.post("/signup", signup);
router.post("/login", login);
router.get("/checkAuth", verifyToken, checkAuth);


router.post("/createBlog", verifyToken, createBlog)
router.get("/allBlogs", getAllBlogs)
router.get("/getBlogById/:id", getBlogById);


router.get("/getComments/:id", getComment);
router.post("/addComment/:id", addComment);
router.put("/updateComment/:blogId/:commentId", updateComment);
router.delete("/deleteComment/:blogId/:commentId", deleteComment);


// Example CORS headers in API routes
router.get('/api/addComment', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
});

module.exports = router;










