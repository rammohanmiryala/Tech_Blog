const router = require('express').Router();
const {
  Blogpost,
  User,
  Comments
} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('blogpost', {
    // logged_in: req.session.logged_in,
  });
});


router.get('/blogpost', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const blogpostData = await Blogpost.findByPK(req.params.id); 
  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  const blogpost = blogpostData.get({ plain: true });
  // Then, the 'dish' template is rendered and dish is passed into the template.
  console.log("");
  console.log("");
  console.log(blogpost);
  res.render('blogpost', blogpost);
  } catch (err) {
      res.status(500).json(err);
  }
});




router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/blogpost');
    return;
  }

  res.render('login');
});



router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password']
      },
      // include: [{ model: Project }],
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



module.exports = router;