const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create/add a Blogpost using async/await (add later withAuth)
router.post('/',withAuth, async (req, res) => {

  try { 
    console.log(req.body)
    const CommentsData = await Comments.create({...req.body,
      user_id: req.session.user_id,
    });
  // if the Blogpost is successfully created, the new response will be returned as json
  res.status(200).json(CommentsData)
} catch (err) {
  console.log('this is the error', err)
  res.status(400).json(err);
}
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const CommentsData = await Comments.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CommentsData) {
      res.status(404).json({ message: 'No CommentsData found with this id!' });
      return;
    }

    res.status(200).json(CommentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
