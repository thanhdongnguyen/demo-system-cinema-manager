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
var axios_1 = require("axios");
var Request = (function () {
    function Request() {
    }
    Request.get = function (url, query, header, hostProxy, portProxy) {
        if (query === void 0) { query = {}; }
        if (header === void 0) { header = {}; }
        if (hostProxy === void 0) { hostProxy = ''; }
        if (portProxy === void 0) { portProxy = 80; }
        return __awaiter(this, void 0, void 0, function () {
            var queries, item, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queries = [];
                        for (item in query) {
                            queries.push(item + "=" + query[item]);
                        }
                        if (queries.length > 0) {
                            url += "?" + queries.join('&');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, axios_1["default"].get(url, {
                                headers: header,
                                proxy: hostProxy !== '' ? {
                                    host: hostProxy,
                                    port: portProxy
                                } : false
                            })];
                    case 2:
                        result = _a.sent();
                        return [2, {
                                success: true,
                                status_code: result.status,
                                data: result.data
                            }];
                    case 3:
                        err_1 = _a.sent();
                        if (!err_1.response) {
                            throw new Error(JSON.stringify({
                                url: url, query: query, header: header, err: String(err_1)
                            }));
                        }
                        return [2, {
                                success: false,
                                status_code: err_1.response ? err_1.response.status : 500,
                                err: err_1.response ? err_1.response.data : String(err_1)
                            }];
                    case 4: return [2];
                }
            });
        });
    };
    Request.post = function (url, body, header, hostProxy, portProxy) {
        if (body === void 0) { body = {}; }
        if (header === void 0) { header = {}; }
        if (hostProxy === void 0) { hostProxy = ''; }
        if (portProxy === void 0) { portProxy = 80; }
        return __awaiter(this, void 0, void 0, function () {
            var result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1["default"].post(url, body, {
                                headers: header,
                                proxy: hostProxy !== '' ? {
                                    host: hostProxy,
                                    port: portProxy
                                } : false
                            })];
                    case 1:
                        result = _a.sent();
                        return [2, {
                                success: true,
                                status_code: result.status,
                                data: result.data
                            }];
                    case 2:
                        err_2 = _a.sent();
                        if (!err_2.response) {
                            throw new Error(JSON.stringify({
                                url: url, body: body, header: header, err: String(err_2)
                            }));
                        }
                        return [2, {
                                success: false,
                                status_code: err_2.response ? err_2.response.status : 500,
                                err: err_2.response ? err_2.response.data : String(err_2)
                            }];
                    case 3: return [2];
                }
            });
        });
    };
    return Request;
}());
exports["default"] = Request;
