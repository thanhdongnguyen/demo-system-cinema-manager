"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var statusType;
(function (statusType) {
    statusType["PENDING"] = "pending";
    statusType["FAIL"] = "fail";
    statusType["SUCCESS"] = "success";
    statusType["ROLLBACK"] = "rollback";
    statusType["REFUND"] = "refund";
})(statusType = exports.statusType || (exports.statusType = {}));
var platformType;
(function (platformType) {
    platformType["ADMIN_WEB"] = "admin_web";
    platformType["EWALLET"] = "ewallet";
    platformType["OTHER"] = "other";
})(platformType = exports.platformType || (exports.platformType = {}));
var LogsTransactionModel = (function () {
    function LogsTransactionModel() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], LogsTransactionModel.prototype, "id");
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 50
        }),
        __metadata("design:type", String)
    ], LogsTransactionModel.prototype, "transaction_id");
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 20
        }),
        __metadata("design:type", Number)
    ], LogsTransactionModel.prototype, "phone_number");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], LogsTransactionModel.prototype, "status_code");
    __decorate([
        typeorm_1.Column({
            type: "bigint"
        }),
        __metadata("design:type", Number)
    ], LogsTransactionModel.prototype, "movie_id");
    __decorate([
        typeorm_1.Column({
            type: "bigint"
        }),
        __metadata("design:type", Number)
    ], LogsTransactionModel.prototype, "movie_item_id");
    __decorate([
        typeorm_1.Column({
            type: "enum",
            "enum": statusType
        }),
        __metadata("design:type", String)
    ], LogsTransactionModel.prototype, "status");
    __decorate([
        typeorm_1.Column({
            type: "enum",
            "enum": platformType
        }),
        __metadata("design:type", String)
    ], LogsTransactionModel.prototype, "platform");
    __decorate([
        typeorm_1.Column({
            type: "text"
        }),
        __metadata("design:type", String)
    ], LogsTransactionModel.prototype, "reason");
    __decorate([
        typeorm_1.Column({
            type: "text"
        }),
        __metadata("design:type", String)
    ], LogsTransactionModel.prototype, "response");
    __decorate([
        typeorm_1.Column({
            type: "text"
        }),
        __metadata("design:type", String)
    ], LogsTransactionModel.prototype, "extra_info");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], LogsTransactionModel.prototype, "amount");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], LogsTransactionModel.prototype, "request_time");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], LogsTransactionModel.prototype, "confirm_time");
    LogsTransactionModel = __decorate([
        typeorm_1.Entity("logs_transaction")
    ], LogsTransactionModel);
    return LogsTransactionModel;
}());
exports["default"] = LogsTransactionModel;
