"use strict";
exports.__esModule = true;
var winston = require("winston");
var path = require("path");
var timer_1 = require("./timer");
var logger = winston.createLogger({
    level: "info",
    format: winston.format.logstash(),
    transports: [
        new winston.transports.File({
            filename: path.join(__dirname, '..', '..', 'logs', "logs-" + timer_1["default"].dateCurrent() + ".log"),
            handleExceptions: true
        })
    ]
});
var Logging = (function () {
    function Logging() {
    }
    Logging.info = function (msg) {
        logger.info(msg);
        return;
    };
    Logging.error = function (msg) {
        logger.error(msg);
        return;
    };
    return Logging;
}());
exports["default"] = Logging;
