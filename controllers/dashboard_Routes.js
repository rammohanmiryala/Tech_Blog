const router = require('express').Router();
const {
  Blogpost,
  User,
} = require('../models');
const withAuth = require('../utils/auth');

router.get('/',withAuth, async (req, res) => {
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

// get the blogpost id for the dashboard route
router.get('/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      // include: [{
      //   model: User,
      //   attributes: ['fullname']


      // }, {
      //   model: Comments,
      //   include: [{
      //     model: User,
      //     attributes: ['fullname']
      //   }]

      // }]
    });

    console.log(blogpostData)

    const blogposts = blogpostData.get({plain: true});
    res.render('editpost', {
      // ...blogposts,
      ...blogposts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    res.redirect('login');
  }
});


module.exports = router;