"use strict";
exports.__esModule = true;
var LogController_1 = require("./controllers/LogController");
var LoginController_1 = require("./controllers/LoginController");
var MovieController_1 = require("./controllers/MovieController");
var MovieController_2 = require("./controllers/frontend/MovieController");
var PaymentController_1 = require("./controllers/frontend/PaymentController");
var TransactionController_1 = require("./controllers/frontend/TransactionController");
var UserController_1 = require("./controllers/frontend/UserController");
var MovieController_3 = require("./controllers/partner/MovieController");
var PaymentController_2 = require("./controllers/partner/PaymentController");
var TransactionController_2 = require("./controllers/partner/TransactionController");
var AuthorizationMiddleware_1 = require("./middleware/AuthorizationMiddleware");
var JwtMiddleware_1 = require("./middleware/JwtMiddleware");
var Routes = (function () {
    function Routes() {
    }
    Routes.apiv1 = function (express, app) {
        var logController = new LogController_1["default"]();
        var loginController = new LoginController_1["default"]();
        var movieController = new MovieController_1["default"]();
        var frontendMovieController = new MovieController_2["default"]();
        var frontendPaymentController = new PaymentController_1["default"]();
        var frontendTransactionController = new TransactionController_1["default"]();
        var frontendUserControllerLogController = new UserController_1["default"]();
        var partnerMovieController = new MovieController_3["default"]();
        var partnerPaymentController = new PaymentController_2["default"]();
        var partnerTransactionController = new TransactionController_2["default"]();
        var authorization = new AuthorizationMiddleware_1["default"]();
        var jwt = new JwtMiddleware_1["default"]();
        var router = express.Router();
        router.get('/admin/login', function (req, res) {
            return res.render('login');
        });
        router.get('/admin/register', function (req, res) {
            return res.render('register');
        });
        router.get('/admin/movies/buy/ticket', authorization.handle, movieController.showTicket);
        router.post('/admin/login', loginController.login);
        router.get('/admin/logout', loginController.logout);
        router.post('/admin/register', loginController.register);
        router.get('/', authorization.handle, movieController.getListMoviesShowing);
        router.get('/admin/movies/prepare', authorization.handle, movieController.getListMoviesPreparing);
        router.post('/admin/movies/buy/ticket', authorization.handle, movieController.BuyTicket);
        router.get('/admin/log/movie/statistic', authorization.handle, logController.movieStatistic);
        router.get('/admin/log/error/statistic', authorization.handle, logController.errorStatistic);
        router.post('/api/v1/frontend/login', jwt.handle, frontendUserControllerLogController.login);
        router.get('/api/v1/frontend/movies/showing', jwt.handle, frontendMovieController.getListMovieShowing);
        router.post('/api/v1/frontend/movie/buy/ticket', jwt.handle, frontendPaymentController.buyTicket);
        router.get('/api/v1/frontend/transaction/detail', jwt.handle, frontendTransactionController.getDetailTransaction);
        router.get('/api/v1/ewallet/movies/showing', partnerMovieController.getListMovieShowing);
        router.post('/api/v1/ewallet/payment/request', partnerPaymentController.requestPayment);
        router.post('/api/v1/ewallet/payment/verify', partnerPaymentController.verifyPayment);
        router.get('/api/v1/transaction/histories', partnerTransactionController.getHistoryTransaction);
        router.get('/api/v1/transaction/status', partnerTransactionController.checkStatusTransaction);
        app.use(router);
    };
    return Routes;
}());
exports["default"] = Routes;
