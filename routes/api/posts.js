const express = require('express');
const router = express.Router();


// @route        GET API api/posts/test
// @description  Tests post route
// @access       Public
router.get('/test', (req, res) => res.json({msg: 'posts works'}));

module.exports = router;