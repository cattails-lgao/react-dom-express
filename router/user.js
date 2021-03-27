const router = require('../middleware')
const { UserModel } = require('../models');

// 常量
const { LOGIN, SUCCEED_CODE } = require('./constant');
// 登陆
router.post(LOGIN, function (req, res) {
    // 读取请求参数数据
    const { username, password } = req.body;
    UserModel.selectUser(username, password).then(rsp => {
        res.send(rsp);
    });
})

module.exports = router;