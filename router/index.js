const router = require('../middleware')
// 常量
const { LOGIN, SUCCEED_CODE } = require('./constant');

// models
const { UserModel, CategoryModel, ProductModel, RoleModel } = require('../models');
// 登陆
router.post(LOGIN, function (req, res) {
    // 读取请求参数数据
    const { username, password } = req.body;
    UserModel.selectUser(username, password).then(rsp => {
        res.send(rsp);
    });
})

module.exports = router;