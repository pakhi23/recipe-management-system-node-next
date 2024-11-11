module.exports = {
    apps:[
        {
            name:"startup", // appplication ka name aayga
            script:"./src/app.js", // main file jisse app run hogi
            watch:true, //  watch mode se changes detact krne ke liye  , usefull in development ,  automatic restart krta he jab changes detect hote hhe , mainly development ke liye
            env:{
                NODE_ENV:"development", // development envirmetn ke liye variable
            },
            env_production:{
                NODE_ENV:"production", // production envirment ke liye variable
            }
        }
    ]
}
