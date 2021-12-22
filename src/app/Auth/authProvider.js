const authDao = require('./authDao');

const { pool } = require("../../../config/database");

exports.emailCheck = async (params) => {
    const { email } = params;
    
    const connection = await pool.getConnection(async (conn) => conn);
    const emailCheckRes = await authDao.emailCheck(connection, { email });
    connection.release();

    return emailCheckRes;
}