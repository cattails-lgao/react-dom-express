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

LoginValidate.checked = (parameter) => {
    let result = [];
    for(let i = 0; i < this.rules.length; i++) {
        let value = parameter[this.rules[i].name];
        if(this.rules[i].required && value) {
            result.push(true);
            break;
        }
    }

    return result.every(item => {
        return !!item;
    })
}

