// Response status & codes

module.exports = {
    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message": "성공"},

    // Auth Errors
    EMAIL_REQUIRED : { "isSuccess": false, "code": 2000, "message": "이메일을 입력해주세요." },
    EMAIL_UNVALID : { "isSuccess": false, "code": 2001, "message": "올바른 형식의 이메일이 아닙니다." },
    EMAIL_ALREADY_EXIST : { "isSuccess": false, "code": 2000, "message": "이미 존재하는 이메일 입니다" },

    PASSWORD_REQUIRED : { "isSuccess": false, "code": 2000, "message": "비밀번호를 입력해주세요." },
    PASSWORD_UNVALID: { "isSuccess": false, "code": 2000, "message": "비밀번호를 8자리 이상 입력해주세요." },

    AGE_UNVALID: { "isSuccess": false, "code": 2000, "message": "올바른 나이를 입력해주세요" },


    // Common Errors
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러" },
}