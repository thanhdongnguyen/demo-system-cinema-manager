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
    statusType["NOT_USE"] = "not_use";
    statusType["USED"] = "used";
})(statusType = exports.statusType || (exports.statusType = {}));
var MoviesItemsModel = (function () {
    function MoviesItemsModel() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], MoviesItemsModel.prototype, "id");
    __decorate([
        typeorm_1.Column({
            type: "bigint"
        }),
        __metadata("design:type", Number)
    ], MoviesItemsModel.prototype, "movies_times_id");
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 150
        }),
        __metadata("design:type", String)
    ], MoviesItemsModel.prototype, "code");
    __decorate([
        typeorm_1.Column({
            type: "enum",
            "enum": statusType
        }),
        __metadata("design:type", String)
    ], MoviesItemsModel.prototype, "status");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], MoviesItemsModel.prototype, "created_at");
    MoviesItemsModel = __decorate([
        typeorm_1.Entity("movies_items")
    ], MoviesItemsModel);
    return MoviesItemsModel;
}());
exports["default"] = MoviesItemsModel;
