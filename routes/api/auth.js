const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const FbUser = require('../../models/FbUser');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')


router.post('/', (req,res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({msg:'Please enter all fields'})
    }

    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json({msg:'User does not exist'})


            // Compare hash
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({msg:'Invalid credentials'});

                    jwt.sign(
                        {id: user.id},
                        config.get('jwtSecret'),
                        (err, token) => {
                            if(err) throw err;

                                res.json({
                                token,
                                user: {
                                    id:user._id,
                                    name:user.name,
                                    email:user.email
                                }
                            })
                        }
                    )
                })
            
        }).catch(err=>{
            res.status(400).json(err)
        })

})

router.get('/user', auth, (req,res)=>{
    User.findById(req.user.id)
    .select('-password')
    .then(user => {
        if(user){
        res.json(user)
        }else{
            FbUser.findById(req.user.id)
            .then(fbuser => {
                res.json(fbuser)
            })
        }
    }).catch(err=>{
        res.status(400).json(err)
    })
})

module.exports = router;