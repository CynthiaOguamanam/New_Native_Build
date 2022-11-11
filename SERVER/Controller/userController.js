const userModel = require ("../Model/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const SignInUser = async (req, res) => {
    try{
        const {email, password} = req.body
    
        const getUser = await userModel.findOne({email});

        if(getUser){
            const checkPass = await bcrypt.compare(password, getUser.password)

            if(checkPass){

                const token = jwt.sign({
                    _id: getUser._id,
                    email: getUser.email,
                    userName: getUser.userName,
                    avatar: getUser.avatar
                }, "BestKEySecretevR",
                {expiresIn: "1d"}
                );

            const {password, ...data} = getUser._doc

            res.status(201).json({
                 messge:`welcome ${getUser.userName}`,
                 data: {...data, token},
            })
            }else {
                res.status(500).json({
                    message: "password is incorrect"
                });
            }
        }else{
            res.status(500).json({
                status: "user is not in our database"
            })
        }
    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}

const getAllUser = async (req, res) => {
    try{
        const user = await userModel.find()

        res.status(200).json({
            message: "user data found",
            length: user.length,
            data: user
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
};
const getUser = async (req, res) => {
    try{
        const user = await userModel.findById(req.params.id);

        res.status(200).json({
            message: "user data found",
            length: user.length,
            data: user
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
};
const deleteUser = async (req, res) => {
    try{
        const user = await userModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "user data deleted",
            length: user.length,
            data: user
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
};

module.exports ={
    getAllUser,
    getUser, 
    deleteUser,
    SignInUser
}