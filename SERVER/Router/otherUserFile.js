const express = require ('express');
const userModel =  require('../Model/model');
const Otherrouter = express.Router();
const bcrypt = require('bcrypt')
const upload = require('../Util/multer')
const cloudinary = require ('../Util/cloudinary')

Otherrouter
    //upload(multer), is the middleware for images cos http does not understand image that is wht multer has to convert the image to return the response.., also http doesnt understand json that is why we make use of express.json()...
    .post("/register",upload, async (req, res) => {
        try{
            const {userName, email, password} = req.body

            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salt)

            const image = await cloudinary.uploader.upload(req.file.path)

            const createUser = await userModel.create({
                userName, 
                email, 
                password: hashed,
                avatar: image.secure_url,
                avatarID: image.public_id,
            });

            res.status(201).json({
                message: "user created",
                data: createUser
            })
        }catch(error){
            res.status(500).json({
                message: error.message
            });
        }
    });
    
    Otherrouter
    //upload(multer), is the middleware for images cos http does not understand image that is wht multer has to convert the image to return the response.., also http doesnt understand json that is why we make use of express.json()...
    .patch("/:id/update",upload, async (req, res) => {
        try{
            const {userName, email} = req.body

            const findUser = await userModel.findOne({email})

            if(findUser){
                await cloudinary.uploader.destroy(findUser.avatarID);

                const image = await cloudinary.uploader.upload(req.file.path);

                const createUser = await userModel.findByIdAndUpdate({
                    userName,
                    avatar: image.secure_url,
                    avatarID: image.public_id,
                }, 
                {new: true}
                );

                res.status(201).json({
                    message: "user updated",
                    data: createUser
                })
            };

        }catch(error){
            res.status(500).json({
                message: error.message
            });
        }
    });


module.exports = Otherrouter;