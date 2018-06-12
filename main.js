(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//routing








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__["ChatModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'https://chatapi.edwisor.com';
        this.getUserInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password)
            .set('apiKey', data.apiKey);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    };
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    };
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/users/logout", params);
    }; // end logout function
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
    }; // END handleError
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/chat/chat-room/chat-room.component.css":
/*!********************************************************!*\
  !*** ./src/app/chat/chat-room/chat-room.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".online{\r\n\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:green;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .offline{\r\n  \r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .rightSideClass {\r\n      float: right;\r\n      background: #ddd;\r\n      border-radius: 0.5em;\r\n    }\r\n  \r\n  .leftSideClass {\r\n      float: left;\r\n      background: #55C1E7;\r\n      border-radius: 0.5em;\r\n    }\r\n  \r\n  .circle-green:before {\r\n      content: ' \\25CF';\r\n      font-size: 1em;\r\n      color: green;\r\n    }\r\n  \r\n  .circle-red:before {\r\n      content: ' \\25CF';\r\n      font-size: 1em;\r\n      color: red;\r\n    }\r\n  \r\n  .cursorPointer {\r\n      cursor: pointer;\r\n    }\r\n  \r\n  .textCenter {\r\n      text-align: center;\r\n    }\r\n  \r\n  .floatLeft {\r\n      float: left;\r\n    }\r\n  \r\n  *,\r\n    *:before,\r\n    *:after {\r\n      box-sizing: border-box;\r\n    }\r\n  \r\n  body {\r\n      padding: 2.5em 0;\r\n      color: white;\r\n    }\r\n  \r\n  .container {\r\n      margin: 0 auto;\r\n      background: #444753;\r\n      border-radius: 0.3em;\r\n    }\r\n  \r\n  .people-list {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list input {\r\n      border-radius: 0.2em;\r\n      border: none;\r\n      padding: 1em;\r\n      color: white;\r\n      background: #6A6C75;\r\n      width: 90%;\r\n      font-size: 1em;\r\n    }\r\n  \r\n  .people-list .fa-search {\r\n      position: relative;\r\n      left: -1.8em;\r\n    }\r\n  \r\n  .people-list ul {\r\n      padding: 0;\r\n    }\r\n  \r\n  .people-list ul li .userPresence {\r\n      float: left;\r\n      padding: 0.7em 0.2em;\r\n      color: white;\r\n      text-transform: capitalize;\r\n    }\r\n  \r\n  .textCapitalize {\r\n      text-transform: capitalize;\r\n      font-size: 1.2em;\r\n    }\r\n  \r\n  .people-list img {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list .about {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list .about {\r\n      padding-left: 0.4em;\r\n    }\r\n  \r\n  .people-list .status {\r\n      color: #92959E;\r\n    }\r\n  \r\n  .chat {\r\n      height: 100vh;\r\n      float: left;\r\n      background: #F2F5F8;\r\n      border-top-right-radius: 0.3em;\r\n      border-bottom-right-radius: 0.3em;\r\n      color: #434651;\r\n    }\r\n  \r\n  .chat .chat-header {\r\n      padding: 0.2em;\r\n      border-bottom: 0.15em solid white;\r\n    }\r\n  \r\n  .chat .chat-header img {\r\n      float: left;\r\n    }\r\n  \r\n  .chat .chat-header .chat-about {\r\n      float: left;\r\n      padding-left: 0.8em;\r\n      margin-top: 0.4em;\r\n    }\r\n  \r\n  .chat .chat-header .chat-with {\r\n      font-weight: bold;\r\n      font-size: 1.1em;\r\n    }\r\n  \r\n  .chat .chat-header .chat-num-messages {\r\n      color: #92959E;\r\n    }\r\n  \r\n  .chat .chat-header .fa-star {\r\n      float: right;\r\n      color: #D8DADF;\r\n      font-size: 1.42em;\r\n      margin-top: 0.85em;\r\n    }\r\n  \r\n  .chat .chat-history {\r\n      padding: 2em 2em 1.42em;\r\n      border-bottom: 0.15em solid white;\r\n      overflow-y: scroll;\r\n      height: 80vh;\r\n    }\r\n  \r\n  .chat .chat-history .message-data {\r\n      margin-bottom: 1em;\r\n    }\r\n  \r\n  .chat .chat-history .message-data-time {\r\n      color: #a8aab1;\r\n      padding-left: 0.4em;\r\n    }\r\n  \r\n  .chat .chat-history .message {\r\n      color: white;\r\n      padding: 0.5em 1.42em;\r\n      line-height: 1.9em;\r\n      font-size: 1.1em;\r\n      border-radius: 7px;\r\n      margin-bottom: 2em;\r\n      width: 90%;\r\n      position: relative;\r\n    }\r\n  \r\n  .chat .chat-history .message:after {\r\n      bottom: 100%;\r\n      left: 7%;\r\n      border: solid transparent;\r\n      content: \" \";\r\n      height: 0;\r\n      width: 0;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      border-bottom-color: #86BB71;\r\n      border-width: 0.8em;\r\n      margin-left: -0.8em;\r\n    }\r\n  \r\n  .chat .chat-history .my-message {\r\n      background: #86BB71;\r\n    }\r\n  \r\n  .chat .chat-history .other-message {\r\n      background: #94C2ED;\r\n    }\r\n  \r\n  .chat .chat-history .other-message:after {\r\n      border-bottom-color: #94C2ED;\r\n      left: 90%;\r\n    }\r\n  \r\n  .chat .chat-message textarea {\r\n      width: 100%;\r\n      border: none;\r\n      padding: 0.8em 1.42em;\r\n      margin-bottom: 0.8em;\r\n      border-radius: 5px;\r\n      resize: none;\r\n    }\r\n  \r\n  .chat .chat-message .fa-file-o,\r\n    .chat .chat-message .fa-file-image-o {\r\n      font-size: 1.1em;\r\n      color: gray;\r\n      cursor: pointer;\r\n    }\r\n  \r\n  .chat .chat-message button {\r\n      float: right;\r\n      color: #94C2ED;\r\n      font-size: 1.1em;\r\n      text-transform: uppercase;\r\n      border: none;\r\n      cursor: pointer;\r\n      font-weight: bold;\r\n      background: #F2F5F8;\r\n    }\r\n  \r\n  .chat .chat-message button:hover {\r\n      color: #75b1e8;\r\n    }\r\n  \r\n  .online,\r\n    .offline,\r\n    .me,\r\n    .warning {\r\n      margin-right: 3px;\r\n      font-size: 0.8em;\r\n    }\r\n  \r\n  .online {\r\n      color: #86BB71;\r\n    }\r\n  \r\n  .offline {\r\n      color: #E38968;\r\n    }\r\n  \r\n  .me {\r\n      color: #94C2ED;\r\n    }\r\n  \r\n  .warning {\r\n      color: #e78930;\r\n    }\r\n  \r\n  .align-left {\r\n      text-align: left;\r\n    }\r\n  \r\n  .align-right {\r\n      text-align: right;\r\n    }\r\n  \r\n  .float-right {\r\n      float: right;\r\n    }\r\n  \r\n  .clearfix:after {\r\n      visibility: hidden;\r\n      display: block;\r\n      font-size: 0;\r\n      content: \" \";\r\n      clear: both;\r\n      height: 0;\r\n    }\r\n  \r\n  .customButton {\r\n      width: 100%;\r\n    }\r\n  \r\n  .activeChat {\r\n      background: #393a41;\r\n    }\r\n  \r\n  .typeOfChats {\r\n      background: #393a41;\r\n      color: white;\r\n      margin-top: 0.2em;\r\n      margin-bottom: 0.2em;\r\n    }\r\n  \r\n  .blankContent{\r\n      height: 100vh;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-size: 3rem;\r\n      color: #999;\r\n    }\r\n  \r\n  @media only screen and (max-width:575px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:576px) and (max-width:768px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:769px) and (max-width:992px) {\r\n      .chat .chat-history {\r\n        height:65vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:993px) and (max-width:1200  px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  /* user list items */\r\n  \r\n  .crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .about {\r\n    float: left;\r\n    padding-left: 0.4em;\r\n  }\r\n  \r\n  .online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  .online {\r\n    color: #86BB71;\r\n  }\r\n  \r\n  .offline {\r\n    color: #E38968;\r\n  }\r\n  \r\n  .me {\r\n    color: #94C2ED;\r\n  }\r\n  \r\n  .warning {\r\n    color: #00c8e7;\r\n  }\r\n  \r\n  .status {\r\n    color: #92959E;\r\n  }\r\n  \r\n  .name {\r\n    float: left;\r\n  }"

/***/ }),

/***/ "./src/app/chat/chat-room/chat-room.component.html":
/*!*********************************************************!*\
  !*** ./src/app/chat/chat-room/chat-room.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"displayBlockMobile\" style=\"position:fixed;width:100%;z-index:1;\">\n\n      <div class=\"col-sm-12 p-0\">\n\n\n\n      </div>\n\n    </div>\n\n    <div class=\"col-12 displayNoneMobile col-sm-4 col-md-4 people-list p-0\" id=\"people-list\">\n\n      <div class=\"p-3 text-white textCapitalize textCenter\">\n        {{userInfo.firstName}} {{userInfo.lastName}}\n        <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n        <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n        <br>\n        <br>\n        <button (click)=\"logout()\" class=\"btn btn-info customButton\">Logout</button>\n      </div>\n\n      <ul class=\"list\">\n        <li class=\"p-2 typeOfChats\">\n          Online Users:\n        </li>\n        <li class=\"clearfix cursorPointer\" [ngClass]=\"{'activeChat': user.chatting == true}\"\n          *ngFor=\"let user of userList\" (click)=\"userSelectedToChat(user.userId, user.name)\">\n          <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\"  >\n            <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n          </div>\n        </li>\n       \n      </ul>\n\n\n    </div>\n\n    <div class=\"col-12 col-sm-8 col-md-8 chat\">\n      <div class=\"chat-header clearfix mobileMenu\" *ngIf=\"receiverName\">\n        <first-char [userName]=\"receiverName\" [userBg]=\"'blue'\" [userColor]=\"'white'\"></first-char>\n\n        <div class=\"chat-about\">\n          <div class=\"chat-with\">Chat with {{receiverName}}</div>\n        </div>\n      </div>\n      <!-- end chat-header -->\n\n      <div #scrollMe [scrollTop]=\"(scrollToChatTop)?0:scrollMe.scrollHeight\" class=\"chat-history\" *ngIf=\"receiverName\">\n\n        <ul>\n          <li class=\"textCenter\" *ngIf=\"receiverName\">\n\n            <span  class=\"cursorPointer\" (click)=\"loadEarlierPageOfChat()\">Load Previous Chat</span>\n\n            <br>\n\n            <span *ngIf=\"loadingPreviousChat == true\">Loading...</span>\n\n          </li>\n          <li class=\"clearfix\" *ngFor=\"let message of messageList\">\n            <div class=\"message-data\" [ngClass]=\"{'align-right': message.senderId == userInfo.userId}\">\n              <span class=\"message-data-time\">{{message?.createdOn | date: 'medium' }}</span> &nbsp; &nbsp;\n              <span class=\"message-data-name floatLeft\" *ngIf=\"message.senderId != userInfo.userId\">\n                <i class=\"fa fa-circle online\"></i> {{ message?.senderName }}</span>\n              <span class=\"message-data-name\" *ngIf=\"message.senderId == userInfo.userId\">{{ message?.senderName }}</span>\n              <i class=\"fa fa-circle me\" *ngIf=\"message.senderId == userInfo.userId\"></i>\n\n            </div>\n            <div class=\"message\" [ngClass]=\"{'float-right other-message': message.senderId == userInfo.userId, 'my-message': message.senderId != userInfo.userId}\">\n              {{message?.message | removeSpecialCharPipe: '#' | removeSpecialCharPipe: '$'}}\n            </div>\n          </li>\n\n        </ul>\n\n      </div>\n      <div *ngIf=\"!receiverName\" class=\"col-sm blankContent\">\n        Click on user for start a chat!!!\n      </div>\n      <!-- end chat-history -->\n\n      <div class=\"chat-message clearfix p-2\" *ngIf=\"receiverName\">\n        <textarea name=\"message-to-send\" id=\"message-to-send\" (keydown)=\"sendMessageUsingKeypress($event)\" [(ngModel)]=\"messageText\"\n          placeholder=\"Type your message\" rows=\"3\"></textarea>\n\n        <button (click)=\"sendMessage()\">Send</button>\n\n      </div>\n      <!-- end chat-message -->\n\n    </div>\n\n  </div>\n  <!-- end chat -->\n\n</div>\n<!-- end container -->\n\n\n\n"

/***/ }),

/***/ "./src/app/chat/chat-room/chat-room.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/chat/chat-room/chat-room.component.ts ***!
  \*******************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent(AppService, SocketService, router, toastr) {
        var _this = this;
        this.AppService = AppService;
        this.SocketService = SocketService;
        this.router = router;
        this.toastr = toastr;
        this.userList = [];
        this.scrollToChatTop = false;
        this.previousChatList = [];
        this.messageList = []; // stores the current message list display in chat box
        this.pageValue = 0;
        this.loadingPreviousChat = false;
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        };
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser().subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            });
        };
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList().subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'chatting': false };
                    _this.userList.push(temp);
                }
                console.log(_this.userList);
            });
        };
        this.getPreviousChatWithAUser = function () {
            var previousData = (_this.messageList.length > 0 ? _this.messageList.slice() : []);
            _this.SocketService.getChat(_this.userInfo.userId, _this.receiverId, _this.pageValue * 10)
                .subscribe(function (apiResponse) {
                console.log(apiResponse);
                if (apiResponse.status == 200) {
                    _this.messageList = apiResponse.data.concat(previousData);
                }
                else {
                    _this.messageList = previousData;
                    _this.toastr.warning('No Messages available');
                }
                _this.loadingPreviousChat = false;
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end get previous chat with any user
        this.loadEarlierPageOfChat = function () {
            _this.loadingPreviousChat = true;
            _this.pageValue++;
            _this.scrollToChatTop = true;
            _this.getPreviousChatWithAUser();
        }; // end loadPreviousChat
        this.userSelectedToChat = function (id, name) {
            console.log("setting user as active");
            // setting that user to chatting true   
            _this.userList.map(function (user) {
                if (user.userId == id) {
                    user.chatting = true;
                }
                else {
                    user.chatting = false;
                }
            });
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', id);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', name);
            _this.receiverName = name;
            _this.receiverId = id;
            _this.messageList = [];
            _this.pageValue = 0;
            var chatDetails = {
                userId: _this.userInfo.userId,
                senderId: id
            };
            _this.SocketService.markChatAsSeen(chatDetails);
            _this.getPreviousChatWithAUser();
        }; // end userBtnClick function
        this.sendMessageUsingKeypress = function (event) {
            if (event.keyCode === 13) {
                _this.sendMessage();
            }
        }; // end sendMessageUsingKeypress
        this.sendMessage = function () {
            if (_this.messageText) {
                var chatMsgObject = {
                    senderName: _this.userInfo.firstName + " " + _this.userInfo.lastName,
                    senderId: _this.userInfo.userId,
                    receiverName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName'),
                    receiverId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId'),
                    message: _this.messageText,
                    createdOn: new Date()
                }; // end chatMsgObject
                console.log(chatMsgObject);
                _this.SocketService.SendChatMessage(chatMsgObject);
                _this.pushToChatWindow(chatMsgObject);
            }
            else {
                _this.toastr.warning('text message can not be empty');
            }
        }; // end sendMessage
        this.pushToChatWindow = function (data) {
            _this.messageText = "";
            _this.messageList.push(data);
            _this.scrollToChatTop = false;
        }; // end push to chat window
        this.getMessageFromAUser = function () {
            _this.SocketService.chatByUserId(_this.userInfo.userId)
                .subscribe(function (data) {
                (_this.receiverId == data.senderId) ? _this.messageList.push(data) : '';
                _this.toastr.success(data.senderName + " says : " + data.message);
                _this.scrollToChatTop = false;
            }); //end subscribe
        }; // end get message from a user 
        this.logout = function () {
            _this.AppService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverName');
                    _this.SocketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
        this.showUserName = function (name) {
            _this.toastr.success("You are chatting with " + name);
        };
        this.toastr;
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        this.userInfo = this.AppService.getUserInfoFromLocalStorage();
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("receiverId");
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
        console.log(this.receiverId, this.receiverName);
        if (this.receiverId != null && this.receiverId != undefined && this.receiverId != '') {
            this.userSelectedToChat(this.receiverId, this.receiverName);
        }
        this.checkStatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getMessageFromAUser();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatRoomComponent.prototype, "scrollMe", void 0);
    ChatRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! ./chat-room.component.html */ "./src/app/chat/chat-room/chat-room.component.html"),
            styles: [__webpack_require__(/*! ./chat-room.component.css */ "./src/app/chat/chat-room/chat-room.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-room/chat-room.component */ "./src/app/chat/chat-room/chat-room.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/user-details/user-details.component */ "./src/app/shared/user-details/user-details.component.ts");
/* harmony import */ var _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pipe/remove-special-char.pipe */ "./src/app/shared/pipe/remove-special-char.pipe.ts");
/* harmony import */ var _shared_first_char_first_char_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'chat', component: _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_2__["ChatRoomComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_8__["RemoveSpecialCharPipe"], _shared_first_char_first_char_component__WEBPACK_IMPORTED_MODULE_9__["FirstCharComponent"], _shared_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"], _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_2__["ChatRoomComponent"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n  </div>"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this._name = this.userName;
        this.firstChar = this._name[0];
    }; // end ngOnInit
    FirstCharComponent.prototype.ngOnChanges = function (changes) {
        var userName = changes.userName;
        this._name = userName.currentValue;
        this.firstChar = this._name[0];
    };
    FirstCharComponent.prototype.nameClicked = function () {
        this.notify.emit(this._name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FirstCharComponent.prototype, "notify", void 0);
    FirstCharComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        })
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipe/remove-special-char.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipe/remove-special-char.pipe.ts ***!
  \*********************************************************/
/*! exports provided: RemoveSpecialCharPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSpecialCharPipe", function() { return RemoveSpecialCharPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveSpecialCharPipe = /** @class */ (function () {
    function RemoveSpecialCharPipe() {
    }
    RemoveSpecialCharPipe.prototype.transform = function (value, character) {
        return value.replace(character, '');
    };
    RemoveSpecialCharPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'removeSpecialCharPipe'
        })
    ], RemoveSpecialCharPipe);
    return RemoveSpecialCharPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/shared/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"], _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"]],
            exports: [
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"],
                _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }\n  \n  .about {\n    float: left;\n    padding-left: 0.4em;\n  }\n  \n  .online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n  \n  .online {\n    color: #86BB71;\n  }\n  \n  .offline {\n    color: #E38968;\n  }\n  \n  .me {\n    color: #94C2ED;\n  }\n  \n  .warning {\n    color: #00c8e7;\n  }\n  \n  .status {\n    color: #92959E;\n  }\n  \n  .name {\n    float: left;\n  }"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n  </div>\n  <div class=\"about\">\n    <div class=\"name\">{{userFirstName}} {{userLastName}}\n      <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n    </div>\n    <div class=\"status\">\n      <i class=\"fa fa-circle\" [ngClass]=\"userStatus\"></i>{{userStatus}}\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
        this.userNameAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userFirstName[0];
    }; // end ngOnInit
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "userFirstName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userLastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "messageRead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserDetailsComponent.prototype, "userNameAppear", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/shared/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/shared/user-details/user-details.component.css")]
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.url = 'https://chatapi.edwisor.com';
        // events to be listened
        this.verifyUser = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onlineUserList = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('online-user-list', function (userList) {
                    observer.next(userList);
                });
            });
        };
        this.disconnectedSocket = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                });
            });
        };
        // event to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        };
        this.markChatAsSeen = function (userDetails) {
            _this.socket.emit('mark-chat-as-seen', userDetails);
        }; // end markChatAsSeen
        this.chatByUserId = function (userId) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end chatByUserId
        this.SendChatMessage = function (chatMsgObject) {
            _this.socket.emit('chat-msg', chatMsgObject);
        }; // end getChatMessage
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        // connection is being created
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    }
    // end events to be emitted
    // chat related methods 
    SocketService.prototype.getChat = function (senderId, receiverId, skip) {
        return this.http.get(this.url + "/api/v1/chat/get/for/user?senderId=" + senderId + "&receiverId=" + receiverId + "&skip=" + skip + "&authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'))
            .do(function (data) { return console.log('Data Received'); })
            .catch(this.handleError);
    }; // end logout function
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status;
        }
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignUp = function () {
            _this.router.navigate(['/sign-up']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/chat']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signinFunction
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Sign Up To Start Chat</h2>\n\n    <br>\n\n    <span>FirstName: </span>\n\n    <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n    <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n\n    <br>\n\n    <span>LastName: </span>\n\n    <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n    <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n\n    <br>\n\n    <span>Mobile: </span>\n\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n    <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n\n    <br>\n\n    <span>Email: </span>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n    <br>\n\n    <span>Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n\n    <span>API Key: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">AuthKey</label>\n\n    <textarea type=\"password\" id=\"AuthKey\" class=\"form-control\" [(ngModel)]=\"apiKey\" placeholder=\"API Key\" required></textarea>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('enter last name');
            }
            else if (!_this.mobile) {
                _this.toastr.warning('enter mobile');
            }
            else if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else if (!_this.apiKey) {
                _this.toastr.warning('Enter your API key');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobile: _this.mobile,
                    email: _this.email,
                    password: _this.password,
                    apiKey: _this.apiKey
                };
                console.log(data);
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Signup successful');
                        setTimeout(function () {
                            _this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signupFunction
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp-1\Desktop\GroupChat-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map