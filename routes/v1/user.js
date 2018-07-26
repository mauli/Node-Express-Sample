const router = require('express').Router();

router.post('/login', (req, res)=> {
    res.status(200).json({ message: "Logged In" });

});
router.post('/signUp', (req, res)=> {
    res.status(200).json({ message: "signed Up" });
});

module.exports = router;

