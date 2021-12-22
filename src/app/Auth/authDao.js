// Service
exports.enroll = async (connection, params) => {
    const { email, password, nickname, age, gender, profileImgUrl, isPublic } = params;
    const query = `
        INSERT INTO User 
        (email, password, nickname, age, gender, profileImgUrl, isPublic)
        VALUES
        ("${email}", "${password}", "${nickname}", ${age}, "${gender}", "${profileImgUrl}", ${isPublic})
    `;

    const [userRows] = await connection.query(query);
    return userRows;
}




// Provider
exports.emailCheck = async (connection, params) => {
    const { email } = params;
    const query = `
        SELECT userId 
        FROM User
        WHERE email = "${email}";
    `;
    const [[emailRows]] = await connection.query(query);
    return emailRows;
}