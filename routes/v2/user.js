const express = require('express');
const router = express.Router();


router.post('/login', (req, res)=> {
    res.status(200).json({ message: 'Logged In from v2' });

});
router.post('/signUp', (req, res)=> {
    res.status(200).json({ message: 'signed Up from v2' });
});

module.exports = router;

