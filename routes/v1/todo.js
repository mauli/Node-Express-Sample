const router = require('express').Router();


router.use((req, res, next) => {
    console.log('req==' + req.body.id);
    console.log('i am here', req.body);

    next();
    //res.send('hello from router todo');
});

router.get('/', function (req, res) {
    res.status(200).json({ message: "Post deleted!" });
});
router.post('/', function (req, res) {
    console.log('req1==' , req.body);

    res.status(201).json({ message: "Posted1"});
});


module.exports = router;
