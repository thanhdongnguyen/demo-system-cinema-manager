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
var MoviesModel_1 = require("../../models/MoviesModel");
var MoviesTimesModel_1 = require("../../models/MoviesTimesModel");
var MoviesItemsModel_1 = require("../../models/MoviesItemsModel");
var LogsTransactionModel_1 = require("../../models/LogsTransactionModel");
var Transaction_1 = require("../../helpers/Transaction");
var Timer_1 = require("../../helpers/Timer");
var Message_1 = require("../../helpers/Message");
var Request_1 = require("../../helpers/Request");
var PaymentController = (function () {
    function PaymentController() {
    }
    PaymentController.prototype.requestPayment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, movie_id, movie_time, transaction_id, phone_number, getUserInfo, getMovieInfo, getMovieTime, getMovieTicket, transactionId, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, movie_id = _a.movie_id, movie_time = _a.movie_time, transaction_id = _a.transaction_id, phone_number = _a.phone_number;
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .select("users")
                                .from(UsersModel_1["default"], "users")
                                .where("users.phone_number = :phone_number", { phone_number: phone_number })
                                .getOne()];
                    case 1:
                        getUserInfo = _b.sent();
                        if (!getUserInfo) {
                            return [2, res.json(Message_1["default"].error(10))];
                        }
                        if (getUserInfo.status == UsersModel_1.statusType.BLOCK) {
                            return [2, res.json(Message_1["default"].error(11))];
                        }
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .select("movies")
                                .from(MoviesModel_1["default"], "movies")
                                .where("movies.id = :movie_id", { movie_id: movie_id })
                                .getOne()];
                    case 2:
                        getMovieInfo = _b.sent();
                        if (!getMovieInfo) {
                            return [2, res.json(Message_1["default"].error(12))];
                        }
                        if (getMovieInfo.status == MoviesModel_1.statusType.BLOCK) {
                            return [2, res.json(Message_1["default"].error(13))];
                        }
                        if (getMovieInfo.status_showing != MoviesModel_1.statusShowingType.PREPARE) {
                            return [2, res.json(Message_1["default"].error(14))];
                        }
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .select("movies_times")
                                .from(MoviesTimesModel_1["default"], "movies_times")
                                .where("movies_times.movie_id = :movie_id", { movie_id: movie_id })
                                .andWhere("movies_times.movie_time = :movie_time", { movie_time: movie_time })
                                .getOne()];
                    case 3:
                        getMovieTime = _b.sent();
                        if (!getMovieTime) {
                            return [2, res.json(Message_1["default"].error(15))];
                        }
                        if (getMovieTime.status == MoviesTimesModel_1.statusType.BLOCK) {
                            return [2, res.json(Message_1["default"].error(16))];
                        }
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .select("movies_items")
                                .from(MoviesItemsModel_1["default"], "movies_items")
                                .where("movies_items.movies_times_id = :movies_times_id", { movies_times_id: getMovieTime.id })
                                .andWhere("movies_items.status = :status", { status: MoviesItemsModel_1.statusType.NOT_USE })
                                .getOne()];
                    case 4:
                        getMovieTicket = _b.sent();
                        if (!getMovieTicket) {
                            return [2, res.json(Message_1["default"].error(17))];
                        }
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 8, , 9]);
                        return [4, Transaction_1["default"].getTransactionId()];
                    case 6:
                        transactionId = _b.sent();
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .insert()
                                .into(LogsTransactionModel_1["default"])
                                .values({
                                transaction_id: transactionId,
                                phone_number: phone_number,
                                movie_id: getMovieInfo.id,
                                movie_item_id: 0,
                                status: LogsTransactionModel_1.statusType.PENDING,
                                amount: getMovieInfo.amount,
                                reason: "",
                                response: "",
                                platform: LogsTransactionModel_1.platformType.EWALLET,
                                extra_info: JSON.stringify({ "service_transaction_id": transaction_id }),
                                request_time: Timer_1["default"].timestamp(),
                                confirm_time: Timer_1["default"].timestamp()
                            })
                                .execute()];
                    case 7:
                        _b.sent();
                        return [2, res.json({
                                success: true,
                                transaction_id: transactionId
                            })];
                    case 8:
                        e_1 = _b.sent();
                        return [2, res.json(Message_1["default"].error(19))];
                    case 9: return [2];
                }
            });
        });
    };
    PaymentController.prototype.verifyPayment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, transaction_id, phone_number, IPN_URL, logTransactionInfo, getMovieTicket, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, transaction_id = _a.transaction_id, phone_number = _a.phone_number;
                        IPN_URL = "http://api.zalo.com/api/ipn";
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .select("logs_transaction")
                                .from(LogsTransactionModel_1["default"], "logs_transaction")
                                .where("logs_transaction.phone_number = :phone_number", { phone_number: phone_number })
                                .andWhere("logs_transaction.transaction_id = :transaction_id", { transaction_id: transaction_id })
                                .getOne()];
                    case 1:
                        logTransactionInfo = _b.sent();
                        if (!logTransactionInfo) {
                            return [2, res.json(Message_1["default"].error(20))];
                        }
                        if (logTransactionInfo.status != LogsTransactionModel_1.statusType.PENDING) {
                            return [2, res.json(Message_1["default"].error(21))];
                        }
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .select("movies_items")
                                .from(MoviesItemsModel_1["default"], "movies_items")
                                .where("movies_items.movies_times_id = :movies_times_id", { movies_times_id: logTransactionInfo.movie_id })
                                .andWhere("movies_items.status = :status", { status: MoviesItemsModel_1.statusType.NOT_USE })
                                .getOne()];
                    case 2:
                        getMovieTicket = _b.sent();
                        if (!getMovieTicket) {
                            return [2, res.json(Message_1["default"].error(17))];
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 7, , 8]);
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .update(LogsTransactionModel_1["default"])
                                .set({ status: LogsTransactionModel_1.statusType.SUCCESS, status_code: 0 })
                                .where("id = :id", { id: logTransactionInfo.id })
                                .execute()];
                    case 4:
                        _b.sent();
                        return [4, typeorm_1.getConnection()
                                .createQueryBuilder()
                                .update(MoviesItemsModel_1["default"])
                                .set({ status: MoviesItemsModel_1.statusType.USED })
                                .where("id = :id", { id: getMovieTicket.id })
                                .execute()];
                    case 5:
                        _b.sent();
                        return [4, Request_1["default"].post(IPN_URL, {
                                "transaction_id": transaction_id,
                                "amount": logTransactionInfo.amount,
                                "status": "success"
                            })];
                    case 6:
                        _b.sent();
                        return [2, res.json({
                                success: true,
                                code: getMovieTicket.code
                            })];
                    case 7:
                        e_2 = _b.sent();
                        return [2, res.json(Message_1["default"].error(19))];
                    case 8: return [2];
                }
            });
        });
    };
    return PaymentController;
}());
exports["default"] = PaymentController;
