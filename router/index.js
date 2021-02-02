const express = require('express')
const router = express.Router();
// 常量
const { LOGIN, SUCCEED_CODE, ERROR_CODE } = require('./constant');
// models
const { UserModel, CategoryModel, ProductModel, RoleModel } = require('../models');
// 中间件
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.use(LOGIN.url, (req ,res ,next) => {
    if(LOGIN.validate.username.required){
        res.status(400).send({
            status: ERROR_CODE,
            msg: LOGIN.validate.username.msg
        });
        return;   
    }

    if(LOGIN.validate.password.required){
        res.status(400).send({
            status: ERROR_CODE,
            msg: LOGIN.validate.password.msg
        });
        return;
    }
    next();
})

router[LOGIN.methods[0]](LOGIN.url, function (req, res) {
    // const { username, pasword } = req.body;
    
    res.send({
        status: SUCCEED_CODE,
        msg: 'Birds home page'
    })
})

module.exports = router;