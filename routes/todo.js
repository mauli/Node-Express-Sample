const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('hello');
    next();
    //res.send('hello from router todo');
});

router.get('/', function (req, res) {
    res.status(200).json({ message: "Post deleted!" });
});
router.post('/', function (req, res) {
    res.status(200).json({ message: "Posted"});
});


module.exports = router;
