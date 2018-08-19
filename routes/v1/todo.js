const router = require('express').Router();
const upload = require('../../common/config/multer.config');
const authenticate = require('../../middleware/authenticate');

router.use((req, res, next) => {
    console.log('req==' + req.body.id);
    console.log('i am here', req.body);

    next();
    //res.send('hello from router todo');
});

router.get('/', authenticate, function (req, res) {
    res.status(200).json({ message: 'Post deleted!' });
});

router.post('/', authenticate, function (req, res) {
    console.log('req1==' , req.body);
    res.status(201).json({ message: 'Posted1'});
});

router.post('/fileupload', authenticate, upload.single('image'),
    (req, res, next) => {
      console.log('path ==',  __dirname + '/uploads');
    
        res.status(201).json({
            message: 'Post added successfully1'
        });
    }
);
  

module.exports = router;
