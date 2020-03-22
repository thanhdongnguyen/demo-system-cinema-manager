"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var UsersModel_1 = require("../../models/UsersModel");
var Message_1 = require("../../helpers/Message");
var Jwt_1 = require("../../helpers/Jwt");
var Timer_1 = require("../../helpers/Timer");
var md5 = require("md5");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, phone_number, password, getUserInfo, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, phone_number = _a.phone_number, password = _a.password;
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .select("users")
                                .from(UsersModel_1["default"], "users")
                                .where("users.phone_number = :phone_number", { phone_number: phone_number })
                                .andWhere("users.password = :password", { password: md5(password) })
                                .getOne()];
                    case 1:
                        getUserInfo = _b.sent();
                        if (!getUserInfo) {
                            return [2, res.json(Message_1["default"].error(10))];
                        }
                        if (getUserInfo.status == UsersModel_1.statusType.BLOCK) {
                            return [2, res.json(Message_1["default"].error(11))];
                        }
                        token = Jwt_1["default"].encode({
                            phone_number: phone_number,
                            expire: Timer_1["default"].timestamp() + (86400)
                        });
                        return [2, res.json({
                                success: true,
                                jwt: token
                            })];
                }
            });
        });
    };
    return UserController;
}());
exports["default"] = UserController;
