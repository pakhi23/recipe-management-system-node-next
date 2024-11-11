const req = require('express/lib/request');
const { registerUser, loginUser } = require('../services/auth.service');

// reister controller
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const { user, token } = await registerUser(name, email, password);
        res.status(201).json({ success: true, user, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// login controller

const login = async (req,res)=>{
    const {email,password} = req.body;
    try{
       const {user,token} = await loginUser(email,password);
       res.status(200).json({success:true,message:"login successfully",token});
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

module.exports = {register,login};
