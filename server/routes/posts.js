const express = require('express');

const Posts = require('../models/posts');

const router = express.Router();

//save posts
    router.post("/post/save", (req, res) => {
      let newPost = new Posts(req.body);
        
      newPost.save()
          .then(() => {
            return res.status(200).json({
              success: "Post Saved Successfully",
            });
          })
          .catch((err) => {
            return res.status(400).json({
              error: err,
            });
          });
        });


//GET posts
// router.get('/posts',(req,res)=>{
//     Posts.find().exec((err,posts)=>{
//       if(err){
//         return res.status(400).json({
//           error:err
//         });
//       }
//       return res.status(200).json({
//         success:true,
//         existingPosts:posts
//       });
//     });
// });

router.get('/posts', async (req, res) => {
  try {
    const posts = await Posts.find().exec();
    return res.status(200).json({
      success: true,
      existingPosts: posts,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});


//update posts

router.put('/post/update/:id', async (req, res) => {
  try {
        const updatedPost = await Posts.findByIdAndUpdate(req.params.id, { $set: req.body });
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        return res.status(200).json({
            success: "Updated successfully"
        });
      } 
      catch (err) {
        return res.status(400).json({ error: err.message});
      }
});


//delete post

router.delete('/post/delete/:id', async (req, res) => {
  try {
    const deletedPost = await Posts.findByIdAndRemove(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.status(200).json({
      message: 'Delete successful',
      deletedPost,
    });
  } catch (err) {
    return res.status(400).json({ message: 'Delete unsuccessful', error: err.message });
  }
});



router.get("/post/:id", async (req, res) => {
  try {
    let postId = req.params.id;
    const post = await Posts.findById(postId);
    
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    
    return res.status(200).json({
      success: true,
      post
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message});
  }
});

module.exports = router;
