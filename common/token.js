const jwt = require('jsonwebtoken');
const secret = 'abc';

const encodeToken = () => {};
const decodeToken = () => {};
const verifyToken = (_token) => {
    try {
        const verify = jwt.verify(_token, secret);
    } catch(e) {

    }
};
const storageToken = () => {};

module.exports = {
    encodeToken,
    decodeToken,
    checkToken,
    storageToken
}