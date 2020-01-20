const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const {check, validationResult} = require('express-validator');
const User = require('../../models/User');
const gravatar = require('gravatar');
// @route   GET api/users
// @desc    Register user
// @access  Public

router.post('/',
    [
        check('name', 'name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid name')
            .isEmail(),
        check('password', 'Please enter a pass with 6 or more characters'
        ).isLength({min: 5})
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {name, email, password} = req.body;
        try {
            let user = await User.findOne({email});

            if (user) {
                return res.status(400).json({errors: [{msg: 'User already exist'}]});
            }

            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            user = new User({
                name,
                email,
                avatar,
                password
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();
            //return jsonwebtoken
            res.send('User Registered');
        } catch (err) {
            console.error(err.message);
            res.status(500).send('ServerError');
        }
    });


module.exports = router;
