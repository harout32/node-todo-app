webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/RouteModule/route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dashboard_individual_tasks_individual_tasks_component__ = __webpack_require__("../../../../../src/app/components/dashboard/individual-tasks/individual-tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_reg_reg_component__ = __webpack_require__("../../../../../src/app/components/reg/reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'reg', component: __WEBPACK_IMPORTED_MODULE_4__components_reg_reg_component__["a" /* RegComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'your-tasks', pathMatch: 'full' },
            { path: 'your-tasks', component: __WEBPACK_IMPORTED_MODULE_0__components_dashboard_individual_tasks_individual_tasks_component__["a" /* IndividualTasksComponent */] }
        ] }
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], RouteModule);

//# sourceMappingURL=route.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet>\n    \n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RouteModule_route_module__ = __webpack_require__("../../../../../src/app/RouteModule/route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_reg_reg_component__ = __webpack_require__("../../../../../src/app/components/reg/reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_individual_tasks_individual_tasks_component__ = __webpack_require__("../../../../../src/app/components/dashboard/individual-tasks/individual-tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_individual_tasks_add_tasks_modal_add_tasks_modal_component__ = __webpack_require__("../../../../../src/app/components/dashboard/individual-tasks/add-tasks-modal/add-tasks-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_reg_reg_component__["a" /* RegComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dashboard_individual_tasks_individual_tasks_component__["a" /* IndividualTasksComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dashboard_individual_tasks_add_tasks_modal_add_tasks_modal_component__["a" /* AddTasksModalComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_15__components_dashboard_individual_tasks_add_tasks_modal_add_tasks_modal_component__["a" /* AddTasksModalComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__RouteModule_route_module__["a" /* RouteModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__["DragulaModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__services_tasks_service__["a" /* TasksService */], __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__["DragulaService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-end\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" (click)=\"logout()\"  style=\"cursor:pointer\"> LogOut</a>\n    </li>\n  </ul>\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-2\">\n        <div class=\"nav flex-column nav-pills\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['your-tasks']\" >Your Tasks</a>\n          <a class=\"nav-link\" href=\"#\">Team Tasks</a>\n          <a class=\"nav-link\" href=\"#\">Messages</a>\n        </div>\n    </div>\n      <div class=\"col-12 col-md-10\">\n        <router-outlet></router-outlet>\n      </div>\n\n\n      \n    \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(tasksService, authService, router) {
        this.tasksService = tasksService;
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.authService.onLogOut().subscribe(function (res) {
            localStorage.clear();
            _this.router.navigate(['/reg']);
        }, function (err) {
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/individual-tasks/add-tasks-modal/add-tasks-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add New Task</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form (ngSubmit)=\"addTask(f)\" #f=\"ngForm\" >\n  <div class=\"modal-body\">\n   \n   \n\n      <div class=\"form-group\">\n          <label for=\"title\">Task Title</label>\n          <input type=\"text\" class=\"form-control\" id=\"title\"  name=\"title\" required ngModel>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"description\">Task Description</label>\n            <textarea class=\"form-control\" id=\"description\" rows=\"3\" name=\"description\" required ngModel></textarea>\n          </div>\n          <!-- <label for=\"state\">Task State</label>\n          <select class=\"form-control form-control-md\" name=\"state\" ngModel>\n              <option disabled>Task State</option>\n              <option value=\"onhold\">On Hold</option>\n              <option value=\"today\">Today</option>\n              <option value=\"urgent\">Urgent</option>\n              <option value=\"completed\">Completed</option>\n              ongoing\n            </select> -->\n\n\n    \n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-outline-info\" [disabled]=\"!f.valid\">Add Task</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/individual-tasks/add-tasks-modal/add-tasks-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/individual-tasks/add-tasks-modal/add-tasks-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTasksModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTasksModalComponent = (function () {
    function AddTasksModalComponent(activeModal, tasksService) {
        this.activeModal = activeModal;
        this.tasksService = tasksService;
    }
    AddTasksModalComponent.prototype.ngOnInit = function () {
    };
    AddTasksModalComponent.prototype.addTask = function (f) {
        var _this = this;
        this.tasksService.addTask(f.value.title, f.value.description).subscribe(function (success) {
            _this.activeModal.close();
        }, function (error) {
        });
    };
    return AddTasksModalComponent;
}());
AddTasksModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-add-tasks-modal',
        template: __webpack_require__("../../../../../src/app/components/dashboard/individual-tasks/add-tasks-modal/add-tasks-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/individual-tasks/add-tasks-modal/add-tasks-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_tasks_service__["a" /* TasksService */]) === "function" && _b || Object])
], AddTasksModalComponent);

var _a, _b;
//# sourceMappingURL=add-tasks-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/individual-tasks/individual-tasks.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button type=\"button\" class=\"btn btn-outline-info\" (click)=\"openTaskAdding()\">Add Task</button>\n<br><br>\n\n    <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n              <div class=\"list-group\" >\n                  <div  class=\"list-group-item list-group-item-action list-group-item-info\">\n                    On Going Tasks\n                  </div>\n                  <span class=\"min-height\"  \n                  [dragula]='\"bag-one\"' \n                  [dragulaModel]='ongoingTasks' \n                  id=\"ongoing\">\n                  <a \n                  *ngFor=\"let task of ongoingTasks\"  \n                  class=\"list-group-item list-group-item-action\"\n                  [id]=\"task._id\">{{task.title}}</a>\n                </span>\n                </div>\n        </div>\n        <!-- on Hold Tasks -->\n        <div class=\"col-12 col-md-4\">\n          <div class=\"list-group\"  >\n            <a  class=\"list-group-item list-group-item-action list-group-item-warning\">\n              On Hold Tasks\n            </a>\n            <span \n            class=\"min-height\"  \n            [dragula]='\"bag-one\"' \n            [dragulaModel]='onholdTasks'\n            id=\"onhold\">\n            <a \n            *ngFor=\"let task of onholdTasks\" \n            class=\"list-group-item list-group-item-action\"\n            [id]=\"task._id\"  \n            >{{task.title}}</a>\n          </span>\n          </div>\n          <br><br>\n<!-- Uergent tasks -->\n          <div class=\"list-group\"  >\n            <a  class=\"list-group-item list-group-item-action list-group-item-danger\">\n              Uergent Tasks\n            </a>\n            <span \n            class=\"min-height\"  \n            [dragula]='\"bag-one\"' \n            [dragulaModel]='urgentTasks'\n            id=\"urgent\">\n            <a \n            *ngFor=\"let task of urgentTasks\"   \n            class=\"list-group-item list-group-item-action\"\n            [id]=\"task._id\">{{task.title}}</a>\n          </span>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <div class=\"list-group\"  >\n            <a  class=\"list-group-item list-group-item-action list-group-item-primary\">\n              Today Tasks\n            </a>\n            <span \n            class=\"min-height\"  \n            [dragula]='\"bag-one\"' \n            [dragulaModel]='todayTasks'\n            id=\"today\">\n            <a \n            *ngFor=\"let task of todayTasks\"   \n            class=\"list-group-item list-group-item-action\"\n            [id]=\"task._id\">{{task.title}}</a>\n          </span>\n          </div>\n          <br><br>\n          <div class=\"list-group\"  >\n            <a  class=\"list-group-item list-group-item-action list-group-item-success\">\n             Completed\n            </a>\n            <span \n            class=\"min-height\"  \n            [dragula]='\"bag-one\"' \n            [dragulaModel]='completedTasks'\n            id=\"completed\">\n            <a \n            *ngFor=\"let task of completedTasks\"   \n            class=\"list-group-item list-group-item-action\"\n            [id]=\"task._id\">{{task.title}}</a>\n          </span>\n          </div>\n\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/individual-tasks/individual-tasks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".min-height {\n  min-height: 50px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/individual-tasks/individual-tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualTasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_dragula_components_dragula_provider__ = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_dragula_components_dragula_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_dragula_components_dragula_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_tasks_modal_add_tasks_modal_component__ = __webpack_require__("../../../../../src/app/components/dashboard/individual-tasks/add-tasks-modal/add-tasks-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndividualTasksComponent = (function () {
    function IndividualTasksComponent(modalService, tasksService, dragulaService) {
        var _this = this;
        this.modalService = modalService;
        this.tasksService = tasksService;
        this.dragulaService = dragulaService;
        this.ongoingTasks = [];
        this.onholdTasks = [];
        this.todayTasks = [];
        this.urgentTasks = [];
        this.completedTasks = [];
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
    }
    IndividualTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.tasksService.updatedTasksSubject.subscribe(function (tasks) {
            _this.ongoingTasks = [];
            _this.onholdTasks = [];
            _this.todayTasks = [];
            _this.urgentTasks = [];
            _this.completedTasks = [];
            tasks.forEach(function (task) {
                switch (task.state) {
                    case 'ongoing':
                        _this.ongoingTasks.push(task);
                        break;
                    case 'onhold':
                        _this.onholdTasks.push(task);
                        break;
                    case 'today':
                        _this.todayTasks.push(task);
                        break;
                    case 'urgent':
                        _this.urgentTasks.push(task);
                        break;
                    case 'completed':
                        _this.completedTasks.push(task);
                        break;
                }
            });
        });
        this.tasksService.getUserTasks();
    };
    IndividualTasksComponent.prototype.openTaskAdding = function () {
        this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__add_tasks_modal_add_tasks_modal_component__["a" /* AddTasksModalComponent */]);
    };
    IndividualTasksComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        // do something
        this.tasksService.updatTaskById(e.id, el.id).subscribe();
    };
    IndividualTasksComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return IndividualTasksComponent;
}());
IndividualTasksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-individual-tasks',
        template: __webpack_require__("../../../../../src/app/components/dashboard/individual-tasks/individual-tasks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/individual-tasks/individual-tasks.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ng2_dragula_components_dragula_provider__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng2_dragula_components_dragula_provider__["DragulaService"]) === "function" && _c || Object])
], IndividualTasksComponent);

var _a, _b, _c;
//# sourceMappingURL=individual-tasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class=\"row\">\n         <div class=\"col-sm-6\">\n             <h1>LogIn</h1>\n </div>\n </div>\n<div class=\"row\">\n        <div class=\"col-4\"></div>\n    <div class=\"col-4\">\n<form (ngSubmit)=\"onLogin()\" #f=\"ngForm\">\n<div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"email\"  name=\"email\" required email [(ngModel)]=\"email\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"pwd\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" required password [(ngModel)]=\"password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary center-margin\" [disabled]=\"!f.valid\" >Login</button>\n</form>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.authService.onLogin(this.email, this.password).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/dashboard']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reg/reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n<div class=\"col-sm-6\">\n    <h1>Register</h1>\n</div>\n    <div class=\"col-sm-6\">\n        <a [routerLink]=\"['/login']\" class=\"text-right\" style=\"cursor:pointer\"> <h5>Log in</h5></a>\n    </div>\n  </div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-4\"></div>\n<div class=\"col-4\">\n    <form (ngSubmit)=\"onRegister()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label for=\"User\">User name</label>\n            <input type=\"text\" class=\"form-control\" id=\"User\"  name=\"userName\" required [(ngModel)]=\"user\">\n          </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email </label>\n          <input type=\"email\" class=\"form-control\" id=\"email\"  name=\"email\" required email [(ngModel)]=\"email\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"pwd\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" required password [(ngModel)]=\"password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary center-margin\" [disabled]=\"!f.valid\" >Register</button>\n    </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/reg/reg.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-margin {\n  margin: 0 auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reg/reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegComponent = (function () {
    function RegComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:one-line
    RegComponent.prototype.onRegister = function (f) {
        var _this = this;
        this.authService.onRegister(this.user, this.email, this.password).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/dashboard']);
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        console.log(f);
    };
    return RegComponent;
}());
RegComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-reg',
        template: __webpack_require__("../../../../../src/app/components/reg/reg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/reg/reg.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RegComponent);

var _a, _b;
//# sourceMappingURL=reg.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.getUserInfo();
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.authService.getUserInfo();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PORT = 'https://tasks-harout.herokuapp.com';
// const PORT = 'http://localhost:3000';
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.getUserInfo = function () {
        var _this = this;
        //check if the user is logged in and run every time /dashboard url is used via guard
        //return the observable as it is without subscribing to it becuse the guard automoaticly will do 
        // 
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'x-auth': localStorage.getItem('token') });
        return this.http.get(PORT + '/users/me', { headers: headers })
            .map(function (response) {
            _this.user = response.json();
            return true;
        })
            .catch(function (err) {
            _this.router.navigate(['/reg']);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(false);
        });
    };
    AuthService.prototype.onRegister = function (name, email, password) {
        var body = { name: name, email: email, password: password };
        return this.http.post(PORT + '/users', body).map(function (response) {
            return response.json();
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err); });
    };
    AuthService.prototype.onLogin = function (email, password) {
        var body = { email: email, password: password };
        return this.http.post(PORT + '/users/login', body).map(function (response) {
            return response.json();
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err); });
    };
    AuthService.prototype.onLogOut = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'x-auth': localStorage.getItem('token') });
        return this.http.delete(PORT + '/users/logout', { headers: headers })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PORT = 'https://tasks-harout.herokuapp.com';
// const PORT = 'http://localhost:3000';
var TasksService = (function () {
    function TasksService(http) {
        this.http = http;
        this.tasks = [];
        this.updatedTasksSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
    }
    TasksService.prototype.addTask = function (title, description) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'x-auth': localStorage.getItem('token') });
        return this.http.post(PORT + '/todos', { title: title, description: description }, { headers: headers })
            .map(function (response) {
            //getting the tasks after adding one to theme 
            _this.getUserTasks();
            return response.json();
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(err); });
    };
    TasksService.prototype.getUserTasks = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'x-auth': localStorage.getItem('token') });
        this.http.get(PORT + '/todos', { headers: headers })
            .map(function (response) {
            return response.json();
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(err); })
            .subscribe(function (res) {
            _this.tasks = res.todos;
            _this.updatedTasksSubject.next(_this.tasks);
        }, function (err) {
        });
    };
    //update a task
    TasksService.prototype.updatTaskById = function (id, state) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'x-auth': localStorage.getItem('token') });
        return this.http.patch(PORT + '/todos/' + id, { state: state }, { headers: headers })
            .map(function (response) {
            var obj = response.json().todo;
            var index = _this.tasks.findIndex(function (task) { return task._id === id; });
            _this.tasks.splice(index, 1);
            _this.tasks.push(obj);
            _this.updatedTasksSubject.next(_this.tasks);
            return obj;
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(error); });
    };
    return TasksService;
}());
TasksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TasksService);

var _a;
//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map