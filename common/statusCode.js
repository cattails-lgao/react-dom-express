const SUCCEED = {
    code: 0,
    msg: ''
};
const ERROR = {
    code: 1,
    msg: '请求失败'
};
const SYSTEM_BUSY = {
    code: 999,
    msg: '系统繁忙，请稍后再试'
};


const BaseMsg = {
    code: SUCCEED.code,
    data: {},
    msg: SUCCEED.msg
}

const LinkBaseMsg = (statusCode, data = null) => {
    return Object.create(BaseMsg, {
        code: {
            writable: true,
            enumerable: true,
            configurable: true, 
            value: statusCode.code
        },
        data: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: data
        },
        msg: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: statusCode.msg
        }
    })
}

module.exports = { SUCCEED, ERROR, SYSTEM_BUSY, LinkBaseMsg };