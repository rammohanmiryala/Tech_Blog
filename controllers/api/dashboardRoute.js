const router = require('express').Router();
const Blogpost = require('../../models/blogpost');
const withAuth = require('../../utils/auth');

// route to create/add a Blogpost using async/await
router.post('/dashboard',withAuth, async (req, res) => {
  try { 
    const blogpostData = await Blogpost.create({
    title: req.body.title,
    description: req.body.description,
    // user_id: req.session.user_id
  });
  // if the Blogpost is successfully created, the new response will be returned as json
  res.status(200).json(blogpostData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;
