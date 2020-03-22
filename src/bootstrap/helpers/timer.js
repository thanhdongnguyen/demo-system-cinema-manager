"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Timer = (function () {
    function Timer() {
    }
    Timer.changeFormat = function (times, format) {
        if (format === void 0) { format = "yyyy-MM-dd"; }
        return luxon.Datetime.fromSeconds(times).setZone(process.env.APP_TIMEZONE).toFormat(format);
    };
    Timer.dateCurrent = function (format) {
        if (format === void 0) { format = "yyyy-MM-dd"; }
        return luxon.DateTime.local().setZone(process.env.APP_TIMEZONE).toFormat(format);
    };
    Timer.timestamp = function () {
        return Date.now() / 1000 | 0;
    };
    return Timer;
}());
exports["default"] = Timer;
