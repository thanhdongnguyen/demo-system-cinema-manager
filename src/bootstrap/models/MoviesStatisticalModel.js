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
    statusType["ERROR"] = "error";
    statusType["SUCCESS"] = "success";
    statusType["CANCEL"] = "cancel";
    statusType["ROLLBACK"] = "rollback";
})(statusType = exports.statusType || (exports.statusType = {}));
var MoviesStatisticalModel = (function () {
    function MoviesStatisticalModel() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], MoviesStatisticalModel.prototype, "id");
    __decorate([
        typeorm_1.Column({
            type: "bigint"
        }),
        __metadata("design:type", Number)
    ], MoviesStatisticalModel.prototype, "movie_id");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], MoviesStatisticalModel.prototype, "buy_count");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], MoviesStatisticalModel.prototype, "amount");
    __decorate([
        typeorm_1.Column({
            type: "datetime"
        }),
        __metadata("design:type", String)
    ], MoviesStatisticalModel.prototype, "timestamp");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], MoviesStatisticalModel.prototype, "updated_at");
    MoviesStatisticalModel = __decorate([
        typeorm_1.Entity("movies_statistical")
    ], MoviesStatisticalModel);
    return MoviesStatisticalModel;
}());
exports["default"] = MoviesStatisticalModel;
