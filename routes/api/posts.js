const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');
const config = require('config');


const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route   POST api/posts
// @desc    create a post
// @access  Private
router.post('/', [auth, [
    check('text', 'Text is required')
      .not()
      .isEmpty()
  ]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });
      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }

  });

// @route   GET api/posts
// @desc    GET all posts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({date: -1});
    res.json(posts)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/:id
// @desc    GET post by ID
// @access  Priv
router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log('get', post.id.toString(), req.params.id);

    if (!post)
      return res.status(404).json({msg: "post not found"});

    res.json(post)
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId')
      return res.status(404).json({msg: "post not found"});

    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/posts/:id
// @desc    Del a post
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  console.log('DELETE');

  try {
    const post = await Post.findById(req.params.id);
    // console.log('post', post);
    if (!post)
      return res.status(404).json({msg: "post not found"});

    //check user
    console.log('DELETE', post.id.toString(), 'params:', req.params);
    // console.log('22222', post.user.toString());
    // console.log('22222', req.params.id.toString());
    // if (post.user.toString() !== req.params.id.toString()) {
    //   return res.status(401).json({msg: 'user not authorised'});
    // }
    await post.remove();

    res.json({msg: 'Post removed'});
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId')
      return res.status(404).json({msg: "post not found"});

    res.status(500).send('Server Error');
  }
});


module.exports = router;
