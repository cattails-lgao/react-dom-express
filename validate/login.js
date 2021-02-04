const validate = require('./validate');

const LoginValidate = Object.create(validate);

LoginValidate.rules = [
    {
        name: 'username',
        required: true,
        msg: '缺少参数username'
    },
    {
        name: 'password',
        required: true,
        msg: '缺少参数password'
    }
]

LoginValidate.checked = validate.checked.bind(LoginValidate)

module.exports = LoginValidate;

