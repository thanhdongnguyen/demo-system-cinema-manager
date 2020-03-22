"use strict";
exports.__esModule = true;
var messages = {
    10: "Thông tin tài khoản không tồn tại",
    11: "Tài khoản bị khoá",
    12: "Phim không tồn tại",
    13: "Phim này đã bị khoá",
    14: "Phim này chưa được công chiếu",
    15: "Thời điểm phát sóng phim không tồn tại",
    16: "Thời điểm phát sóng phim bị khoá",
    17: "Vé hiện tại đã hết",
    19: "Thực hiện giao dịch thất bại",
    20: "Giao dịch không tồn tại",
    21: "Giao dịch đã được thực hiện",
    22: "Jwt không hợp lệ",
    99: "Có lỗi xảy ra trong quá trình xử lý"
};
var Message = (function () {
    function Message() {
    }
    Message.setError = function (code, message, errors) {
        if (errors === void 0) { errors = []; }
        return {
            success: false,
            error: {
                code: code, message: message, errors: errors
            }
        };
    };
    Message.getMessage = function (code) {
        return messages[code] ? messages[code] : '';
    };
    Message.success = function () {
        return { success: true };
    };
    Message.error = function (code) {
        var message = messages[code] ? messages[code] : '';
        if (!message) {
            return Message.setError(99, "Có lỗi xảy ra trong quá trình xử lý");
        }
        return Message.setError(code, message);
    };
    return Message;
}());
exports["default"] = Message;
