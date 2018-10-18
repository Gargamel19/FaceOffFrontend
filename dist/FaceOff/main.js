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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _team_table_team_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-table/team-table.component */ "./src/app/team-table/team-table.component.ts");
/* harmony import */ var _spieler_table_spieler_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spieler-table/spieler-table.component */ "./src/app/spieler-table/spieler-table.component.ts");
/* harmony import */ var _register_spieler_register_spieler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-spieler/register-spieler.component */ "./src/app/register-spieler/register-spieler.component.ts");
/* harmony import */ var _spielerXName_spielerXName_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spielerXName/spielerXName.component */ "./src/app/spielerXName/spielerXName.component.ts");
/* harmony import */ var _teamX_teamX_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teamX/teamX.component */ "./src/app/teamX/teamX.component.ts");
/* harmony import */ var _register_team_register_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-team/register-team.component */ "./src/app/register-team/register-team.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'teams', component: _team_table_team_table_component__WEBPACK_IMPORTED_MODULE_3__["TeamTableComponent"] },
    { path: 'spieler', component: _spieler_table_spieler_table_component__WEBPACK_IMPORTED_MODULE_4__["SpielerTableComponent"] },
    { path: 'spieler/:name', component: _spielerXName_spielerXName_component__WEBPACK_IMPORTED_MODULE_6__["SpielerXNameComponent"] },
    { path: 'team/:name', component: _teamX_teamX_component__WEBPACK_IMPORTED_MODULE_7__["TeamXComponent"] },
    { path: 'register/spieler', component: _register_spieler_register_spieler_component__WEBPACK_IMPORTED_MODULE_5__["RegisterSpielerComponent"] },
    { path: 'register/team', component: _register_team_register_team_component__WEBPACK_IMPORTED_MODULE_8__["RegisterTeamComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
        this.title = 'FaceOff';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _team_table_team_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-table/team-table.component */ "./src/app/team-table/team-table.component.ts");
/* harmony import */ var _spieler_table_spieler_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spieler-table/spieler-table.component */ "./src/app/spieler-table/spieler-table.component.ts");
/* harmony import */ var _spielerXName_spielerXName_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spielerXName/spielerXName.component */ "./src/app/spielerXName/spielerXName.component.ts");
/* harmony import */ var _teamX_teamX_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teamX/teamX.component */ "./src/app/teamX/teamX.component.ts");
/* harmony import */ var _register_spieler_register_spieler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-spieler/register-spieler.component */ "./src/app/register-spieler/register-spieler.component.ts");
/* harmony import */ var _register_team_register_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register-team/register-team.component */ "./src/app/register-team/register-team.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _register_spieler_register_spieler_component__WEBPACK_IMPORTED_MODULE_10__["RegisterSpielerComponent"],
                _register_team_register_team_component__WEBPACK_IMPORTED_MODULE_11__["RegisterTeamComponent"],
                _team_table_team_table_component__WEBPACK_IMPORTED_MODULE_6__["TeamTableComponent"],
                _spieler_table_spieler_table_component__WEBPACK_IMPORTED_MODULE_7__["SpielerTableComponent"],
                _teamX_teamX_component__WEBPACK_IMPORTED_MODULE_9__["TeamXComponent"],
                _spielerXName_spielerXName_component__WEBPACK_IMPORTED_MODULE_8__["SpielerXNameComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.button {\r\n    -webkit-appearance: button;\r\n    -moz-appearance: button;\r\n    appearance: button;\r\n\r\n    text-decoration: none;\r\n    color: initial;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>Welcome to {{ title }}!</h1>\r\n  \r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n\r\n  <h2>Links: </h2>\r\n\r\n    <a href=\"http://localhost:4200/teams/register\" class=\"button\" >Als Team registrieren</a>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.title = 'FaceOff';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.newTeamResiter = function () {
        this.router.navigate(['../signe-in/signe-in.component.html']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logics/Team.ts":
/*!********************************!*\
  !*** ./src/app/logics/Team.ts ***!
  \********************************/
/*! exports provided: TeamNumber, TeamSkelett, Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamNumber", function() { return TeamNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSkelett", function() { return TeamSkelett; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var TeamNumber = /** @class */ (function () {
    function TeamNumber(id) {
        this.id = id;
    }
    return TeamNumber;
}());

var TeamSkelett = /** @class */ (function () {
    function TeamSkelett(name, member1, member2) {
        this.name = name;
        this.spieler1 = member1;
        this.spieler2 = member2;
    }
    return TeamSkelett;
}());

var Team = /** @class */ (function () {
    function Team(name, member1, member2) {
        this.member = [];
        this.name = name;
        this.member[0] = member1;
        this.member[1] = member2;
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/logics/spieler.service.ts":
/*!*******************************************!*\
  !*** ./src/app/logics/spieler.service.ts ***!
  \*******************************************/
/*! exports provided: SpielerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpielerService", function() { return SpielerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spieler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spieler */ "./src/app/logics/spieler.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpielerService = /** @class */ (function () {
    function SpielerService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/spieler';
        this.temp = 'http://localhost:8080/register/spieler';
    }
    SpielerService.prototype.findAll = function () {
        return this.http.get(this.apiUrl);
    };
    SpielerService.prototype.findBySpielerNummer = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    SpielerService.prototype.findByName = function (name) {
        return this.http.get(this.apiUrl + '/@/' + name);
    };
    SpielerService.prototype.saveSpieler = function (name, twitch) {
        this.tempSpieler = new _spieler__WEBPACK_IMPORTED_MODULE_1__["Spieler"](name, twitch);
        this.http.post(this.temp, this.tempSpieler).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    SpielerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpielerService);
    return SpielerService;
}());



/***/ }),

/***/ "./src/app/logics/spieler.ts":
/*!***********************************!*\
  !*** ./src/app/logics/spieler.ts ***!
  \***********************************/
/*! exports provided: SpielerNumber, Spieler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpielerNumber", function() { return SpielerNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spieler", function() { return Spieler; });
var SpielerNumber = /** @class */ (function () {
    function SpielerNumber(id) {
        this.id = id;
    }
    return SpielerNumber;
}());

var Spieler = /** @class */ (function () {
    function Spieler(name, twitch) {
        this.name = name;
        this.twitch = twitch;
        this.kills = 0;
    }
    return Spieler;
}());



/***/ }),

/***/ "./src/app/logics/team.service.ts":
/*!****************************************!*\
  !*** ./src/app/logics/team.service.ts ***!
  \****************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Team */ "./src/app/logics/Team.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/teams';
        this.apiSoloTeamUrl = 'http://localhost:8080/team';
        this.temp = 'http://localhost:8080/register/team';
    }
    TeamService.prototype.findAll = function () {
        return this.http.get(this.apiUrl);
    };
    TeamService.prototype.findByTeamNummer = function (id) {
        return this.http.get(this.apiSoloTeamUrl + '/' + id);
    };
    TeamService.prototype.findByName = function (name) {
        return this.http.get(this.apiSoloTeamUrl + '/@/' + name);
    };
    TeamService.prototype.saveTeam = function (name, spieler1, spieler2) {
        this.tempTeam = new _Team__WEBPACK_IMPORTED_MODULE_1__["TeamSkelett"](name, spieler1, spieler2);
        this.http.post(this.temp, this.tempTeam).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    TeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/register-spieler/register-spieler.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/register-spieler/register-spieler.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-spieler/register-spieler.component.html":
/*!******************************************************************!*\
  !*** ./src/app/register-spieler/register-spieler.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n  <h2>Anmeldung: </h2>\n  For your registration we need your ingame name from PUBG!\n  <table align=\"center\">\n    <tr>\n      <th><h2>Spielername:</h2></th><th><input #name></th>\n    </tr>\n    <tr>\n      <th>TwitchName:</th><th><input #twitch></th>\n    </tr>\n  </table>\n  <button (click)=\"summit(name.value, twitch.value)\" >send</button>\n</div>\n"

/***/ }),

/***/ "./src/app/register-spieler/register-spieler.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/register-spieler/register-spieler.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterSpielerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSpielerComponent", function() { return RegisterSpielerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logics_spieler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logics/spieler.service */ "./src/app/logics/spieler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterSpielerComponent = /** @class */ (function () {
    function RegisterSpielerComponent(spielerService) {
        this.spielerService = spielerService;
        this.title = 'FaceOff';
    }
    RegisterSpielerComponent.prototype.ngOnInit = function () {
    };
    RegisterSpielerComponent.prototype.summit = function (name, twitch) {
        this.spielerService.saveSpieler(name, twitch);
        console.log(name + ' ' + twitch);
    };
    RegisterSpielerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-spieler',
            template: __webpack_require__(/*! ./register-spieler.component.html */ "./src/app/register-spieler/register-spieler.component.html"),
            styles: [__webpack_require__(/*! ./register-spieler.component.css */ "./src/app/register-spieler/register-spieler.component.css")]
        }),
        __metadata("design:paramtypes", [_logics_spieler_service__WEBPACK_IMPORTED_MODULE_1__["SpielerService"]])
    ], RegisterSpielerComponent);
    return RegisterSpielerComponent;
}());



/***/ }),

/***/ "./src/app/register-team/register-team.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-team/register-team.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-team/register-team.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-team/register-team.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n  <h2>Anmeldung: </h2>\n  For your registration we need your ingame names from PUBG!\n  <table align=\"center\">\n    <tr>\n      <th><h2>Teamname:</h2></th><th><input #name></th>\n    </tr>\n    <tr>\n      <th>First Player:</th><th><input #spieler1></th>\n    </tr>\n    <tr>\n      <th>Second Player:</th><th><input #spieler2></th>\n    </tr>\n  </table>\n  <button (click)=\"summit(name.value, spieler1.value, spieler2.value)\" >send</button>\n</div>"

/***/ }),

/***/ "./src/app/register-team/register-team.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-team/register-team.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTeamComponent", function() { return RegisterTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logics_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logics/team.service */ "./src/app/logics/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterTeamComponent = /** @class */ (function () {
    function RegisterTeamComponent(teamService) {
        this.teamService = teamService;
        this.title = 'FaceOff';
    }
    RegisterTeamComponent.prototype.ngOnInit = function () {
    };
    RegisterTeamComponent.prototype.summit = function (name, spieler1, spieler2) {
        this.teamService.saveTeam(name, spieler1, spieler2);
        console.log(name + ' ' + spieler1 + ' ' + spieler2);
    };
    RegisterTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-team',
            template: __webpack_require__(/*! ./register-team.component.html */ "./src/app/register-team/register-team.component.html"),
            styles: [__webpack_require__(/*! ./register-team.component.css */ "./src/app/register-team/register-team.component.css")]
        }),
        __metadata("design:paramtypes", [_logics_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
    ], RegisterTeamComponent);
    return RegisterTeamComponent;
}());



/***/ }),

/***/ "./src/app/spieler-table/spieler-table.component.css":
/*!***********************************************************!*\
  !*** ./src/app/spieler-table/spieler-table.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #003d99;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/spieler-table/spieler-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/spieler-table/spieler-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n  <h2>Spieler: </h2>\n  Hier erscheinen alle Teams, die sich angemeldet haben\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n\n      <table class=\"table\" align=\"center\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Twitch</th>\n            <th>Teams</th>\n            <th></th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let spieler of spieler | async\">\n            <td>{{ spieler.spielerNumber.id }}</td>\n            <td><a href=\"spieler/{{spieler.name}}\">{{spieler.name}}</a></td>\n            <td><a href=\"http://twitch.tv/{{spieler.twitch}}\">{{spieler.twitch}}</a></td>\n            <td><a href=\"team/{{spieler.teams}}\">{{ spieler.teams }}</a></td>\n          </tr>\n\n          </tbody>\n        </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/spieler-table/spieler-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/spieler-table/spieler-table.component.ts ***!
  \**********************************************************/
/*! exports provided: SpielerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpielerTableComponent", function() { return SpielerTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logics_spieler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logics/spieler.service */ "./src/app/logics/spieler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpielerTableComponent = /** @class */ (function () {
    function SpielerTableComponent(spielerService, router) {
        this.spielerService = spielerService;
        this.router = router;
        this.title = 'FaceOff';
    }
    SpielerTableComponent.prototype.ngOnInit = function () {
        this.spieler = this.spielerService.findAll();
        this.spieler.subscribe(function (res) { return console.log(res); });
    };
    SpielerTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spieler-table',
            template: __webpack_require__(/*! ./spieler-table.component.html */ "./src/app/spieler-table/spieler-table.component.html"),
            styles: [__webpack_require__(/*! ./spieler-table.component.css */ "./src/app/spieler-table/spieler-table.component.css")],
            providers: [_logics_spieler_service__WEBPACK_IMPORTED_MODULE_1__["SpielerService"]]
        }),
        __metadata("design:paramtypes", [_logics_spieler_service__WEBPACK_IMPORTED_MODULE_1__["SpielerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SpielerTableComponent);
    return SpielerTableComponent;
}());



/***/ }),

/***/ "./src/app/spielerXName/spielerXName.component.css":
/*!*********************************************************!*\
  !*** ./src/app/spielerXName/spielerXName.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #003d99;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/spielerXName/spielerXName.component.html":
/*!**********************************************************!*\
  !*** ./src/app/spielerXName/spielerXName.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n  <h2>Spieler: {{ spieler.name }}</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n\n        <table class=\"table\" align=\"center\">\n          <tr>\n            <td>#</td>\n            <td>{{spieler.spielerNumber.id}}</td>\n          </tr>          \n          <tr>\n            <td>Name:</td>\n            <td>{{spieler.name}}</td>\n          </tr>\n          <tr>\n            <td>Twitch:</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Teams:</td>\n            <td><a href=\"team/{{spieler.teams}}\">{{ spieler.teams }}</a></td>          \n          </tr>\n          <tr>\n            <td>Kills:</td>\n            <td>{{ spieler.kills }}</td>\n          </tr>\n        </table>\n        <td><a href=\"spieler\">zurueck zu den Speilern</a></td>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/spielerXName/spielerXName.component.ts":
/*!********************************************************!*\
  !*** ./src/app/spielerXName/spielerXName.component.ts ***!
  \********************************************************/
/*! exports provided: SpielerXNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpielerXNameComponent", function() { return SpielerXNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logics_spieler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logics/spieler.service */ "./src/app/logics/spieler.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpielerXNameComponent = /** @class */ (function () {
    function SpielerXNameComponent(route, spielerService, sanitizer, router) {
        var _this = this;
        this.route = route;
        this.spielerService = spielerService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.title = 'FaceOff';
        this.route.params.subscribe(function (params) { return _this.spielerName = params.name; });
    }
    SpielerXNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spielerOb = this.spielerService.findByName(this.spielerName);
        this.spielerOb.subscribe(function (temp) { return _this.spieler = temp; });
    };
    SpielerXNameComponent.prototype.returnTwitch = function () {
        console.log('https://player.twitch.tv/?channel=' + this.spieler.twitch);
        return 'https://player.twitch.tv/?channel=' + this.spieler.twitch;
    };
    SpielerXNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spieler-x-name',
            template: __webpack_require__(/*! ./spielerXName.component.html */ "./src/app/spielerXName/spielerXName.component.html"),
            styles: [__webpack_require__(/*! ./spielerXName.component.css */ "./src/app/spielerXName/spielerXName.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _logics_spieler_service__WEBPACK_IMPORTED_MODULE_2__["SpielerService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SpielerXNameComponent);
    return SpielerXNameComponent;
}());



/***/ }),

/***/ "./src/app/team-table/team-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/team-table/team-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/team-table/team-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/team-table/team-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n  <h2>Anmeldung: </h2>\n  Hier erscheinen alle Teams, die sich angemeldet haben\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Name</th>\n              <th>Spieler 1</th>\n              <th>Spieler 2</th>\n              <th>Kills</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let team of teams | async\">\n              <td (click)=\"toTeam(team.teamNumber.id)\">{{team.teamNumber.id}}</td>\n              <td><a href=\"team/{{team.name}}\">{{team.name}}</a></td>\n              <td><a href=\"spieler/{{team.member[0]}}\">{{team.member[0]}}</a></td>\n              <td><a href=\"spieler/{{team.member[1]}}\">{{team.member[1]}}</a></td>\n              <td>{{team.member[0].kills + team.member[1].kills}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/team-table/team-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/team-table/team-table.component.ts ***!
  \****************************************************/
/*! exports provided: TeamTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamTableComponent", function() { return TeamTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logics_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logics/team.service */ "./src/app/logics/team.service.ts");
/* harmony import */ var _logics_spieler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logics/spieler.service */ "./src/app/logics/spieler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamTableComponent = /** @class */ (function () {
    function TeamTableComponent(teamService, spielerService, router) {
        this.teamService = teamService;
        this.spielerService = spielerService;
        this.router = router;
        this.title = 'FaceOff';
        this.i = 0;
    }
    TeamTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teams = this.teamService.findAll();
        this.teams.subscribe(function (res) {
            res.forEach(function (temp1) {
                _this.sucheSpieler1(temp1.member[0]);
                _this.sucheSpieler2(temp1.member[1]);
                _this.i = _this.i + 1;
            });
        });
    };
    TeamTableComponent.prototype.sucheSpieler1 = function (name) {
        console.log(name);
        this.spieler1 = this.spielerService.findByName(name);
        this.spieler1.subscribe(function (temp) { return console.log(temp.name); });
    };
    TeamTableComponent.prototype.sucheSpieler2 = function (name) {
        console.log(name);
        this.spieler2 = this.spielerService.findByName(name);
        this.spieler2.subscribe(function (temp2) { return console.log(temp2.name); });
    };
    TeamTableComponent.prototype.toPlayer = function (playerNumber) {
        this.router.navigate(['spieler', playerNumber]);
    };
    TeamTableComponent.prototype.toTeam = function (teamNumber) {
        this.router.navigate(['team', teamNumber]);
    };
    TeamTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-table',
            template: __webpack_require__(/*! ./team-table.component.html */ "./src/app/team-table/team-table.component.html"),
            styles: [__webpack_require__(/*! ./team-table.component.css */ "./src/app/team-table/team-table.component.css")]
        }),
        __metadata("design:paramtypes", [_logics_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"], _logics_spieler_service__WEBPACK_IMPORTED_MODULE_2__["SpielerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TeamTableComponent);
    return TeamTableComponent;
}());



/***/ }),

/***/ "./src/app/teamX/teamX.component.css":
/*!*******************************************!*\
  !*** ./src/app/teamX/teamX.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #003d99;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/teamX/teamX.component.html":
/*!********************************************!*\
  !*** ./src/app/teamX/teamX.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n  <h2>Team: {{team.name}}</h2>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n\n        <table class=\"table\">\n          <tr>\n            <td>#</td>\n            <td>{{team.teamNumber.id}}</td>\n          </tr>\n          <tr>\n            <td>Name:</td>\n            <td>{{team.name}}</td>\n          </tr>\n          <tr>\n            <td>Player:</td>\n            <td><a href=\"spieler/{{team.member[0]}}\"> {{team.member[0]}} </a>, <a href=\"spieler/{{team.member[1]}}\">{{team.member[1]}}</a></td>\n          </tr>\n        </table>\n        <td><a href=\"teams\">zurueck zu den Teams</a></td>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/teamX/teamX.component.ts":
/*!******************************************!*\
  !*** ./src/app/teamX/teamX.component.ts ***!
  \******************************************/
/*! exports provided: TeamXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamXComponent", function() { return TeamXComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logics_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logics/team.service */ "./src/app/logics/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamXComponent = /** @class */ (function () {
    function TeamXComponent(route, teamService) {
        var _this = this;
        this.route = route;
        this.teamService = teamService;
        this.title = 'FaceOff';
        this.route.params.subscribe(function (params) { return _this.name = params.name; });
    }
    TeamXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teams = this.teamService.findByName(this.name);
        this.teams.subscribe(function (temp) { return _this.team = temp; });
    };
    TeamXComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-x',
            template: __webpack_require__(/*! ./teamX.component.html */ "./src/app/teamX/teamX.component.html"),
            styles: [__webpack_require__(/*! ./teamX.component.css */ "./src/app/teamX/teamX.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _logics_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], TeamXComponent);
    return TeamXComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\FerdinandTrendelenbu\eclipse-workspace\FaceOff\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map