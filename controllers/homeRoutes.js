const router = require('express').Router();
const {
  Blogpost,
  User,
  Comments
} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
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
router.get('/blogpost/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [{
          model: User,
          attributes: ['fullname']
        }, {
          model: Comments,
          attributes: ['description']
        }
      ]
    });

    const blogposts = blogpostData.get({
      plain: true
    });

    res.render('comments', {
      ...blogposts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogpostData = await Blogpost.findAll({

      include: [{
        model: User
      }],
      where: {
        user_id: req.session.user_id
      }

    });

    // Serialize data so the template can read it
    const blogposts = blogpostData.map((blogpost) => blogpost.get({
      plain: true
    }));

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      blogposts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password']
      },
    });

    const user = userData.get({
      plain: true
    });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;