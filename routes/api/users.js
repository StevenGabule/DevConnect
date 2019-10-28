const express = require('express');
const router = express.Router();

// @route        GET API api/users/test
// @description  Tests user route
// @access       Public
router.get('/test', (req, res) => res.json({msg: 'users works'}));

module.exports = router;