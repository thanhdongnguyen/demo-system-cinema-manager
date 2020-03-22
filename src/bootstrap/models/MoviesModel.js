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
    statusType["ACTIVE"] = "active";
    statusType["BLOCK"] = "block";
})(statusType = exports.statusType || (exports.statusType = {}));
var statusShowingType;
(function (statusShowingType) {
    statusShowingType["PREPARE"] = "prepare";
    statusShowingType["SHOWING"] = "showing";
    statusShowingType["PREMIERED"] = "premiered";
})(statusShowingType = exports.statusShowingType || (exports.statusShowingType = {}));
var MoviesModel = (function () {
    function MoviesModel() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], MoviesModel.prototype, "id");
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200
        }),
        __metadata("design:type", String)
    ], MoviesModel.prototype, "title");
    __decorate([
        typeorm_1.Column({
            type: "text"
        }),
        __metadata("design:type", String)
    ], MoviesModel.prototype, "description");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], MoviesModel.prototype, "amount");
    __decorate([
        typeorm_1.Column({
            type: "enum",
            "enum": statusType
        }),
        __metadata("design:type", String)
    ], MoviesModel.prototype, "status");
    __decorate([
        typeorm_1.Column({
            type: "enum",
            "enum": statusShowingType
        }),
        __metadata("design:type", String)
    ], MoviesModel.prototype, "status_showing");
    __decorate([
        typeorm_1.Column({
            type: "int"
        }),
        __metadata("design:type", Number)
    ], MoviesModel.prototype, "created_at");
    MoviesModel = __decorate([
        typeorm_1.Entity("movies")
    ], MoviesModel);
    return MoviesModel;
}());
exports["default"] = MoviesModel;
