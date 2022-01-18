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
router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log('here is the req.body', req.body);
    const updateblogpost = await Blogpost.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(updateblogpost)
} catch (err) {
  console.log('this is the error', err)
  res.status(400).json(err);
}
});
//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// DELETE POST
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = Post.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });




module.exports = router;