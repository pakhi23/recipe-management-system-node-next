const {check,validationResult}= require('express-validator');

// register validation rules

const registerValidation = [
    check('name','name is required').not().isEmpty(),
    check('email','please enter valid email address').isEmail(),
    check('password','password must be atleast 6 characters').isLength({min:6}),
];

const loginValidation = [
    check('email','please enter valid email address').isEmail(),
    check('password','password required').not().isEmpty(),
];

const validate = (req,res,next)=>{
    const errors  = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }
    next(); // validation pass ho jaye to next middleware
};

module.exports = {registerValidation,loginValidation,validate};
