const emailRegex = require('email-regex');

const baseResponse = require('../../../config/baseResponse');
const { errResponse } = require('../../../config/response');

const authService = require('./authService');


exports.enroll = async (req, res) => {
    const { email, password, nickname, age, gender, profileImgUrl, isPublic } = req.body;
    
    if (!email) {
        return res.send(errResponse(baseResponse.EMAIL_REQUIRED));
    };
    if (!emailRegex({ exact: true}).test(email)) {
        return res.send(errResponse(baseResponse.EMAIL_UNVALID));
    };
    if (!password) {
        return res.send(errResponse(baseResponse.PASSWORD_REQUIRED))
    };
    // if (password.length < 8) {
    //     return res.send(errResponse(baseResponse.PASSWORD_UNVALID));
    // };
    if (age > 150 || age < 0) {
        return res.send(errResponse(baseResponse.AGE_UNVALID));
    }

    const enrollRes = await authService.enroll({ email, password, nickname, age, gender, profileImgUrl, isPublic });
    
    return res.send(enrollRes);
};

exports.test = async (req, res) => {
    const testTes = await authService.test();
    return res.send(testTes);
};