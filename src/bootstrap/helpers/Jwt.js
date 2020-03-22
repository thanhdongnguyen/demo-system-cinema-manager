"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var logging_1 = require("./logging");
var JWT = (function () {
    function JWT() {
    }
    JWT.encode = function (params) {
        var secretKey = process.env.JWT_SECRET_KEY;
        return jwt.sign(params, secretKey);
    };
    JWT.verify = function (token, secretKey) {
        if (secretKey === void 0) { secretKey = ''; }
        try {
            secretKey = secretKey ? secretKey : process.env.JWT_SECRET_KEY;
            return jwt.verify(token, secretKey);
        }
        catch (error) {
            logging_1["default"].error(error);
            return false;
        }
    };
    return JWT;
}());
exports["default"] = JWT;
