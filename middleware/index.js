const express = require('express')
const router = express.Router();
const { LOGIN, ERROR_CODE } = require('./constant');
const { LoginValidate } = require('../validate');

// 全局中间件
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// login中间件
router.use(LOGIN.url, (req ,res ,next) => {
    if(LoginValidate.checked(req)){
        res.status(400).send({
            status: ERROR_CODE,
            msg: LOGIN.validate.username.msg
        });
        return;   
    }
    next();
})

moudule.export = router;