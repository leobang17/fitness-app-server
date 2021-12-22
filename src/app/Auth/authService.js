const authProvider = require('./authProvider');
const authDao = require('./authDao');

const bcrypt = require('bcrypt');

const { pool } = require("../../../config/database");

const baseResponse = require("../../../config/baseResponse");
const { response, errResponse } = require("../../../config/response");


exports.enroll = async (params) => {
    const { email, password } = params;

    try {
        const emailCheckRes = await authProvider.emailCheck({ email });
        if (emailCheckRes) {
            return errResponse(baseResponse.EMAIL_ALREADY_EXIST);
        };

        const hashedPwd = await bcrypt.hash(password, 12);
        console.log(hashedPwd);
        
        const connection = await pool.getConnection(async (conn) => conn);
        const enrollRes = await authDao.enroll(connection, {...params, password: hashedPwd });
        connection.release();
        
    } catch (err) {
        console.error(err);
        return errResponse(baseResponse.DB_ERROR);
    }
    return response(baseResponse.SUCCESS);
};

exports.test = async () => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const [res] = await connection.query(`SELECT * FROM User;`);
        connection.release();
        return res;
    } catch(err) {
        console.error(err);
        return errResponse(baseResponse.DB_ERROR);
    }
}