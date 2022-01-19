const router = require('express').Router();
const {
  Blogpost
} = require('../../models');
const withAuth = require('../../utils/auth');

// route to create/add a Blogpost using async/await (add later withAuth)
router.post('/', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.session.user_id
    });
    // if the Blogpost is successfully created, the new response will be returned as json
    res.status(200).json(blogpostData)
  } catch (err) {
    res.status(400).json(err);
  }
});
// UPDATE POST
router.put('blogpost/:id', withAuth, async (req, res) => {
  try {    
    const updateblogpost = await Blogpost.update({     
      title: req.body.title,
      description: req.body.description,
      },
      {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    console.log('here is the req.body', updateblogpost);
    if (!updateblogpost) {
      res.status(404).json({ message: 'No CommentsData found with this id!' });
      return;
    }

    res.status(200).json(updateblogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE POST
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const deleteblogpost = Blogpost.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!deleteblogpost) {
//       res.status(404).json({ message: 'No CommentsData found with this id!' });
//       return;
//     }

//     res.status(200).json(deleteblogpost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;