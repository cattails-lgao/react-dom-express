const router = require('../middleware')
// 常量
const { LOGIN, SUCCEED_CODE } = require('./constant');

// models
const { UserModel, CategoryModel, ProductModel, RoleModel } = require('../models');

router.post(LOGIN, function (req, res) {
    
    res.send({
        status: SUCCEED_CODE,
        msg: 'Birds home page'
    })
})

module.exports = router;