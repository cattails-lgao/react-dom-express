const express = require('express')
const router = express.Router();
const { LOGIN, ERROR_CODE } = require('../router/constant');
const { LoginValidate } = require('../validate');

// 全局中间件
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// login中间件
router.use(LOGIN, (req, res, next) => {
    let [username, password] = Object.keys(req.body);
    let validateRes = LoginValidate.checked(req.body);
    if(validateRes.length){
        res.status(400).send({
            status: ERROR_CODE,
            msg: '缺少参数' + validateRes.join(',')
        });
        return;   
    }
    next();
})
module.exports= router