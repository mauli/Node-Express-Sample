const router = require('express').Router();
const jwt = require('jsonwebtoken');


router.post('/signUp', (req, res) => {
    res.status(200).json({ message: 'signed Up' });
});

router.post('/login', (req, res, next) => {
    const token = jwt.sign({ email: req.body.email },
        global.envData.JWT_SECRET,
        { expiresIn: global.envData.jwtExpirationtime }
    );
    res.status(200).json({
        token: token,
        expiresIn: global.envData.jwtExpirationtime
    });
});

router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logged out successfully.' });
});


module.exports = router;



