const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/admin', protect, adminOnly, (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

module.exports = router;
