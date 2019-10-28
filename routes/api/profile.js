const express = require('express');
const router = express.Router();

// @route        GET API api/profile/test
// @description  Tests profile route
// @access       Public
router.get('/test', (req, res) => res.json({msg: 'profile works'}));

module.exports = router;