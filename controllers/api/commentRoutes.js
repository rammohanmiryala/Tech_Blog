const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create/add a Blogpost using async/await (add later withAuth)
router.post('/',withAuth, async (req, res) => {
  try { 
    const CommentsData = await Comments.create({
    description: req.body.description,
    user_id: req.session.user_id
  });
  // if the Blogpost is successfully created, the new response will be returned as json
  res.status(200).json(CommentsData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;
