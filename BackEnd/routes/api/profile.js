const express = require('express');
const router = express.Router();


// @route GET api/profile
//@desc Test route

router.get('/', (req, res) => {
    res.send('profile  Route')
});
module.exports = router;