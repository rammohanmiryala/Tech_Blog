const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
      book_id: 1,
    });
console.log(newReview)
    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:review_id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        review_id: req.params.review_id,
        user_id: req.session.user_id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No reiew found with this id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;