const validate = require('./validate');

const LoginValidate = Object.create(validate);

LoginValidate.rules = [
    {
        name: 'username',
        required: true
    },
    {
        name: 'password',
        required: true
    }
]

LoginValidate.checked = validate.checked.bind(LoginValidate)

module.exports = LoginValidate;

