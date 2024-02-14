const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const FbUser = require('../../models/FbUser');
const config = require('config');
const jwt = require('jsonwebtoken');
// const auth = require('../../middleware/auth')


router.post('/', (req,res) => {
    const { name, email } = req.body;

    FbUser.findOne({email})
        .then(user => {
            if(!user){
                const fbUser = new FbUser({
                    name,
                    email
                })
                fbUser.save()
                    .then(user => {
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
            }else{
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

            }
        })
})


            


module.exports = router;