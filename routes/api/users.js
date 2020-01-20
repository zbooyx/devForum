const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
// @route   GET api/users

// @desc    Register user
// @access  Public
router.post('/',
    [
        check('name', 'name is required')
            .not()
            .isEmpty(),
        check('email2', 'Please include a valid name')
            .isEmail(),
        check('password', 'Please enter a pass with 6 or more characters'
        ).isLength({min: 5})
    ],

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        } else {
            res.send('UserRoute');
        }
    });


module.exports = router;
