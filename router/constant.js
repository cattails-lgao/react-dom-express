const REQUESTMETHODGET = 'get';
const REQUESTMETHODPOST = 'post';
const REQUESTMETHODPUT = 'put';
const REQUESTMETHODHEAD = 'head';
const REQUESTMETHODDELETE = 'delete';
const REQUESTMETHODOPTIONS = 'options';
const REQUESTMETHODCONNECT = 'connect';
const REQUESTMETHODTRACE = 'trace';
const REQUESTMETHODPATCH = 'patch';

const SUCCEED_CODE = 0;
const ERROR_CODE = 1;

const LOGIN = {
    url: '/login',
    methods: [REQUESTMETHODGET],
    validate: {
        username: {
            required: true,
            msg: '缺少username'
        },
        password: {
            required: true,
            msg: '缺少password'
        }
    }
};
module.exports = {
    SUCCEED_CODE,
    ERROR_CODE,
    LOGIN
}