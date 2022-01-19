const router = require('express').Router();
const {
  Blogpost,
  User,
} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogpostData = await Blogpost.findAll({


      include: [{
        model: User,
      }, ],


    });

    // Serialize data so the template can read it
    const blogposts = blogpostData.map((blogpost) => blogpost.get({
      plain: true
    }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogposts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// AFTER CLICK ON NEW POST BUTTON
router.get('/new', withAuth, (req, res) => {
  // what view should we send the client when they want to create a new-post? (change this next line) - DONE!
  res.render('editpost', {
    // again, rendering with a different layout than main! no change needed
    layout: 'dashboard',
  });
});

// WHEN WE CLICK ON THE POST ITSELF
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    // what should we pass here? we need to get some data passed via the request body -DONE!
    const postData = await Blogpost.findByPk(req.params.id);

    if (postData) {
      // serializing the data
      const post = postData.get({ plain: true });
      console.log(post);
      // which view should we render if we want to edit a post?
      res.render('editpost', {
        ...post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
