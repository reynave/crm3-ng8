(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/access-data/access-data.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access-data/access-data.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/accessData' ]\">Access Data Level</a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  \">\r\n    <div class=\"row\">\r\n        <div class=\"col-3 py-2\">\r\n            <div class=\"module-name\">\r\n                <h4>Access Data Level</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container  bg-light my-4 border py-2 shadow-sm rounded\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-right mb-3\">\r\n\r\n            <span [hidden]=\"!isUpdate\">Loading...</span>\r\n\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=false\" [hidden]=\"!isReadonly\" class=\"btn btn-classic mx-1\"><i\r\n                    class=\"fas fa-edit\"></i> Editable </a>\r\n\r\n\r\n            <a href=\"javascript:;\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"far fa-save\"></i> Save\r\n            </a>\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=true\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i\r\n                    class=\"fas fa-check\"></i> Finish </a>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-hover table-striped border bg-white border-top border-bottom pointer\">\r\n                <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th class=\"text-center\" width=\"50\">No</th>\r\n                        <th>Name</th>\r\n                        <th class=\"text-center\">All Access</th>\r\n                        <th width=\"50\"></th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of items; let i = index\">\r\n                        <td class=\"text-center\">{{i+1}}</td>\r\n                        <td>\r\n                            <div [hidden]=\"!isReadonly\"> {{x.name}} </div>\r\n                            <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\"\r\n                                [hidden]=\"isReadonly\" [(ngModel)]=\"x.name\">\r\n                        </td>\r\n\r\n                        <td class=\"text-center\">\r\n                            <span [hidden]=\"!isReadonly\">\r\n                                <span [hidden]=\"!x.all_access\"><i class=\"fas fa-check\"></i> </span>\r\n                            </span>\r\n                            <input type=\"checkbox\" value=\"1\" (change)=\"update(x);\" [hidden]=\"isReadonly\"\r\n                                [(ngModel)]=\"x.all_access\">\r\n                        </td>\r\n\r\n                      \r\n                        <td>\r\n                            <a href=\"javascript:;\" (click)=\"fn_delete(x);\" [hidden]=\"isReadonly\"> <i\r\n                                    class=\"far fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"col-12 text-right\" [hidden]=\"isReadonly\">\r\n\r\n            <input type=\"text\" class=\"form-control form-control-sm w-25 inline\" [(ngModel)]=\"newName\"\r\n                placeholder=\"Group Name\">\r\n\r\n            <a href=\"javascript:;\" class=\"btn btn-classic  mx-1\" (click)=\"insert();\"><i class=\"fas fa-plus\"></i> Add\r\n                Access Data  </a>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/access-right/access-right-detail/access-right-detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access-right/access-right-detail/access-right-detail.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/accessRight' ]\">Access Right</a> /\r\n                <a [routerLink]=\"[ '/accessRight/',items.id ]\">\r\n                    {{items.name}}</a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white\">\r\n\r\n    <div class=\"row py-3\">\r\n        <div class=\"col-6 \">\r\n            <div class=\"module-name\">\r\n                <strong>ACCESS RULES</strong>\r\n             \r\n                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"items.name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-3\" (click)=\"sync()\">  <i class=\"fas fa-sync-alt\"></i>  Sync with new module </button>\r\n \r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"update()\"> <i class=\"fas fa-save\"></i> Save </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [routerLink]=\"[ '/accessRight' ]\" title=\"back\">\r\n                <i class=\"fas fa-times\"></i> </button>\r\n      \r\n        </div>\r\n    </div> \r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\" bg-light  border border-top-brown rounded p-1 my-2\">\r\n                <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n                    <thead class=\"thead-light\">\r\n                        <tr>\r\n                            <th class=\"text-center\" width=\"10\">No</th>\r\n                            <th scope=\"col\">Name</th>\r\n                            <th scope=\"col\" class=\"text-center\">Access</th>\r\n                            <th scope=\"col\" class=\"text-center\">Update</th>\r\n                            <th scope=\"col\" class=\"text-center\">Insert</th>\r\n                            <th scope=\"col\" class=\"text-center\">Delete</th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of items.user_access_rules; let i = index\">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{x.module.label}}</td>\r\n                            <td class=\"text-center\"> <input type=\"checkbox\" [(ngModel)]=\"x.module._access\"> </td>\r\n                            <td class=\"text-center\"> <input type=\"checkbox\" [(ngModel)]=\"x.module._update\"> </td>\r\n                            <td class=\"text-center\"> <input type=\"checkbox\" [(ngModel)]=\"x.module._insert\"> </td>\r\n                            <td class=\"text-center\"> <input type=\"checkbox\" [(ngModel)]=\"x.module._delete\"> </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/access-right/access-right.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access-right/access-right.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/accessRight' ]\">Access Right</a>  </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white\">\r\n\r\n    <div class=\"row py-3\">\r\n        <div class=\"col-6 \">\r\n            <div class=\"module-name\">\r\n                <h5>ACCESS RULES</h5> \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-6 text-right\"> \r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"open(newLead)\"> <i class=\"fas fa-plus\"></i>\r\n              New Rules </button>\r\n          </div>\r\n       \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\" bg-light  border border-top-brown rounded p-1 my-2\">\r\n                <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n                    \r\n                    <thead class=\"thead-light\">\r\n                        <tr>\r\n                            <th >No</th>\r\n                            <th scope=\"col\">Name Rules</th>\r\n                            <th scope=\"col\" width=\"40\" class=\"text-center\"></th> \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of items; let i = index\">\r\n                            <td width=\"50\">{{i+1}}</td>\r\n                            <td> <a [routerLink]=\"[ '/accessRight', x.id ]\">{{x.name}}</a> </td>  \r\n                            <td class=\"text-center\"> </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n \r\n\r\n\r\n<ng-template #newLead let-modal>\r\n    <div class=\"modal-header\">\r\n      <strong class=\"modal-title\" id=\"modal-basic-title\">New Lead</strong>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n  \r\n      <form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\r\n        <div class=\"row\">\r\n  \r\n          <div class=\"col-12 bg-light mb-2\">\r\n            <strong>New Access Rules</strong>\r\n          </div>\r\n  \r\n          <div class=\"col-12\">\r\n   \r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"name\" class=\"col-sm-4 col-form-label\"> Name of Access Rule</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.name\" name=\"name\" id=\"name\" #name=\"ngModel\" required>\r\n                <small [hidden]=\"name.valid || name.pristine\" class=\"text-danger\"> First name is\r\n                    required</small>\r\n              </div>\r\n            </div>\r\n    \r\n          </div>\r\n  \r\n        </div>\r\n   \r\n  \r\n      </form>\r\n  \r\n  \r\n  \r\n    </div>\r\n    <div class=\"modal-footer\">\r\n   \r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n      <button type=\"submit\" class=\"btn btn-outline-primary\" (click)=\"onSubmit();\"\r\n        [disabled]=\"!myForm.form.valid\">Save &\r\n        Next</button> \r\n    </div>\r\n  \r\n  </ng-template>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/master/account' ]\">Acccount</a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  \">\r\n    <div class=\"row\">\r\n        <div class=\"col-3 py-2\">\r\n            <div class=\"module-name\">\r\n                <h4>Account</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\r\n    <div class=\"container  bg-light my-4 border py-2 shadow-sm rounded\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-12\">\r\n                <table class=\"table\">\r\n                    <tbody>\r\n                       \r\n                        <tr>\r\n                            <td><label for=\"h0\">Company Name</label> </td>\r\n                            <td><input type=\"text\" class=\"form-control\" id=\"h0\" [(ngModel)]=\"model.company\"\r\n                                    name=\"company\"  #company=\"ngModel\" required> \r\n                            <small [hidden]=\"company.valid || company.pristine\" class=\"text-danger\"> Company name is\r\n                                required</small>\r\n                            </td>\r\n                        </tr>\r\n\r\n\r\n\r\n\r\n\r\n                        <tr>\r\n                            <td><label for=\"h2\">Address</label> </td>\r\n                            <td><textarea type=\"text\" class=\"form-control\" id=\"h2\" [(ngModel)]=\"model.address\"\r\n                                    name=\"address\"></textarea> </td>\r\n                        </tr>\r\n\r\n\r\n                        <tr>\r\n                            <td><label for=\"h3\">Key CRM</label> </td>\r\n                            <td><input type=\"text\" class=\"form-control\" id=\"h3\" [(ngModel)]=\"model.key\" name=\"key\"></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td><label for=\"h4\">Machine ID</label> </td>\r\n                            <td><input type=\"text\" class=\"form-control\" id=\"h4\" [(ngModel)]=\"model.uniqueMachineID\"\r\n                                    name=\"uniqueMachineID\"></td>\r\n                        </tr>\r\n\r\n\r\n                        <tr>\r\n                            <td><label for=\"h51\">Start Date</label> </td>\r\n                            <td><input type=\"date\" class=\"form-control w-50\" id=\"h51\" [(ngModel)]=\"model.start_date\"\r\n                                    name=\"start_date\"></td>\r\n                        </tr>\r\n\r\n\r\n                        <tr>\r\n                            <td><label for=\"h52\">Expired Date</label> </td>\r\n                            <td><input type=\"date\" class=\"form-control w-50\" id=\"h52\" [(ngModel)]=\"model.expired_date\"\r\n                                    name=\"expired_date\"></td>\r\n                        </tr>\r\n                    </tbody>\r\n\r\n                </table>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-12 text-right\">\r\n\r\n                <button type=\"submit\" class=\"btn btn-primary m-1\" [disabled]=\"!myForm.form.valid\">Submit</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activity/activity.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activity/activity.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/activity' ]\">Activities</a> </small>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid border shadow-sm bg-light  py-4\">\r\n\r\n   \r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <div class=\"p-2 border bg-white\">\r\n\r\n        \r\n          <div class=\"form-group \">\r\n            <label for=\"h1\">Select User</label>\r\n            <select class=\"form-control\" id=\"h1\" [(ngModel)]=\"filter.id_user\" >\r\n              <option value=\"0\">All User</option>\r\n              <option *ngFor=\"let x of user\" value=\"{{x.id}}\">{{x.name}}</option> \r\n            </select>\r\n          </div> \r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"h2\">Activity Type</label>\r\n            <select class=\"form-control\" id=\"h2\" [(ngModel)]=\"filter.id_activity_type\" >\r\n              <option value=\"0\">All</option>  \r\n              <option value=\"1\" >Task</option>  \r\n              <option value=\"200\">Visit</option>  \r\n              <option value=\"300\">Event</option>  \r\n              <option value=\"400\">Note</option> \r\n            </select>\r\n          </div> \r\n\r\n\r\n          <div class=\"form-group \">\r\n            <div class=\"custom-control custom-checkbox mr-sm-2\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"h7\"  [(ngModel)]=\"filter.comments\"  >\r\n              <label class=\"custom-control-label\" for=\"h7\">Filter With Comments</label>\r\n            </div>\r\n          </div> \r\n\r\n          <div class=\"form-group \">\r\n            <label for=\"h3\">Date From</label>\r\n            <select class=\"form-control\" id=\"h3\"  [(ngModel)]=\"filter.date_select\">\r\n              <option value=\"0\">All</option> \r\n             \r\n              <option value=\"1\">Today</option> \r\n              <option value=\"7\">1 Week Before</option> \r\n              <option value=\"31\">1 Month Before</option> \r\n              <option value=\"62\">2 Month Before</option> \r\n        \r\n            </select>\r\n          </div> \r\n \r\n\r\n          \r\n          <div class=\"form-group  \">\r\n            <label for=\"h9\">Related to </label>\r\n            <select class=\"form-control\" id=\"h9\"  [(ngModel)]=\"filter.id_related\"> \r\n              <option value=\"0\">All</option>  \r\n              <option value=\"200\">Lead</option>  \r\n              <option value=\"500\">Opportunity</option>  \r\n            </select>\r\n          </div> \r\n\r\n\r\n          <div class=\"py-1\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-primary btn-block\" (click)=\"fn_filter();\">Filter</button>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n\r\n      <div class=\"col-lg-6 col-md-9  \">\r\n        <div class=\"border rounded px-1  bg-white\">\r\n          \r\n          <app-widget-activity  #childcomp ></app-widget-activity>\r\n        </div>\r\n      \r\n      </div>\r\n     \r\n     \r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activity/widget-activity/widget-activity.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activity/widget-activity/widget-activity.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"activityTabs\" [hidden]=\"module == 'activity'\">\r\n\r\n  <div class=\"border p-2 my-2 bg-light shadow-sm\">\r\n    \r\n    <form (ngSubmit)=\"onInsert()\" #callForm=\"ngForm\">\r\n      <ngb-tabset (tabChange)=\"tabEvent($event)\">\r\n\r\n        <!-- CALL  -->\r\n        <ngb-tab title=\"Log a Call\" id=\"100\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"border border-top-0 px-3 bg-white pb-3\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-12 py-1\">\r\n                  <label class=\"py-1\"> <b>Subject </b> </label>\r\n                  <input type=\"text\" [(ngModel)]=\"model.subject\" name=\"subject\" class=\"form-control\" required\r\n                    (click)=\"showNewActivity=true;\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\" [hidden]=\"!showNewActivity\">\r\n                <div class=\"col-12 py-1\">\r\n                  <label class=\"py-1\"> <b> Notes</b> </label>\r\n                  <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"model.description\" name=\"description\"></textarea>\r\n                </div>\r\n\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"><b>Date and Time</b></label>\r\n                  <div class=\"row no-gutters\">\r\n                    <div class=\"col-4\">\r\n                      <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.due_date\" readonly\r\n                        placeholder=\"YYYY-MM-DD\" name=\"due_date\" ngbDatepicker #due_date=\"ngbDatepicker\"\r\n                        (click)=\"due_date.toggle()\">\r\n                    </div>\r\n                    <div class=\"col-1 text-center\">\r\n                      : \r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                      <input type=\"time\" class=\"form-control\" [(ngModel)]=\"model.start_time\" name=\"start_time\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"> <b> Name</b></label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.id_person\" required\r\n                    [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of items.person\"> {{x.name}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-6 py-1 d-none\">\r\n                  <label class=\"py-1\"><b> Assigned To</b></label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.id_user\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of user\"> {{x.name}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"col-12 py-3 text-right\">\r\n                  <button type=\"button\" class=\"btn btn-classic btn-sm px-5 \"\r\n                    (click)=\"showNewActivity=false\">Cancel</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm px-5 mx-1\"\r\n                    [disabled]=\"!callForm.form.valid\">Save</button>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <!-- TASK -->\r\n        <ngb-tab title=\"New Task\" id=\"1\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"border border-top-0 px-3 bg-white pb-3\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 py-1\">\r\n                  <label class=\"py-1\"> <b>Subject</b></label>\r\n                  <input type=\"text\" [(ngModel)]=\"model.subject\" name=\"subject\" class=\"form-control\" required\r\n                    (click)=\"showNewActivity=true;\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\" [hidden]=\"!showNewActivity\">\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\">  <b> Due Date</b></label>\r\n                  <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.due_date\" readonly\r\n                    placeholder=\"YYYY-MM-DD\" name=\"due_date\" ngbDatepicker #due_date=\"ngbDatepicker\"\r\n                    (click)=\"due_date.toggle()\">\r\n                </div>\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"><b> Assigned To</b></label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.id_user\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of user\"> {{x.name}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"><b> Name</b></label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.id_person\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of items.person\"> {{x.name}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"col-12 py-1\">\r\n                  <label><b>  Notes</b></label>\r\n                  <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"model.description\" name=\"description\"></textarea>\r\n                </div>\r\n\r\n                <div class=\"col-12 py-2 mb-3 text-right\">\r\n                  <button type=\"button\" class=\"btn btn-classic btn-sm px-5 \"\r\n                    (click)=\"showNewActivity=false\">Cancel</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm px-5 mx-1\"\r\n                    [disabled]=\"!callForm.form.valid\">Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <!-- VISIT -->\r\n        <ngb-tab title=\"Visit\" id=\"200\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"border border-top-0 px-3 bg-white pb-3\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 py-1\">\r\n                  <label class=\"py-1\"> <b> Subject</b></label>\r\n                  <input type=\"text\" [(ngModel)]=\"model.subject\" name=\"subject\" class=\"form-control\" required\r\n                    (click)=\"showNewActivity=true;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" [hidden]=\"!showNewActivity\">\r\n\r\n                <div class=\"col-12 py-1\">\r\n                  <label class=\"py-1\"> <b> Description</b></label>\r\n                  <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"model.description\" name=\"description\"></textarea>\r\n                </div>\r\n\r\n                <div class=\"col-3 py-1 mt-1\">\r\n                  <label class=\"py-1\" id=\"j1\"> <b> Budget Amount (IDR)</b></label>\r\n                </div>\r\n\r\n                <div class=\"col-9 py-1 mt-1\">\r\n                  <input type=\"text\" name=\"amount\" class=\"form-control text-right w-25\" [(ngModel)]=\"model.amount\"\r\n                    j1=\"h1\" currencyMask (click)=\"showNewActivity=true;\">\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"><b> Check In Date and Time</b></label>\r\n                  <div class=\"row no-gutters\">\r\n                    <div class=\"col-4\"> \r\n                      <input type=\"text\" class=\"form-control border\" readonly placeholder=\"YYYY-MM-DD\" name=\"start_date\"\r\n                        [(ngModel)]=\"model.start_date\" ngbDatepicker #start_date=\"ngbDatepicker\"\r\n                        (click)=\"start_date.toggle()\">\r\n                    </div>\r\n                    <div class=\"col-1 text-center\">\r\n                      :\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                      \r\n                      <input type=\"time\" class=\"form-control\" [(ngModel)]=\"model.start_time\" name=\"start_time\">\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"> <b> Check Out Date and TIme</b></label>\r\n                  <div class=\"row no-gutters\">\r\n                    <div class=\"col-4\">\r\n                      \r\n                      <input type=\"text\" class=\"form-control border\" readonly placeholder=\"YYYY-MM-DD\" name=\"end_date\"\r\n                        [(ngModel)]=\"model.end_date\" ngbDatepicker #end_date=\"ngbDatepicker\"\r\n                        (click)=\"end_date.toggle()\">\r\n                    </div>\r\n                    <div class=\"col-1 text-center\">\r\n                      :\r\n                    </div>\r\n                    <div class=\"col-3\"> \r\n                      <input type=\"time\" class=\"form-control\" [(ngModel)]=\"model.end_time\" name=\"end_time\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"> <b>Name </b></label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.id_person\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of items.person\"> {{x.name}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"> <b> Assigned To</b></label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.id_user\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of user\"> {{x.name}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-12 py-2 mb-3 text-right\">\r\n                  <button type=\"button\" class=\"btn btn-classic btn-sm px-5 \"\r\n                    (click)=\"showNewActivity=false\">Cancel</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm px-5 mx-1\"\r\n                    [disabled]=\"!callForm.form.valid\">Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <!-- EVENT -->\r\n        <ngb-tab title=\"New Event\" id=\"300\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"border border-top-0 px-3 bg-white pb-3\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 py-1\">\r\n                  <label class=\"py-1\"> <b>Subject</b></label>\r\n                  <input type=\"text\" [(ngModel)]=\"model.subject\" name=\"subject\" class=\"form-control\" required\r\n                    (click)=\"showNewActivity=true;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" [hidden]=\"!showNewActivity\">\r\n\r\n                <div class=\"col-12 py-1\">\r\n                  <label class=\"py-1\"> <b>Description</b></label>\r\n                  <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"model.description\" name=\"description\"></textarea>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-3 py-1 mt-1\">\r\n                  <label class=\"py-1\" id=\"j1\"> <b>Budget Amount (IDR)</b> </label>\r\n                </div>\r\n\r\n                <div class=\"col-9 py-1 mt-1\">\r\n                  <input type=\"text\" name=\"amount\" class=\"form-control text-right w-25\" [(ngModel)]=\"model.amount\"\r\n                    j1=\"h1\" currencyMask (click)=\"showNewActivity=true;\">\r\n                </div>\r\n\r\n\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"><b> Event Start Date and Time </b></label>\r\n                  <div class=\"row no-gutters\">\r\n                    <div class=\"col-4\">\r\n                  \r\n                      <input type=\"text\" class=\"form-control border\" readonly placeholder=\"YYYY-MM-DD\" name=\"start_date\"\r\n                        [(ngModel)]=\"model.start_date\" ngbDatepicker #start_date=\"ngbDatepicker\"\r\n                        (click)=\"start_date.toggle()\">\r\n                    </div>\r\n                    <div class=\"col-1 text-center\">\r\n                      :\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                      \r\n                      <input type=\"time\" class=\"form-control\" [(ngModel)]=\"model.start_time\" name=\"start_time\">\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"> <b>Event End Date and Time</b></label>\r\n                  <div class=\"row no-gutters\">\r\n                    <div class=\"col-4\"> \r\n                      <input type=\"text\" class=\"form-control border\" readonly placeholder=\"YYYY-MM-DD\" name=\"end_date\"\r\n                        [(ngModel)]=\"model.end_date\" ngbDatepicker #end_date=\"ngbDatepicker\"\r\n                        (click)=\"end_date.toggle()\">\r\n                    </div>\r\n                    <div class=\"col-1 text-center\">\r\n                      :\r\n                    </div>\r\n                    <div class=\"col-3\"> \r\n                      <input type=\"time\" class=\"form-control\" [(ngModel)]=\"model.end_time\" name=\"end_time\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"> <b>Name</b> </label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.id_person\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of items.person\"> {{x.name}}</option>\r\n                  </select>\r\n                </div>\r\n \r\n                <div class=\"col-6 py-1\">\r\n                  <label class=\"py-1\"><b> Assigned To</b></label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.id_user\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of user\"> {{x.name}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-12 py-2 mb-3 text-right\">\r\n                  <button type=\"button\" class=\"btn btn-classic btn-sm px-5 \"\r\n                    (click)=\"showNewActivity=false\">Cancel</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm px-5 mx-1\"\r\n                    [disabled]=\"!callForm.form.valid\">Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <!-- NOTE -->\r\n        <ngb-tab title=\"Note\" id=\"400\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"border border-top-0 px-3 bg-white pb-3\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 py-1\">\r\n                  <label class=\"py-1\"> <b>Subject</b></label>\r\n                  <input type=\"text\" [(ngModel)]=\"model.subject\" name=\"subject\" class=\"form-control\" required\r\n                    (click)=\"showNewActivity=true;\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" [hidden]=\"!showNewActivity\">\r\n                <div class=\"col-12 py-1\">\r\n                  <label>  <b> Notes</b></label>\r\n                  <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"model.description\" name=\"description\"></textarea>\r\n                </div>\r\n\r\n                <div class=\"col-12 py-2 mb-3 text-right\">\r\n                  <button type=\"button\" class=\"btn btn-classic btn-sm px-5 \"\r\n                    (click)=\"showNewActivity=false\">Cancel</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm px-5 mx-1\"\r\n                    [disabled]=\"!callForm.form.valid\">Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n      </ngb-tabset>\r\n    </form>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"my-4\">\r\n  <div class=\"text-center\" [hidden]=\"!loading\"><small> Loading...</small> </div>\r\n  <h5 class=\"inline-text\"><span class=\"text-warning\">Activities</span></h5>\r\n\r\n \r\n  \r\n  <div class=\"bg-light px-2 mb-2\"> <strong> Latest Activities</strong> </div>\r\n  <div class=\"activity-log act-{{x.activity_type.id}}\" *ngFor=\"let x of activityLatest; let i = index\">\r\n\r\n    <div class=\"icon\" [innerHTML]=\"x.activity_type.fas\"></div>\r\n    <div class=\"content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-7\">\r\n          <a href=\"javascript:;\" (click)=\"x.description ? showLatest(i) : false;\"> <b\r\n              class=\"text-primary\">{{x.subject}}</b> </a>\r\n          <a class=\"ml-2 text-gray py-0\" [hidden]=\"!x.description\" (click)=\"x.description ? showLatest(i) : false;\"><i\r\n              class=\"fas fa-caret-down\"></i></a>\r\n        </div>\r\n\r\n        <div class=\"col-12  col-md-5 text-right\">\r\n          <small> {{x.input_date | date:'mediumDate'}}, {{x.input_date | date:'shortTime'}} </small>\r\n \r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div>\r\n        \r\n        <small class=\"btn btn-sm btn-classic py-0 mr-2\"  [hidden]=\"!x.person.origin\">{{x.person.origin}}</small>\r\n        <small>Assigned To <span class=\"text-primary\"> {{x.user}}</span> for <span class=\"text-primary\">\r\n            {{x.person.name}} </span>  <span [hidden]=\"!x.person.company\"> ({{x.person.company}}) </span>   </small> \r\n\r\n          </div>\r\n\r\n\r\n      <div style=\"line-height: 90%;\">\r\n        <span [hidden]=\"id_user != x.id_user\">\r\n\r\n          <a href=\"javascript:;\" (click)=\"fn_closed_area(i);\"> <small>Closed {{x.activity_type.name}}</small> </a>\r\n          <small class=\"mx-1\"> &bull; </small>\r\n\r\n          <a href=\"javascript:;\" (click)=\"fn_remove(x);\"> <small class=\"text-danger\">Remove\r\n              {{x.activity_type.name}}</small> </a>\r\n          <small class=\"mx-1\"> &bull; </small>\r\n\r\n        </span>\r\n        <a href=\"javascript:;\" (click)=\"showLatest(i);\"> <small class=\"text-success\">Reply</small> </a>\r\n\r\n        <span [hidden]=\"x.activity_comment.length < 1\">\r\n          <small class=\"mx-1\"> &bull; </small>\r\n          <a href=\"javascript:;\" (click)=\"showLatest(i);\"> <small> <i class=\"far fa-comments\"></i>\r\n              {{x.activity_comment.length}} comments</small></a>\r\n        </span>\r\n      </div>\r\n\r\n      <div [hidden]=\"!x.closed_area\" class=\"text-right\">\r\n\r\n        <textarea class=\"form-control form-control-sm my-2 p-1\" rows=\"8\" [(ngModel)]=\"x.comment\"\r\n          placeholder=\"Closed this activity. Note your comment\"></textarea>\r\n        <button class=\"btn btn-sm btn-classic\" (click)=\"fn_closed(x)\">Closed</button>\r\n\r\n       \r\n      </div>\r\n\r\n\r\n      <div [hidden]=\"!x.show\">\r\n        <div class=\"p-2 mt-2 border rounded\">\r\n          <div class=\"text\" [innerHTML]=\"x.description\" [hidden]=\"!x.description\"\r\n            style=\" white-space: pre-line; font-size: 14px;\"></div>\r\n          <small [innerHTML]=\"x.log\"></small>\r\n        </div>\r\n\r\n        <div class=\" mt-2 ml-3\" *ngFor=\"let a of x.activity_comment\">\r\n          <div class=\"p-2 border rounded\">\r\n            <small [innerHTML]=\"a.comment\"></small>\r\n          </div>\r\n          <small> {{a.input_date | date:'mediumDate'}}, {{a.input_date | date:'shortTime'}} </small>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div [hidden]=\"!x.show\" class=\"mt-3\">\r\n        <div class=\"ml-3\">\r\n          <textarea class=\"form-control p-1\" rows=\"4\" [(ngModel)]=\"x.comments\"></textarea>\r\n        </div>\r\n        <div class=\"mt-1 text-right\">\r\n          <a href=\"javascript:;\" (click)=\"x.show = false\" class=\"px-3 py-0 btn btn-sm btn-classic mx-1\">Cancel</a> <a\r\n            href=\"javascript:;\" class=\"px-3 py-0 btn btn-sm btn-primary\"\r\n            (click)=\"fn_comments(x.comments,x.id,i,0); x.comments = ''\">Post</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div [hidden]=\"module == 'activity'\" class=\"bg-light px-2 mb-2\"> <strong> History Activities</strong> </div>\r\n  <div [hidden]=\"module == 'activity'\" class=\"activity-log act-{{x.activity_type.id}}\"\r\n    *ngFor=\"let x of activityHistory; let i = index\">\r\n    <div class=\"icon\" [innerHTML]=\"x.activity_type.fas\"></div>\r\n    <div class=\"content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-7\">\r\n          <a href=\"javascript:;\" (click)=\"showHistory(i)\"> <b\r\n              class=\"text-primary\">{{x.subject}}</b> </a>\r\n\r\n          <a class=\"ml-2 text-gray py-0\" [hidden]=\"!x.description && !x.comment\" (click)=\"showHistory(i)\"><i\r\n              class=\"fas fa-caret-down\"></i></a>\r\n        </div>\r\n       \r\n        <div class=\"col-12  col-md-5 text-right\">\r\n          <small> {{x.input_date | date:'mediumDate'}}, {{x.input_date | date:'shortTime'}} </small>\r\n \r\n        </div>\r\n      </div>\r\n      \r\n\r\n      <div>\r\n       \r\n        <small class=\"btn btn-sm btn-classic py-0 mr-2\" [hidden]=\"!x.person.origin\">{{x.person.origin}}</small>\r\n        <small>Assigned To <span class=\"text-primary\"> {{x.user}}</span> for <span class=\"text-primary\">\r\n            {{x.person.name}} </span>  <span [hidden]=\"!x.person.company\"> ({{x.person.company}}) </span> </small>\r\n          \r\n          </div>\r\n          \r\n\r\n      <div style=\"line-height: 90%;\">\r\n        <a href=\"javascript:;\" (click)=\"showHistory(i)\"> <small class=\"text-success\">Reply</small> </a>\r\n      </div>\r\n\r\n\r\n      <div [hidden]=\"x.activity_comment.length < 1\">\r\n        <a href=\"javascript:;\" (click)=\"x.description ? showHistory(i) : false;\"> <small> <i\r\n              class=\"far fa-comments\"></i>\r\n            {{x.activity_comment.length}} comments</small></a>\r\n      </div>\r\n\r\n\r\n\r\n      <div [hidden]=\"!x.show\">\r\n        <div class=\"p-2 mt-2 border rounded\">\r\n          <div class=\"text\" [innerHTML]=\"x.description\" [hidden]=\"!x.description\"\r\n            style=\" white-space: pre-line; font-size: 14px;\"></div>\r\n          \r\n\r\n            <fieldset class=\"border p-2 bg-light\" [hidden]=\"!x.comment\">\r\n              <legend  class=\"w-auto\"> <small>Closed Note </small></legend>\r\n              {{x.comment}} \r\n           </fieldset>\r\n\r\n          <small [innerHTML]=\"x.log\"></small>\r\n        </div>\r\n\r\n        <div class=\" mt-2 ml-3\" *ngFor=\"let a of x.activity_comment\">\r\n          <div class=\"p-2 border rounded\">\r\n            <small [innerHTML]=\"a.comment\"></small>\r\n          </div>\r\n          <small> {{a.input_date | date:'mediumDate'}}, {{a.input_date | date:'shortTime'}} </small>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div [hidden]=\"!x.show\" class=\"mt-3\">\r\n        <div class=\"ml-3\">\r\n          <textarea class=\"form-control p-1\" rows=\"4\" [(ngModel)]=\"x.comments\"></textarea>\r\n        </div>\r\n        <div class=\"mt-1 text-right\">\r\n          <a href=\"javascript:;\" (click)=\"x.show = false\" class=\"px-3 py-0 btn btn-sm btn-classic mx-1\">Cancel</a> <a\r\n            href=\"javascript:;\" class=\"px-3 py-0 btn btn-sm btn-primary\"\r\n            (click)=\"fn_comments(x.comments,x.id,i,1); x.comments = ''\">Post</a>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-detail/company-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-detail/company-detail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/company' ]\">Companies</a> / <a [routerLink]=\"[ '/company/',id ]\">\r\n          {{items.name}}</a> </small>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white\">\r\n\r\n  <!-- Menu & Information -->\r\n  <div class=\"row border-bottom \">\r\n    <!-- Header & button -->\r\n    <div class=\"col-3 bg-light py-2\">\r\n      <div class=\"module-name\">\r\n        <strong>Company</strong>\r\n        <b class=\"text-primary\">{{items.name}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-9 bg-light text-right py-2\">\r\n      <div [hidden]=\"!isReadOnly\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" \r\n          (click)=\"isReadOnly=false; t.select('tab-selectbyid2')\">\r\n          <i class=\"fas fa-edit\"></i> Edit </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"fn_delete();\" > <i\r\n            class=\"fas fa-trash-alt\"></i>\r\n          Delete </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [routerLink]=\"[ '/company' ]\" title=\"back\">\r\n          <i class=\"fas fa-times\"></i> </button>\r\n\r\n      </div>\r\n\r\n      <div [hidden]=\"isReadOnly\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"isReadOnly=true\" title=\"Done\">  Cancel </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Infromation -->\r\n    <div class=\"col-12 py-2\">\r\n      <table class=\"table-p0\">\r\n        <tr>\r\n          <td> <small> Company Class</small> </td>\r\n          <td> <small> Website</small> </td>\r\n          <td> <small> Email </small></td>\r\n          <td> <small> Phone</small> </td>\r\n          <td> <small> Fax </small> </td>\r\n          <td> <small> Industry </small> </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td> <b class=\"text-primary\"> {{items.company_class}}</b> </td>\r\n          <td> <a href=\"{{items.website}}\" target=\"_blank\"> <b class=\"text-primary\">{{items.website}} </b> </a> </td>\r\n          <td> <b class=\"text-primary\"> {{items.email}} </b> </td>\r\n          <td> <b class=\"text-primary\"> {{items.phone}} </b> </td>\r\n          <td> <b class=\"text-primary\"> {{items.fax}} </b> </td>\r\n          <td> <b class=\"text-primary\"> {{items.industry}} </b> </td>\r\n        </tr>\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"row mt-3\">\r\n    <!-- Left side-->\r\n    <div class=\"col-9 col-md-8\">\r\n      <div class=\"py-2\">\r\n\r\n        <ngb-tabset type=\"pills\" #t=\"ngbTabset\">\r\n\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>Activity</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <app-widget-activity></app-widget-activity>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n          <ngb-tab id=\"tab-selectbyid2\">\r\n            <ng-template ngbTabTitle>Detail</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <form (ngSubmit)=\"fn_update()\" #mainForm=\"ngForm\">\r\n                <div class=\"border-top py-2 my-2\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 bg-light my-2\">\r\n                      <strong>Information</strong>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <table class=\"table table-borderless\">\r\n                        <tbody>\r\n\r\n                          <tr>\r\n                            <td width=\"30%\"><label>Name</label></td>\r\n                            <td>\r\n                              <input type=\"text\" class=\"form-control form-modal\" id=\"name\" required\r\n                                [(ngModel)]=\"modealCompany.name\" name=\"name\" #name=\"ngModel\" [readonly]=\"isReadOnly\">\r\n                              <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                                Company name is required\r\n                              </div>\r\n\r\n                            </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Customer Code</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"code_number\"\r\n                                [(ngModel)]=\"modealCompany.code_number\" name=\"code_number\" [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Email</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"email\"\r\n                                [(ngModel)]=\"modealCompany.email\" name=\"email\" [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Phone</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"phone\"\r\n                                [(ngModel)]=\"modealCompany.phone\" name=\"phone\" [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Fax</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"fax\"\r\n                                [(ngModel)]=\"modealCompany.fax\" name=\"fax\" [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n                      <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <td><label>Website</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"website\"\r\n                                [(ngModel)]=\"modealCompany.website\" name=\"website\" [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td width=\"30%\"><label>Industry</label></td>\r\n                            <td> <select class=\"form-control form-modal\" id=\"id_industry\"\r\n                                [(ngModel)]=\"modealCompany.id_industry\" name=\"id_industry\" [disabled]=\"isReadOnly\">\r\n                                <option *ngFor=\"let x of industry\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Company Class </label></td>\r\n                            <td>\r\n                              <select class=\"form-control form-modal\" id=\"id_company_class\"\r\n                                [(ngModel)]=\"modealCompany.id_company_class\" name=\"id_company_class\"\r\n                                [disabled]=\"isReadOnly\">\r\n                                <option *ngFor=\"let x of company_class\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n\r\n\r\n\r\n                          \r\n\r\n\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div class=\"col-12 bg-light my-2\">\r\n                      <strong>Address</strong>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-6\">\r\n\r\n                      <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <td width=\"30%\"><label>Address</label></td>\r\n                            <td> <textarea class=\"form-control form-modal\" [(ngModel)]=\"modealCompany.bill_street1\"\r\n                                placeholder=\"Street\" name=\"bill_street1\" id=\"h21a\"\r\n                                [readonly]=\"isReadOnly\"> </textarea> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>City</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                [(ngModel)]=\"modealCompany.bill_city\" placeholder=\"City\" name=\"bill_city\" id=\"h21b\"\r\n                                [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>State</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                [(ngModel)]=\"modealCompany.bill_state\" placeholder=\"State\" name=\"bill_state\" id=\"h21b\"\r\n                                [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Postal Code</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                [(ngModel)]=\"modealCompany.bill_code\" placeholder=\"State\" name=\"bill_code\" id=\"h21b\"\r\n                                [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Country</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                [(ngModel)]=\"modealCompany.bill_country\" placeholder=\"State\" name=\"bill_country\"\r\n                                id=\"h21b\" [readonly]=\"isReadOnly\"> </td>\r\n                          </tr> \r\n\r\n                        </tbody>\r\n                      </table>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-6\">\r\n \r\n                      <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <td width=\"30%\"><label>Address</label></td>\r\n                            <td> <textarea class=\"form-control form-modal\" [(ngModel)]=\"modealCompany.ship_street1\"\r\n                                placeholder=\"Street\" name=\"ship_street1\" id=\"h21a\"\r\n                                [readonly]=\"isReadOnly\"> </textarea> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>City</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                [(ngModel)]=\"modealCompany.ship_city\" placeholder=\"City\" name=\"ship_city\" id=\"h21b\"\r\n                                [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>State</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                [(ngModel)]=\"modealCompany.ship_state\" placeholder=\"State\" name=\"ship_state\" id=\"h21b\"\r\n                                [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Postal Code</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                [(ngModel)]=\"modealCompany.ship_code\" placeholder=\"State\" name=\"ship_code\" id=\"h21b\"\r\n                                [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td><label>Country</label></td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                [(ngModel)]=\"modealCompany.ship_country\" placeholder=\"State\" name=\"ship_country\"\r\n                                id=\"h21b\" [readonly]=\"isReadOnly\"> </td>\r\n                          </tr> \r\n\r\n                        </tbody>\r\n                      </table>\r\n\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"footer-menu bg-white shadow border-top\" [hidden]=\"isReadOnly\">\r\n                  <div class=\"container\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 text-center p-1\">\r\n                        <a class=\"btn btn-outline-secondary m-1\" (click)=\"isReadOnly=true\">Cancel</a>\r\n                        <button type=\"submit\" class=\"btn btn-primary m-1\"  (click)=\"isReadOnly=true\"\r\n                          [disabled]=\"!mainForm.form.valid\">Save</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </form>\r\n            </ng-template>\r\n          </ngb-tab>\r\n       \r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>Contacts</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"border-top py-2 my-2\">\r\n\r\n                <!-- Contact Roles -->\r\n                <div class=\"row py-2\">\r\n                  <div class=\"col-12 \">\r\n                    <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\"><strong>Contacts ({{myContact.length}}) </strong></div>\r\n                        <div class=\"col-6 text-right\"> <button class=\"btn btn-classic btn-sm\"\r\n                            (click)=\"open(contact);\"><i class=\"fas fa-plus\"></i>\r\n                            New</button> </div>\r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6 mb-2\" *ngFor=\"let x of myContact\">\r\n\r\n                          <table class=\"table-items\">\r\n                            <thead>\r\n                              <tr>\r\n                                <th> <a href=\"javascript:;\" [routerLink]=\"[ '/contact/',x.id ]\"> {{x.name}} </a></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              \r\n                              <tr>\r\n                                <td>{{x.position}}  <span [hidden]=\"!x.department\">,</span> {{x.department}}</td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n\r\n                          <hr class=\"p-0 m-0 mt-2\">\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>Related</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"border bg-light p-1 my-2 rounded-sm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-3\">\r\n                    <strong>Attachment</strong>\r\n                  </div>\r\n                  <div class=\"col-7 text-right\">\r\n\r\n                    <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n\r\n                  </div>\r\n                  <div class=\"col-1\">\r\n                    <button type=\"button\" class=\"btn btn-classic btn-sm\"\r\n                      (click)=\"onUpload('company');\">Upload</button>\r\n                  </div>\r\n\r\n                  <div class=\"col-12\">\r\n                    <table class=\"table table-list table-bordered table-striped\">\r\n                      <thead class=\"thead-light border-top-brown\">\r\n                        <tr>\r\n                          <th>Files</th>\r\n                          <th width=\"100\">Size</th>\r\n                          <th width=\"50\"></th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let x of attachment\">\r\n                          <td> <a href=\"{{x.url}}\" target=\"_blank\"> {{x.file_name}}</a> </td>\r\n                          <td> {{x.size }} </td>\r\n                          <td>\r\n                            <div [hidden]=\"isReadOnly\">\r\n                              <a href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i\r\n                                  class=\"fas fa-trash-alt\"></i></a>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n\r\n\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>Price List</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"border-top py-2 my-2\">\r\n\r\n                <!-- Contact Roles -->\r\n                <div class=\"row py-2\">\r\n                  <div class=\"col-12 \">\r\n                     \r\n                    <div class=\"scroll-x max-height border py-1 px-2 border-top-brown rounded bg-light\"> \r\n                      <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n                        <thead class=\"thead-light\">\r\n                          <tr>\r\n                            <th width=\"50\">No</th>  \r\n                            <th scope=\"col\">SKU</th>\r\n                            <th scope=\"col\">Name</th> \r\n                            <th scope=\"col\">Product Type</th> \r\n                            <th class=\"text-right\" scope=\"col\">Price</th>   \r\n                \r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let x of priceList;let i = index;\">\r\n                            <td> {{i+1}} </td> \r\n                            <td> {{x.sku}} </td>\r\n                            <td>  {{x.name}} </td>\r\n                            <td>  {{x.product_type}}  </td>\r\n                            <td class=\"text-right\">  {{x.currency}} {{x.price | number}} <span [hidden]=\"!x.customer_price\">*</span></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                \r\n                \r\n                \r\n                    </div>\r\n\r\n\r\n\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n\r\n\r\n\r\n        </ngb-tabset>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- right side-->\r\n    <div class=\"col-3 col-md-4 border-left\">\r\n\r\n\r\n      <!-- Product -->\r\n      <div class=\"row py-2\">\r\n        <div class=\"col-12 mb-3\">\r\n          <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\"><strong>Opportunities ({{myOpportunity.length}}) </strong></div>\r\n              <div class=\"col-6 text-right\"> <button class=\"btn btn-classic btn-sm\" (click)=\"open(opportunity);\"><i\r\n                    class=\"fas fa-plus\"></i> New</button> </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-12 mb-2\" *ngFor=\"let x of myOpportunity; let i = index\">\r\n\r\n                <hr [hidden]=\" i < 1\" class=\"p-0 m-0 mb-1\">\r\n                <table class=\"table-items\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th colspan=\"2\"> <a href=\"javascript:;\" [routerLink]=\"[ '/opportunity/',x.id ]\">{{x.name}}</a>\r\n                      </th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td colspan=\"2\">By {{x.user}} </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Stage : <b>{{x.stage}} </b> </td>\r\n                      <td class=\"text-right\"> <small>Created Date : {{x.input_date | date}}</small> </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12 mb-3\">\r\n          <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\"><strong>Deals ({{deal.length}}) </strong></div>\r\n           \r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-12 mb-2\" *ngFor=\"let x of deal; let i = index\">\r\n\r\n                <hr [hidden]=\" i < 1\" class=\"p-0 m-0 mb-1\">\r\n                <table class=\"table-items\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th colspan=\"2\"> <a href=\"javascript:;\" [routerLink]=\"[ '/opportunity/',x.id ]\">{{x.name}}</a>\r\n                      </th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td colspan=\"2\">By {{x.user}} </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Stage : <b>{{x.stage}} </b> </td>\r\n                      <td class=\"text-right\"> <small>Created Date : {{x.input_date | date}}</small> </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12 mb-3\">\r\n          <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\"><strong>Archives ({{archived.length}}) </strong></div>\r\n     \r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-12 mb-2\" *ngFor=\"let x of archived; let i = index\">\r\n\r\n                <hr [hidden]=\" i < 1\" class=\"p-0 m-0 mb-1\">\r\n                <table class=\"table-items\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th colspan=\"2\"> <a href=\"javascript:;\" [routerLink]=\"[ '/opportunity/',x.id ]\">{{x.name}}</a>\r\n                      </th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td colspan=\"2\">By {{x.user}} </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Stage : <b>{{x.stage}} </b> </td>\r\n                      <td class=\"text-right\"> <small>Created Date : {{x.input_date | date}}</small> </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n  <div [hidden]=\"isReadOnly\"><br><br></div>\r\n\r\n\r\n\r\n\r\n  <ng-template #contact let-modal>\r\n    <app-contact-new (uploaded)=\"requestEmit($event)\"></app-contact-new>\r\n  </ng-template>\r\n\r\n\r\n  <ng-template #branch let-modal>\r\n    <div class=\"modal-header\">\r\n      <strong class=\"modal-title\" id=\"modal-basic-title\">New Branch</strong>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body bg-light\">\r\n\r\n      <form (ngSubmit)=\"onSubmitBranch()\" #myFormBranch=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h41\" class=\"col-sm-4 col-form-label\"> Branch Name</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" id=\"h41\" required [(ngModel)]=\"modelBranch.branchName\"\r\n                  name=\"branchName\" #branchName=\"ngModel\">\r\n\r\n                <small [hidden]=\"branchName.valid || branchName.pristine\" class=\"text-danger\"> Branch name is\r\n                  required</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h434\" class=\"col-sm-4 col-form-label\">Branch Code</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" id=\"h434\" [(ngModel)]=\"modelBranch.code\" name=\"code\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h42\" class=\"col-sm-4 col-form-label\">Phone</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" id=\"h42\" [(ngModel)]=\"modelBranch.phone\" name=\"phone\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h43\" class=\"col-sm-4 col-form-label\">email</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" id=\"h43\" [(ngModel)]=\"modelBranch.email\" name=\"email\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h45\" class=\"col-sm-4 col-form-label\">Street</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" id=\"h45\" [(ngModel)]=\"modelBranch.address_street\"\r\n                  name=\"address_street\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h46\" class=\"col-sm-4 col-form-label\">City</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" id=\"h46\" [(ngModel)]=\"modelBranch.address_city\"\r\n                  name=\"address_city\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h47\" class=\"col-sm-4 col-form-label\">State</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" id=\"h47\" [(ngModel)]=\"modelBranch.address_statestate\"\r\n                  name=\"address_state\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h48\" class=\"col-sm-4 col-form-label\">Postal Code</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" id=\"h48\" [(ngModel)]=\"modelBranch.address_code\"\r\n                  name=\"address_code\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </form>\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Cancel</button>\r\n      <button type=\"submit\" class=\"btn btn-primary m-1\" (click)=\"onSubmitBranch();modal.dismiss('Cross click')\"\r\n        [disabled]=\"!myFormBranch.form.valid\">Save</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n  <ng-template #opportunity let-modal>\r\n    <app-opportunity-new (uploaded)=\"requestEmit($event)\"></app-opportunity-new>\r\n  </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/company' ]\">Companies</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n  <div class=\"container-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 \">\r\n        <div class=\"module-name\">\r\n          <h5>COMPANIES</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 text-right\">\r\n        <span [hidden]=\"!loadingSelected\">Loading Attribute...</span>\r\n        <button type=\"button\" class=\"btn btn-classic  btn-sm\" (click)=\"open(newCompany)\"><i class=\"fas fa-plus\"></i>\r\n          New Company</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n  \r\n    <table id=\"dtable\" class=\"table table-hover border bg-white border-top border-bottom pointer\" style=\"width:100%\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>ID</th>\r\n          <th >Companies</th>\r\n          <th>website</th> \r\n          <th>Customer Code</th> \r\n          <th class=\"select-filter\">Industry</th> \r\n          <th class=\"select-filter\">Customer Class</th>  \r\n         \r\n        </tr>\r\n      </thead>\r\n\r\n      <tfoot>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th> \r\n          <th></th> \r\n          <th></th> \r\n          <th></th>  \r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n  \r\n\r\n<ng-template #newCompany let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">New Company</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-light\">\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"mb-3\">\r\n            <strong> Information</strong>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h2\" class=\"col-sm-4 col-form-label\"> Name</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\"\r\n                id=\"h1\" required>\r\n              <small [hidden]=\"name.valid || name.pristine\" class=\"text-danger\"> Company name is\r\n                required</small>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h3\" class=\"col-sm-4 col-form-label\">Email</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"email\" class=\"form-control border\" [(ngModel)]=\"model.email\" name=\"email\" id=\"h3\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h4\" class=\"col-sm-4 col-form-label\">Phone</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.phone\" name=\"phone\" id=\"h4\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h4\" class=\"col-sm-4 col-form-label\">Fax</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.fax\" name=\"fax\" id=\"h4\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h23s\" class=\"col-sm-4 col-form-label\"> Website </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.website\" name=\"website\" id=\"h23s\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h24x\" class=\"col-sm-4 col-form-label\">Industry</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\" id=\"h24x\" [(ngModel)]=\"model.id_industry\" name=\"id_industry\"> \r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.industry\">{{x.name}}</option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h24y\" class=\"col-sm-4 col-form-label\">Company Class</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\" id=\"h24y\" [(ngModel)]=\"model.id_company_class\"\r\n                name=\"id_company_class\"> \r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.company_class\">{{x.name}}</option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h24z\" class=\"col-sm-4 col-form-label\">Company Owner</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\" id=\"h24z\" [(ngModel)]=\"model.id_user\" name=\"id_user\">\r\n            \r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.user\">{{x.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <hr>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"mb-3\">\r\n            <strong> Address Bill </strong>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h11\" class=\"col-sm-4 col-form-label\">Bill to Street</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.bill_street\" name=\"bill_street\"\r\n                maxlength=\"250\" id=\"h11\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h12\" class=\"col-sm-4 col-form-label\">Bill to City</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.bill_city\" name=\"bill_city\"\r\n                maxlength=\"250\" id=\"h12\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h13\" class=\"col-sm-4 col-form-label\">Bill to State</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.bill_state\" name=\"bill_state\"\r\n                maxlength=\"250\" id=\"h13\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h14\" class=\"col-sm-4 col-form-label\">Bill to Postal Code</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.bill_code\" name=\"bill_code\"\r\n                maxlength=\"250\" id=\"h14\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h14\" class=\"col-sm-4 col-form-label\">Bill to Country</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.bill_country\" name=\"bill_country\"\r\n                maxlength=\"250\" id=\"h14\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"mb-3\">\r\n            <strong class=\"mr-2\"> Address Ship </strong> \r\n            <a href=\"javascript:;\" (click)=\"copyAddress();\"><small>Copy from Address Bill</small></a>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h11a1\" class=\"col-sm-4 col-form-label\">Ship to Street </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.ship_street\" name=\"ship_street\"\r\n                maxlength=\"250\" id=\"h11a1\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h12a2\" class=\"col-sm-4 col-form-label\">Ship to City</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.ship_city\" name=\"ship_city\"\r\n                maxlength=\"250\" id=\"h12a2\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h13a3\" class=\"col-sm-4 col-form-label\">Ship to State</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.ship_state\" name=\"ship_state\"\r\n                maxlength=\"250\" id=\"h13a3\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h14a4\" class=\"col-sm-4 col-form-label\">Ship to Postal Code</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.ship_code\" name=\"ship_code\"\r\n                maxlength=\"250\" id=\"h14a4\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h14a5\" class=\"col-sm-4 col-form-label\">Ship to Country</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.ship_country\" name=\"ship_country\"\r\n                maxlength=\"250\" id=\"h14a5\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </form>\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <span [hidden]=\"!submit\">Saving, Please wait...</span>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.dismiss('Cross click')\">Cancel</button> \r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit();\" [disabled]=\"!myForm.form.valid\">Save &\r\n      Go To Detail</button>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n<ng-template #markUpdate let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Update Status\r\n\r\n\r\n    </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white\">\r\n    <div [hidden]=\"!itemsSelected.length\">\r\n\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-3\">\r\n          <div class=\"text-danger\">\r\n            Delete selected lead ?\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"fn_delete();\">Yes</button>\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <table class=\"table border table-hover  table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>ID</th>\r\n            <th>Company</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let x of itemsSelected; let i = index\">\r\n            <td>{{ i + 1}}</td>\r\n            <td>{{x.id}}</td>\r\n            <td>{{x.name}}</td>\r\n\r\n            <th> <a href=\"javascript:;\" (click)=\"fn_removeItemSelected(x)\"><i class=\"fas fa-times\"></i></a> </th>\r\n          </tr>\r\n        </tbody>\r\n\r\n\r\n      </table>\r\n    </div>\r\n    <div [hidden]=\"itemsSelected.length\">\r\n      <div class=\"text-center\">\r\n        Empty data.\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-detail/contact-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-detail/contact-detail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/contact' ]\">Contacts</a> / <a [routerLink]=\"[ '/contact/',id ]\">\r\n          {{items.name}}</a> </small>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white\">\r\n\r\n\r\n  <!-- Menu & Information -->\r\n  <div class=\"row border-bottom \">\r\n    <!-- Header & button -->\r\n    <div class=\"col-6 bg-light py-2\">\r\n      <div class=\"module-name\">\r\n        <strong>Contact</strong>\r\n        <b class=\"text-primary\">{{items.name}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-6 bg-light text-right py-2\">\r\n      <div [hidden]=\"!isReadOnly\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\"\r\n          (click)=\"isReadOnly=false; t.select('tab-selectbyid2')\"> <i class=\"fas fa-edit\"></i>\r\n          Edit </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"fn_delete();\"> <i\r\n            class=\"fas fa-trash-alt\"></i>\r\n          Delete </button>\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [routerLink]=\"[ '/contact' ]\" title=\"back\">\r\n          <i class=\"fas fa-times\"></i> </button>\r\n\r\n      </div>\r\n\r\n      <div [hidden]=\"isReadOnly\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"isReadOnly=true\" title=\"Done\"> Cancel </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Infromation -->\r\n    <div class=\"col-12 py-2\">\r\n      <table class=\"table-p0\">\r\n        <tr>\r\n          <td> <small> Company</small> </td>\r\n          <td> <small> Position </small></td>\r\n          <td> <small> Mobile</small> </td>\r\n          <td> <small> Email </small> </td>\r\n          <td> <small> Contact Owner </small> </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td> <b class=\"text-primary\"> <a [routerLink]=\"[ '/company/', items.id_company ]\">{{items.company}}</a>  </b> </td>\r\n          <td> <b class=\"text-primary\"> {{items.position}} </b> </td>\r\n          <td> <b class=\"text-primary\"> {{items.mobile}} </b> </td>\r\n          <td> <b class=\"text-primary\"> {{items.email}} </b> </td>\r\n          <td> <b class=\"text-primary\"> {{items.user}} </b> </td>\r\n        </tr>\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row mt-3\">\r\n    <!-- Left side-->\r\n    <div class=\"col-9 col-md-8\">\r\n\r\n      <div class=\"row py-2\">\r\n\r\n        <div class=\"col-12\">\r\n          <ngb-tabset type=\"pills\" #t=\"ngbTabset\">\r\n\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>Activity</ng-template>\r\n              <ng-template ngbTabContent>\r\n                <app-widget-activity></app-widget-activity>\r\n              </ng-template>\r\n            </ngb-tab>\r\n\r\n            <ngb-tab id=\"tab-selectbyid2\">\r\n              <ng-template ngbTabTitle>Detail</ng-template>\r\n              <ng-template ngbTabContent>\r\n                <form (ngSubmit)=\"fn_update()\" #mainForm=\"ngForm\">\r\n                  <div class=\"border-top py-2 my-2\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong>Contact</strong>\r\n                      </div>\r\n\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tbody>\r\n\r\n                            <tr>\r\n                              <td width=\"30%\"><label>First Name</label></td>\r\n                              <td>\r\n                                <div class=\"row no-gutters\">\r\n                                  <div class=\"col-3\">\r\n                                    <select class=\"form-control form-modal\" id=\"h14\" [(ngModel)]=\"model.id_title\"\r\n                                      [disabled]=\"isReadOnly\" name=\"id_title\">\r\n                                      <option [ngValue]=\"x.id\" *ngFor=\"let x of title\">{{x.name}}</option>\r\n                                    </select>\r\n                                  </div>\r\n                                  <div class=\"col-9 \">\r\n                                    <input type=\"text\" class=\"form-control form-modal ml-1\" id=\"first_name\" required\r\n                                      [(ngModel)]=\"model.first_name\" name=\"first_name\" #first_name=\"ngModel\"\r\n                                      [readonly]=\"isReadOnly\">\r\n                                    <div [hidden]=\"first_name.valid || first_name.pristine\" class=\"alert alert-danger\">\r\n                                      First name is required\r\n                                    </div>\r\n\r\n                                  </div>\r\n                                </div>\r\n                              </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Last Name</label></td>\r\n                              <td>\r\n                                <input type=\"text\" class=\"form-control form-modal\" id=\"last_name\"\r\n                                  [(ngModel)]=\"model.last_name\" name=\"last_name\" #last_name=\"ngModel\"\r\n                                  [readonly]=\"isReadOnly\">\r\n                              </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Email</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"email\"\r\n                                  [(ngModel)]=\"model.email\" name=\"email\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Mobile</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"mobile\"\r\n                                  [(ngModel)]=\"model.mobile\" name=\"mobile\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n\r\n\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"col-6\">\r\n\r\n                        <table class=\"table table-borderless\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td><label>Company</label></td>\r\n                              <td> <select class=\"form-control form-modal\" id=\"id_company\"\r\n                                  [(ngModel)]=\"model.id_company\" name=\"id_company\" [disabled]=\"isReadOnly\">\r\n                                  <option *ngFor=\"let x of company\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n\r\n\r\n                            <tr>\r\n                              <td><label>Position</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"position\"\r\n                                  [(ngModel)]=\"model.position\" name=\"position\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Department</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"department\"\r\n                                  [(ngModel)]=\"model.department\" name=\"department\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td width=\"30%\"><label>Source</label></td>\r\n                              <td>\r\n                                <select class=\"form-control form-modal\" id=\"lead_source\"\r\n                                  [(ngModel)]=\"model.id_lead_source\" name=\"id_lead_source\" [disabled]=\"isReadOnly\" required>\r\n                                  <option *ngFor=\"let x of lead_source\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                                </select>\r\n\r\n                              </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Account Manager </label></td>\r\n                              <td>\r\n                                <select class=\"form-control form-modal\" id=\"id_user\" [(ngModel)]=\"model.id_user\"\r\n                                  name=\"id_user\" [disabled]=\"isReadOnly\">\r\n                                  <option *ngFor=\"let x of user\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"footer-menu bg-white shadow border-top\" [hidden]=\"isReadOnly\">\r\n                    <div class=\"container\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 text-center p-1\">\r\n                          <a class=\"btn btn-outline-secondary m-1\" (click)=\"isReadOnly=true\"> Cancel </a>\r\n                          <button type=\"submit\" class=\"btn btn-primary m-1\" (click)=\"isReadOnly=true\"\r\n                            [disabled]=\"!mainForm.form.valid\">Save</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </form>\r\n              </ng-template>\r\n            </ngb-tab>\r\n \r\n            \r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>Related</ng-template>\r\n              <ng-template ngbTabContent>\r\n                <div class=\"border bg-light p-1 my-2 rounded-sm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                      <strong>Attachment</strong>\r\n                    </div>\r\n                    <div class=\"col-7 text-right\">\r\n\r\n                      <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n\r\n                    </div>\r\n                    <div class=\"col-1\">\r\n                      <button type=\"button\" class=\"btn btn-classic btn-sm\"\r\n                        (click)=\"onUpload('contact');\">Upload</button>\r\n                    </div>\r\n\r\n                    <div class=\"col-12\">\r\n                      <table class=\"table table-list table-bordered table-striped\">\r\n                        <thead class=\"thead-light border-top-brown\">\r\n                          <tr>\r\n                            <th>Files</th>\r\n                            <th width=\"100\">Size</th>\r\n                            <th width=\"50\"></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let x of attachment\">\r\n                            <td> <a href=\"{{x.url}}\" target=\"_blank\"> {{x.file_name}}</a> </td>\r\n                            <td> {{x.size }} </td>\r\n                            <td>\r\n                              <div [hidden]=\"isReadOnly\">\r\n                                <a href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i\r\n                                    class=\"fas fa-trash-alt\"></i></a>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n\r\n\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n\r\n\r\n          </ngb-tabset>\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- right side-->\r\n    <div class=\"col-3 col-md-4 border-left\">\r\n\r\n     \r\n      <div class=\"row py-2\">\r\n        \r\n        <div class=\"col-12 mb-3\">\r\n          <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\"><strong>Opportunities ({{dataOpportunity.length}}) </strong></div>\r\n              <div class=\"col-6 text-right\"> <button class=\"btn btn-classic btn-sm\" (click)=\"open(opportunity);\"><i\r\n                    class=\"fas fa-plus\"></i> New</button> </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-12 mb-2\" *ngFor=\"let x of dataOpportunity; let i = index\">\r\n\r\n                <hr [hidden]=\" i < 1\" class=\"p-0 m-0 mb-1\">\r\n                <table class=\"table-items\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th colspan=\"2\"> <a href=\"javascript:;\" [routerLink]=\"[ '/opportunity/',x.id ]\">{{x.name}}</a>\r\n                      </th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td colspan=\"2\">By {{x.user}} </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Stage : <b>{{x.stage}} </b> </td>\r\n                      <td class=\"text-right\"> <small>Created Date : {{x.input_date | date}}</small> </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<ng-template #opportunity let-modal>\r\n\r\n  <app-opportunity-new (uploaded)=\"requestEmit($event)\"></app-opportunity-new>\r\n\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-new/contact-new.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-new/contact-new.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\r\n    <div class=\"modal-header\">\r\n        <strong class=\"modal-title\" id=\"modal-basic-title\">New Contact</strong>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body bg-light\">\r\n \r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-6\">\r\n\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"h1\" class=\"col-4 col-form-label\"> First Name </label>\r\n                    <div class=\"col-2\">\r\n                        <select class=\"form-control border\" id=\"h14\" [(ngModel)]=\"modelContact.id_title\"\r\n                            name=\"id_title\"> \r\n                            <option [ngValue]=\"x.id\" *ngFor=\"let x of title\">{{x.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <input type=\"text\" class=\"form-control border\" id=\"h1\" required\r\n                            [(ngModel)]=\"modelContact.first_name\" name=\"first_name\" #first_name=\"ngModel\">\r\n\r\n                        <small [hidden]=\"first_name.valid || first_name.pristine\" class=\"text-danger\"> First name is\r\n                            required</small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"h2\" class=\"col-sm-4 col-form-label\"> Last Name</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control border\" id=\"h2\" [(ngModel)]=\"modelContact.last_name\"\r\n                            name=\"last_name\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"h3\" class=\"col-sm-4 col-form-label\">Email</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"email\" class=\"form-control border\" id=\"h3\" [(ngModel)]=\"modelContact.email\"\r\n                            name=\"email\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"h110\" class=\"col-sm-4 col-form-label\">Mobile</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control border\" id=\"h110\" [(ngModel)]=\"modelContact.mobile\"\r\n                            name=\"mobile\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"h4\" class=\"col-sm-4 col-form-label\">Phone</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control border\" id=\"h4\" [(ngModel)]=\"modelContact.phone\"\r\n                            name=\"phone\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"hb2\" class=\"col-sm-4 col-form-label\">Position</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control border\" id=\"hb2\" [(ngModel)]=\"modelContact.position\"\r\n                            name=\"position\">\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"ha1\" class=\"col-sm-4 col-form-label\">Department</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control border\" id=\"ha1\" [(ngModel)]=\"modelContact.department\"\r\n                            name=\"department\">\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"h4\" class=\"col-sm-4 col-form-label\">Lead source </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <select class=\"form-control border\"    #id_lead_source=\"ngModel\" id=\"h14\" [(ngModel)]=\"modelContact.id_lead_source\"  name=\"id_lead_source\" required  > \r\n                            <option [ngValue]=\"x.id\" *ngFor=\"let x of lead_source\">{{x.name}}</option>\r\n                        </select>\r\n\r\n                        <small [hidden]=\"id_lead_source.valid || id_lead_source.pristine\" class=\"text-danger\"> Lead Source is\r\n                            required</small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row no-gutters\">\r\n                    <label for=\"h4\" class=\"col-sm-4 col-form-label\"> Own by </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <select class=\"form-control border\" [(ngModel)]=\"modelContact.id_user\" name=\"id_user\"\r\n                            #id_user=\"ngModel\" required>\r\n\r\n                            <option [ngValue]=\"x.id\" *ngFor=\"let x of user\">{{x.name}}</option>\r\n                        </select>\r\n\r\n                        <small [hidden]=\"id_user.valid || id_user.pristine\" class=\"text-danger\"> Contact owner is\r\n                            required</small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row no-gutters \">\r\n                    <label for=\"h4\" class=\"col-sm-4 col-form-label\"> Company </label>\r\n                    <div class=\"col-sm-8 \">\r\n                        <select class=\"form-control border\" [(ngModel)]=\"modelContact.id_company\" name=\"id_company\">\r\n                            <option [ngValue]=\"x.id\" *ngFor=\"let x of company\">{{x.name}}</option>\r\n                        </select>\r\n                        <a href=\"javascript:;\" (click)=\"modelContact.id_company = 0;\"><small> Remove </small> </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        \r\n    </div> \r\n\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-primary m-1\"    [disabled]=\"!myForm.form.valid\">{{saveLabel}}</button>\r\n    </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/contact' ]\">Contacts</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n  <div class=\"container-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 \">\r\n        <div class=\"module-name\">\r\n          <h5>CONTACTS</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 text-right\">\r\n        <span [hidden]=\"!loadingSelected\">Loading Attribute...</span>\r\n        <button type=\"button\" class=\"btn btn-classic  btn-sm\" (click)=\"open(newContact)\"><i class=\"fas fa-plus\"></i>\r\n          New Contact</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n \r\n    <table id=\"dtable\" class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n\r\n          <th width=\"50\">ID</th>\r\n          <th width=\"250\">Name</th>\r\n          <th width=\"250\" class=\"select-filter\">Company</th> \r\n\r\n          <th scope=\"col\">Position</th>\r\n          <th scope=\"col\">Department</th>\r\n          \r\n          \r\n          <th scope=\"col\" class=\"select-filter\">Account Manager</th>\r\n\r\n\r\n\r\n        </tr>\r\n      </thead>\r\n\r\n      <tfoot>\r\n        <tr>\r\n \r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n\r\n          <th></th>\r\n          <th></th> \r\n          \r\n          \r\n\r\n          <th></th>\r\n\r\n        </tr>\r\n      </tfoot>\r\n\r\n    </table>\r\n \r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #newContact let-modal>\r\n  <app-contact-new (uploaded)=\"requestEmit($event)\"></app-contact-new>\r\n</ng-template>\r\n\r\n\r\n<ng-template #markUpdate let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">{{modalTitle}}</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white\">\r\n\r\n    <div [hidden]=\"!itemsSelected.length\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-3\">\r\n          <div class=\"text-danger\">\r\n            Delete selected Contact ?\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"fn_delete();\">Yes</button>\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table border table-hover  table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>ID</th>\r\n            <th>Contact</th>\r\n            <th>Company</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let x of itemsSelected; let i = index\">\r\n            <td>{{ i + 1}}</td>\r\n            <td>{{x.id}}</td>\r\n            <td>{{x.name}}</td>\r\n            <td>{{x.company}}</td>\r\n            <th> <a href=\"javascript:;\" (click)=\"fn_removeItemSelected(x)\"><i class=\"fas fa-times\"></i></a> </th>\r\n          </tr>\r\n        </tbody>\r\n\r\n\r\n      </table>\r\n    </div>\r\n    <div [hidden]=\"itemsSelected.length\">\r\n      <div class=\"text-center\">\r\n        Empty data.\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-class/class-price-list/class-price-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-class/class-price-list/class-price-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <small> You are here : <a [routerLink]=\"[ '/CCPriceList' ]\">Customer Class</a> / <a\r\n                    [routerLink]=\"[ '/CCPriceList' ]\">Price List</a> </small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid py-2\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12 \">\r\n            <div class=\"text-left\">\r\n                <p class=\"mb-0\">Select a price list for this quote. You can add product only from a price list. Changing a\r\n                    selected price list will delete all existing products from this quote</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-4 \">\r\n            <div>\r\n                <label>Companies Class </label>\r\n            </div>\r\n            <select class=\"form-control form-control-sm border\" [(ngModel)]=\"id_company_class\" (change)=\"productlist(); \">\r\n                <option *ngFor=\"let x of company_class\" value=\"{{x.id}}\"> {{x.name}}</option>\r\n            </select>\r\n        </div> \r\n    </div>\r\n\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-12\">\r\n            <div class=\"bg-light border\">\r\n\r\n\r\n                <table class=\"table table-hover border bg-white border-top border-bottom mb-0\">\r\n                    <thead class=\"thead-light\">\r\n                        <tr>\r\n                            <th width=\"20\">No</th>\r\n                            <th width=\"300\">Product Name</th>\r\n                            <th>SKU</th>\r\n                            <th width=\"150\" class=\"text-right\">Origin Price</th> \r\n                            <th width=\"150\" class=\"text-right\">Customer Price</th> \r\n                            <th width=\"50\"></th>\r\n                        </tr>\r\n                    </thead>\r\n                </table>\r\n                <div class=\"bodyarea\">\r\n                    <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n\r\n                        <tbody>\r\n                            <tr *ngFor=\"let x of pricelist; let i = index\">\r\n                                <td width=\"20\">{{i+1}}</td>\r\n                                <td  width=\"300\">{{x.name}}</td>\r\n                                <td>{{x.sku}}</td>\r\n                                <td width=\"150\" class=\"text-right\"> {{x.currency}} {{x.price | number}}</td>\r\n                                <td width=\"150\" class=\"text-center\">\r\n                                    <input type=\"number\" class=\"form-control form-control-sm text-right\" (change)=\"update(x);\" [(ngModel)]=\"x.customer_price\"> \r\n                                </td> \r\n                                <td  width=\"50\"> <a href=\"javascripti:;\" (click)=\"erase(x); x.customer_price = '' \"><i class=\"fas fa-eraser\"></i></a> </td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-center py-5\" [hidden]=\"!loading_productlist\">\r\n                        <div class=\"spinner-border text-dark\" role=\"status\">\r\n                            <span class=\"sr-only\">Loading...</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-class/customer-class.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-class/customer-class.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>customer-class works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/dashboard' ]\">Dashboard</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid mt-3   mb-4\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-12 \">\r\n      <h4> Dashboard this {{period}} </h4>\r\n    </div>\r\n    <div class=\"col-12 mb-2\">\r\n      <b> Select Period : </b>\r\n      <div>\r\n        <button type=\"button\" class=\"btn  btn-sm mr-1\" [ngClass]=\"{'btn-primary': period === 'month', 'btn-classic'  : period != 'month' }\" (click)=\"onPeriod('month');\"\r\n          [routerLink]=\"[ '/dashboard/month' ]\">This Month</button>\r\n\r\n        <button type=\"button\" class=\"btn  btn-sm  mr-1\" [ngClass]=\"{'btn-primary': period === 'quarter', 'btn-classic'  : period != 'quarter' }\"  (click)=\"onPeriod('quarter');\"\r\n          [routerLink]=\"[ '/dashboard/quarter' ]\">This Quarter </button>\r\n\r\n        <button type=\"button\" class=\"btn  btn-sm  mr-1\"  [ngClass]=\"{'btn-primary': period === 'year', 'btn-classic'  : period != 'year' }\"  (click)=\"onPeriod('year');\"\r\n          [routerLink]=\"[ '/dashboard/year' ]\">This Year</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-lg-5\">\r\n      <b> Select User : </b>\r\n      <select class=\"form-control form-control-sm\" (change)=\"onUser($event.target.value)\" [(ngModel)]=\"id_user_select\">\r\n        <option value=\"0\">All Group</option>\r\n        <option *ngFor=\"let x of user\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n      </select>\r\n    </div>\r\n\r\n   \r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid mt-3\">\r\n  <div class=\"row no-gutters\">\r\n\r\n\r\n\r\n    <div class=\"col-2  mb-3\">\r\n      <div class=\"bg-white  border border-top-black rounded p-2  m-1 text-center\">\r\n        <div>\r\n          <strong> New leads today</strong>\r\n          <h1>{{lead.today}}</h1>\r\n        </div>\r\n        <hr>\r\n\r\n        <div> <strong> Total Lead this month</strong>\r\n          <h1>{{lead.month}}</h1>\r\n        </div>\r\n        <hr>\r\n        <div> <strong> Total Lead this quarter</strong>\r\n          <h1>{{lead.quarter}}</h1>\r\n        </div>\r\n        <hr>\r\n        <div><strong>Total Lead this year</strong>\r\n          <h1>{{lead.year}}</h1>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-4   mb-3\">\r\n      <div class=\"bg-light  border border-top-red rounded p-2  m-1\">\r\n        <div class=\"pb-1\"> <strong> Sales Funnel this year</strong></div>\r\n\r\n        <div id=\"funnel\"></div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-3   mb-3\">\r\n      <div class=\"bg-light  border border-top-yellowgreen rounded p-2  m-1\">\r\n\r\n        <div class=\"pb1\"> <strong> Leads by Source per {{period}}</strong></div>\r\n\r\n        <div [hidden]=\"totalLS < 1\">\r\n          <canvas class=\"leadPerDistribution\" id=\"leadPerDistribution\" width=\"300\" height=\"300\"></canvas>\r\n        </div>\r\n        <div [hidden]=\"totalLS > 1\">\r\n          <div class=\"text-center py-5\"> No Data </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3   mb-3\">\r\n      <div class=\"bg-light  border border-top-gray rounded p-2  m-1\">\r\n\r\n        <div class=\"pb-1\"> <strong>Leads by Industry per {{period}}</strong></div>\r\n\r\n\r\n        <div [hidden]=\"totalLI < 1\">\r\n          <canvas class=\"leadPerIndustry\" id=\"leadPerIndustry\" width=\"300\" height=\"300\"></canvas>\r\n        </div>\r\n        <div [hidden]=\"totalLI > 1\">\r\n          <div class=\"text-center py-5\"> No Data </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-12  mb-3\">\r\n      <div class=\"bg-light  border border-top-blue rounded p-2  m-1\">\r\n\r\n        <div class=\"pb-1\"> <strong> Target Salesman This Year</strong></div>\r\n\r\n        <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n          <thead>\r\n            <tr>\r\n              <th>Target</th>\r\n              <th class=\"text-right\">Quarter 1 <div><small>Achieve / Target</small></div>\r\n              </th>\r\n              <th class=\"text-right\">Quarter 2 <div><small>Achieve / Target</small></div>\r\n              </th>\r\n              <th class=\"text-right\">Quarter 3 <div><small>Achieve / Target</small></div>\r\n              </th>\r\n              <th class=\"text-right\">Quarter 4 <div><small>Achieve / Target</small></div>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngFor=\"let x of target; let i = index\">\r\n              <td> <span [ngStyle]=\"{'color': x.background}\"> <i class=\"fas fa-square\"></i> </span> {{x.name}}</td>\r\n\r\n              <td class=\"text-right\"> <span [hidden]=\"i+1 > 1\">{{currency}} </span> {{x.q1.achieve |number}} / <span\r\n                  [hidden]=\"i+1 > 1\">{{currency}} </span> {{x.q1.target |number}} </td>\r\n              <td class=\"text-right\"> <span [hidden]=\"i+1 > 1\">{{currency}} </span> {{x.q2.achieve |number}} / <span\r\n                  [hidden]=\"i+1 > 1\">{{currency}} </span> {{x.q2.target |number}} </td>\r\n              <td class=\"text-right\"> <span [hidden]=\"i+1 > 1\">{{currency}} </span> {{x.q3.achieve |number}} / <span\r\n                  [hidden]=\"i+1 > 1\">{{currency}} </span> {{x.q3.target |number}} </td>\r\n              <td class=\"text-right\"> <span [hidden]=\"i+1 > 1\">{{currency}} </span> {{x.q4.achieve |number}} / <span\r\n                  [hidden]=\"i+1 > 1\">{{currency}} </span>{{x.q4.target |number}} </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-6 \">\r\n            <div class=\"pb-1\"> <strong>Bar Target Salesman This Year</strong></div>\r\n            <div class=\"bg-white p-1 border\">\r\n              <canvas id=\"targetSalesAmount\"></canvas>\r\n              \r\n               <div class=\"px-3\"><small>in 100 million</small> </div> \r\n            </div>\r\n           \r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n            <div class=\"pb-1\"> <strong>Bar Target Leads, Opportunities, and Quotes This Year</strong></div>\r\n            <div class=\"bg-white p-1 border\">\r\n              <canvas id=\"targetSalesQty\"></canvas>\r\n            </div>\r\n           \r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"col-6   mb-3\">\r\n      <div class=\"bg-light  border border-top-blue rounded p-2  m-1\">\r\n\r\n        <div class=\"pb-1\"> <strong> Top 5 Recent Wins</strong></div>\r\n\r\n        <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n          <thead>\r\n            <tr>\r\n              <th>No</th>\r\n              <th>SO</th>\r\n              <th>Customer</th>\r\n              <th>Amount</th>\r\n              <th>Date</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let x of recentwins; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td> <a href=\"javascript:;\" [routerLink]=\"[ '/salesOrder', x.id ]\"> <b>{{x.so_number }} </b> </a> </td>\r\n              <td>{{x.company }}</td>\r\n              <td>Rp {{x.grand_total | number }}</td>\r\n              <td>{{x.input_date | date }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-6 mb-3\">\r\n      <div class=\"bg-light  border border-top-yellow rounded p-2  m-1\">\r\n\r\n        <div class=\"p-1\"> <strong> Top 5 Recent Quotation on Process</strong></div>\r\n        <div class=\"scroll-y\">\r\n          <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n            <thead>\r\n              <tr>\r\n                <th>No</th>\r\n                <th>Quote</th>\r\n                <th>Customer</th>\r\n                <th>Amount</th>\r\n                <th>Status</th>\r\n                <th>Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let x of recentQuotation; let i = index\">\r\n                <td>{{i+1}}</td>\r\n                <td> <a [routerLink]=\"[ '/quote', x.id ]\"> <b> {{x.quotes_number }}</b></a> </td>\r\n                <td>{{x.company }}</td>\r\n                <td>Rp {{x.grand_total | number }}</td>\r\n                <td>{{x.status }}</td>\r\n                <td>{{x.input_date | date }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-6   mb-3\">\r\n      <div class=\"bg-light  border border-top-green rounded p-2  m-1\">\r\n        <div class=\"p-1\"> <strong>Schedule Event This Month</strong></div>\r\n        <div class=\"scroll-y\">\r\n\r\n\r\n          <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n            <thead>\r\n              <tr>\r\n                <th>No</th>\r\n                <th>Event</th>\r\n                <th>Customer</th>\r\n                <th>Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let x of event; let i = index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{x.subject }}</td>\r\n                <td> <a [routerLink]=\"[ '/',x.module, x.id_person]\"> <b> {{x.name }}</b> </a> </td>\r\n                <td> {{x.start_datetime | date:'medium' }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-6  mb-3\">\r\n      <div class=\"bg-light  border border-top-brown rounded p-2  m-1\">\r\n        <div class=\"p-1\"> <strong>Must Visits This Month</strong></div>\r\n        <div class=\"scroll-y\">\r\n          <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n            <thead>\r\n              <tr>\r\n                <th>No</th>\r\n                <th>Event</th>\r\n                <th>Customer</th>\r\n                <th>Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let x of visit; let i = index\">\r\n                <td>{{i+1}}</td>\r\n                <td> {{x.subject }}</td>\r\n                <td> <a [routerLink]=\"[ '/', x.module, x.id_person ]\"> <b> {{x.name }}</b> </a> </td>\r\n                <td> {{x.start_datetime | date:'medium' }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deal/deal-detail/deal-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deal/deal-detail/deal-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n\r\n<div class=\"container-fluid bg-light border py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/deal' ]\">Deal</a> / <a\r\n                    [routerLink]=\"[ '/deal/',id ]\">{{items.name}}</a> </small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Menu & Information -->\r\n<div class=\"container-fluid\">\r\n    <!-- Header  -->\r\n    <div class=\"row border-bottom \">\r\n\r\n        <div class=\"col-3 bg-light py-2\">\r\n            <div class=\"module-name\">\r\n                <strong>DEAL</strong>\r\n                <b class=\"text-primary\">{{items.name}}</b>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-9 bg-light text-right py-2\">\r\n\r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"open(createSO)\"><b>SO</b> Create Sales\r\n                Order </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"rollback();\"> <i\r\n                    class=\"fas fa-edit\"></i> Rollback To  Opportunity </button>\r\n \r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [routerLink]=\"[ '/deal' ]\" title=\"back\"> <i\r\n                    class=\"fas fa-times\"></i> </button>\r\n        </div>\r\n\r\n        <div class=\"col-12 py-2\">\r\n            <table class=\"table-p0\">\r\n                <tr>\r\n                    <td> <small> Company</small> </td>\r\n                    <td> <small> Start Date &  Closed Date </small> </td>\r\n                    <td> <small> Timeline Project </small> </td> \r\n                    <td> <small> Reason Deal </small> </td>\r\n                    <td> <small> Amount </small> </td>\r\n                  \r\n                </tr>\r\n\r\n                <tr>\r\n                    <td> <b class=\"text-primary\"> <a  [routerLink]=\"[ '/company', items.id_company ]\">{{items.company}}</a> </b> </td>\r\n                    <td> <b class=\"text-primary\"> {{items.start_date  |date }} - {{items.closed_date  |date }}</b> </td>\r\n                    <td> <b class=\"text-primary\"> {{items.timeline }} days</b> </td>\r\n                    <td> <b class=\"text-primary\"> {{items.closed_reason }}</b> </td>\r\n\r\n                    <td> <b class=\"text-primary\"> {{items.currency}} {{items.amount | number}} </b> </td>\r\n                 \r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container-fluid  bg-white\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-9 col-md-8\">\r\n\r\n\r\n\r\n            <div class=\"py-2\">\r\n                <ngb-tabset type=\"pills\">\r\n\r\n\r\n\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle>Detail</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"border-top py-2 my-2\">\r\n                                <!-- detail -->\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12 bg-light\">\r\n                                        <strong>Information</strong>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <table class=\"table table-borderless\">\r\n                                            <tr>\r\n                                                <td width=\"200\">Opportunity Name</td>\r\n                                                <td> \r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.name}}\" readonly> \r\n                                                </td>\r\n                                            </tr>\r\n\r\n\r\n\r\n                                            <tr>\r\n                                                <td>Account Manager</td>\r\n                                                <td>  <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.user}}\" readonly>  </td>\r\n                                            </tr>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12 bg-light\">\r\n                                        <strong>Detail</strong>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12 col-lg-6\">\r\n                                        <table class=\"table table-borderless\">\r\n\r\n                                            <tr width=\"40%\">\r\n                                                <td>Contact</td>\r\n                                                <td>  <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.contact}}\" readonly> </td>\r\n                                            </tr>\r\n\r\n                                            <tr width=\"40%\">\r\n                                                <td>Lead Source</td>\r\n                                                <td>  <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.lead_source}}\" readonly> </td>\r\n                                            </tr>\r\n\r\n\r\n                                            <tr>\r\n                                                <td>Industry</td>\r\n                                                <td>\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.industry}}\" readonly>\r\n                                                </td>\r\n                                            </tr>\r\n\r\n\r\n                                            <tr>\r\n                                                <td>Started Date</td>\r\n                                                <td>\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.start_date | date:'d MMM y  hh:mm a'}}\" readonly> \r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Expecting Closing Date</td>\r\n                                                <td>\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.expecting_closing_date | date:'d MMM y  hh:mm a'}}\" readonly> \r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12 col-lg-6\">\r\n                                        <table class=\"table table-borderless\">\r\n\r\n                                            <tr>\r\n                                                <td width=\"40%\">Amount</td>\r\n                                                <td>\r\n                                                   \r\n\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.currency}} {{items.amount |number}}\" [readonly]=\"isReadOnly\">\r\n\r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Stage</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"\r\n                                                        value=\"{{items.stage}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Probability (%)</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"\r\n                                                        value=\"{{items.progress}} %\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td><label>Created Date</label></td>\r\n                                                <td>\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"\r\n                                                        value=\" {{items.input_date | date:'d MMM y  hh:mm a'}}\"\r\n                                                        [readonly]=\"isReadOnly\">\r\n                                                    <small> by {{items.input_by}}</small>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td><label>Update Date</label></td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"\r\n                                                        value=\" {{items.update_date | date:'d MMM y  hh:mm a'}}\"\r\n                                                        [readonly]=\"isReadOnly\">\r\n                                                    <small> by {{items.update_by}} </small>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"col-12 bg-light\">\r\n                                        <strong>More Information</strong>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12 col-lg-12\">\r\n                                        <table class=\"table table-borderless\">\r\n\r\n                                            <tr>\r\n                                                <td width=\"30%\">Opportunity Budget (IDR)</td>\r\n                                                <td>  <input type=\"text\" class=\"form-control form-modal\"  value=\"Rp {{items.budget | number}}\" [readonly]=\"isReadOnly\">  </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Competitor</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"  value=\"{{items.competitor}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Contact Person</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"  value=\"{{items.contact}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Comparison with competitor</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"  value=\"{{items.comparison_with_competitor}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Critical point</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"  value=\"{{items.critical_point}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n \r\n\r\n                                            <tr>\r\n                                                <td>Our proposal</td>\r\n                                                <td> <textarea  class=\"form-control form-modal\"  [readonly]=\"isReadOnly\">{{items.our_proposal}}</textarea>  </td>\r\n                                            </tr>\r\n \r\n\r\n                                            <tr>\r\n                                                <td>Other of Analysis</td>\r\n                                                <td><textarea  class=\"form-control form-modal\" [readonly]=\"isReadOnly\">{{items.notes1}}</textarea> </td>\r\n                                            </tr>\r\n \r\n                                            <tr>\r\n                                                <td>Attachment of Proposal</td>\r\n                                                <td>\r\n                                                    <div class=\"border-bottom pb-2\">\r\n                                                        <a href=\"{{x.url}}\" target=\"_blank\" class=\"border px-2 bg-light mr-1\" *ngFor=\"let x of attachment\" >   {{x.file_name}} </a>\r\n\r\n                                                    </div>\r\n                                                 \r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Notes of Proposal</td>\r\n                                                <td> <textarea  class=\"form-control form-modal\" [readonly]=\"isReadOnly\">{{items.notes2}}</textarea> </td>\r\n                                            </tr>\r\n\r\n\r\n                                            <tr>\r\n                                                <td>Notes of Negotation</td>\r\n                                                <td> <textarea  class=\"form-control form-modal\" [readonly]=\"isReadOnly\">{{items.notes3}}</textarea> </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Attachment Purchased Order</td>\r\n                                                <td>\r\n                                                    <div class=\"border-bottom pb-2\">\r\n                                                        <a href=\"{{x.url}}\" target=\"_blank\" class=\"border px-2 bg-light mr-1\" *ngFor=\"let x of attachmentPO\" >   {{x.file_name}} </a>\r\n\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n\r\n\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <!-- End detail-->\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n\r\n\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle>Related</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"border-top py-2 my-2\">\r\n                                <!-- Product -->\r\n                                <div class=\"row py-2\">\r\n                                    <div class=\"col-12 \">\r\n                                        <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-12\"><strong>Products ({{product.length}}) </strong>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-6 mb-2\" *ngFor=\"let x of product; let i = index\">\r\n\r\n                                                    <table class=\"table-items\">\r\n                                                        <thead>\r\n                                                            <tr>\r\n                                                                <th> <a href=\"\">{{x.product.name}}</a></th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n\r\n                                                            <tr>\r\n\r\n                                                                <td> {{x.currency}} {{x.price | number}}</td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n\r\n                                                    <hr [hidden]=\" i - 1 > 0\" class=\"p-0 m-0 mt-2\">\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n  \r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n\r\n\r\n                </ngb-tabset>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-3 col-md-4 border border-top-0\">\r\n\r\n            <!-- QUOTATION -->\r\n            <div class=\"row py-2\">\r\n                <div class=\"col-12 \">\r\n                    <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><strong>Information Order </strong></div>\r\n                        </div>\r\n\r\n                        <div class=\"row mt-2\" [hidden]=\"items.quote.id == '0'\">\r\n                            <div class=\"col-12 my-1\"><b>Quotation </b></div>\r\n                            <div class=\"col-12 mb-1\">\r\n                                <table class=\"table-items\">\r\n\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td> <a [routerLink]=\"[ '/quote', items.quote.id ]\"><b>{{items.quote.quote_number}}\r\n                                                    </b> </a> </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Grand Total : {{items.currency}} {{items.quote.grand_total | number}}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Contact : {{items.quote.contact}} </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Account Manager : {{items.quote.user}} </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                            <div class=\"col-12\">\r\n                                <hr class=\"p-0 m-0 mt-1\">\r\n                            </div>\r\n\r\n                            <div class=\"col-12 my-1\" ><b>Sales Order </b></div>\r\n                            <div class=\"col-12 mb-1\">\r\n                                <table class=\"table-items mb-2 border-bottom\" *ngFor=\"let x of sales_order\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td> <a [routerLink]=\"[ '/salesOrder', x.id ]\"> <b> {{x.so_number}}</b></a>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Grand Total : {{ x.currency }} {{x.grand_total | number}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Created date {{x.expired_date | date}} </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Account Manager : {{x.user}}</td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <!-- Contact Roles -->\r\n            <div class=\"row py-2\">\r\n                <div class=\"col-12 \">\r\n                    <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><strong>Contact Roles ({{contact.length}}) </strong></div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6 mb-2\" *ngFor=\"let x of contact\">\r\n\r\n                                <table class=\"table-items\">\r\n                                    <thead>\r\n                                      <tr>\r\n                                        <th> \r\n                                          <a [routerLink]=\"[ '/contact', x.id ]\">{{x.name}} <span [hidden]=\"!x.active\"> <i class=\"fas fa-check\"></i>\r\n                                            </span></a>\r\n                                          </th>\r\n                                      </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                      <tr>\r\n                                        <td>{{x.position}}, {{x.department}} </td>\r\n                                      </tr>\r\n                  \r\n                                    </tbody>\r\n                                  </table>\r\n\r\n                                <hr class=\"p-0 m-0 mt-2\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<ng-template #createSO let-modal>\r\n    <app-sales-order-create (uploaded)=\"requestEmit($event)\"></app-sales-order-create>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deal/deal.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deal/deal.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n\r\n<div class=\"container-fluid bg-light border py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/deal' ]\">Deals</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n\r\n  <div class=\"container-header\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12\">\r\n        <div class=\"module-name\">\r\n          <h5>DEALS</h5>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n\r\n    <table id=\"dtable\" class=\"table table-hover border bg-white border-top border-bottom pointer\" style=\"width:100%\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>ID</th> \r\n          <th scope=\"col\">Opportunity Name</th>\r\n          <th scope=\"col\" class=\"select-filter\">Company</th>\r\n \r\n          <th scope=\"col\" class=\"\">Amount</th> \r\n          <th scope=\"col\">Close Date</th>\r\n          <th scope=\"col\" class=\"select-filter\">Account Manager</th>\r\n         \r\n        </tr>\r\n      </thead>\r\n\r\n      <tfoot>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th> \r\n\r\n          <th></th> \r\n          <th></th> \r\n          <th></th> \r\n \r\n        </tr>\r\n      </tfoot>\r\n      \r\n    </table>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<ng-template #markUpdate let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Delete Opportunity</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white\">\r\n\r\n    <div [hidden]=\"!itemsSelected.length\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-3\">\r\n          <div class=\"text-danger\">\r\n            Delete selected Opportunity ?\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm mx-1\" (click)=\"fn_delete();\">Yes</button>\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm mx-1\"\r\n            (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table border table-hover  table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Name Opportunity</th>\r\n            <th>Company</th>\r\n            <th>Contact</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let x of itemsSelected; let i = index\">\r\n            <td>{{ i + 1}}</td>\r\n            <td>{{x.name}}</td>\r\n            <td>{{x.company}}</td>\r\n            <td>{{x.contact}}</td>\r\n            <th> <a href=\"javascript:;\" (click)=\"fn_removeItemSelected(x)\"><i class=\"fas fa-times\"></i></a> </th>\r\n          </tr>\r\n        </tbody>\r\n\r\n\r\n      </table>\r\n    </div>\r\n    <div [hidden]=\"itemsSelected.length\">\r\n      <div class=\"text-center\">\r\n        Empty data.\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lead/converted/converted.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lead/converted/converted.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/lead' ]\">Leads</a> /   <a [routerLink]=\"[ '/lead/converted' ]\">Conversion</a></small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n  <div class=\"container-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 \">\r\n        <div class=\"module-name\">\r\n          <h5>LEADS CONVERSION</h5>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n\r\n   \r\n\r\n    <div class=\"scroll-x scroll-style-2 max-height\">\r\n\r\n      <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n\r\n            <th class=\"text-center\">No</th>  \r\n            <th scope=\"col\">Leads Name</th>\r\n            <th scope=\"col\">Contacts</th>\r\n            <th scope=\"col\">Companies</th>\r\n            <th scope=\"col\">Opportunities</th>\r\n            <th scope=\"col\">Conversion date</th> \r\n            <th scope=\"col\">Account Manager</th> \r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let x of items; let i = index\">  \r\n            <td> {{i+1}} </td> \r\n           \r\n            <td> <a [routerLink]=\"[ '/lead/converted/',x.id_lead]\"><b> {{x.lead}}</b> </a></td>\r\n            <td >{{x.contact}}</td>\r\n            <td >{{x.company}}</td>\r\n            <td >{{x.opporunity}}</td>\r\n            <td >{{x.convert_date | date}}</td> \r\n            <td >{{x.user}}</td>\r\n\r\n\r\n          </tr>\r\n\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead-converd/lead-converd.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead-converd/lead-converd.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/lead' ]\">Leads</a> /\r\n                <a [routerLink]=\"[ '/lead/converted/']\"> Conversion </a> / <a [routerLink]=\"[ '/lead/converted/',id ]\">\r\n                    {{items.contact.name}} </a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12 py-4 mb-3 text-center\">\r\n            <h4>Lead Conversion</h4>\r\n            <strong>Converted Date : {{items.input_date | date:'medium'}}</strong>\r\n        </div> \r\n\r\n\r\n\r\n        <div class=\"col-12 mb-5\">\r\n            <small>History</small>\r\n            <h5>  Lead </h5> \r\n            <div class=\"border p-3  shadow-sm\"> \r\n                <div><a [routerLink]=\"[ '/lead/converted/history/', items.contact.id ]\"> <i class=\"far fa-address-card\"></i>   {{items.lead.name}}</a></div>\r\n          \r\n            </div> \r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12\">\r\n            <small>Convert</small>\r\n        </div>\r\n        \r\n        <div class=\"col-4  mb-4\">\r\n            <h5>  Contact</h5> \r\n            <div class=\"border p-3 bg-light shadow-sm\"> \r\n                <div><a [routerLink]=\"[ '/contact', items.contact.id ]\"> <i class=\"far fa-user\"></i>   {{items.contact.name}}</a></div>\r\n          \r\n            </div> \r\n        </div>\r\n\r\n        <div class=\"col-4  mb-4\">\r\n            <h5>  Company</h5> \r\n            <div class=\"border p-3 bg-light shadow-sm\"> \r\n                <div> <a [routerLink]=\"[ '/company', items.company.id ]\"> <i class=\"far fa-building\"></i>  {{items.company.name}}</a></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-4  mb-4\" [hidden]=\"!items.opportunity.name\" >\r\n            <h5>  Opportunity</h5> \r\n            <div class=\"border p-3 bg-light shadow-sm\"> \r\n                <div>  <a [routerLink]=\"[ '/opportunity', items.opportunity.id ]\"><i class=\"far fa-flag\"></i> {{items.opportunity.name}}</a></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead-detail/lead-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead-detail/lead-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/lead' ]\">Leads</a> /\r\n        <a [routerLink]=\"[ '/lead/',items.id ]\">\r\n          {{items.first_name}} {{items.last_name}}</a> </small>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<form (ngSubmit)=\"fn_update()\" #mainForm=\"ngForm\">\r\n  <div class=\"container-fluid  bg-white\">\r\n\r\n\r\n    <!-- Menu & Information -->\r\n    <div class=\"row border-bottom \">\r\n\r\n      <!-- Header & button -->\r\n      <div class=\"col-3 bg-light py-2\">\r\n        <div class=\"module-name\">\r\n          <strong>LEAD</strong>\r\n          <b class=\"text-primary\">{{items.first_name}} {{items.last_name}}</b>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-9 bg-light text-right py-2\">\r\n        <div [hidden]=\"!isReadOnly\">\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"open(convert)\"\r\n            [hidden]=\"!accessRules.opportunity.insert\"> <i class=\"fas fa-funnel-dollar\"></i> Convert Lead\r\n          </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [hidden]=\"!accessRules.lead.update\"\r\n            (click)=\"isReadOnly=false; t.select('tab-selectbyid2')\"> <i class=\"fas fa-edit\"></i>\r\n            Edit </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [hidden]=\"!accessRules.lead.delete\"\r\n            (click)=\"fn_delete();\"> <i class=\"fas fa-trash-alt\"></i>\r\n            Delete </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [routerLink]=\"[ '/lead' ]\" title=\"back\"> <i\r\n              class=\"fas fa-times\"></i> </button>\r\n\r\n        </div>\r\n\r\n        <div [hidden]=\"isReadOnly\">\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"isReadOnly=true; httpGet();\" title=\"Done\"> Cancel </button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Infromation -->\r\n      <div class=\"col-12 py-2\">\r\n        <table class=\"table-p0\">\r\n          <tr>\r\n            <td> <small> Company</small> </td>\r\n            <td> <small> Company Class</small> </td>\r\n            <td> <small> Position </small></td>\r\n            <td> <small> Mobile</small> </td>\r\n            <td> <small> Email </small> </td>\r\n            <td> <small> Lead Status </small> </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td> <b class=\"text-primary\"> {{items.company}} </b> </td>\r\n            <td> <b class=\"text-primary\"> {{items.company_class}} </b> </td>\r\n            <td> <b class=\"text-primary\"> {{items.position}} </b> </td>\r\n            <td> <b class=\"text-primary\"> {{items.mobile}} </b> </td>\r\n            <td> <b class=\"text-primary\"> {{items.email}}</b> </td>\r\n            <td>\r\n\r\n              <b class=\"text-primary\" [hidden]=\"!isReadOnly\"><span class=\"text-{{items.lead_status.color }}\"> <i\r\n                    class=\"fas fa-square\"></i>\r\n                </span>\r\n                {{items.lead_status.name }} </b>\r\n\r\n\r\n              <select class=\"form-control form-control-sm p-1 border\" [(ngModel)]=\"items.id_lead_status\"\r\n                [hidden]=\"isReadOnly\" (change)=\"onChangeLeadStatus($event.target.value)\"\r\n                [ngModelOptions]=\"{standalone: true}\">\r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of lead_status\">\r\n                  {{x.name}}\r\n                </option>\r\n              </select>\r\n\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row mt-3\">\r\n      <!-- Left side-->\r\n      <div class=\"col-9 col-md-8\">\r\n\r\n        <div class=\"row py-2\">\r\n\r\n          <div class=\"col-12\">\r\n\r\n            <ngb-tabset type=\"pills\" class=\"activityTabs\" #t=\"ngbTabset\">\r\n\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>Activities</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <app-widget-activity></app-widget-activity>\r\n                </ng-template>\r\n              </ngb-tab>\r\n\r\n              <ngb-tab id=\"tab-selectbyid2\">\r\n                <ng-template ngbTabTitle>Detail</ng-template>\r\n                <ng-template ngbTabContent>\r\n\r\n\r\n                  <div class=\"border-top py-2 my-2\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong>Contact</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tbody>\r\n\r\n                            <tr>\r\n                              <td width=\"30%\"><label>First Name</label></td>\r\n                              <td>\r\n                                <input type=\"text\" class=\"form-control form-modal\" id=\"first_name\" required\r\n                                  [(ngModel)]=\"lead.first_name\" name=\"first_name\" #first_name=\"ngModel\"\r\n                                  [readonly]=\"isReadOnly\">\r\n                                <div [hidden]=\"first_name.valid || first_name.pristine\" class=\"alert alert-danger\">\r\n                                  First name is required\r\n                                </div>\r\n\r\n                              </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Last Name</label></td>\r\n                              <td>\r\n                                <input type=\"text\" class=\"form-control form-modal\" id=\"last_name\"\r\n                                  [(ngModel)]=\"lead.last_name\" name=\"last_name\" #last_name=\"ngModel\"\r\n                                  [readonly]=\"isReadOnly\">\r\n                              </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Email</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"email\"\r\n                                  [(ngModel)]=\"lead.email\" name=\"email\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n\r\n                            <tr>\r\n                              <td><label>Mobile</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"mobile\"\r\n                                  [(ngModel)]=\"lead.mobile\" name=\"mobile\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Sex</label></td>\r\n                              <td> \r\n                                <select class=\"form-control form-modal\"  [disabled]=\"isReadOnly\"  id=\"sex\" name=\"sex\" [(ngModel)]=\"lead.sex\" >\r\n                                  <option value=\"1\">Male</option>\r\n                                  <option value=\"2\">Female</option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Birthdate</label></td>\r\n                              <td> \r\n                                <span [hidden]=\"!isReadOnly\">\r\n                                  <input type=\"text\" class=\"form-control form-modal\" value=\"{{lead.birthdate.year}}-{{lead.birthdate.month}}-{{lead.birthdate.day}}\"  [readonly]=\"isReadOnly\"> \r\n                                </span>\r\n                                  <span [hidden]=\"isReadOnly\">\r\n                                    <input type=\"text\" class=\"form-control form-modal\"  [(ngModel)]=\"lead.birthdate\"  id=\"birthdate\" (click)=\"bd.toggle()\"  ngbDatepicker #bd=\"ngbDatepicker\"  name=\"birthdate\"  readonly [startDate]=\"{year: 1980, month: 1}\" >\r\n                                  </span> \r\n                              </td>\r\n                            </tr>\r\n\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n \r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tbody>\r\n\r\n                            <tr>\r\n                              <td><label>Position</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"position\"\r\n                                  [(ngModel)]=\"lead.position\" name=\"position\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Department</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"department\"\r\n                                  [(ngModel)]=\"lead.department\" name=\"department\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"30%\"><label>Lead Source</label></td>\r\n                              <td>\r\n                                <select class=\"form-control form-modal\" id=\"lead_source\" required\r\n                                  [(ngModel)]=\"lead.id_lead_source\" name=\"id_lead_source\" [disabled]=\"isReadOnly\">\r\n                                  <option *ngFor=\"let x of lead_source\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                                </select>\r\n\r\n                              </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Lead Owner </label></td>\r\n                              <td>\r\n                                <select class=\"form-control form-modal\" id=\"id_user\" [(ngModel)]=\"lead.id_user\"\r\n                                  name=\"id_user\" required [disabled]=\"isReadOnly\">\r\n                                  <option *ngFor=\"let x of user\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong>Company</strong>\r\n                      </div>\r\n\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td width=\"30%\"><label>Company</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" id=\"company\"\r\n                                  [(ngModel)]=\"lead.company\" name=\"company\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td><label>Company Class</label></td>\r\n                              <td> <select class=\"form-control form-modal\" [disabled]=\"isReadOnly\"\r\n                                  [(ngModel)]=\"lead.id_company_class\" [ngModelOptions]=\"{standalone: true}\">\r\n                                  <option value=\"{{x.id}}\" *ngFor=\"let x of company_class\"> {{x.name}} </option>\r\n                                </select></td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Website</label></td>\r\n                              <td><input type=\"text\" class=\"form-control form-modal\" id=\"website\"\r\n                                  [(ngModel)]=\"lead.website\" name=\"website\" [readonly]=\"isReadOnly\"></td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Phone</label></td>\r\n                              <td><input type=\"text\" class=\"form-control form-modal\" id=\"phone\" [(ngModel)]=\"lead.phone\"\r\n                                  name=\"phone\" [readonly]=\"isReadOnly\"></td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Fax</label></td>\r\n                              <td><input type=\"text\" class=\"form-control form-modal\" id=\"fax\" [(ngModel)]=\"lead.fax\"\r\n                                  name=\"fax\" [readonly]=\"isReadOnly\"> \r\n                                </td>\r\n                            </tr>\r\n\r\n\r\n                            <tr>\r\n                              <td><label>Industry</label></td>\r\n                              <td>\r\n                                <select class=\"form-control form-modal\" [disabled]=\"isReadOnly\"\r\n                                  [(ngModel)]=\"lead.id_industry\" [ngModelOptions]=\"{standalone: true}\">\r\n                                  <option value=\"{{x.id}}\" *ngFor=\"let x of industry\"> {{x.name}} </option>\r\n                                </select>\r\n\r\n                              </td>\r\n                            </tr>\r\n\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td width=\"30%\"><label>Address</label></td>\r\n                              <td> <textarea class=\"form-control form-modal\" [(ngModel)]=\"lead.address_street\"\r\n                                  placeholder=\"Street\" name=\"address_street\" id=\"h21a\"\r\n                                  [readonly]=\"isReadOnly\"> </textarea> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>City</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                  [(ngModel)]=\"lead.address_city\" placeholder=\"City\" name=\"address_city\" id=\"h21b\"\r\n                                  [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>State</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                  [(ngModel)]=\"lead.address_state\" placeholder=\"State\" name=\"address_state\" id=\"h21b\"\r\n                                  [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Postal Code</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                  [(ngModel)]=\"lead.address_code\" placeholder=\"Postal Code\" name=\"address_code\" id=\"h21b\"\r\n                                  [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                              <td><label>Country</label></td>\r\n                              <td> <input type=\"text\" class=\"form-control form-modal\" maxlength=\"250\"\r\n                                  [(ngModel)]=\"lead.address_country\" placeholder=\"Country\" name=\"address_country\"\r\n                                  id=\"h21b\" [readonly]=\"isReadOnly\"> </td>\r\n                            </tr>\r\n\r\n\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"footer-menu bg-white shadow border-top\" [hidden]=\"isReadOnly\">\r\n                    <div class=\"container\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 text-center p-1\">\r\n                          <a class=\"btn btn-outline-secondary m-1\" (click)=\"isReadOnly=true;  httpGet();\">Cancel</a>\r\n                          <button type=\"submit\" class=\"btn btn-primary m-1\" (click)=\"isReadOnly=true\"\r\n                            [disabled]=\"!mainForm.form.valid\">Save</button>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </ng-template>\r\n              </ngb-tab>\r\n\r\n\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>Related</ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"border bg-light p-1 my-2 rounded-sm\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-3\">\r\n                        <strong>Attachment</strong>\r\n                      </div>\r\n                      <div class=\"col-7 text-right\">\r\n  \r\n                        <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n  \r\n                      </div>\r\n                      <div class=\"col-1\">\r\n                        <button type=\"button\" class=\"btn btn-classic btn-sm\"\r\n                          (click)=\"onUpload('lead');\">Upload</button>\r\n                      </div>\r\n  \r\n                      <div class=\"col-12\">\r\n                        <table class=\"table table-list table-bordered table-striped\">\r\n                          <thead class=\"thead-light border-top-brown\">\r\n                            <tr>\r\n                              <th>Files</th>\r\n                              <th width=\"100\">Size</th>\r\n                              <th width=\"50\"></th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let x of attachment\">\r\n                              <td> <a href=\"{{x.url}}\" target=\"_blank\"> {{x.file_name}}</a> </td>\r\n                              <td> {{x.size }} </td>\r\n                              <td>\r\n                                <div [hidden]=\"isReadOnly\">\r\n                                  <a href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i\r\n                                      class=\"fas fa-trash-alt\"></i></a>\r\n                                </div>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n  \r\n  \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n  \r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n\r\n            </ngb-tabset>\r\n\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- right side-->\r\n      <div class=\"col-3 col-md-4 border border-top-0\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"border bg-light p-2 rounded-sm\">\r\n              <small> Opportunity</small>\r\n\r\n              <div [hidden]=\"isReadOnly\"><input type=\"text\" class=\"form-control form-modal\" id=\"opportunity\"\r\n                  [(ngModel)]=\"lead.opportunity\" name=\"opportunity\" [readonly]=\"isReadOnly\"> </div>\r\n              <div [hidden]=\"!isReadOnly\"><b>{{lead.opportunity}}</b> </div>\r\n\r\n              <hr>\r\n              <small> Opportunity Amount ({{items.currency }})</small>\r\n              <div [hidden]=\"isReadOnly\">\r\n\r\n                <input type=\"text\" class=\"form-control form-modal\" currencyMask id=\"amount\" [(ngModel)]=\"lead.amount\" name=\"amount\"\r\n                  [readonly]=\"isReadOnly\">\r\n              </div>\r\n              <div> <b [hidden]=\"!isReadOnly\"> {{lead.amount | number}}</b> </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- Product -->\r\n        <div class=\"row py-2\">\r\n          <div class=\"col-12 \">\r\n            <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-6\"><strong>Products ({{product.length}}) </strong></div>\r\n                <div class=\"col-6 text-right\"> <button class=\"btn btn-classic btn-sm\" (click)=\"open(pricelist);\"><i\r\n                      class=\"fas fa-plus\"></i> New</button> </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-12 mb-2\" *ngFor=\"let x of product; let i = index\">\r\n\r\n                  <hr [hidden]=\" i < 1\" class=\"p-0 m-0 mb-2\">\r\n                  <table class=\"table-items\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th colspan=\"2\"> <a href=\"javascript:;\">{{x.product}}</a></th>\r\n                        <th width=\"50\" class=\"text-right\">\r\n                          <a href=\"javascript:\" (click)=\"fn_deleteProduct(x);\"><i class=\"far fa-trash-alt\"></i></a>\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td width=\"50\">Sales</td>\r\n                        <td colspan=\"2\">: {{x.currency}} {{x.price | number}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</form>\r\n<div [hidden]=\"isReadOnly\"><br><br></div>\r\n\r\n\r\n<ng-template #convert let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Convert Lead</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-light\">\r\n    <form (ngSubmit)=\"onConvert()\" #myFormConvert=\"ngForm\">\r\n      <div class=\"row\">\r\n      \r\n        <div class=\"col-12 mb-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <strong> Company</strong>\r\n            </div>\r\n \r\n            <div class=\"col-10\">\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-6\">\r\n                  <input type=\"radio\" name=\"companyNew\" [(ngModel)]=\"leadConvert.isDuplicate\" value=\"0\" id=\"a1\"> <label for=\"a1\" class=\"mx-1\"> Create\r\n                    New</label>\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                  <input type=\"radio\" name=\"companyNew\" [(ngModel)]=\"leadConvert.isDuplicate\" value=\"1\" id=\"a2\"> <label for=\"a2\" class=\"mx-1\">Choose Existing\r\n                  </label>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-6\" >\r\n                  <div class=\"border p-3 mt-2 \" [ngClass]=\"{'bg-white': leadConvert.isDuplicate == '0'}\">\r\n                    <label class=\"mb-2\">Company Name</label>\r\n                    <input type=\"text\" class=\"form-control mb-2\" name=\"newCompany\" [(ngModel)]=\"leadConvert.newCompany\" >\r\n\r\n                    <label class=\"mb-2\">Company Class</label>\r\n                    <select class=\"form-control mb-2\" name=\"cl_id_company_class\"  [(ngModel)]=\"leadConvert.cl_id_company_class\" [ngModelOptions]=\"{standalone: true}\">\r\n                      <option value=\"{{x.id}}\" *ngFor=\"let x of company_class\"> {{x.name}}</option>\r\n                    </select>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-6  border-left\">\r\n                  <label class=\"mb-2\" for=\"a2\">Search Company</label>\r\n                  <select class=\"form-control mb-2\" name=\"cl_id_company\" [(ngModel)]=\"leadConvert.cl_id_company\" [ngModelOptions]=\"{standalone: true}\" >\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of company\"> {{x.name}} </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-12 mb-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <strong> Contact </strong>\r\n            </div>\r\n\r\n            <div class=\"col-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                 \r\n\r\n                  <div class=\"mt-2\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6\">\r\n                        <input type=\"text\" class=\"form-control mb-2 border \" name=\"lc_first_name\"  [(ngModel)]=\"leadConvert.lc_first_name\" required placeholder=\"First name\" >\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <input type=\"text\" class=\"form-control mb-2 border \" name=\"lc_last_name\" [(ngModel)]=\"leadConvert.lc_last_name\" placeholder=\"Last name\">\r\n                      </div>\r\n                    </div>\r\n           \r\n                  </div>\r\n                </div>\r\n                <!--<div class=\"col-6\">\r\n                  <input type=\"radio\" name=\"contactNew\" value=\"0\" id=\"b2\"> <label for=\"b2\" class=\"mx-1\">Choose Exesting\r\n                  </label>\r\n                </div>-->\r\n\r\n                <!-- <div class=\"col-6 mt-2\">\r\n                \r\n                  <select class=\"form-control mb-2\"  name=\"id_contact\" [(ngModel)]=\"leadConvert.id_contact\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of contacts\"> {{x.name}} </option>\r\n                  </select>\r\n                </div>-->\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12 mb-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <strong> Opportunity </strong>\r\n            </div>\r\n\r\n            <div class=\"col-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <label class=\"mb-2\">Opportunity Name</label>\r\n                  <input type=\"text\" class=\"form-control mb-2\" name=\"opportunity\" [(ngModel)]=\"leadConvert.opportunity\">\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                  <label class=\"mb-2\">Amount</label>\r\n                  <input type=\"text\" class=\"form-control mb-2\" name=\"amount\" currencyMask [(ngModel)]=\"leadConvert.amount\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 mb-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col-5 offset-2\">\r\n              <label class=\"mb-2\">Assigned To</label>\r\n              <select class=\"form-control mb-2\" name=\"id_user\" [(ngModel)]=\"leadConvert.id_user\">\r\n                <option value=\"{{x.id}}\" *ngFor=\"let x of user\"> {{x.name}} </option>\r\n              </select>\r\n            </div>\r\n \r\n            <div class=\"col-5\">\r\n              <label class=\"mb-2\">Expected Closing Date</label>  \r\n              \r\n              <input type=\"text\" class=\"form-control mb-2 border \" readonly placeholder=\"YYYY-MM-DD\" name=\"expecting_closing_date\"\r\n              [(ngModel)]=\"leadConvert.expecting_closing_date\" ngbDatepicker #expecting_closing_date=\"ngbDatepicker\"\r\n              (click)=\"expecting_closing_date.toggle()\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"modal-footer\">\r\n    <span [hidden]=\"!loadingConvert\">Converting, please wait...</span>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"onConvert();\">Convert</button>\r\n\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #pricelist let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Price List </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <app-price-list-modal (uploaded)=\"requestEmit($event)\"></app-price-list-modal>\r\n\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/lead' ]\">Leads</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n  <div class=\"container-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 \">\r\n        <div class=\"module-name\">\r\n          <h5>LEADS</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 text-right\">\r\n        <span [hidden]=\"!loadingSelected\">Loading Attribute...</span>\r\n\r\n        <a [routerLink]=\"[ '/lead/converted' ]\" class=\"mr-3 btn btn-sm\"> <i class=\"fas fa-archive\"></i> Leads\r\n          Conversion</a>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"open(newLead)\"> <i class=\"fas fa-plus\"></i>\r\n          New Lead </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n\r\n    <table id=\"dtable\" class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>ID</th>\r\n          <th width=\"50\" class=\"select-filter\">Status</th>\r\n          <th>Name</th>\r\n          <th scope=\"col\">Company</th>\r\n          <th scope=\"col\">Website</th>\r\n          <th scope=\"col\" class=\"select-filter\">Industries</th>\r\n          <th scope=\"col\" class=\"select-filter\">Lead Source</th>\r\n          <th scope=\"col\" class=\"select-filter\">Account Manager</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tfoot>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n\r\n        </tr>\r\n      </tfoot>\r\n\r\n    </table>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #newLead let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">New Lead</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-12 bg-light mb-2\">\r\n          <strong>Contact</strong>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h1\" class=\"col-4 col-form-label\"> First Name* </label>\r\n            <div class=\"col-2\">\r\n              <select class=\"form-control border\" [(ngModel)]=\"model.id_title\" name=\"id_title\">\r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.title\">{{x.name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.first_name\" name=\"first_name\"\r\n                #first_name=\"ngModel\" id=\"h1\" required>\r\n              <small [hidden]=\"first_name.valid || first_name.pristine\" class=\"text-danger\"> First name is\r\n                required</small>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h2\" class=\"col-sm-4 col-form-label\"> Last Name</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.last_name\" name=\"last_name\" id=\"h2\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h3\" class=\"col-sm-4 col-form-label\">Email</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"email\" class=\"form-control border\" [(ngModel)]=\"model.email\" name=\"email\" id=\"h3\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h31\" class=\"col-sm-4 col-form-label\">Mobile</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.mobile\" name=\"mobile\" id=\"h31\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h31\" class=\"col-sm-4 col-form-label\">Sex</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\" [(ngModel)]=\"model.sex\" id=\"sex\" name=\"sex\">\r\n                <option value=\"1\">Male</option>\r\n                <option value=\"2\">Female</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h31\" class=\"col-sm-4 col-form-label\">Birthdate</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" id=\"birthdate\" [(ngModel)]=\"model.birthdate\"\r\n                (click)=\"bd.toggle()\" ngbDatepicker #bd=\"ngbDatepicker\" name=\"birthdate\"\r\n                [startDate]=\"{year: 1980, month: 1}\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h5\" class=\"col-sm-4 col-form-label\">Lead Status </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\" style=\"width: auto;\" [(ngModel)]=\"model.id_lead_status\"\r\n                name=\"id_lead_status\" id=\"h5\">\r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.status\">{{x.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h5a\" class=\"col-sm-4 col-form-label\">Position </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.position\" name=\"position\" id=\"h5a\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h5b\" class=\"col-sm-4 col-form-label\">Department </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.department\" name=\"department\" id=\"h5b\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h5\" class=\"col-sm-4 col-form-label\">Lead Source </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\" [(ngModel)]=\"model.id_lead_source\" name=\"id_lead_source\" id=\"h5\">\r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.lead_source\">{{x.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters d-none\">\r\n            <label for=\"h6\" class=\"col-sm-4 col-form-label\"> Lead owner </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\" [(ngModel)]=\"model.id_user\" name=\"id_user\" id=\"h6\">\r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.id_user\">{{x.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12 bg-light mb-2\">\r\n          <strong>Company</strong>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <span [hidden]=\"!dbCompany\">\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h20\" class=\"col-sm-4 col-form-label\">Company*</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control border\" id=\"h14\" [(ngModel)]=\"model.id_company\" name=\"id_company\" id=\"h20\"  required (change)=\"fnRequestCompanyData();\">\r\n                  <option [ngValue]=\"x.id\" *ngFor=\"let x of selectedCompany\">{{x.name}}</option>\r\n                </select>\r\n                <div>\r\n                  <small><a href=\"javascript:;\" (click)=\"dbCompany=false; model.company ='';   \">Back</a></small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </span>\r\n\r\n          <span [hidden]=\"dbCompany\">\r\n            <div class=\"form-group row no-gutters\">\r\n              <label for=\"h12\" class=\"col-sm-4 col-form-label\">Company*</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.company\" name=\"company\"\r\n                  #company=\"ngModel\" id=\"h12\" required>\r\n                <small [hidden]=\"company.valid || company.pristine\" class=\"text-danger\"> Company is required</small>\r\n                <div>\r\n\r\n                  <small><a href=\"javascript:;\" (click)=\"dbCompany=true; model.company ='null';httpCompany(); \">Select\r\n                      from database</a></small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </span>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h14\" class=\"col-sm-4 col-form-label\">Company Class</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control form-modal\" [(ngModel)]=\"model.id_company_class\"\r\n                [ngModelOptions]=\"{standalone: true}\">\r\n                <option value=\"{{x.id}}\" *ngFor=\"let x of selected.company_class\"> {{x.name}} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h15\" class=\"col-sm-4 col-form-label\">Website</label>\r\n            <div class=\"col-sm-8\" id=\"15\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.website\" name=\"website\" id=\"h15\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h4\" class=\"col-sm-4 col-form-label\">Phone</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.phone\" name=\"phone\" id=\"h4\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h4\" class=\"col-sm-4 col-form-label\">Fax</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.fax\" name=\"fax\" id=\"h4\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h14\" class=\"col-sm-4 col-form-label\">Industry</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\" id=\"h14\" [(ngModel)]=\"model.id_industry\" name=\"id_industry\">\r\n                <option value=\"0\"> - Select - </option>\r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.industry\">{{x.name}}</option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21\" class=\"col-sm-4 col-form-label\">Address</label>\r\n            <div class=\"col-sm-8 mb-1\">\r\n              <textarea class=\"form-control border\" [(ngModel)]=\"model.address_street\" placeholder=\"Street\"\r\n                name=\"address_street\" id=\"h21a\"> </textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21b\" class=\"col-sm-4 col-form-label\">City</label>\r\n            <div class=\"col-sm-8 mb-1\">\r\n              <input type=\"text\" class=\"form-control border\" maxlength=\"250\" [(ngModel)]=\"model.address_city\"\r\n                placeholder=\"City\" name=\"address_city\" id=\"h21b\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21c\" class=\"col-sm-4 col-form-label\">State</label>\r\n            <div class=\"col-sm-8 mb-1\">\r\n              <input type=\"text\" class=\"form-control border\" maxlength=\"250\" [(ngModel)]=\"model.address_state\"\r\n                placeholder=\"State\" name=\"address_state\" id=\"h21c\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21d\" class=\"col-sm-4 col-form-label\">Code</label>\r\n            <div class=\"col-sm-8 mb-1\">\r\n              <input type=\"text\" class=\"form-control border\" maxlength=\"6\" [(ngModel)]=\"model.address_code\"\r\n                placeholder=\"Postal Code\" name=\"address_code\" id=\"h21d\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21e\" class=\"col-sm-4 col-form-label\">Country</label>\r\n            <div class=\"col-sm-8 mb-1\">\r\n              <input type=\"text\" class=\"form-control border\" maxlength=\"250\" [(ngModel)]=\"model.address_country\"\r\n                placeholder=\"Country\" name=\"address_country\" id=\"h21e\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </form>\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n\r\n    <span [hidden]=\"!submit\">Saving, Please wait...</span>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n    <!-- <button type=\"submit\" class=\"btn btn-outline-primary\" (click)=\"onSubmit('next');\"\r\n      [disabled]=\"!myForm.form.valid\">Save &\r\n      Next</button>-->\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit();\" [disabled]=\"!myForm.form.valid\">Save</button>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n\r\n<ng-template #markUpdate let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Update Status\r\n\r\n\r\n    </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white\">\r\n    <div [hidden]=\"!itemsSelected.length\">\r\n\r\n      <div [ngSwitch]=\"selectModal\">\r\n        <!-- the same view can be shown in more than one case -->\r\n        <span *ngSwitchCase=\"1\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"h50\" class=\"col-2 col-form-label\">Lead Status </label>\r\n            <div class=\"col-3\">\r\n              <select class=\"form-control border\" [(ngModel)]=\"id_lead_status\" id=\"h50\">\r\n                <option [ngValue]=\"x.id\" *ngFor=\"let x of selected.status\">{{x.name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <button type=\"button\" class=\"btn btn-classic btn-sm mx-1\" (click)=\"fn_updateLeadStatus();\">Yes</button>\r\n              <button type=\"button\" class=\"btn btn-classic btn-sm\"\r\n                (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n            </div>\r\n          </div>\r\n\r\n        </span>\r\n\r\n        <span *ngSwitchCase=\"2\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-3\">\r\n              <div class=\"text-danger\">\r\n                Delete selected lead ?\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"fn_delete();\">Yes</button>\r\n              <button type=\"button\" class=\"btn btn-classic btn-sm\"\r\n                (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </span>\r\n        <span *ngSwitchDefault>.3.</span>\r\n      </div>\r\n\r\n\r\n\r\n      <table class=\"table border table-hover  table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>Company</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let x of itemsSelected; let i = index\">\r\n            <td>{{ i + 1}}</td>\r\n            <td>{{x.id}}</td>\r\n            <td>{{x.name}}</td>\r\n            <td>{{x.company}}</td>\r\n\r\n            <th> <a href=\"javascript:;\" (click)=\"fn_removeItemSelected(x)\"><i class=\"fas fa-times\"></i></a> </th>\r\n          </tr>\r\n        </tbody>\r\n\r\n\r\n      </table>\r\n    </div>\r\n    <div [hidden]=\"itemsSelected.length\">\r\n      <div class=\"text-center\">\r\n        Empty data.\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper d-flex align-items-center justify-content-center\">\n  <div class=\"card shadow-sm\" style=\"width: 380px;\">\n    <div class=\"card-body p-4\">\n\n      <div class=\"text-center mb-4\">\n        <h4 class=\"font-weight-bold\">Login</h4>\n        <p class=\"text-muted small mb-0\">Masuk untuk melanjutkan</p>\n      </div>\n\n      <div class=\"alert alert-danger py-2\" *ngIf=\"errorMessage\">\n        {{ errorMessage }}\n      </div>\n\n      <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input\n            type=\"text\"\n            id=\"username\"\n            name=\"username\"\n            class=\"form-control\"\n            [(ngModel)]=\"username\"\n            placeholder=\"Masukkan username\"\n            required\n            autocomplete=\"username\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            id=\"password\"\n            name=\"password\"\n            class=\"form-control\"\n            [(ngModel)]=\"password\"\n            placeholder=\"Masukkan password\"\n            required\n            autocomplete=\"current-password\">\n        </div>\n\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary btn-block\"\n          [disabled]=\"isLoading\">\n          <span *ngIf=\"isLoading\" class=\"spinner-border spinner-border-sm mr-2\"></span>\n          {{ isLoading ? 'Memproses...' : 'Login' }}\n        </button>\n\n      </form>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lost/lost-detail/lost-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lost/lost-detail/lost-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n\r\n<div class=\"container-fluid bg-light border py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/lost' ]\">Lost</a> / <a\r\n                    [routerLink]=\"[ '/lost/',id ]\">{{items.name}}</a> </small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Menu & Information -->\r\n<div class=\"container-fluid\">\r\n    <!-- Header  -->\r\n    <div class=\"row border-bottom \">\r\n\r\n        <div class=\"col-3 bg-light py-2\">\r\n            <div class=\"module-name\">\r\n                <strong>LOST</strong>\r\n                <b class=\"text-primary\">{{items.name}}</b>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-9 bg-light text-right py-2\">\r\n\r\n        \r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"rollback();\"> <i\r\n                    class=\"fas fa-edit\"></i> Rollback To  Opportunity </button>\r\n \r\n            <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [routerLink]=\"[ '/lost' ]\" title=\"back\"> <i\r\n                    class=\"fas fa-times\"></i> </button>\r\n        </div>\r\n\r\n        <div class=\"col-12 py-2\">\r\n            <table class=\"table-p0\">\r\n                <tr>\r\n                    <td> <small> Company</small> </td>\r\n                    <td> <small> Start Date &  Closed Date </small> </td>\r\n                    <td> <small> Timeline Project </small> </td> \r\n                    <td> <small> Reason Lost </small> </td>\r\n                    <td> <small> Amount </small> </td>\r\n                  \r\n                </tr>\r\n\r\n                <tr>\r\n                    <td> <b class=\"text-primary\"> <a  [routerLink]=\"[ '/company', items.id_company ]\">{{items.company}}</a> </b> </td>\r\n                    <td> <b class=\"text-primary\"> {{items.start_date  |date }} - {{items.closed_date  |date }}</b> </td>\r\n                    <td> <b class=\"text-primary\"> {{items.timeline }} days</b> </td>\r\n                    <td> <b class=\"text-primary\"> {{items.closed_reason }}</b> </td>\r\n\r\n                    <td> <b class=\"text-primary\"> {{items.currency}} {{items.amount | number}} </b> </td>\r\n                 \r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container-fluid  bg-white\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-9 col-md-8\">\r\n\r\n\r\n\r\n            <div class=\"py-2\">\r\n                <ngb-tabset type=\"pills\">\r\n\r\n\r\n\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle>Detail</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"border-top py-2 my-2\">\r\n                                <!-- detail -->\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12 bg-light\">\r\n                                        <strong>Information</strong>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <table class=\"table table-borderless\">\r\n                                            <tr>\r\n                                                <td width=\"200\">Opportunity Name</td>\r\n                                                <td> \r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.name}}\" readonly> \r\n                                                </td>\r\n                                            </tr>\r\n\r\n\r\n\r\n                                            <tr>\r\n                                                <td>Account Manager</td>\r\n                                                <td>  <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.user}}\" readonly>  </td>\r\n                                            </tr>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12 bg-light\">\r\n                                        <strong>Detail</strong>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12 col-lg-6\">\r\n                                        <table class=\"table table-borderless\">\r\n\r\n                                            <tr width=\"40%\">\r\n                                                <td>Contact</td>\r\n                                                <td>  <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.contact}}\" readonly> </td>\r\n                                            </tr>\r\n\r\n                                            <tr width=\"40%\">\r\n                                                <td>Lead Source</td>\r\n                                                <td>  <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.lead_source}}\" readonly> </td>\r\n                                            </tr>\r\n\r\n\r\n                                            <tr>\r\n                                                <td>Industry</td>\r\n                                                <td>\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.industry}}\" readonly>\r\n                                                </td>\r\n                                            </tr>\r\n\r\n\r\n                                            <tr>\r\n                                                <td>Started Date</td>\r\n                                                <td>\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.start_date | date:'d MMM y  hh:mm a'}}\" readonly> \r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Expecting Closing Date</td>\r\n                                                <td>\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.expecting_closing_date | date:'d MMM y  hh:mm a'}}\" readonly> \r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12 col-lg-6\">\r\n                                        <table class=\"table table-borderless\">\r\n\r\n                                            <tr>\r\n                                                <td width=\"40%\">Amount</td>\r\n                                                <td>\r\n                                                   \r\n\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"   value=\"{{items.currency}} {{items.amount |number}}\" [readonly]=\"isReadOnly\">\r\n\r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Stage</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"\r\n                                                        value=\"{{items.stage}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Probability (%)</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"\r\n                                                        value=\"{{items.progress}} %\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td><label>Created Date</label></td>\r\n                                                <td>\r\n                                                    <input type=\"text\" class=\"form-control form-modal\"\r\n                                                        value=\" {{items.input_date | date:'d MMM y  hh:mm a'}}\"\r\n                                                        [readonly]=\"isReadOnly\">\r\n                                                    <small> by {{items.input_by}}</small>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td><label>Update Date</label></td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"\r\n                                                        value=\" {{items.update_date | date:'d MMM y  hh:mm a'}}\"\r\n                                                        [readonly]=\"isReadOnly\">\r\n                                                    <small> by {{items.update_by}} </small>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"col-12 bg-light\">\r\n                                        <strong>More Information</strong>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12 col-lg-12\">\r\n                                        <table class=\"table table-borderless\">\r\n\r\n                                            <tr>\r\n                                                <td width=\"30%\">Opportunity Budget (IDR)</td>\r\n                                                <td>  <input type=\"text\" class=\"form-control form-modal\"  value=\"{{items.currency}} {{items.budget | number}}\" [readonly]=\"isReadOnly\">  </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Competitor</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"  value=\"{{items.competitor}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n\r\n                                           \r\n                                            <tr>\r\n                                                <td>Comparison with competitor</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"  value=\"{{items.comparison_with_competitor}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Critical point</td>\r\n                                                <td> <input type=\"text\" class=\"form-control form-modal\"  value=\"{{items.critical_point}}\" [readonly]=\"isReadOnly\"> </td>\r\n                                            </tr>\r\n \r\n\r\n                                            <tr>\r\n                                                <td>Our proposal</td>\r\n                                                <td> <textarea  class=\"form-control form-modal\"  [readonly]=\"isReadOnly\">{{items.our_proposal}}</textarea>  </td>\r\n                                            </tr>\r\n \r\n\r\n                                            <tr>\r\n                                                <td>Other of Analysis</td>\r\n                                                <td><textarea  class=\"form-control form-modal\" [readonly]=\"isReadOnly\">{{items.notes1}}</textarea> </td>\r\n                                            </tr>\r\n \r\n                                            <tr>\r\n                                                <td>Attachment of Proposal</td>\r\n                                                <td>\r\n                                                    <div class=\"border-bottom pb-2\">\r\n                                                        <a href=\"{{x.url}}\" target=\"_blank\" class=\"border px-2 bg-light mr-1\" *ngFor=\"let x of attachment\" >   {{x.file_name}} </a>\r\n\r\n                                                    </div>\r\n                                                 \r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Notes of Proposal</td>\r\n                                                <td> <textarea  class=\"form-control form-modal\" [readonly]=\"isReadOnly\">{{items.notes2}}</textarea> </td>\r\n                                            </tr>\r\n\r\n\r\n                                            <tr>\r\n                                                <td>Notes of Negotation</td>\r\n                                                <td> <textarea  class=\"form-control form-modal\" [readonly]=\"isReadOnly\">{{items.notes3}}</textarea> </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td>Attachment Purchased Order</td>\r\n                                                <td>\r\n                                                    <div class=\"border-bottom pb-2\">\r\n                                                        <a href=\"{{x.url}}\" target=\"_blank\" class=\"border px-2 bg-light mr-1\" *ngFor=\"let x of attachmentPO\" >   {{x.file_name}} </a>\r\n\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n\r\n\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <!-- End detail-->\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n\r\n\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle>Related</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"border-top py-2 my-2\">\r\n                                <!-- Product -->\r\n                                <div class=\"row py-2\">\r\n                                    <div class=\"col-12 \">\r\n                                        <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-12\"><strong>Products ({{product.length}}) </strong>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-6 mb-2\" *ngFor=\"let x of product; let i = index\">\r\n\r\n                                                    <table class=\"table-items\">\r\n                                                        <thead>\r\n                                                            <tr>\r\n                                                                <th> <a href=\"\">{{x.product.name}}</a></th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n\r\n                                                            <tr>\r\n\r\n                                                                <td> {{x.currency}} {{x.price | number}}</td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n\r\n                                                    <hr [hidden]=\" i - 1 > 0\" class=\"p-0 m-0 mt-2\">\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n  \r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n\r\n\r\n                </ngb-tabset>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-3 col-md-4 border border-top-0\">\r\n\r\n            <!-- QUOTATION -->\r\n            <div class=\"row py-2\">\r\n                <div class=\"col-12 \">\r\n                    <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><strong>Information Order </strong></div>\r\n                        </div>\r\n\r\n                        <div class=\"row mt-2\" [hidden]=\"items.quote.id == '0'\">\r\n                            <div class=\"col-12 my-1\"><b>Quotation </b></div>\r\n                            <div class=\"col-12 mb-1\">\r\n                                <table class=\"table-items\">\r\n\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td> <a [routerLink]=\"[ '/quote', items.quote.id ]\"><b>{{items.quote.quote_number}}\r\n                                                    </b> </a> </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Grand Total : {{items.currency}} {{items.quote.grand_total | number}}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Contact : {{items.quote.contact}} </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Account Manager : {{items.quote.user}} </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                            <div class=\"col-12\">\r\n                                <hr class=\"p-0 m-0 mt-1\">\r\n                            </div>\r\n\r\n                            <div class=\"col-12 my-1\" ><b>Sales Order </b></div>\r\n                            <div class=\"col-12 mb-1\">\r\n                                <table class=\"table-items mb-2 border-bottom\" *ngFor=\"let x of sales_order\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td> <a [routerLink]=\"[ '/salesOrder', x.id ]\"> <b> {{x.so_number}}</b></a>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Grand Total : {{ x.currency }} {{x.grand_total | number}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Created date {{x.expired_date | date}} </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Account Manager : {{x.user}}</td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <!-- Contact Roles -->\r\n            <div class=\"row py-2\">\r\n                <div class=\"col-12 \">\r\n                    <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><strong>Contact Roles ({{contact.length}}) </strong></div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6 mb-2\" *ngFor=\"let x of contact\">\r\n\r\n                                <table class=\"table-items\">\r\n                                    <thead>\r\n                                      <tr>\r\n                                        <th> \r\n                                          <a [routerLink]=\"[ '/contact', x.id ]\">{{x.name}} <span [hidden]=\"!x.active\"> <i class=\"fas fa-check\"></i>\r\n                                            </span></a>\r\n                                          </th>\r\n                                      </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                      <tr>\r\n                                        <td>{{x.position}}, {{x.department}} </td>\r\n                                      </tr>\r\n                  \r\n                                    </tbody>\r\n                                  </table>\r\n\r\n                                <hr class=\"p-0 m-0 mt-2\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<ng-template #createSO let-modal>\r\n    <app-sales-order-create (uploaded)=\"requestEmit($event)\"></app-sales-order-create>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lost/lost.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lost/lost.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n\r\n<div class=\"container-fluid bg-light border py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/lost' ]\">Lost Opportunities</a> </small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n    <div class=\"container-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 \">\r\n          <div class=\"module-name\">\r\n            <h5>OPPORTUNITIES LOST</h5>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n  \r\n    </div>\r\n  \r\n    <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n   \r\n      <table  id=\"dtable\"  class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n  \r\n            <th width=\"50\" >ID</th>   \r\n            <th >Companies</th>\r\n            <th >Opportunities Name</th> \r\n            <th scope=\"col\">Timeline (days)</th>  \r\n            <th scope=\"col\"> Amount</th>   \r\n\r\n            <th scope=\"col\"  class=\"select-filter\">Reason Lost</th>\r\n\r\n            <th scope=\"col\"  class=\"select-filter\">Account Manager</th>\r\n       \r\n          </tr>\r\n        </thead>\r\n  \r\n        <tfoot>\r\n          <tr>\r\n            <th></th> \r\n            <th></th>  \r\n            <th></th>  \r\n\r\n            <th></th>\r\n            <th></th> \r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </tfoot>\r\n      \r\n      </table>\r\n   \r\n    </div>\r\n  \r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-class/master-class.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master-class/master-class.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/master/leadSource' ]\">Master Class</a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  \"> \r\n    <div class=\"row\"> \r\n        <div class=\"col-3 py-2\">\r\n            <div class=\"module-name\">\r\n                <h4>Master Class</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container  bg-light my-4 border py-2 shadow-sm rounded\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-right mb-3\">\r\n\r\n            <span [hidden]=\"!isUpdate\">Loading...</span>\r\n\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=false\" [hidden]=\"!isReadonly\" class=\"btn btn-classic mx-1\"><i class=\"fas fa-edit\"></i> Editable </a>\r\n\r\n           \r\n            <a href=\"javascript:;\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"far fa-save\"></i>  Save </a>\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=true\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"fas fa-check\"></i> Finish </a>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-hover table-striped border bg-white border-top border-bottom pointer\">\r\n                <thead class=\"thead-light\">\r\n                  <tr> \r\n                    <th class=\"text-center\" width=\"50\">No</th>\r\n                    <th>Name</th> \r\n                    <th width=\"50\"></th>\r\n         \r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let x of items; let i = index\"> \r\n                    <td class=\"text-center\">{{i+1}}</td>\r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.name}}  </div>\r\n\r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.name\" >\r\n                        \r\n\r\n                    </td> \r\n                    <td>\r\n                        <a href=\"javascript:;\" (click)=\"fn_delete(x);\"  [hidden]=\"isReadonly\">  <i class=\"far fa-trash-alt\"></i> </a>\r\n                    </td> \r\n                  </tr> \r\n                </tbody>\r\n              </table>\r\n        </div>\r\n\r\n        <div class=\"col-12 text-right\" [hidden]=\"isReadonly\" >\r\n\r\n            <input type=\"text\" class=\"form-control form-control-sm w-25 inline\" [(ngModel)]=\"newName\" placeholder=\"New Class Name\"  >\r\n                        \r\n            <a href=\"javascript:;\" class=\"btn btn-classic  mx-1\" (click)=\"insert();\"><i class=\"fas fa-plus\"></i>  Add Class</a>\r\n        </div>\r\n        \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-currency/master-currency.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master-currency/master-currency.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/master/industry' ]\">Currency</a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  \"> \r\n    <div class=\"row\"> \r\n        <div class=\"col-3 py-2\">\r\n            <div class=\"module-name\">\r\n                <h4>Currency</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container  bg-light my-4 border py-2 shadow-sm rounded\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-right mb-3\">\r\n\r\n            <span [hidden]=\"!isUpdate\">Loading...</span>\r\n\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=false\" [hidden]=\"!isReadonly\" class=\"btn btn-classic mx-1\"><i class=\"fas fa-edit\"></i> Editable </a>\r\n\r\n           \r\n            <a href=\"javascript:;\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"far fa-save\"></i>  Save </a>\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=true\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"fas fa-check\"></i> Finish </a>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-hover table-striped border bg-white border-top border-bottom pointer\">\r\n                <thead class=\"thead-light\">\r\n                  <tr> \r\n                    <th class=\"text-center\" width=\"50\">No</th>\r\n                    <th class=\"text-center\" width=\"50\"></th> \r\n                    <th>Name</th> \r\n                    <th>symbol</th> \r\n                    <th>code</th> \r\n                    <th>value</th>  \r\n                    \r\n                    <th width=\"50\"></th>\r\n         \r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let x of items; let i = index\"> \r\n                    <td class=\"text-center\">{{i+1}}</td>\r\n                    <td class=\"text-center\">   {{x.isDefault == '1' ? 'Active' : ''}} </td>\r\n                    \r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.name}}  </div> \r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.name\" > \r\n                    </td> \r\n\r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.symbol}}  </div> \r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.symbol\" > \r\n                    </td> \r\n         \r\n\r\n\r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.code}}  </div> \r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.code\" > \r\n                    </td> \r\n\r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.value | number}}  </div> \r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.value\" > \r\n                    </td> \r\n \r\n\r\n                    <td>\r\n                        <a href=\"javascript:;\" (click)=\"fn_delete(x);\"  [hidden]=\"isReadonly\">  <i class=\"far fa-trash-alt\"></i> </a>\r\n                    </td> \r\n                  </tr> \r\n                </tbody>\r\n              </table>\r\n        </div>\r\n\r\n        <div class=\"col-12 text-right\" [hidden]=\"isReadonly\" >\r\n\r\n            <input type=\"text\" class=\"form-control form-control-sm w-25 inline\" [(ngModel)]=\"newName\" placeholder=\"Name of Currency\"  >\r\n                        \r\n            <a href=\"javascript:;\" class=\"btn btn-classic  mx-1\" (click)=\"insert();\"><i class=\"fas fa-plus\"></i>  Add Currency </a>\r\n        </div>\r\n        \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-industry/master-industry.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master-industry/master-industry.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/master/industry' ]\">Master Industries</a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  \"> \r\n    <div class=\"row\"> \r\n        <div class=\"col-3 py-2\">\r\n            <div class=\"module-name\">\r\n                <h4>Master Industries</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container  bg-light my-4 border py-2 shadow-sm rounded\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-right mb-3\">\r\n\r\n            <span [hidden]=\"!isUpdate\">Loading...</span>\r\n\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=false\" [hidden]=\"!isReadonly\" class=\"btn btn-classic mx-1\"><i class=\"fas fa-edit\"></i> Editable </a>\r\n\r\n           \r\n            <a href=\"javascript:;\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"far fa-save\"></i>  Save </a>\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=true\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"fas fa-check\"></i> Finish </a>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-hover table-striped border bg-white border-top border-bottom pointer\">\r\n                <thead class=\"thead-light\">\r\n                  <tr> \r\n                    <th class=\"text-center\" width=\"50\">No</th>\r\n                    <th>Name</th> \r\n                    <th>Background Color</th> \r\n                    <th width=\"50\"></th>\r\n         \r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let x of items; let i = index\"> \r\n                    <td class=\"text-center\">{{i+1}}</td>\r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.name}}  </div>\r\n\r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.name\" >\r\n                        \r\n\r\n                    </td> \r\n\r\n\r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.backgroundColor}}  </div>\r\n\r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.backgroundColor\" >\r\n                    </td>\r\n\r\n\r\n                    <td>\r\n                        <a href=\"javascript:;\" (click)=\"fn_delete(x);\"  [hidden]=\"isReadonly\">  <i class=\"far fa-trash-alt\"></i> </a>\r\n                    </td> \r\n                  </tr> \r\n                </tbody>\r\n              </table>\r\n        </div>\r\n\r\n        <div class=\"col-12 text-right\" [hidden]=\"isReadonly\" >\r\n\r\n            <input type=\"text\" class=\"form-control form-control-sm w-25 inline\" [(ngModel)]=\"newName\" placeholder=\"New Industry Name\"  >\r\n                        \r\n            <a href=\"javascript:;\" class=\"btn btn-classic  mx-1\" (click)=\"insert();\"><i class=\"fas fa-plus\"></i>  Add Industry </a>\r\n        </div>\r\n        \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-lead-source/master-lead-source.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master-lead-source/master-lead-source.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/master/leadSource' ]\">Master Leads Source</a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  \"> \r\n    <div class=\"row\"> \r\n        <div class=\"col-3 py-2\">\r\n            <div class=\"module-name\">\r\n                <h4>Master Leads Source</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container  bg-light my-4 border py-2 shadow-sm rounded\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-right mb-3\">\r\n\r\n            <span [hidden]=\"!isUpdate\">Loading...</span>\r\n\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=false\" [hidden]=\"!isReadonly\" class=\"btn btn-classic mx-1\"><i class=\"fas fa-edit\"></i> Editable </a>\r\n\r\n           \r\n            <a href=\"javascript:;\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"far fa-save\"></i>  Save </a>\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=true\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"fas fa-check\"></i> Finish </a>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-hover table-striped border bg-white border-top border-bottom pointer\">\r\n                <thead class=\"thead-light\">\r\n                  <tr> \r\n                    <th class=\"text-center\" width=\"50\">No</th>\r\n                    <th>Name</th> \r\n                    <th>Background Color</th> \r\n                    \r\n                    <th width=\"50\"></th>\r\n         \r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let x of items; let i = index\"> \r\n                    <td class=\"text-center\">{{i+1}}</td>\r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.name}}  </div>\r\n\r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.name\" >\r\n                    </td> \r\n\r\n\r\n                    <td>\r\n                        <div [hidden]=\"!isReadonly\">  {{x.backgroundColor}}  </div>\r\n\r\n                        <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\" [hidden]=\"isReadonly\" [(ngModel)]=\"x.backgroundColor\" >\r\n                    </td>\r\n\r\n                    <td>\r\n                        <a href=\"javascript:;\" (click)=\"fn_delete(x);\"  [hidden]=\"isReadonly\">  <i class=\"far fa-trash-alt\"></i> </a>\r\n                    </td> \r\n                  </tr> \r\n                </tbody>\r\n              </table>\r\n        </div>\r\n\r\n        <div class=\"col-12 text-right\" [hidden]=\"isReadonly\" >\r\n\r\n            <input type=\"text\" class=\"form-control form-control-sm w-25 inline\" [(ngModel)]=\"newName\" placeholder=\"New Lead Source Name\"  >\r\n                        \r\n            <a href=\"javascript:;\" class=\"btn btn-classic  mx-1\" (click)=\"insert();\"><i class=\"fas fa-plus\"></i>  Add Lead Source </a>\r\n        </div>\r\n        \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-opportunity-closed/master-opportunity-closed.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master-opportunity-closed/master-opportunity-closed.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/master/opportunityClosed' ]\">Master Closed Reason</a> </small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  \">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 py-2\">\r\n            <div class=\"module-name\">\r\n                <h4>Master Closed Reason</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container  bg-light my-4 border py-2 shadow-sm rounded\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-right mb-3\">\r\n\r\n            <span [hidden]=\"!isUpdate\">Loading...</span>\r\n\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=false\" [hidden]=\"!isReadonly\" class=\"btn btn-classic mx-1\"><i\r\n                    class=\"fas fa-edit\"></i> Editable </a>\r\n\r\n\r\n            <a href=\"javascript:;\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i class=\"far fa-save\"></i> Save\r\n            </a>\r\n            <a href=\"javascript:;\" (click)=\"isReadonly=true\" [hidden]=\"isReadonly\" class=\"btn btn-classic  mx-1\"><i\r\n                    class=\"fas fa-check\"></i> Finish </a>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-hover table-striped border bg-white border-top border-bottom pointer\">\r\n                <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th class=\"text-center\" width=\"50\">No</th>\r\n                        <th width=\"150\">Type of Close</th>\r\n                        <th>Note</th>\r\n                      \r\n                        <th width=\"50\"></th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of items; let i = index\">\r\n                        <td class=\"text-center\">{{i+1}}</td>\r\n                        <td >\r\n                           \r\n                            <div [hidden]=\"!isReadonly\">  {{x.closed_win =='1' ? \"Deal\":\"Lose\"}} </div>\r\n\r\n                            <select class=\"form-control form-control-sm border-0\" [(ngModel)]=\"x.closed_win\" (change)=\"update(x);\"  [hidden]=\"isReadonly\" >\r\n                                <option value=\"1\">Win</option>\r\n                                <option value=\"0\">Lose</option>\r\n                            </select>\r\n\r\n                        </td>\r\n                        <td>\r\n                            <div [hidden]=\"!isReadonly\"> {{x.note}} </div>\r\n\r\n                            <input type=\"text\" class=\"form-control form-control-sm border-0\" (change)=\"update(x);\"\r\n                                [hidden]=\"isReadonly\" [(ngModel)]=\"x.note\">\r\n\r\n\r\n                        </td>\r\n \r\n\r\n                        <td>\r\n                            <a href=\"javascript:;\" (click)=\"fn_delete(x);\" [hidden]=\"isReadonly\"> <i\r\n                                    class=\"far fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"col-8\" [hidden]=\"isReadonly\">\r\n            <input type=\"text\" class=\"form-control form-control-sm \" [(ngModel)]=\"newName\"\r\n                placeholder=\"Reason Closed win / Lose\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-4\" [hidden]=\"isReadonly\">\r\n            Reason Closed for :\r\n            <select class=\"form-control form-control-sm inline w-auto\" [(ngModel)]=\"newClosed_win\">\r\n                <option value=\"1\"> Deal</option>\r\n                <option value=\"0\"> Lose</option>\r\n            </select>\r\n\r\n            <a href=\"javascript:;\" class=\"btn btn-classic  mx-1\" (click)=\"insert();\"><i class=\"fas fa-plus\"></i> Add\r\n                Reason </a>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"border-bottom shadow-sm navbar navbar-expand fixed-top navbar-dark bg-primary navbar-themes\">\r\n  <a class=\"navbar-brand\" href=\"#\" >SalesTrax</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample02\" aria-controls=\"navbarsExample02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExample02\">\r\n    <ul class=\"navbar-nav mr-auto\"> \r\n\r\n      <li class=\"nav-item {{current == '' ? 'active' : false}} {{current == 'dashboard' ? 'active' : false}} \">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/dashboard']\">Dashboards</a>\r\n      </li> \r\n\r\n\r\n      <li class=\"nav-item {{current == 'activity' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/activity']\">Activities</a>\r\n      </li>  \r\n\r\n \r\n      <li class=\"nav-item {{current == 'lead' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/lead']\">Leads</a>\r\n      </li> \r\n  \r\n      <li class=\"nav-item {{current == 'contact' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/contact']\">Contacts</a>\r\n      </li> \r\n\r\n      <li class=\"nav-item {{current == 'company' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/company']\">Companies</a>\r\n      </li> \r\n\r\n\r\n      <li class=\"nav-item {{current == 'opportunity' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/opportunity']\">Opportunities</a>\r\n      </li> \r\n\r\n\r\n      <li class=\"nav-item {{current == 'priceList' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/priceList']\">Products</a>\r\n      </li> \r\n \r\n\r\n      <li class=\"nav-item  {{current == 'quote' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/quote']\">Quotes</a>\r\n      </li> \r\n\r\n      <li class=\"nav-item {{current == 'deal' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/deal']\">Deals</a>\r\n      </li> \r\n \r\n      <li class=\"nav-item {{current == 'salesOrder' ? 'active' : false}}\">\r\n        <a class=\"nav-link py-0\" href=\"javascript:;\" [routerLink]=\"[ '/salesOrder']\">Sales Orders</a>\r\n      </li> \r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle py-0\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">Reports</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/lead/converted']\">Leads Converted</a> \r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/lost']\">Opportunities Lost</a> \r\n      \r\n         \r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle py-0\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">Users</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"> \r\n          \r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/user']\">Users List</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/accessRight']\">Access Right</a> \r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/accessData']\">Access Data</a>   \r\n        </div>\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle py-0\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">Master Data</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/CCPriceList']\">Pricing Base On Class</a> \r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/master/class']\">Master Class</a> \r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/master/leadSource']\">Master Leads Source</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/master/industry']\">Master Industries</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/master/opportunityClosed']\">Master Closed Reason</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:;\" [routerLink]=\"[ '/master/currency']\">Currency</a>\r\n           \r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <div class=\"form-inline my-2 my-lg-0\">\r\n       \r\n      <ul class=\"navbar-nav mr-auto\">\r\n      \r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle py-0\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">{{username}}</a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdown01\">\r\n            <a class=\"dropdown-item\" href=\"javascript:;\"  [routerLink]=\"[ '/profile']\">Profile</a> \r\n            <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"signout();\">Logout</a> \r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>notfound works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/modal-opportunity/modal-opportunity.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/modal-opportunity/modal-opportunity.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n  \r\n        <div class=\"form-group row no-gutters\">\r\n          <label for=\"h2\" class=\"col-sm-3 col-form-label\"> Company</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control border\" for=\"h2\">\r\n              <option>PT deserunt consequat</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group row no-gutters\">\r\n            <label for=\"h2\" class=\"col-sm-3 col-form-label\"> Expecting Closing Date  </label>\r\n            <div class=\"col-sm-2\">\r\n              <input type=\"text\" class=\"form-control border\" placeholder=\"yyyy-mm-dd\" readonly name=\"dp\"  \r\n                ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" required>\r\n            </div>\r\n          </div>\r\n    \r\n  \r\n        <div class=\"form-group row no-gutters\">\r\n          <label for=\"h3\" class=\"col-sm-3 col-form-label\"> Contact</label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control border\" id=\"h3\">\r\n              <option>- Select - </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n  \r\n      \r\n        <div class=\"form-group row no-gutters\">\r\n          <label for=\"h4\" class=\"col-sm-3 col-form-label\">Opportunity Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control border\" id=\"h4\">\r\n          </div>\r\n        </div>\r\n  \r\n  \r\n        <div class=\"form-group row no-gutters\">\r\n          <label for=\"h4\" class=\"col-sm-3 col-form-label\">Lead source </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control border\">\r\n              <option>Database</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row no-gutters\">\r\n          <label for=\"h4\" class=\"col-sm-3 col-form-label\">Opportunity Owner </label>\r\n          <div class=\"col-sm-8\">\r\n            <select class=\"form-control border\">\r\n              <option>Shaybrina</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n  \r\n  \r\n      </div>\r\n  \r\n      <div class=\"col-12 text-center\">\r\n  \r\n        <button type=\"button\" class=\"btn btn-primary\">Save & Next</button>\r\n  \r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-detail/opportunity-detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-detail/opportunity-detail.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n\r\n<div class=\"container-fluid bg-light border py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/opportunity' ]\">Opportunity</a> / <a\r\n          [routerLink]=\"[ '/opportunity/',id ]\">{{items.name}}</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Menu & Information -->\r\n<div class=\"container-fluid\">\r\n  <!-- Header  -->\r\n  <div class=\"row  \">\r\n\r\n    <div class=\"col-3 bg-light py-2\">\r\n      <div class=\"module-name\">\r\n        <strong>OPPORTUNITY {{items.closed ? \"(\"+items.stage+\")\" :\"\"}}</strong>\r\n        <b class=\"text-primary\">{{items.name}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-9 bg-light text-right py-2\">\r\n\r\n      <div [hidden]=\"!isReadOnly\">\r\n        <span [hidden]=\"!items.final_stage\">\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"openLg('win')\"> <i\r\n              class=\"fas fa-thumbs-up\"></i>\r\n            Closed Deal </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"openLg('lose')\"> <i\r\n              class=\"fas fa-thumbs-down\"></i> Closed Lose </button>\r\n        </span>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\"\r\n          (click)=\"isReadOnly=false; t.select('tab-selectbyid2')\"> <i class=\"fas fa-edit\"></i> Edit </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"fn_delete();\"> <i\r\n            class=\"fas fa-trash-alt\"></i> Delete </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [routerLink]=\"[ '/opportunity' ]\" title=\"back\"> <i\r\n            class=\"fas fa-times\"></i> </button>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div [hidden]=\"isReadOnly\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"isReadOnly=true\" title=\"Done\">Cancel </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 py-2\">\r\n      <table class=\"table-p0\">\r\n        <tr>\r\n          <td> <small> Company</small> </td>\r\n          <td> <small> Expected Close Date </small> </td>\r\n          <td> <small> Amount </small> </td>\r\n          <td> <small> Opportunity Owner </small></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td> <b class=\"text-primary\"> <a [routerLink]=\"[ '/company', items.id_company ]\"> {{items.company}}</a> </b>\r\n          </td>\r\n          <td> <b class=\"text-primary\">\r\n              {{items.expecting_closing_date.day}}/{{items.expecting_closing_date.month}}/{{items.expecting_closing_date.year}}</b>\r\n          </td>\r\n          <td> <b class=\"text-primary\"> {{items.currency}} {{items.amount | number}} </b> </td>\r\n          <td><b class=\"text-primary\"> {{items.user}} </b></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- STEP -->\r\n<div class=\"container-fluid py-1 mb-2 \">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"border rounded bg-light shadow-sm p-2\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n\r\n            <div class=\"arrow-steps clearfix mb-3\">\r\n\r\n              <div *ngFor=\"let x of stage\" (click)=\"nextStage(x);\"\r\n                class=\"step {{ x.done ? 'done' : false }} {{ x.current ? 'current' : false }}\"\r\n                [ngStyle]=\"{'width': width+'%'}\"> <strong class=\"font-source-sans-pro\"> {{x.name}}\r\n                  <span [hidden]=\"!x.done\"> <i class=\"fas fa-check-circle\"></i> </span>\r\n                </strong>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-12\">\r\n\r\n            <div [hidden]=\"id_stage != '100'\">\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"c01\" class=\"col-sm-3 col-12 col-form-label\"> Expected Close Date  </label>\r\n                <div class=\"col-sm-3\">\r\n                  <input type=\"text\" class=\"form-control form-modal border\" placeholder=\"yyyy-mm-dd\"\r\n                    (click)=\"dd.toggle()\" readonly name=\"dd\" id=\"c01\"\r\n                    [(ngModel)]=\"updateOpportunity.expecting_closing_date\" ngbDatepicker #dd=\"ngbDatepicker\">\r\n                  <a href=\"javascript:;\" (click)=\"updateQuiz();\"> <small>Update</small> </a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"c02\" class=\"col-sm-3 col-12 col-form-label\"> Opportunity Budget (IDR) </label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"text\" class=\"form-control form-modal border w-50\" name=\"budget\" currencyMask\r\n                    (change)=\"updateQuiz();\" [(ngModel)]=\"updateOpportunity.budget\" id=\"c02\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"c02\" class=\"col-sm-3 col-12 col-form-label\"> Opportunity product\r\n                  ({{product.length}})</label>\r\n                <div class=\"col-sm-9\">\r\n                  <span *ngFor=\"let x of product; let i = index\" class=\"btn btn-classic mr-1 mb-1\">\r\n                    {{x.product.name}} <a href=\"javascript:;\" (click)=\"fn_delete_prorduct(x);\" class=\"text-danger\"> <i\r\n                        class=\"far fa-trash-alt\"></i> </a>\r\n                  </span>\r\n                  <div>\r\n                    <button class=\"btn btn-classic btn-sm\" (click)=\"open(addPriceList);\"><i class=\"fas fa-plus\"></i>\r\n                      New</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"c091\" class=\"col-sm-3 col-12 col-form-label\">Competitor</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control form-modal border\" name=\"competitor\" (change)=\"updateQuiz();\"\r\n                    [(ngModel)]=\"updateOpportunity.competitor\" id=\"c091\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"c02123\" class=\"col-sm-3 col-12 col-form-label\"> Contact Person</label>\r\n                <div class=\"col-sm-6\">\r\n                  <select id=\"c02123\" class=\"form-control form-modal\" [(ngModel)]=\"updateOpportunity.id_contact\"\r\n                    (change)=\"updateQuiz();\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of contact\">{{x.name}} </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"offset-3 col-6\">\r\n\r\n                  <button type=\"button\" (click)=\"updateQuiz();\" class=\"btn btn-outline-primary mr-2\"> Save Only\r\n                  </button>\r\n\r\n\r\n                  <button type=\"button\" (click)=\"updateStep(100,0)\" class=\"btn btn-primary\"> Done and Next Step\r\n                  </button>\r\n\r\n                  {{loadingUpdateQuiz}}\r\n                  {{updateOpportunity.done}}\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div [hidden]=\"id_stage != '101'\">\r\n              <div class=\"form-group row \">\r\n                <label for=\"b101\" class=\"col-sm-3 col-form-label\">Comparison with competitor </label>\r\n                <div class=\"col-sm-6\">\r\n                  <textarea class=\"form-control border\" name=\"comparison_with_competitor\" (change)=\"updateQuiz();\"\r\n                    [(ngModel)]=\"updateOpportunity.comparison_with_competitor\" id=\"b101\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"b102\" class=\"col-sm-3 col-form-label\">Critical point </label>\r\n                <div class=\"col-sm-6\">\r\n                  <textarea class=\"form-control border\" name=\"critical_point\" (change)=\"updateQuiz();\"\r\n                    [(ngModel)]=\"updateOpportunity.critical_point\" id=\"b102\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"b103\" class=\"col-sm-3 col-form-label\">Our proposal </label>\r\n                <div class=\"col-sm-6\">\r\n                  <textarea class=\"form-control border\" name=\"our_proposal\" [(ngModel)]=\"updateOpportunity.our_proposal\"\r\n                    (change)=\"updateQuiz();\" id=\"b103\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"b104\" class=\"col-sm-3 col-form-label\">Other </label>\r\n                <div class=\"col-sm-6\">\r\n                  <textarea class=\"form-control border\" name=\"notes1\" [(ngModel)]=\"updateOpportunity.notes1\"\r\n                    (change)=\"updateQuiz();\" id=\"b104\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"offset-3 col-6\">\r\n                  <button type=\"button\" (click)=\"updateQuiz();\" class=\"btn btn-outline-primary mr-2\"> Save Only\r\n                  </button>\r\n\r\n                  <button type=\"button\" (click)=\"updateStep(101,0)\" class=\"btn btn-primary\"> Done and Next Step\r\n                  </button>\r\n\r\n \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div [hidden]=\"id_stage != '103'\">\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"b301\" class=\"col-sm-3 col-form-label\">Quotation</label>\r\n                <div class=\"col-sm-6\">\r\n                  <select id=\"b301\" class=\"form-control border\" [(ngModel)]=\"updateOpportunity.id_quote\"\r\n                    (change)=\"updateQuiz();\" name=\"c_id_quote\" required [ngModelOptions]=\"{standalone: true}\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of quotes\">{{x.quotes_number}} ver {{x.version}} - {{x.name}}\r\n                      {{x.syncing ? \"(Syncing)\":\"\"}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"b302\" class=\"col-sm-3 col-form-label\">Attachment</label>\r\n                <div class=\"col-sm-6\">\r\n\r\n\r\n                  <div class=\"row\">\r\n\r\n                    <div class=\"col-11 text-right\">\r\n                      <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n                    </div>\r\n                    <div class=\"col-1\">\r\n                      <button type=\"button\" class=\"btn btn-classic btn-sm\"\r\n                        (click)=\"onUpload('opportunity');\">Upload</button>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 my-1\" *ngFor=\"let x of attachment\">\r\n                      <div class=\"border bg-white p-1 rounded\">\r\n                        <a href=\"{{x.url}}\" target=\"_blank\"><small> {{x.file_name}} </small> </a> &nbsp; <a\r\n                          href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"b304\" class=\"col-sm-3 col-form-label\">Notes </label>\r\n                <div class=\"col-sm-6\">\r\n                  <textarea class=\"form-control border\" name=\"notes2\" [(ngModel)]=\"updateOpportunity.notes2\"\r\n                    (change)=\"updateQuiz();\" id=\"b304\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"offset-3 col-6\">\r\n                  <button type=\"button\" (click)=\"updateQuiz();\" class=\"btn btn-outline-primary mr-2\"> Save Only\r\n                  </button>\r\n\r\n                  <button type=\"button\" (click)=\"updateStep(103,0)\" class=\"btn btn-primary\"> Done and Next Step\r\n                  </button>\r\n                 \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div [hidden]=\"id_stage != '104'\">\r\n\r\n\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"b302\" class=\"col-sm-3 col-form-label\">Attachment Purchased Order</label>\r\n                <div class=\"col-sm-6\">\r\n\r\n\r\n                  <div class=\"row\">\r\n\r\n                    <div class=\"col-11 text-right\">\r\n                      <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n                    </div>\r\n                    <div class=\"col-1\">\r\n                      <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"onUpload('po');\">Upload</button>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 my-1\" *ngFor=\"let x of attachmentPO\">\r\n                      <div class=\"border bg-white p-1 rounded\">\r\n                        <a href=\"{{x.url}}\" target=\"_blank\"><small> {{x.file_name}} </small> </a> &nbsp; <a\r\n                          href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"d104\" class=\"col-sm-3 col-form-label\">Notes </label>\r\n                <div class=\"col-sm-6\">\r\n                  <textarea class=\"form-control border\" name=\"notes3\" [(ngModel)]=\"updateOpportunity.notes3\"\r\n                    (change)=\"updateQuiz();\" id=\"d104\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"d104\" class=\"col-sm-3 col-form-label\"> Final Decision</label>\r\n                <div class=\"col-lg-2 col-3\">\r\n                  <input type=\"radio\" id=\"z01\" name=\"closed_lose\" value=\"0\" [(ngModel)]=\"reason\">\r\n                  <label for=\"z01\" class=\"px-2 text-danger\">\r\n                    <i class=\"fas fa-thumbs-down\"></i>  &nbsp;  <b class=\"\">Closed Lose </b>\r\n                  </label>\r\n\r\n                </div>\r\n                <div class=\"col-lg-2 col-3\">\r\n                  <input type=\"radio\" id=\"z02\" name=\"closed_deal\" value=\"1\" [(ngModel)]=\"reason\">\r\n                  <label for=\"z02\" class=\"px-2 text-primary\">\r\n                    <i class=\"fas fa-thumbs-up\"></i> &nbsp; <b class=\"\"> Closed Deal</b>\r\n                  </label>\r\n                </div>\r\n               \r\n              </div>\r\n              <div class=\"form-group row\" [hidden]=\"!reason\">\r\n \r\n\r\n                  <label for=\"d104\" class=\"col-sm-3 col-form-label\" [hidden]=\"reason != '1'\"> Reason</label>\r\n                  <div class=\"col-sm-4\" [hidden]=\"reason != '1'\">\r\n                    <label> Why win project ?</label>\r\n                    <select class=\"form-control form-control-sm\" [(ngModel)]=\"id_closed_reason\">\r\n                      <option *ngFor=\"let x of reason_win\" value=\"{{x.id}}\">{{x.note}}</option>\r\n                    </select>\r\n                  </div>\r\n \r\n \r\n                  <label for=\"d104\" class=\"col-sm-3 col-form-label\" [hidden]=\"reason != '0'\"> Reason</label>\r\n                  <div class=\"col-sm-4\" [hidden]=\"reason != '0'\">\r\n                    <label> Why lose project ?</label>\r\n                    <select class=\"form-control form-control-sm\" [(ngModel)]=\"id_closed_reason\">  \r\n                      <option *ngFor=\"let x of reason_lose\" value=\"{{x.id}}\">{{x.note}}</option>\r\n                    </select>\r\n                  </div> \r\n \r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"form-group row \">\r\n                <label for=\"d104\" class=\"col-sm-3 col-form-label\"> Final Decision</label>\r\n                <div class=\"col-sm-6\">\r\n                  <button type=\"button\" (click)=\"updateQuiz();\" class=\"btn btn-outline-primary mr-2\"> Save Only\r\n                  </button>\r\n \r\n                  <button type=\"button\" (click)=\"closeOpportunity(104);\" [disabled]=\"!id_closed_reason\" class=\"btn btn-primary mr-2\"><b><i class=\"fas fa-check\"></i>  Submit</b>\r\n                  </button>\r\n\r\n               \r\n             \r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container-fluid  bg-white border-top\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-9 col-md-8\">\r\n\r\n\r\n      <div class=\"py-2\">\r\n        <ngb-tabset type=\"pills\" #t=\"ngbTabset\">\r\n\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>Activity</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <app-widget-activity></app-widget-activity>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n          <ngb-tab id=\"tab-selectbyid2\">\r\n            <ng-template ngbTabTitle>Detail</ng-template>\r\n            <ng-template ngbTabContent>\r\n\r\n              <form (ngSubmit)=\"fn_update()\" #mainForm=\"ngForm\">\r\n                <div class=\"border-top py-2 my-2\">\r\n                  <!-- detail -->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 bg-light\">\r\n                      <strong>Information</strong>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <table class=\"table table-borderless\">\r\n                        <tr>\r\n                          <td width=\"200\">Opportunity Name</td>\r\n                          <td>\r\n                            <input type=\"text\" class=\"form-control form-modal\" id=\"name\" required\r\n                              [(ngModel)]=\"updateOpportunity.name\" name=\"name\" #name=\"ngModel\" [readonly]=\"isReadOnly\">\r\n                            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                              Name is required\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n\r\n                        <tr>\r\n                          <td>Account Manager</td>\r\n                          <td> <select class=\"form-control form-modal\" [disabled]=\"isReadOnly\"\r\n                              [(ngModel)]=\"updateOpportunity.id_user\" [ngModelOptions]=\"{standalone: true}\">\r\n                              <option value=\"{{x.id}}\" *ngFor=\"let x of user\">{{x.name}}</option>\r\n                            </select> </td>\r\n                        </tr>\r\n                      </table>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-12 bg-light\">\r\n                      <strong>Detail</strong>\r\n                    </div>\r\n\r\n                    <div class=\"col-12 col-lg-6\">\r\n                      <table class=\"table table-borderless\">\r\n\r\n                        <tr width=\"40%\">\r\n                          <td>Contact</td>\r\n                          <td> <select class=\"form-control form-modal\" [disabled]=\"isReadOnly\"\r\n                              [(ngModel)]=\"updateOpportunity.id_contact\" [ngModelOptions]=\"{standalone: true}\">\r\n                              <option value=\"{{x.id}}\" *ngFor=\"let x of contact\">{{x.name}} </option>\r\n                            </select> </td>\r\n                        </tr>\r\n\r\n                        <tr width=\"40%\">\r\n                          <td>Lead Source</td>\r\n                          <td> <select class=\"form-control form-modal\" [disabled]=\"isReadOnly\" required\r\n                              [(ngModel)]=\"updateOpportunity.id_lead_source\" [ngModelOptions]=\"{standalone: true}\">\r\n                              <option value=\"{{x.id}}\" *ngFor=\"let x of lead_source\">{{x.name}} </option>\r\n                            </select> </td>\r\n                        </tr>\r\n\r\n\r\n                        <tr>\r\n                          <td>Industry</td>\r\n                          <td>\r\n                            <input type=\"text\" class=\"form-control form-modal\" value=\"{{items.industry}}\" readonly>\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n                        <tr>\r\n                          <td>Started Date</td>\r\n                          <td>\r\n                            <span [hidden]=\"!isReadOnly\">\r\n                              <input type=\"text\" class=\"form-control form-modal w-75\"\r\n                                value=\"{{updateOpportunity.start_date.day}}/{{updateOpportunity.start_date.month}}/{{updateOpportunity.start_date.year}}\"\r\n                                [readonly]=\"isReadOnly\">\r\n                            </span>\r\n\r\n                            <span [hidden]=\"isReadOnly\">\r\n                              <input type=\"text\" class=\"form-control form-modal\" placeholder=\"yyyy-mm-dd\"\r\n                                (click)=\"d.toggle()\" readonly name=\"d\" [(ngModel)]=\"updateOpportunity.start_date\"\r\n                                ngbDatepicker #d=\"ngbDatepicker\" required>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n                        <tr>\r\n                          <td>Expected Close Date</td>\r\n                          <td>\r\n\r\n                            <span [hidden]=\"!isReadOnly\">\r\n                              <input type=\"text\" class=\"form-control form-modal w-75\"\r\n                                value=\" {{updateOpportunity.expecting_closing_date.day}}/{{updateOpportunity.expecting_closing_date.month}}/{{updateOpportunity.expecting_closing_date.year}}\"\r\n                                [readonly]=\"isReadOnly\">\r\n                            </span>\r\n\r\n                            <span [hidden]=\"isReadOnly\">\r\n                              <input type=\"text\" class=\"form-control form-modal\" placeholder=\"yyyy-mm-dd\"\r\n                                (click)=\"de.toggle()\" readonly name=\"de\"\r\n                                [(ngModel)]=\"updateOpportunity.expecting_closing_date\" ngbDatepicker #de=\"ngbDatepicker\"\r\n                                required>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n                      </table>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-12 col-lg-6\">\r\n                      <table class=\"table table-borderless\">\r\n\r\n                        <tr>\r\n                          <td width=\"40%\">Amount</td>\r\n                          <td>\r\n                          \r\n                            <input type=\"text\" class=\"form-control form-modal w-75\" style=\"display: inline-block;\"\r\n                              currencyMask id=\"amount\" [(ngModel)]=\"updateOpportunity.amount\" name=\"amount\"\r\n                              [readonly]=\"isReadOnly\">\r\n\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <td>Stage</td>\r\n                          <td> <input type=\"text\" readonly class=\"form-control form-modal\" value=\"{{items.stage}}\">\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <td>Probability (%)</td>\r\n                          <td> <input type=\"text\" readonly class=\"form-control form-modal\"\r\n                              value=\"{{items.progress}} % \"> </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td><label>Created Date</label></td>\r\n                          <td>\r\n                            <input type=\"text\" readonly class=\"form-control form-modal\"\r\n                              value=\"{{items.input_date | date:'d MMM y  hh:mm a'}}\">\r\n                            <small> by {{items.input_by}}</small>\r\n                          </td>\r\n                        </tr>\r\n                        <tr [hidden]=\"items.update_by == false\">\r\n                          <td><label>Update Date</label></td>\r\n                          <td>\r\n                            <input type=\"text\" readonly class=\"form-control form-modal\"\r\n                              value=\"{{items.update_date | date:'d MMM y  hh:mm a'}}\">\r\n\r\n                            <small> by {{items.update_by}}\r\n                            </small>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                  <!-- End detail-->\r\n                </div>\r\n\r\n                <div class=\"footer-menu bg-white shadow border-top\" [hidden]=\"isReadOnly\">\r\n                  <div class=\"container\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 text-center p-1\">\r\n                        <a class=\"btn btn-outline-secondary m-1\" (click)=\"isReadOnly=true\"> Cancel</a>\r\n                        <button type=\"submit\" class=\"btn btn-primary m-1\" (click)=\"isReadOnly=true\"\r\n                          [disabled]=\"!mainForm.form.valid\">Save</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </form>\r\n\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>Related</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"border-top py-2 my-2\">\r\n                <!-- Product -->\r\n                <div class=\"row py-2\">\r\n                  <div class=\"col-12 \">\r\n                    <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\"><strong>Products ({{product.length}}) </strong></div>\r\n                        <div class=\"col-6 text-right\"> <button class=\"btn btn-classic btn-sm\"\r\n                            (click)=\"open(addPriceList);\"><i class=\"fas fa-plus\"></i> New</button> </div>\r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6 mb-2\" *ngFor=\"let x of product; let i = index\">\r\n\r\n                          <table class=\"table-items\">\r\n                            <thead>\r\n                              <tr>\r\n                                <th> <a href=\"\">{{x.product.name}}</a></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n\r\n                              <tr>\r\n\r\n                                <td> {{x.currency}} {{x.price | number}}</td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n\r\n                          <hr [hidden]=\" i - 1 > 0\" class=\"p-0 m-0 mt-2\">\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"border bg-light p-1 my-2 rounded-sm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                      <strong>Attachment</strong>\r\n                    </div>\r\n                    <div class=\"col-7 text-right\">\r\n\r\n                      <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n\r\n                    </div>\r\n                    <div class=\"col-1\">\r\n                      <button type=\"button\" class=\"btn btn-classic btn-sm\"\r\n                        (click)=\"onUpload('opportunity');\">Upload</button>\r\n                    </div>\r\n\r\n                    <div class=\"col-12\">\r\n                      <table class=\"table table-list table-bordered table-striped\">\r\n                        <thead class=\"thead-light border-top-brown\">\r\n                          <tr>\r\n                            <th>Files</th>\r\n                            <th width=\"100\">Size</th>\r\n                            <th width=\"50\"></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let x of attachment\">\r\n                            <td> <a href=\"{{x.url}}\" target=\"_blank\"> {{x.file_name}}</a> </td>\r\n                            <td> {{x.size }} </td>\r\n                            <td>\r\n                              <div [hidden]=\"isReadOnly\">\r\n                                <a href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i\r\n                                    class=\"fas fa-trash-alt\"></i></a>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n\r\n\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n\r\n        </ngb-tabset>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-3 col-md-4 border border-top-0\">\r\n\r\n      <!-- QUOTATION -->\r\n      <div class=\"row py-2\">\r\n        <div class=\"col-12 \">\r\n          <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-3\"><strong>QUOTATION </strong></div>\r\n              <div class=\"col-9 text-right\"> <button type=\"button\" class=\"btn btn-classic btn-sm mr-1\"\r\n                  (click)=\"openLg(addQuote);\"> <i class=\"fas fa-file-alt\"></i>\r\n                  Generate New Quotes</button> </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6 mb-1\" *ngFor=\"let x of quotes; let i = index\">\r\n\r\n                <table class=\"table-items\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th> <a [routerLink]=\"[ '/quote', x.id ]\"> {{x.quotes_number}} <span [hidden]=\"!x.syncing\"> <i\r\n                              class=\"fas fa-sync-alt\"></i>\r\n                          </span> </a>\r\n\r\n                        <span class=\"px-2\" [hidden]=\"updateOpportunity.id_quote != x.id\"><i\r\n                            class=\"fas fa-check\"></i></span>\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <Tr [hidden]=\"!x.syncing\">\r\n                      <td><small>syncing with Opportunity</small> </td>\r\n                    </Tr>\r\n                    <tr>\r\n                      <td> Grand Total : {{x.currency}} {{x.grand_total | number}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> {{x.expired_date | date}} </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                <hr class=\"p-0 m-0 mt-1\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Contact Roles -->\r\n      <div class=\"row py-2\">\r\n        <div class=\"col-12 \">\r\n          <div class=\"border py-1 px-2 border-top-brown rounded\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\"><strong>Contact Roles ({{contact.length}}) </strong></div>\r\n              <div class=\"col-6 text-right\"> <button class=\"btn btn-classic btn-sm\" (click)=\"open(addContact);\"><i\r\n                    class=\"fas fa-plus\"></i>\r\n                  New</button> </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6 mb-2\" *ngFor=\"let x of contact\">\r\n\r\n                <table class=\"table-items\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>\r\n                        <a [routerLink]=\"[ '/contact', x.id ]\">{{x.name}} <span [hidden]=\"!x.active\"> <i\r\n                              class=\"fas fa-check\"></i>\r\n                          </span></a>\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>{{x.position}}, {{x.department}} </td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n\r\n                <hr class=\"p-0 m-0 mt-2\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div [hidden]=\"isReadOnly\"><br><br></div>\r\n\r\n\r\n<ng-template #addProduct let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Add Products </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th> </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-sm btn-outline-dark\" (click)=\"modal.close('Save click')\">Closed</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #addQuote let-modal>\r\n  <form (ngSubmit)=\"fn_newQuote()\" #quoteForm=\"ngForm\">\r\n    <div class=\"modal-header\">\r\n      <strong class=\"modal-title\" id=\"modal-basic-title\">New Quote </strong>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body bg-white\">\r\n      <div class=\"container-fluid\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12 bg-light\">\r\n            <strong>Quotes Information</strong>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <table class=\"table table-borderless\">\r\n              <tr>\r\n                <td width=\"40%\">Quotes Name</td>\r\n                <td>\r\n                  <input type=\"text\" class=\"form-control form-modal\" id=\"q_name\" required [(ngModel)]=\"quoteModel.name\"\r\n                    name=\"q_name\" #q_name=\"ngModel\">\r\n                  <div [hidden]=\"q_name.valid || q_name.pristine\" class=\"alert alert-danger\">\r\n                    Name is required\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Opportunity Name</td>\r\n                <td> <b> {{items.name}} </b> </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Company Name</td>\r\n                <td> <b>{{items.company}} </b> </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Account Manager</td>\r\n                <td> <select class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.id_user\" name=\"q_id_user\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of user\">{{x.name}}</option>\r\n                  </select> </td>\r\n              </tr>\r\n            </table>\r\n\r\n          </div>\r\n          <div class=\"col-6\">\r\n\r\n            <table class=\"table table-borderless\">\r\n              <tr>\r\n                <td width=\"40%\">Expiration Date</td>\r\n                <td> <input type=\"text\" class=\"form-control form-modal\" placeholder=\"yyyy-mm-dd\" (click)=\"q_d.toggle()\"\r\n                    readonly name=\"q_d\" [(ngModel)]=\"quoteModel.expirationDate\" ngbDatepicker #q_d=\"ngbDatepicker\"\r\n                    required>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Syncing</td>\r\n                <td><input type=\"checkbox\" checked [(ngModel)]=\"quoteModel.syncing\" name=\"q_syncing\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Status</td>\r\n                <td>\r\n                  <select class=\"form-control form-modal\">\r\n                    <option value=\"1\">Draft</option>\r\n                  </select>\r\n\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Description</td>\r\n                <td>\r\n                  <textarea class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.description\"\r\n                    name=\"q_description\"></textarea>\r\n\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12 bg-light\">\r\n            <strong> Prepared For</strong>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <table class=\"table table-borderless\">\r\n              <tr>\r\n                <td width=\"40%\">Contact Name</td>\r\n                <td><select class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.id_contact\" name=\"q_id_contact\"\r\n                    (change)=\"lookingContact($event)\">\r\n                    <option value=\"{{x.id}}\" *ngFor=\"let x of contact\">{{x.name}}</option>\r\n                  </select></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Email</td>\r\n                <td>\r\n                  <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.email\" name=\"q_email\">\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <table class=\"table table-borderless\">\r\n              <tr>\r\n                <td width=\"40%\">Phone</td>\r\n                <td> <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.phone\" name=\"q_phone\">\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Fax</td>\r\n                <td> <input type=\"text\" class=\"form-control form-modal\" id=\"\" [(ngModel)]=\"quoteModel.fax\" name=\"q_fax\">\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12 bg-light\">\r\n            <strong> Address Information</strong>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <table class=\"table table-borderless\">\r\n              <tr>\r\n                <td width=\"40%\">Bill To Name</td>\r\n                <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.bill_name\"\r\n                    name=\"q_bill_name\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Bill To Street</td>\r\n                <td> <textarea class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.bill_street1\"\r\n                    name=\"q_bill_street1\"> </textarea>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Bill To City</td>\r\n                <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.bill_city\"\r\n                    name=\"q_bill_city\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Bill To State /Province</td>\r\n                <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.bill_state\"\r\n                    name=\"q_bill_state\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Bill To Postal Code</td>\r\n                <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.bill_code\"\r\n                    name=\"q_bill_code\"></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <table class=\"table table-borderless\">\r\n              <tr>\r\n                <td width=\"40%\">Ship To Name</td>\r\n                <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.ship_name\"\r\n                    name=\"q_ship_name\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Ship To Street</td>\r\n                <td>\r\n                  <textarea class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.ship_street1\"\r\n                    name=\"q_ship_street1\"> </textarea>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Ship To City</td>\r\n                <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.ship_city\"\r\n                    name=\"q_ship_city\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Ship To State /Province</td>\r\n                <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.ship_state\"\r\n                    name=\"q_ship_state\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Ship To Postal Code</td>\r\n                <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.ship_code\"\r\n                    name=\"q_ship_code\"></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-sm btn-outline-dark\" (click)=\"modal.dismiss('Save click')\">Closed</button>\r\n\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!quoteForm.form.valid\">Submit</button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #addContact let-modal>\r\n  <app-contact-new (uploaded)=\"requestEmit($event)\"></app-contact-new>\r\n</ng-template>\r\n\r\n<ng-template #addPriceList let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Price List </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <app-price-list-modal (uploaded)=\"requestEmit($event)\"></app-price-list-modal>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-edit/opportunity-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-edit/opportunity-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading> \r\n\r\n<app-navigator></app-navigator>\r\n<form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\r\n  <div class=\"container border shadow-sm bg-white\">\r\n\r\n    <div class=\"row \">\r\n      <div class=\"col-6\">\r\n        <small> You are here : <a [routerLink]=\"[ '/opportunity' ]\">Opportunity</a> / <a\r\n            [routerLink]=\"[ '/opportunity/', id ]\">\r\n            {{model.name}}</a> / <a [routerLink]=\"[ '/opportunity/edit/', id ]\">\r\n            Edit </a> </small>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row container-header\">\r\n\r\n      <div class=\"col-6 \">\r\n        <h5>OPPORTUNITY</h5>\r\n      </div>\r\n\r\n      <div class=\"col-6 text-right\">\r\n\r\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [routerLink]=\"[ '/opportunity/',id ]\" title=\"back\"> <i\r\n            class=\"fas fa-times\"></i> </button>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row my-3\">\r\n\r\n      <div class=\"col-6\">\r\n         \r\n        <table class=\"table table-list\">\r\n          <tbody>\r\n\r\n            <tr>\r\n              <td width=\"30%\"><label>Opportunity Name</label></td>\r\n              <td>\r\n                <input type=\"text\" class=\"bg-light\"  required  [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\">\r\n                <small [hidden]=\"name.valid || name.pristine\" class=\"text-danger\"> Opportunity name is\r\n                  required</small>\r\n              </td>\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n              <td><label>Amount</label></td>\r\n              <td>\r\n                IDR 200.000.000,-\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><label>Stage</label></td>\r\n              <td>\r\n                Qualification\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><label>Progress</label></td>\r\n              <td>\r\n                30%\r\n              </td>\r\n            </tr>\r\n\r\n\r\n\r\n\r\n            <tr>\r\n              <td><label>Lead Source</label></td>\r\n              <td>\r\n                <select class=\"bg-light\" [(ngModel)]=\"model.id_lead_source\" name=\"id_lead_source\" required>\r\n             \r\n                  <option [ngValue]=\"x.id\" *ngFor=\"let x of lead_source\">{{x.name}}</option>\r\n                </select>\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><label>Account Manager </label></td>\r\n              <td>\r\n                <select class=\"bg-light\" [(ngModel)]=\"model.id_user\" name=\"id_user\">\r\n                  <option [ngValue]=\"x.id\" *ngFor=\"let x of user\">{{x.name}}</option>\r\n                </select>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"col-6\">\r\n        \r\n        <table class=\"table table-list\">\r\n\r\n          <tbody>\r\n\r\n            <tr>\r\n              <td width=\"30%\"><label>Company</label></td>\r\n              <td> {{items.company}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td><label>Contact</label></td>\r\n              <td>\r\n                <select class=\"bg-light\" [(ngModel)]=\"model.id_contact\" name=\"id_contact\"> \r\n                  <option [ngValue]=\"x.id\" *ngFor=\"let x of contact\">{{x.name}}</option>\r\n                </select>\r\n\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><label>ID Opportunity</label></td>\r\n              <td><span class=\"text-monospace\">{{id}}</span></td>\r\n            </tr>\r\n          </tbody>\r\n\r\n\r\n        </table>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer-menu bg-white shadow border-top\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"offset-1 col-10 text-center p-1\">\r\n          <a class=\"btn btn-outline-secondary m-1\" [routerLink]=\"[ '/opportunity/',id ]\">Cancel</a>\r\n          <button type=\"submit\" class=\"btn btn-primary m-1\" (click)=\"onSubmit();\"\r\n            [disabled]=\"!myForm.form.valid\">Save</button>\r\n        </div>\r\n        <div class=\"col-1\">\r\n          <div class=\"py-3\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-new/opportunity-new.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-new/opportunity-new.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"fn_newOpportunity()\" #opptForm=\"ngForm\">\r\n    <div class=\"modal-header\">\r\n        <strong class=\"modal-title\" id=\"modal-basic-title\">New Opportunity</strong>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body bg-light\">\r\n \r\n        <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21\" class=\"col-sm-3 col-form-label\"> Company </label>\r\n            <div class=\"col-sm-8\">\r\n                <select class=\"form-control form-modal\" id=\"id_company\" name=\"id_company\"  [(ngModel)]=\"model.id_company\" (change)=\"updateContact();\" required>\r\n                    <option *ngFor=\"let x of company\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21\" class=\"col-sm-3 col-form-label\"> Name </label>\r\n            <div class=\"col-sm-8\">\r\n                <select class=\"form-control form-modal\" id=\"id_contact\" name=\"id_contact\"  [(ngModel)]=\"model.id_contact\" required>\r\n                    <option *ngFor=\"let x of contact\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21\" class=\"col-sm-3 col-form-label\"> Opportunity Name </label>\r\n            <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" id=\"name\"   required  [(ngModel)]=\"model.name\" name=\"name\"  #name=\"ngModel\">\r\n                <div [hidden]=\"name.valid || name.pristine\"    class=\"alert alert-danger\">   Name is required  </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group row no-gutters\">\r\n            <label for=\"hx21\" class=\"col-sm-3 col-form-label\"> Lead Source </label>\r\n            <div class=\"col-sm-8\">\r\n                <select class=\"form-control form-modal\" id=\"hx21\" name=\"id_lead_source\"  [(ngModel)]=\"model.id_lead_source\" required >\r\n                    <option *ngFor=\"let x of lead_source\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21\" class=\"col-sm-3 col-form-label\" id=\"h21\">  Amount Estimation (IDR) </label>\r\n            <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control border w-50\" name=\"amount\"   [(ngModel)]=\"model.amount\"\r\n                    maxlength=\"250\" id=\"h21\" currencyMask >\r\n            </div>\r\n        </div>\r\n\r\n \r\n\r\n        <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21\" class=\"col-sm-3 col-form-label\" id=\"s1\"> Expecting Closing Date  </label>\r\n            <div class=\"col-sm-2\">\r\n                <input type=\"text\" id=\"s1\" class=\"form-control border\" name=\"expecting_closing_date\"   [(ngModel)]=\"model.expecting_closing_date\"\r\n                   readonly (click)=\"dp.toggle()\" name=\"dp\" ngbDatepicker\r\n                    #dp=\"ngbDatepicker\" required>\r\n            </div> \r\n        </div>\r\n\r\n        <div class=\"form-group row no-gutters\">\r\n            <label for=\"h21\" class=\"col-sm-3 col-form-label\" id=\"s3\"> Opportunity Onwer </label>\r\n            <div class=\"col-sm-6\">\r\n                <select class=\"form-control form-modal\" id=\"id_user\"  name=\"id_user\"  [(ngModel)]=\"model.id_user\">\r\n                    <option *ngFor=\"let x of user\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                </select>\r\n            </div>\r\n\r\n        </div>\r\n       \r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!opptForm.form.valid\">Save & Next</button>\r\n\r\n    </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n\r\n<div class=\"container-fluid bg-light border py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/opportunity' ]\">Opportunities</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n  <div class=\"container-header\">\r\n\r\n    <div class=\"row \">\r\n\r\n      <div class=\"col-6\">\r\n        <div class=\"module-name\">\r\n          <h5>OPPORTUNITIES</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 text-right\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"open(opportunity)\"> <i\r\n            class=\"fas fa-plus\"></i> New opportunity </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n\r\n    \r\n     \r\n    <table id=\"dtable\" class=\"table table-hover border bg-white border-top border-bottom pointer\" style=\"width:100%\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>ID</th> \r\n          <th scope=\"col\">Opportunity Name</th>\r\n          <th scope=\"col\" class=\"select-filter\">Company</th>\r\n\r\n          <th scope=\"col\" class=\"select-filter\">Stage</th>\r\n          <th scope=\"col\" class=\"select-filter\">Progress</th>\r\n          <th scope=\"col\" class=\"\">Amount</th>\r\n\r\n          <th scope=\"col\">Expecting Close Date</th>\r\n          <th scope=\"col\" class=\"select-filter\">Account Manager</th>\r\n         \r\n        </tr>\r\n      </thead>\r\n\r\n      <tfoot>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th> \r\n\r\n          <th></th> \r\n          <th></th> \r\n          <th></th> \r\n\r\n          <th></th> \r\n          <th></th> \r\n        </tr>\r\n      </tfoot>\r\n      \r\n    </table>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<ng-template #markUpdate let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Delete Opportunity</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white\">\r\n\r\n    <div [hidden]=\"!itemsSelected.length\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-3\">\r\n          <div class=\"text-danger\">\r\n            Delete selected Opportunity ?\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm mx-1\" (click)=\"fn_delete();\">Yes</button>\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm mx-1\"\r\n            (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table border table-hover  table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Name Opportunity</th>\r\n            <th>Company</th>\r\n            <th>Contact</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let x of itemsSelected; let i = index\">\r\n            <td>{{ i + 1}}</td>\r\n            <td>{{x.name}}</td>\r\n            <td>{{x.company}}</td>\r\n            <td>{{x.contact}}</td>\r\n            <th> <a href=\"javascript:;\" (click)=\"fn_removeItemSelected(x)\"><i class=\"fas fa-times\"></i></a> </th>\r\n          </tr>\r\n        </tbody>\r\n\r\n\r\n      </table>\r\n    </div>\r\n    <div [hidden]=\"itemsSelected.length\">\r\n      <div class=\"text-center\">\r\n        Empty data.\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #opportunity let-modal>\r\n  <app-opportunity-new (uploaded)=\"requestEmit($event)\"></app-opportunity-new>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-catalog/price-list-catalog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-catalog/price-list-catalog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n \r\n<app-navigator></app-navigator>\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <small> You are here :\r\n        <a [routerLink]=\"[ '/priceList' ]\">Price List</a> /\r\n        <a [routerLink]=\"[ '/priceList',id ]\">{{pricelist}}</a>  \r\n      </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid \">\r\n\r\n  <div class=\"container-header\">\r\n\r\n    <div class=\"row \">\r\n\r\n      <div class=\"col-6\">\r\n        <h5>PRICE LIST</h5>\r\n      </div>\r\n      <div class=\"col-6 text-right\"> \r\n        <button type=\"button\" [hidden]=\"editable\" class=\"btn btn-outline-secondary btn-sm\" [routerLink]=\"[ '/priceList' ]\"\r\n          title=\"back\"> <i class=\"fas fa-times\"></i> </button> \r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n \r\n\r\n  <strong>Price List Catalog</strong>\r\n  <div class=\" bg-light  border border-top-brown rounded p-1 my-3\">\r\n    <div class=\"row my-2 \">\r\n      <div class=\"col-8\">\r\n        <button type=\"button\" class=\"btn btn-classic  btn-sm\" (click)=\"modal(content)\" ><i class=\"fas fa-plus\"></i> Add Catalog</button>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <input type=\"text\" class=\"border\" placeholder=\"search\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"scroll-x max-height\">\r\n\r\n      <table class=\"table table-hover border bg-white border-top border-bottom pointer table-striped\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th width=\"50\">No</th>\r\n            <th scope=\"col\">Catalog </th> \r\n            <th scope=\"col\" class=\"text-right\">Total</th>\r\n            <th scope=\"col\">Created Date</th>\r\n\r\n            <th width=\"50\"></th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let x of items;let i = index;\">\r\n            <td> {{i+1}} </td>\r\n            <td> <a [routerLink]=\"[ '/priceList/product', x.id ]\"> {{x.name}}</a> </td>\r\n            <td class=\"text-right\"> {{x.qty}} </td>\r\n            <td width=\"100\"> <small>{{x.input_date | date}} </small> </td>\r\n            <td> <span [hidden]=\"!editable\"> <i class=\"far fa-trash-alt\"></i></span> </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"5\" class=\"text-right\"> <button type=\"button\" class=\"btn btn-classic  btn-sm\"><i\r\n                  class=\"fas fa-plus\"></i> Add Catalog</button></td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n \r\n\r\n\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">New Price List</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-light\">\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-12\">\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h1\" class=\"col-3 col-form-label\"> Catalog name</label>\r\n            <div class=\"col-sm-8\"> \r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.name\" name=\"name\"\r\n                #name=\"ngModel\" id=\"h1\" required>\r\n              <small [hidden]=\"name.valid || name.pristine\" class=\"text-danger\"> Name is  required</small>\r\n            </div>\r\n\r\n          </div>\r\n           \r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h3\" class=\"col-sm-3 col-form-label\">Description</label>\r\n            <div class=\"col-sm-8\">\r\n              <textarea class=\"form-control border\" id=\"h3\" [(ngModel)]=\"model.description\" name=\"description\" ></textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h4\" class=\"col-sm-3 col-form-label\">Status</label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control border\"  [(ngModel)]=\"model.status\" name=\"status\">\r\n                <option value=\"1\">Enable</option>\r\n                <option value=\"0\">Disable</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n{{model |  json}}\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </form>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <span [hidden]=\"!submit\">Saving, Please wait...</span>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-outline-primary\" (click)=\"onSubmit('next');\"\r\n      [disabled]=\"!myForm.form.valid\">Save</button>\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit();\" [disabled]=\"!myForm.form.valid\">Save &\r\n      Go To price list product</button>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-detail/price-list-detail.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-detail/price-list-detail.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/priceList' ]\">Products </a> /\r\n                <a [routerLink]=\"[ '/priceList/',id ]\"> {{items.name}} </a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<form (ngSubmit)=\"fn_update()\" #mainForm=\"ngForm\">\r\n    <div class=\"container-fluid  bg-white\">\r\n\r\n\r\n        <!-- Menu & Information -->\r\n        <div class=\"row border-bottom \">\r\n\r\n            <!-- Header & button -->\r\n            <div class=\"col-3 bg-light py-2\">\r\n                <div class=\"module-name\">\r\n                    <strong>PRODUCTS</strong>\r\n                    <b class=\"text-primary\"> {{items.name}} </b>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-9 bg-light text-right py-2\">\r\n                <div [hidden]=\"!isReadOnly\">\r\n\r\n                    <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [hidden]=\"!accessRules.priceList.update\"\r\n                        (click)=\"isReadOnly=false\"> <i class=\"fas fa-edit\"></i>\r\n                        Edit </button>\r\n\r\n                    <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [hidden]=\"!accessRules.priceList.delete\"\r\n                        (click)=\"fn_delete();\"> <i class=\"fas fa-trash-alt\"></i>\r\n                        Delete </button>\r\n\r\n                    <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [routerLink]=\"[ '/priceList' ]\"\r\n                        title=\"back\">\r\n                        <i class=\"fas fa-times\"></i> </button>\r\n\r\n                </div>\r\n\r\n                <div [hidden]=\"isReadOnly\">\r\n                    <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"isReadOnly=true;httpGet();\"\r\n                        title=\"Done\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!-- Infromation -->\r\n            <div class=\"col-12 py-2\">\r\n\r\n                <table class=\"table-p0\">\r\n                    <tr>\r\n                        <td> <small> ID</small> </td>\r\n                        <td> <small> Sku</small> </td>\r\n                        <td> <small> Name </small></td>\r\n                        <td> <small> Price ( {{items.currency}} ) </small> </td>\r\n                        <td [hidden]=\"priceListUpdate.id_product_type == 20\">  <small> Qty </small> </td>\r\n                        <td> <small> Product Type </small> </td>\r\n\r\n                        <td> <small> Last Update </small> </td>\r\n                    </tr>  \r\n\r\n                    <tr>\r\n                        <td>\r\n                           <b> {{items.id}}</b>\r\n                        </td>\r\n                        <td width=\"150\"> <b class=\"text-primary\" [hidden]=\"!isReadOnly\"> {{items.sku}} </b>\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"priceListUpdate.sku\"\r\n                                name=\"sku\" [hidden]=\"isReadOnly\" [ngModelOptions]=\"{standalone: true}\">\r\n                        </td>\r\n\r\n                        <td> <b class=\"text-primary\" [hidden]=\"!isReadOnly\"> {{items.name}} </b>\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"priceListUpdate.name\"\r\n                                name=\"name\" [hidden]=\"isReadOnly\" required [ngModelOptions]=\"{standalone: true}\"\r\n                                #name=\"ngModel\">\r\n                            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                                Name is required\r\n                            </div>\r\n                        </td>\r\n\r\n\r\n                        <td width=\"150\"> <b class=\"text-primary\" [hidden]=\"!isReadOnly\">\r\n                                {{items.price | number}} </b>\r\n                            <input type=\"text\" class=\"form-control form-control-sm\" style=\"width: 150px;\" currencyMask\r\n                                [(ngModel)]=\"priceListUpdate.price\" name=\"price\" [hidden]=\"isReadOnly\"\r\n                                [ngModelOptions]=\"{standalone: true}\">\r\n                        </td>\r\n\r\n                        <td width=\"80\" [hidden]=\"priceListUpdate.id_product_type == 20\"> <b class=\"text-primary\">{{items.qty | number}} </b>\r\n\r\n                        </td>\r\n\r\n                        <td> <b class=\"text-primary\" [hidden]=\"!isReadOnly\"> {{items.product_type}} </b>\r\n                            <select class=\"form-control form-control-sm\" [(ngModel)]=\"priceListUpdate.id_product_type\"\r\n                                [hidden]=\"isReadOnly\" [ngModelOptions]=\"{standalone: true}\">\r\n                                <option value=\"{{x.id}}\" *ngFor=\"let x of product_type\"> {{x.name}} </option>\r\n                            </select>\r\n                        </td>\r\n\r\n\r\n                        <td><b class=\"text-primary\"> {{items.update_date | date}} </b></td>\r\n\r\n                    </tr>\r\n                </table>\r\n\r\n\r\n         \r\n                <div class=\"footer-menu bg-white shadow border-top\" [hidden]=\"isReadOnly\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 text-center p-1\">\r\n                                <a class=\"btn btn-outline-secondary m-1\" (click)=\"isReadOnly=true;httpGet();\">\r\n                                    Cancel</a>\r\n                                <button type=\"submit\" class=\"btn btn-primary m-1\" (click)=\"isReadOnly=true\"\r\n                                    [disabled]=\"!mainForm.form.valid\">Save</button>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n            <!-- Left side-->\r\n            <div class=\"col-12 col-md-6\">\r\n                <label>Description</label>\r\n                <textarea class=\"form-control form-control-sm border\" rows=\"18\"\r\n                    [(ngModel)]=\"priceListUpdate.description\" [ngModelOptions]=\"{standalone: true}\"\r\n                    [readonly]=\"isReadOnly\"></textarea>\r\n\r\n\r\n            </div>\r\n\r\n            <!-- right side-->\r\n            <div class=\"col-12 col-md-6\">\r\n                <div [hidden]=\"priceListUpdate.id_product_type == 20\"> \r\n                    <div class=\" my-2\">\r\n                        <strong> Warehouse Location Information </strong>\r\n                    </div>\r\n                    <div class=\"border bg-light p-1 pb-0 rounded-sm mb-3\">\r\n\r\n                        <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n                            <thead class=\"thead-light\">\r\n                                <tr>\r\n                                    <th>No</th>\r\n                                    <th>Location Code</th>\r\n                                    <th>Location</th>\r\n                                    <th>Qty</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n\r\n                                <tr *ngFor=\"let x of product_location; let i = index\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td width=\"150\">\r\n                                        <input type=\"text\" class=\"form-control form-modal\"\r\n                                            (change)=\"fn_updateLocation(x);\" id=\"location_code\" name=\"location_code\"\r\n                                            [(ngModel)]=\"x.location_code\" [ngModelOptions]=\"{standalone: true}\"\r\n                                            [readonly]=\"isReadOnly\">\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control form-modal\"\r\n                                            (change)=\"fn_updateLocation(x);\" id=\"location\" name=\"location\" required\r\n                                            [(ngModel)]=\"x.location\" [ngModelOptions]=\"{standalone: true}\"\r\n                                            [readonly]=\"isReadOnly\">\r\n                                    </td>\r\n\r\n                                    <td>\r\n                                        <input type=\"number\" class=\"form-control form-modal\" style=\"width: 80px;\"\r\n                                            (change)=\"fn_updateLocation(x);\" id=\"location\" name=\"qty\" required\r\n                                            [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"x.qty\"\r\n                                            [readonly]=\"isReadOnly\">\r\n                                    </td>\r\n                                    <td>\r\n                                        <span [hidden]=\"isReadOnly || !accessRules.product.delete\">\r\n                                            <a href=\"javascript:;\" (click)=\"fn_deleteProduct_location(x);\"><i\r\n                                                    class=\"far fa-trash-alt\"></i></a>\r\n                                        </span>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n\r\n                            <tfoot [hidden]=\"isReadOnly || !accessRules.product.insert\">\r\n                                <tr>\r\n                                    <td colspan=\"3\" class=\"text-right\">\r\n                                        <button type=\"button\" (click)=\"fn_addProduct_location();\"\r\n                                            class=\"btn btn-classic btn-sm\">Add Location</button>\r\n                                    </td>\r\n                                    <td></td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"row my-2\">\r\n                    <div class=\"col-3\">\r\n                        <strong>Attachment</strong>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\" [hidden]=\"isReadOnly\">\r\n\r\n                        <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n\r\n                    </div>\r\n                    <div class=\"col-2\" [hidden]=\"isReadOnly\">\r\n                        <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"onUpload();\">Upload</button>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"border bg-light p-1 pb-0 rounded-sm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <table class=\"table table-list table-bordered table-striped\">\r\n                                <thead class=\"thead-light border-top-brown\">\r\n                                    <tr>\r\n                                        <th>Files</th>\r\n                                        <th width=\"100\">Size</th>\r\n                                        <th width=\"50\"></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let x of attachment\">\r\n                                        <td> <a href=\"{{x.url}}\" target=\"_blank\"> {{x.file_name}}</a> </td>\r\n                                        <td> {{x.size }} </td>\r\n                                        <td>\r\n                                            <div [hidden]=\"isReadOnly\">\r\n                                                <a href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i\r\n                                                        class=\"fas fa-trash-alt\"></i></a>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n\r\n\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n<div [hidden]=\"isReadOnly\"><br><br></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-modal/price-list-modal.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-modal/price-list-modal.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading> \r\n\r\n<div class=\"modal-body bg-light\">\r\n    <div class=\"row no-gutters\">\r\n\r\n        <div class=\"col-12 \">\r\n            <div class=\"py-3\"> \r\n                <input type=\"text\" class=\"form-control form-control-sm border my-1\" placeholder=\"Search Products\">\r\n                <small>Selected ({{total}})</small>\r\n                <div>\r\n                    <div class=\"hahaha\">\r\n                        <span class=\"border px-1 bg-white mr-1 shadow-sm mb-1 addlist\"\r\n                            *ngFor=\"let x of addProduct\"><small>\r\n                                {{x.name}}</small> <a href=\"javascript:;\" class=\"text-danger\"\r\n                                (click)=\"removeList(x);\">\r\n                                <small class=\"px-1\"> <i class=\"fas fa-times\"></i></small> </a></span> \r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-12  \">\r\n\r\n            <table class=\"table table-hover border bg-white border-top border-bottom mb-0\">\r\n                <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th>No</th>\r\n                        <th>Sku</th>\r\n                        <th>Product Name</th>\r\n                        <th>Type</th>\r\n                        <th>Qty</th>\r\n                        <th class=\"text-right\">Price</th>\r\n                        <td width=\"10\"></td>\r\n                    </tr>\r\n                </thead>\r\n            </table>\r\n            <div class=\"bodyarea\">\r\n                <table class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of items; let i = index\" (click)=\"addList(x);\">\r\n                            \r\n                            <td>{{i+1}}</td>\r\n                            <td>{{x.sku}}</td>\r\n                            <td>{{x.name}}</td>\r\n                            <td>{{x.product_type}}</td>\r\n                            <td>{{x.qty}}</td>\r\n                            <td class=\"text-right\"> {{x.currency}} {{x.price | number}} <span [hidden]=\"!x.customer_price\">*</span> </td>\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n                <div class=\"text-center py-5\" [hidden]=\"!loading_productlist\">\r\n                    <div class=\"spinner-border text-dark\" role=\"status\">\r\n                        <span class=\"sr-only\">Loading...</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n        \r\n    </div>\r\n</div>\r\n\r\n \r\n \r\n\r\n<div class=\"modal-footer\">\r\n    <div class=\"col-3 text-right\" [hidden]=\"total < 1\"> \r\n        <a href=\"javascript:;\" class=\"btn btn-primary btn-sm btn-block\" (click)=\"save();\">Next</a>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-product/price-list-product.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-product/price-list-product.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <small> You are here :\r\n        <a [routerLink]=\"[ '/priceList' ]\">Price List</a> /\r\n        <a [routerLink]=\"[ '/priceList/', id_pricelist ]\">{{pricelist}} </a> /\r\n        <a href=\"javascript:;\">{{catalog}} </a>\r\n\r\n      </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"container-header\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6\">\r\n        <h5>PRICE LIST</h5>\r\n      </div>\r\n      <div class=\"col-6 text-right\">\r\n\r\n        <button type=\"button\" [hidden]=\"editable\" class=\"btn btn-classic  btn-sm\" (click)=\"fn_edit();\"> <i\r\n            class=\"fas fa-edit\"></i> Edit Price</button>\r\n\r\n        <button type=\"button\" [hidden]=\"editable\" class=\"btn btn-outline-secondary btn-sm\"\r\n          [routerLink]=\"[ '/priceList' ]\" title=\"back\"> <i class=\"fas fa-times\"></i> </button>\r\n\r\n        <button type=\"button\" [hidden]=\"!editable\" class=\"btn btn-outline-secondary btn-sm\" (click)=\"fn_edit();\"> Done\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h5 class=\"my-3\">Information</h5>\r\n  <div class=\"row mb-3\">\r\n\r\n    <div class=\"col-12\">\r\n      <table class=\"table table-list\">\r\n        <tbody>\r\n\r\n          <tr>\r\n            <td width=\"40%\"><label>Price List</label></td>\r\n            <td width=\"30%\"> <label>Currency</label> </td>\r\n            <td width=\"30%\"> <label>Status</label></td>\r\n\r\n          </tr>\r\n\r\n          <tr>\r\n            <td>\r\n\r\n              <span [hidden]=\"editable\"> <strong> Cargo Price List 2019 / Tools </strong> </span>\r\n              <span [hidden]=\"!editable\"> <input type=\"text\" class=\"border\"\r\n                  value=\"Cargo Price List 2019  / Tools\"></span>\r\n\r\n\r\n            </td>\r\n            <td><strong> IDR </strong></td>\r\n            <td><strong> Active </strong></td>\r\n          </tr>\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <strong>Price List Product</strong>\r\n  <div class=\" bg-light  border border-top-brown rounded p-1 my-3\">\r\n     \r\n\r\n    <div class=\"scroll-x max-height\">\r\n\r\n      <table class=\"table table-hover border bg-white border-top border-bottom pointer table-striped\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th width=\"50\">No</th>\r\n            <th scope=\"col\">Product </th>\r\n\r\n            <th scope=\"col\" class=\"text-right\">Price (IDR)</th>\r\n            <th scope=\"col\">Created Date</th>\r\n\r\n            <th width=\"50\"></th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let x of items;let i = index;\">\r\n            <td> {{i+1}} </td>\r\n            <td>\r\n              <span [hidden]=\"editable\"> {{x.product}}\r\n                <div class=\"price-desc\">\r\n                  {{x.description}}\r\n                </div>\r\n              </span>\r\n\r\n              <span [hidden]=\"!editable\">\r\n\r\n                <select class=\"form-control border\" [(ngModel)]=\"x.id_product\" required (change)=\"update(x)\">\r\n                  <option *ngFor=\"let x of selectProduct\" value=\"{{x.id}}\">{{x.name}}</option>\r\n                </select>\r\n\r\n                <textarea class=\"form-control price-desc border mt-1\" style=\"min-height: 100px;\"\r\n                  [(ngModel)]=\"x.description\" (change)=\"update(x)\"> </textarea>\r\n\r\n              </span>\r\n\r\n            </td>\r\n\r\n            <td class=\"text-right\" style=\"width: 220px;\">\r\n              <span [hidden]=\"editable\"> {{x.price | number:'' }},- </span>\r\n              <span [hidden]=\"!editable\"> <input type=\"number\" class=\"text-right border\" [(ngModel)]=\"x.price\"\r\n                  style=\"width: 100%;\" value=\"{{x.price}}\" (change)=\"update(x)\"></span>\r\n            </td>\r\n\r\n            <td width=\"100\"> <small>20 Jan 2018 </small> </td>\r\n            <td> <span [hidden]=\"!editable\"> <a href=\"javascript:;\" (click)=\"fnDelete(x);\"> <i\r\n                    class=\"far fa-trash-alt\"></i> </a> </span> </td>\r\n          </tr>\r\n\r\n\r\n          <tr>\r\n            <td></td>\r\n            <td>\r\n              <select class=\"form-control border\" [(ngModel)]=\"addPricelist.id_product\" required>\r\n                <option *ngFor=\"let x of selectProduct\" value=\"{{x.id}}\">{{x.name}}</option>\r\n              </select>\r\n              <a href=\"javascript:;\" (click)=\"hideDesc=false;\" [hidden]=\"!hideDesc\">Add Description</a>\r\n              <textarea [hidden]=\"hideDesc\" class=\"form-control price-desc border mt-1\" style=\"min-height: 100px;\"\r\n                [(ngModel)]=\"addPricelist.description\"> </textarea>\r\n            </td>\r\n            <td class=\"text-right\"> <input type=\"number\" class=\"text-right border\" style=\"width: 100%;\" value=\"\"\r\n                [(ngModel)]=\"addPricelist.price\" required> </td>\r\n            <td></td>\r\n            <td></td>\r\n          </tr>\r\n\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"5\" class=\"text-right\">\r\n              {{note}}\r\n              <button type=\"button\" class=\"btn btn-classic  btn-sm\" (click)=\"insertProductPrice();\"><i\r\n                  class=\"fas fa-plus\"></i> Add Product</button></td>\r\n\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<br [hidden]=\"!editable\">\r\n\r\n<div class=\"footer-menu bg-light shadow border-top\" [hidden]=\"!editable\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 p-1 text-right\">\r\n\r\n        <a class=\"btn btn-outline-secondary m-1\" (click)=\"fn_edit();\">Done</a>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <small> You are here : <a [routerLink]=\"[ '/priceList' ]\">Products</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n\r\n  <div class=\"container-header\">\r\n    <div class=\"row \">\r\n      <div class=\"col-6\">\r\n        <h5>PRODUCTS</h5>\r\n      </div>\r\n      <div class=\"col-6 text-right\">\r\n       \r\n        <button type=\"button\" class=\"btn btn-classic  btn-sm mx-1\" disabled><i class=\"fas fa-download\"></i> \r\n        Sync for ERP</button>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic  btn-sm\" (click)=\"open(newpricelist)\"><i\r\n          class=\"fas fa-plus\"></i>\r\n        New Product</button>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n \r\n    <table id=\"dtable\" class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n\r\n          <th width=\"50\">ID</th>\r\n          <th width=\"100\">SKU</th>\r\n          <th scope=\"col\">Name</th>  \r\n          <th scope=\"col\" width=\"50\"></th>\r\n          <th scope=\"col\"  width=\"80\">Price</th>\r\n          <th scope=\"col\"  class=\"select-filter\">Type</th>\r\n\r\n\r\n\r\n        </tr>\r\n      </thead>\r\n\r\n      <tfoot>\r\n        <tr>\r\n \r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n \r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n \r\n\r\n        </tr>\r\n      </tfoot>\r\n\r\n    </table>\r\n \r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<hr>\r\n\r\n  \r\n\r\n<ng-template #newpricelist let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Add Product Price List</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-light\">\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-12\">\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h1\" class=\"col-3 col-form-label\"> Product Name</label>\r\n            <div class=\"col-sm-8\"> \r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.name\" name=\"name\"\r\n                #name=\"ngModel\" id=\"h1\" required>\r\n              <small [hidden]=\"name.valid || name.pristine\" class=\"text-danger\"> Name is  required</small>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"ha\" class=\"col-3 col-form-label\"> Sku</label>\r\n            <div class=\"col-sm-3\"> \r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.sku\" name=\"sku\"\r\n                #sku=\"ngModel\" id=\"ha\" required>\r\n              <small [hidden]=\"sku.valid || sku.pristine\" class=\"text-danger\"> Sku is  required</small>\r\n            </div>\r\n\r\n\r\n            <label for=\"ha\" class=\"col-2 col-form-label text-right pr-4\"> Type </label>\r\n            <div class=\"col-sm-3\"> \r\n              <select class=\"form-control border\"  [(ngModel)]=\"model.id_product_type\" name=\"id_product_type\">\r\n                <option value=\"10\">Good</option>\r\n                <option value=\"20\">Service</option>\r\n              </select>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h2\" class=\"col-sm-3 col-form-label\"> Price </label>\r\n          \r\n            <div class=\"col-sm-4\">\r\n              <input type=\"text\" class=\"form-control border\" [(ngModel)]=\"model.price\" name=\"price\" autocomplete=\"off\" #price=\"ngModel\" id=\"price\" currencyMask required>\r\n                <small [hidden]=\"price.valid || price.pristine\" class=\"text-danger\"> Price is  required</small>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row no-gutters\">\r\n            <label for=\"h3\" class=\"col-sm-3 col-form-label\">Description</label>\r\n            <div class=\"col-sm-8\">\r\n              <textarea class=\"form-control border\" id=\"h3\" rows=\"6\" [(ngModel)]=\"model.description\" name=\"description\" ></textarea>\r\n            </div>\r\n          </div>\r\n\r\n        \r\n        </div> \r\n      </div>\r\n\r\n\r\n\r\n    </form>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <span [hidden]=\"!submit\">Saving, Please wait...</span>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.dismiss('Cross click')\">Cancel</button> \r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit();\" [disabled]=\"!myForm.form.valid\">Save Product</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #markUpdate let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Delete Product </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white\">\r\n\r\n    <div [hidden]=\"!itemsSelected.length\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-3\">\r\n          <div class=\"text-danger\">\r\n            Delete selected Product ?\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm mx-1\" (click)=\"fn_delete();\">Yes</button>\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table border table-hover  table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>SKU</th>\r\n            <th>Name</th>\r\n            <th>Company</th> \r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let x of itemsSelected; let i = index\">\r\n            <td>{{ i + 1}}</td>\r\n            <td>{{x.sku}}</td>\r\n            <td>{{x.name}}</td> \r\n            <th> <a href=\"javascript:;\" (click)=\"fn_removeItemSelected(x)\"><i class=\"fas fa-times\"></i></a> </th>\r\n          </tr>\r\n        </tbody>\r\n\r\n\r\n      </table>\r\n    </div>\r\n    <div [hidden]=\"itemsSelected.length\">\r\n      <div class=\"text-center\">\r\n        Empty data.\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/profile' ]\">Profile</a> </small>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container py-2\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-12 \">\r\n            <form (ngSubmit)=\"fn_update()\" #modalForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <h5>Profile </h5>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 text-right\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!modalForm.form.valid\">Update</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\" bg-white  border border-top-brown rounded p-1 my-3\">\r\n\r\n                    <div class=\"row \">\r\n\r\n                        <div class=\"col-6\">\r\n                            <table class=\"table table-borderless\">\r\n                                <tr [hidden]=\"!data.parent\">\r\n                                    <td>Parent Account</td>\r\n                                    <td> <input type=\"text\" class=\"form-control form-modal bg-light\" disabled\r\n                                            value=\"{{data.parent}}\"> </td>\r\n\r\n                                </tr>\r\n                                <tr>\r\n                                    <td width=\"40%\">First Name</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control form-modal\"\r\n                                            [(ngModel)]=\"model.first_name\" id=\"first_name\" name=\"first_name\"\r\n                                            #first_name=\"ngModel\" required>\r\n                                        <div [hidden]=\"first_name.valid || first_name.pristine\"\r\n                                            class=\"alert alert-danger\">\r\n                                            First Name is required</div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Last Name</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.last_name\"\r\n                                            id=\"last_name\" name=\"last_name\" #last_name=\"ngModel\">\r\n                                        <div [hidden]=\"last_name.valid || last_name.pristine\"\r\n                                            class=\"alert alert-danger\">\r\n                                            Last Name is required</div>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>Email</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control border bg-light\" value=\"{{data.email}}\"\r\n                                            disabled readonly>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>Max discount</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control border bg-light w-25\"\r\n                                            value=\"{{data.max_discount}} %\" disabled readonly>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n\r\n\r\n\r\n                            </table>\r\n\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n\r\n                            <table class=\"table table-borderless\">\r\n                                <tr>\r\n                                    <td width=\"40%\">Code</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control border bg-light\" value=\"{{data.code}}\"\r\n                                            disabled readonly>\r\n\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td width=\"40%\">User Access</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control border bg-light\"\r\n                                            value=\"{{data.user_access}}\" disabled readonly>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>User Group</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control border bg-light\"\r\n                                            value=\"{{data.user_group}}\" disabled readonly>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>Status User</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control border bg-light\" value=\"{{data.status}}\"\r\n                                            disabled readonly>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td colspan=\"2\">\r\n                                        <hr>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>New Password* </td>\r\n                                    <td> <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\"\r\n                                            id=\"pass\" name=\"pass\"> </td>\r\n                                </tr>\r\n                            </table>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 \">\r\n                            <div class=\"px-2\">\r\n\r\n \r\n                                <table class=\"table border\">\r\n                                    <tr class=\"bg-light\">\r\n                                        <th> Target </th>\r\n                                        <th> Years </th>\r\n                                        <th> Amount </th>\r\n                                        <th> Leads (Qty) </th>\r\n                                        <th> Opportunities (Qty) </th>\r\n                                        <th> Quotes (Qty)</th>\r\n                                    </tr>\r\n\r\n                                    <tr *ngFor=\"let x of target\">\r\n                                        <th>  Personal </th>\r\n                                        <td> {{x.years}} </td>\r\n                                        <td> {{data.currency}} {{x.amount | number}} </td>\r\n                                        <td> {{x.leads | number}} </td>\r\n                                        <td> {{x.opportunities | number}} </td>\r\n                                        <td> {{x.quotes | number}} </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <th> Team </th>\r\n                                        <td> {{totalTeamTarget.year}} </td>\r\n                                        <td> {{data.currency}} {{totalTeamTarget.amount | number}} </td>\r\n                                        <td> {{totalTeamTarget.leads | number}} </td>\r\n                                        <td> {{totalTeamTarget.opportunities | number}} </td>\r\n                                        <td> {{totalTeamTarget.quotes | number}} </td>\r\n                                    </tr>\r\n                                </table>\r\n \r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12\">\r\n            <div>\r\n                <h5>My Team </h5>\r\n            </div>\r\n\r\n\r\n            <div class=\" bg-light  border border-top-brown rounded p-1 my-3\">\r\n\r\n\r\n\r\n                <div class=\"scroll-x scroll-style-2 bg-white border userItems\">\r\n\r\n                    <div>\r\n\r\n                        <div class=\"itemInfo itemInfoHeader px-2 py-1 text-right mr-3\">\r\n                            <span class=\"itemInfoName\">Name / Email</span>\r\n                            <span class=\"text-left w100\">Group</span>\r\n                            <span class=\"text-right w100\"> target amount year</span>\r\n\r\n\r\n                            <span>Leads</span>\r\n                            <span>Opportunities</span>\r\n                            <span>Quotes</span>\r\n                            <span class=\"text-right\"> discount</span>\r\n                            <span><strong> Status </strong> </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <ul>\r\n                        <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ $implicit: items }\">\r\n                        </ng-container>\r\n                    </ul>\r\n\r\n                    <ng-template #recursiveListTmpl let-items>\r\n                        <li *ngFor=\"let item of items\" class=\"border-top py-1\">\r\n                            <div class=\"name\">\r\n                                <a href=\"javascript:;\" (click)=\"fnOpen(item.id)\"> <b> {{item.name}} </b></a>\r\n                                <div><a href=\"javascript:;\" (click)=\"fnOpen(item.id);\"><i class=\"far fa-edit\"></i>   Update Target</a></div>\r\n                            </div>\r\n                            <div class=\"  itemInfo p-2 text-right mr-3\">\r\n\r\n                                <span class=\"text-left w100\">{{item.user_group.name}}</span>\r\n                                <span class=\"text-right w100\"> {{item.currency}}\r\n                                    {{item.target_amount_year | number}}</span>\r\n\r\n\r\n                                <span>{{item.target_leads | number}}</span>\r\n                                <span>{{item.target_opportunities | number}}</span>\r\n                                <span>{{item.target_quotes | number}}</span>\r\n                                <span class=\"text-right\">{{item.max_discount}} %</span>\r\n                                <span><strong> {{item.status}} </strong> </span>\r\n                            </div>\r\n\r\n\r\n                            <ul *ngIf=\"item.child.length > 0\">\r\n                                <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ $implicit: item.child }\">\r\n                                </ng-container>\r\n                            </ul>\r\n                        </li>\r\n                    </ng-template>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #content let-modal>\r\n\r\n    <div class=\"modal-header\">\r\n        <strong class=\"modal-title\" id=\"modal-basic-title\">Update Target</strong>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body bg-white\">\r\n        <div class=\"container\">\r\n            <div class=\"row\"> \r\n                <div class=\"col-12\">\r\n                    <h5>{{user_name}}</h5>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <table class=\"table my-2 border\" [hidden]=\"user_target.length == 0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th> Years </th>\r\n                                <th> Amount </th>\r\n                                <th> Leads (Qty) </th>\r\n                                <th> Opportunities (Qty) </th>\r\n                                <th> Quotes (Qty) </th>\r\n                                <th width=\"10\"> <i class=\"far fa-trash-alt\"></i> </th>\r\n\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n\r\n                            <tr *ngFor=\"let x of user_target\">\r\n                                <td> <input type=\"number\" class=\"form-control form-control-sm w-75\" [(ngModel)]=\"x.year\"\r\n                                        [ngModelOptions]=\"{standalone: true}\"> </td>\r\n                                <td> <input type=\"text\" class=\"form-control form-control-sm w-100\"\r\n                                        [(ngModel)]=\"x.amount\" currencyMask [ngModelOptions]=\"{standalone: true}\"> </td>\r\n\r\n                                <td> <input type=\"number\" class=\"form-control form-control-sm  w-75 text-right\"\r\n                                        [(ngModel)]=\"x.leads\" [ngModelOptions]=\"{standalone: true}\"> </td>\r\n                                <td> <input type=\"number\" class=\"form-control form-control-sm  w-75 text-right\"\r\n                                        [(ngModel)]=\"x.opportunities\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </td>\r\n                                <td> <input type=\"number\" class=\"form-control form-control-sm  w-75 text-right\"\r\n                                        [(ngModel)]=\"x.quotes\" [ngModelOptions]=\"{standalone: true}\"> </td>\r\n                                <td>\r\n                                    <a href=\"javascript:;\" (click)=\"fn_tergetDelete(x.id);\"><i\r\n                                            class=\"far fa-trash-alt\"></i></a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n\r\n\r\n                    </table>\r\n\r\n                    <div class=\"mt-5\">\r\n\r\n                        <h5>Create new target</h5>\r\n                        <table class=\"table border bg-light\">\r\n\r\n                            <tr>\r\n                                <th>Year</th>\r\n                                <th>Amount</th>\r\n                                <th>Leads</th>\r\n                                <th>Opportunities</th>\r\n                                <th>Quotes</th>\r\n                            </tr>\r\n                            <tr>\r\n\r\n                                <td> <input type=\"number\" maxlength=\"4\" class=\"form-control form-control-sm\"\r\n                                        [(ngModel)]=\"newTargetAmount.year\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </td>\r\n\r\n\r\n                                <td> <input type=\"text\" class=\"form-control form-control-sm\" currencyMask\r\n                                        [(ngModel)]=\"newTargetAmount.amount\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </td>\r\n\r\n                                <td> <input type=\"text\" class=\"form-control form-control-sm\"\r\n                                        [(ngModel)]=\"newTargetAmount.leads\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </td>\r\n\r\n\r\n                                <td> <input type=\"text\" class=\"form-control form-control-sm\"\r\n                                        [(ngModel)]=\"newTargetAmount.opportunities\"\r\n                                        [ngModelOptions]=\"{standalone: true}\">\r\n                                </td>\r\n\r\n\r\n                                <td> <input type=\"text\" class=\"form-control form-control-sm\"\r\n                                        [(ngModel)]=\"newTargetAmount.quotes\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </td>\r\n\r\n                            </tr>\r\n                        </table>\r\n\r\n                        <div class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"fn_insertTargetAmount()\">\r\n                                Add Target </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"fn_targetUpdate();\">Update</button>\r\n    </div>\r\n\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-detail/quote-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-detail/quote-detail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/quote' ]\">Quote</a> / <a\r\n          [routerLink]=\"[ '/quote',id ]\">{{items.name}}</a></small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n  <!-- Menu & Information -->\r\n  <div class=\"row  \">\r\n    <!-- Header & button -->\r\n    <div class=\"col-3 bg-light py-2\">\r\n      <div class=\"module-name\">\r\n        <strong>QUOTE</strong>\r\n        <b class=\"text-primary\">{{items.name}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-9  bg-light py-2 text-right\">\r\n      <div [hidden]=\"!isReadOnly\">\r\n        <span [hidden]=\"items.status.id <= 10\">\r\n\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"approved(400);\"> <i class=\"fas fa-times\"></i>\r\n            Reject </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"approved(500);\"> <i class=\"fas fa-check\"></i>\r\n            Approved By Customer</button>\r\n\r\n          <span class=\"mr-1\"> | </span>\r\n        </span>\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [hidden]=\"items.version < 1\" (click)=\"send();\"> <i\r\n            class=\"fas fa-paper-plane\"></i>\r\n          Process Quote </button>\r\n\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [hidden]=\"items.closed == 1\" (click)=\"generate();\"> <i class=\"far fa-file-pdf\"></i>\r\n          Generate PDF & Process </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"isReadOnly=false\"> <i\r\n            class=\"fas fa-edit\"></i>\r\n          Edit </button>\r\n\r\n        <button type=\"button\" [hidden]=\"items.syncing || items.closed == 1 \" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"fn_sync(true)\"> <i\r\n            class=\"fas fa-sync\"></i> Sync </button>\r\n\r\n        <button type=\"button\" [hidden]=\"!items.syncing || items.closed == 1\" class=\"btn btn-classic btn-sm  mr-1\"    (click)=\"fn_sync(false)\">\r\n          <i class=\"fas fa-sync\"></i> Disable Sync </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm\" [routerLink]=\"[ '/quote' ]\" title=\"back\"> <i\r\n            class=\"fas fa-times\"></i> </button>\r\n\r\n      </div>\r\n\r\n      <div [hidden]=\"isReadOnly\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"isReadOnly=true\" title=\"Done\"> Cancel </button>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Infromation -->\r\n    <div class=\"col-12 py-2\">\r\n      <table class=\"table-p0\">\r\n        <tr>\r\n          <td> <small> Quote No.</small> </td>\r\n          <td> <small> version </small> </td>\r\n          <td> <small> Expired Date </small> </td>\r\n          <td> <small> Syncing </small> </td>\r\n          <td> <small> Opportunity </small> </td>\r\n          <td> <small> Grand Total </small></td> \r\n        </tr>\r\n\r\n        <tr>\r\n          <td> <b class=\"text-primary\">{{items.quotes_number}} </b> </td>\r\n          <td><b class=\"text-primary\"> {{items.version}} </b></td>\r\n          <td> <b class=\"text-primary\">\r\n              {{quoteModel.expirationDate.day}}/{{quoteModel.expirationDate.month}}/{{quoteModel.expirationDate.year}}\r\n            </b> </td>\r\n          <td>\r\n            <div class=\"text-primary\" [innerHTML]=\"items.syncing ?  faC:faUC\"></div>\r\n          </td>\r\n          <td><b class=\"text-primary\"> <a [routerLink]=\"[ '/opportunity', items.id_opportunity ]\">\r\n                {{items.opportunity}}</a> </b></td>\r\n          <td> <b class=\"text-primary\"> {{items.currency}} {{pricing.grand_total | number}} </b> </td>\r\n       \r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Step Bar -->\r\n  <div class=\"row py-2 bg-light border-top border-bottom\">\r\n    <div class=\"col-12\"> \r\n      <table class=\"table table-status\">\r\n        <tr>\r\n          <td *ngFor=\"let x of quote_status \"\r\n            [ngStyle]=\"{'width': quote_status.length ? (100 / quote_status.length) + '%' :'100%' }\">\r\n            <div class=\"text-center p-2 border  \" [ngClass]=\"{'bg-primary': x.id <= items.status.id, 'bg-danger': x.id == items.id_quote_status_final }\">\r\n              <b>{{x.name}}</b></div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n     \r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<form (ngSubmit)=\"fn_updateQuote()\" #quoteForm=\"ngForm\">\r\n\r\n  <div class=\"container-fluid  bg-white\">\r\n\r\n    <div class=\"row\">\r\n      <!-- Left side-->\r\n      <div class=\"col-9 col-md-8\">\r\n\r\n\r\n\r\n        <!-- Product  line |  Detail  -->\r\n        <div class=\"row my-2\">\r\n\r\n          <div class=\"col-12\">\r\n\r\n            <ngb-tabset type=\"pills\">\r\n\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <div class=\"px-3\">Related</div>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"border-top mt-2\">\r\n                    <div class=\"row py-2\">\r\n                      <div class=\"col-6\">\r\n                        <strong>Quote line Items ({{total}})</strong>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\" [hidden]=\"isReadOnly\">\r\n                        <button type=\"button\" class=\"btn btn-light btn-sm border mr-1\" (click)=\"open(pricelist);\"> <i\r\n                            class=\"fas fa-plus\"></i>\r\n                          Add Items </button>\r\n\r\n                        <button type=\"button\" class=\"btn btn-light btn-sm  border mr-1\" (click)=\"open(sorting);\"> <i\r\n                            class=\"fas fa-bars\"></i>\r\n                          Sort Items </button>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <table class=\"table table-list table-bordered table-striped\">\r\n                      <thead class=\"thead-light border-top-yellowgreen\">\r\n                        <tr>\r\n\r\n                          <th width=\"400\">PRODUCT NAME</th>\r\n                          <th class=\"text-right\" width=\"150\">PRICE</th>\r\n                          <th class=\"text-right\" width=\"80\">QTY </th>\r\n                          <th class=\"text-right\" width=\"80\">ADDITIONAL DISC </th>\r\n                          <th class=\"text-right\" width=\"150\">NET TOTAL </th>\r\n                          <th width=\"20\"> </th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody class=\"\">\r\n                        <tr *ngFor=\"let x of quote_item; let i = index\" id=\"{{x.id}}\">\r\n\r\n                          <td> {{x.product}}\r\n\r\n                            <div [hidden]=\"!isReadOnly\">\r\n                              <small [hidden]=\"x.hide_description\" style=\" white-space: pre-line;\"> {{x.description}}\r\n                              </small>\r\n\r\n                              <div [hidden]=\"!x.hide_description\"><a href=\"javascript:;\"\r\n                                  (click)=\"show_description(x);\"><small>Show detail</small></a>\r\n                              </div>\r\n\r\n                              <div [hidden]=\"x.hide_description\"><a href=\"javascript:;\"\r\n                                  (click)=\"hide_description(x);\"><small>Hide detail</small></a>\r\n                              </div>\r\n\r\n                            </div>\r\n\r\n                            <textarea [hidden]=\"isReadOnly\" class=\"form-control form-control-sm w-100 form-description\"\r\n                              [(ngModel)]=\"x.description\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"fn_updateQuoteitem(x)\"> </textarea>\r\n                          </td>\r\n\r\n                          <td class=\"text-right\">{{items.currency}} {{x.price | number}}</td>\r\n                          <td class=\"text-right\">\r\n                            <span [hidden]=\"!isReadOnly\"> {{x.qty}}\r\n                            </span>\r\n                            <input [hidden]=\"isReadOnly\" type=\"number\" class=\"form-control-sm border pr-0 text-right\"\r\n                              style=\"width: 80px;\" [(ngModel)]=\"x.qty\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"fn_updateQuoteitem(x)\">\r\n                          </td>\r\n                          <td class=\"text-right\">\r\n                            <span [hidden]=\"!isReadOnly\"> {{x.discount}} </span>\r\n\r\n                            <input [hidden]=\"isReadOnly\" type=\"number\" class=\"form-control-sm border pr-0 text-right\"\r\n                              style=\"width: 50px;\" [(ngModel)]=\"x.discount\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"fn_updateQuoteitem(x)\">\r\n                            %</td>\r\n                          <td class=\"text-right\">{{items.currency}} {{x.total | number}}</td>\r\n                          <td>\r\n\r\n                            <span [hidden]=\"isReadOnly\"> <a href=\"javascript:;\" class=\"px-1\"\r\n                                (click)=\"fn_removeQuoteitem(x);\"> <i class=\"fas fa-trash-alt\"></i> </a> </span>\r\n\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n                      </tbody>\r\n                      <tfoot class=\"d-none\">\r\n\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">Total</td>\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.total | number}}</td>\r\n                          <td></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">Discount {{items.discount}} %</td>\r\n\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.discount | number}} </td>\r\n                          <td></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">Tax {{items.tax}} %</td>\r\n\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.tax | number}} </td>\r\n                          <td></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">shipping and handling</td>\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.shipping | number}} </td>\r\n                          <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">Final Total</td>\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.grand_total | number}} </td>\r\n                          <td></td>\r\n                        </tr>\r\n\r\n\r\n                      </tfoot>\r\n                    </table>\r\n\r\n\r\n                    <table class=\"table table-list table-bordered\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"20%\"> <b> Total</b></td>\r\n                          <td width=\"20%\"> <b> Discount {{items.discount}} % </b> </td>\r\n                          <td width=\"20%\"><b> Tax {{items.tax}} % </b></td>\r\n                          <td width=\"20%\"><b> Shipping and handling </b> </td>\r\n                          <td width=\"20%\"> <b> Final Total</b> </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td> {{items.currency}} {{pricing.total | number}}</td>\r\n                          <td>{{items.currency}} {{pricing.discount | number}} </td>\r\n                          <td>{{items.currency}} {{pricing.tax | number}} </td>\r\n                          <td>{{items.currency}} {{pricing.shipping | number}} </td>\r\n                          <td>{{items.currency}} {{pricing.grand_total | number}} </td>\r\n                        </tr>\r\n\r\n                      </tbody>\r\n\r\n                    </table>\r\n\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <div class=\"px-3\">Details </div>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"border-top py-2 my-2\">\r\n\r\n                    <!-- detail -->\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong>Quotes Information</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Quotes Name</td>\r\n                            <td>\r\n                              <input type=\"text\" class=\"form-control form-modal\" id=\"name\" required\r\n                                [(ngModel)]=\"quoteModel.name\" name=\"name\" #name=\"ngModel\" [readonly]=\"isReadOnly\">\r\n                              <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                                Name is required\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Opportunity Name</td>\r\n                            <td> <b> {{items.opportunity}} </b> </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Company Name</td>\r\n                            <td> <b>{{items.company}} </b> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td>Account Manager</td>\r\n                            <td> <select class=\"form-control form-modal\" name=\"id_user\" [(ngModel)]=\"quoteModel.id_user\"\r\n                                [disabled]=\"isReadOnly\">\r\n                                <option value=\"{{x.id}}\" *ngFor=\"let x of user\">{{x.name}}</option>\r\n                              </select> </td>\r\n                          </tr>\r\n                        </table>\r\n\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Expiration Date</td>\r\n                            <td>\r\n                              <span [hidden]=\"!isReadOnly\">\r\n                                {{quoteModel.expirationDate.day}}/{{quoteModel.expirationDate.month}}/{{quoteModel.expirationDate.year}}\r\n                              </span>\r\n\r\n                              <span [hidden]=\"isReadOnly\">\r\n                                <input type=\"text\" class=\"form-control form-modal\" placeholder=\"yyyy-mm-dd\"\r\n                                  (click)=\"d.toggle()\" readonly name=\"d\" [(ngModel)]=\"quoteModel.expirationDate\"\r\n                                  ngbDatepicker #d=\"ngbDatepicker\" required>\r\n                              </span>\r\n\r\n                            </td>\r\n                          </tr>\r\n\r\n\r\n                          <tr>\r\n                            <td>Description</td>\r\n                            <td>\r\n                              <textarea class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.description\"\r\n                                name=\"description\" [readonly]=\"isReadOnly\" rows=\"4\"></textarea>\r\n\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong> Total</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Discount (%)</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"\" style=\"width:40%\" (change)=\"fn_max_discount();\"\r\n                                maxlength=\"4\" [(ngModel)]=\"quoteModel.discount\" name=\"discount\" [readonly]=\"isReadOnly\">\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Tax (%)</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\" style=\"width:40%\" maxlength=\"4\"\r\n                                [(ngModel)]=\"quoteModel.tax\" name=\"tax\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Shipping and Handing (IDR)</td>\r\n                            <td> \r\n                                <input type=\"text\" class=\"form-control form-modal \" currencyMask   [readonly]=\"isReadOnly\"\r\n                                [(ngModel)]=\"quoteModel.shipping\" name=\"shipping\" > \r\n \r\n                              </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Grand Total</td>\r\n                            <td> <b>{{items.currency}} {{pricing.grand_total | number}},-</b></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong> Prepared For</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Contact Name</td>\r\n                            <td><select class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.id_contact\"\r\n                                name=\"q_id_contact\" [disabled]=\"isReadOnly\">\r\n                                <option value=\"{{x.id}}\" *ngFor=\"let x of contact\">{{x.name}}</option>\r\n                              </select>\r\n\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Email</td>\r\n                            <td>\r\n                              <input type=\"text\" class=\"form-control form-modal\" id=\"\" [(ngModel)]=\"quoteModel.email\"\r\n                                name=\"email\" [readonly]=\"isReadOnly\">\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Phone</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"\" [(ngModel)]=\"quoteModel.phone\"\r\n                                name=\"phone\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Fax</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"\" [(ngModel)]=\"quoteModel.fax\"\r\n                                name=\"fax\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong> Address Information</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Bill To Name</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_name\" name=\"bill_name\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Bill To Street</td>\r\n                            <td><textarea type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_street1\" name=\"bill_street1\" [readonly]=\"isReadOnly\"> </textarea> </td>\r\n                          </tr>\r\n                         \r\n                          <tr>\r\n                            <td>Bill To City</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_city\" name=\"bill_city\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Bill To State /Province</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_state\" name=\"bill_state\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Bill To Postal Code</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_code\" name=\"bill_code\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Ship To Name</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_name\" name=\"ship_name\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Ship To Street 1</td>\r\n                            <td><textarea type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_street1\" name=\"ship_street1\" [readonly]=\"isReadOnly\"> </textarea> </td>\r\n                          </tr>\r\n                          \r\n\r\n                          <tr>\r\n                            <td>Ship To City</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_city\" name=\"ship_city\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Ship To State /Province</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_state\" name=\"ship_state\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Ship To Postal Code</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_code\" name=\"ship_code\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!-- End detail-->\r\n\r\n\r\n\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n\r\n\r\n\r\n            </ngb-tabset>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Attachment Title -->\r\n        <div class=\"row my-2\">\r\n          <div class=\"col-6\">\r\n            <strong>Attachment</strong> \r\n\r\n            <span [hidden]=\"!uploadLoading\">Uploading...</span>\r\n\r\n            \r\n          </div>\r\n          <div class=\"col-4 text-right\" [hidden]=\"isReadOnly\">\r\n\r\n            <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n\r\n          </div>\r\n          <div class=\"col-2\" [hidden]=\"isReadOnly\">\r\n            <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"onUpload();\">Upload</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!-- Attachments -->\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <table class=\"table table-list table-bordered table-striped\">\r\n              <thead class=\"thead-light border-top-brown\">\r\n                <tr>\r\n                  <th>Files</th>\r\n                  <th width=\"100\">Size</th>\r\n                  <th width=\"50\"></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let x of attachment\">\r\n                  <td>\r\n                    <a href=\"{{x.url}}\" target=\"_blank\"> {{x.file_name}}</a>\r\n                  </td>\r\n                  <td>\r\n                    {{x.size }}\r\n                  </td>\r\n                  <td>\r\n                    <div [hidden]=\"isReadOnly\">\r\n                      <a href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n\r\n\r\n            </table>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- right side-->\r\n      <div class=\"col-3 col-md-4 border border-top-0\">\r\n\r\n        <div class=\"row py-3\">\r\n          <div class=\"col-12\">\r\n            <strong>Version of Quote</strong>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div>\r\n\r\n          <div *ngFor=\"let x of fileOutput\">\r\n            <div class=\"border-bottom p-1\">\r\n              <a href=\"{{x.full_path}}\" target=\"_blank\"><i class=\"far fa-file-pdf\"></i> <b> {{x.file_name}} ver\r\n                  {{x.version}} </b> </a>\r\n              <div>\r\n                <small>Created date {{x.input_date | date:'medium'}}</small>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- end right side-->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div [hidden]=\"isReadOnly\"><br><br></div>\r\n\r\n  <div class=\"footer-menu bg-white shadow border-top\" [hidden]=\"isReadOnly\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"offset-1 col-10 text-center p-1\">\r\n          <a class=\"btn btn-outline-secondary m-1\" (click)=\"isReadOnly=true\">Cancel</a>\r\n          <button type=\"submit\" class=\"btn btn-primary m-1\" [disabled]=\"!quoteForm.form.valid\" (click)=\"isReadOnly=true\">Save</button>\r\n        </div>\r\n        <div class=\"col-1\">\r\n          <div class=\"py-3\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<ng-template #pricelist let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Price List </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <app-price-list-modal (uploaded)=\"requestEmit($event)\"></app-price-list-modal>\r\n\r\n</ng-template>\r\n\r\n<ng-template #sorting let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Sort Items </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-light p-0\">\r\n\r\n\r\n    <div class=\"text-center py-2\"> Drag the items into the order you want. It will save. <i\r\n        class=\"fas fa-exclamation-circle\"></i> </div>\r\n\r\n    <table class=\"table border bg-white table-hover\" [sortablejs]=\"quote_item\" [sortablejsOptions]=\"eventOptions\">\r\n      <tr *ngFor=\"let x of quote_item\">\r\n        <td width=\"20\"> <i class=\"fas fa-bars\"></i> </td>\r\n        <td> {{ x.product }} </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-sm btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n\r\n<div class=\"error-container\">\r\n  <div class=\"container bg-white-transparent border rounded-sm shadow-lg \">\r\n    <div class=\"row \">\r\n      <div class=\"col-12 p-3 \">\r\n        <div class=\"error-log\">\r\n          <span [innerHTML]=\"test\"></span>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"\"><small> Send feedback to Support Now !</small></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-print/quote-print.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-print/quote-print.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <p>print Quote preview <a href=\"javascript:;\" (click)=\"print();\"><i class=\"fas fa-print\"></i>  Print</a> \r\n        <a href=\"javascript:;\" (click)=\"close();\"> Closed </a>\r\n    </p> \r\n\r\n    <p [innerHTML]=\"test\"></p>\r\n    <code>\r\n        {{items |json}}\r\n    </code>  \r\n    <hr>\r\n    <code>\r\n        {{quote_item |json}}\r\n    </code>  \r\n</div>\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/quote' ]\">Quote</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n\r\n  <div class=\"container-header\">\r\n    <div class=\"row \">\r\n\r\n      <div class=\"col-12\">\r\n        <div class=\"module-name\">\r\n          <h5>QUOTES</h5>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n \r\n    <table  id=\"dtable\"  class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n\r\n          <th width=\"50\">ID</th>  \r\n          <th >Quote Number</th>\r\n          <th  class=\"select-filter\">Company</th>\r\n\r\n          <th scope=\"col\">Total</th>\r\n          <th scope=\"col\">Expired</th> \r\n\r\n          <th scope=\"col\"  class=\"select-filter\">Status</th> \r\n          <th scope=\"col\"  class=\"select-filter\">Account Manager</th>\r\n     \r\n        </tr>\r\n      </thead>\r\n\r\n      <tfoot>\r\n        <tr>\r\n          <th></th> \r\n          <th></th>  \r\n          <th></th>\r\n\r\n          <th></th>\r\n          <th></th> \r\n\r\n          <th></th> \r\n          <th></th> \r\n \r\n        </tr>\r\n      </tfoot>\r\n    \r\n    </table>\r\n \r\n\r\n  </div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/sales-target/sales-target.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/sales-target/sales-target.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/reports' ]\">Reports</a> /  <a\r\n                    [routerLink]=\"[ '/reports/salesTarget' ]\">Sales Target</a> </small>\r\n        </div>\r\n    </div>\r\n</div>\r\n \r\n<div class=\"container-fluid border shadow-sm bg-white\">\r\n\r\n    <div class=\"row py-3\">\r\n        <div class=\"col-12 \">\r\n            <div class=\"module-name\">\r\n                <h5>Global Sales Target {{year}}</h5>\r\n            </div>\r\n        </div>\r\n       \r\n    </div>\r\n\r\n\r\n    <div class=\" bg-light  border border-top-brown rounded p-1 my-3\">\r\n\r\n      \r\n\r\n        <div class=\"scroll-x scroll-style-2 bg-white border userItems\">\r\n\r\n            <div>\r\n\r\n                <div class=\"itemInfo itemInfoHeader px-2 py-1 text-right mr-3\">\r\n                    <span class=\"itemInfoName\">Name</span>\r\n                    <span class=\"text-right  w125\"> Team Target</span>\r\n                    <span class=\"text-right  w125\">Team Leads</span>\r\n                    <span class=\"text-right  w125\">Team Opportunities</span>\r\n                    <span class=\"text-right  w125\">Team Quotations</span> \r\n                </div>\r\n            </div>\r\n\r\n            <ol>\r\n                <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ $implicit: items }\"></ng-container>\r\n            </ol>\r\n\r\n            <ng-template #recursiveListTmpl let-items>\r\n                <li *ngFor=\"let item of items\" class=\"border-top py-1\">\r\n                    <div class=\"name\">  <b> {{item.name}} </b>   </div>\r\n                    <div class=\"  itemInfo p-2 text-right mr-3\"> \r\n                        <span class=\"text-right  w125\"> {{item.currency}}  {{item.team.amount | number}}</span>\r\n                        <span class=\"text-right w125\">{{item.team.leads | number}}</span>\r\n                        <span class=\"text-right  w125\"> {{item.team.opportunities | number}}  </span>\r\n                        <span class=\"text-right w125\">  {{item.team.quotes | number}} </span> \r\n                    </div>\r\n\r\n\r\n                    <ol *ngIf=\"item.child.length > 0\">\r\n                        <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ $implicit: item.child }\">\r\n                        </ng-container>\r\n                    </ol>\r\n                </li>\r\n            </ng-template>\r\n        </div>\r\n \r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-create/sales-order-create.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-create/sales-order-create.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"fn_submit()\" #modalForm=\"ngForm\">\r\n\r\n    <div class=\"modal-header\">\r\n        <strong class=\"modal-title\" id=\"modal-basic-title\">New Sales Order </strong>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div> \r\n    <div class=\"modal-body bg-white\">\r\n        <div class=\"container-fluid\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12 bg-light\">\r\n                    <strong>Sales Order Information</strong>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tr>\r\n                            <td width=\"40%\">Sales Order Name</td>\r\n                            <td>\r\n                                <input type=\"text\" class=\"form-control form-modal\" id=\"q_name\" required\r\n                                    [(ngModel)]=\"model.name\" name=\"q_name\" #q_name=\"ngModel\">\r\n                                <div [hidden]=\"q_name.valid || q_name.pristine\" class=\"alert alert-danger\">\r\n                                    Name is required\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr [hidden]=\"!related\">\r\n                            <td>Opportunity Name</td>\r\n                            <td> <select class=\"form-control form-modal\" [(ngModel)]=\"model.id_opportunity\"\r\n                                name=\"id_opportunity\">\r\n                                <option value=\"{{x.id}}\" *ngFor=\"let x of opportunity\">{{x.name}}</option>\r\n                            </select> </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Company Name</td>\r\n                            <td><select class=\"form-control form-modal\" [(ngModel)]=\"model.id_company\"\r\n                                name=\"id_company\" (change)=\"fn_updateContact();\">\r\n                                <option value=\"{{x.id}}\" *ngFor=\"let x of company\">{{x.name}}</option>\r\n                            </select> </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td>Account Manager</td>\r\n                            <td> <select class=\"form-control form-modal\" [(ngModel)]=\"model.id_user\"\r\n                                    name=\"id_user\">\r\n                                    <option value=\"{{x.id}}\" *ngFor=\"let x of user\">{{x.name}}</option>\r\n                                </select> </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </div>\r\n                <div class=\"col-6\">\r\n\r\n                    <table class=\"table table-borderless\">\r\n                          \r\n                        <tr [hidden]=\"!related\">\r\n                            <td>Quotes Number Ref</td>\r\n                            <td>\r\n                                <select class=\"form-control form-modal\" [(ngModel)]=\"model.id_quote\" name=\"id_quote\">\r\n                                    <option value=\"{{x.id}}\" *ngFor=\"let x of quotes\">{{x.quotes_number}}</option>\r\n                                </select>\r\n\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td width=\"40%\">Promised Date</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal border required\" placeholder=\"yyyy-mm-dd\"\r\n                                    (click)=\"d.toggle()\" readonly name=\"d\" [(ngModel)]=\"model.expirationDate\" required\r\n                                    ngbDatepicker #d=\"ngbDatepicker\">\r\n                            </td>\r\n                        </tr>\r\n                    \r\n                        <tr>\r\n                            <td>Description</td>\r\n                            <td>\r\n                                <textarea class=\"form-control form-modal\" [(ngModel)]=\"model.description\"\r\n                                    name=\"q_description\"></textarea>\r\n\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </div>\r\n            </div> \r\n \r\n            <div class=\"row\">\r\n                <div class=\"col-12 bg-light\">\r\n                    <strong> Prepared For</strong>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tr>\r\n                            <td width=\"40%\">Contact Name</td>\r\n                            <td><select class=\"form-control form-modal\" [(ngModel)]=\"model.id_contact\"\r\n                                    name=\"q_id_contact\">\r\n                                    <option value=\"{{x.id}}\" *ngFor=\"let x of contact\">{{x.name}}</option>\r\n                                </select></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Email</td>\r\n                            <td>\r\n                                <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.email\"\r\n                                    name=\"q_email\">\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tr>\r\n                            <td width=\"40%\">Phone</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.phone\"\r\n                                    name=\"q_phone\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Fax</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"\" [(ngModel)]=\"model.fax\"\r\n                                    name=\"q_fax\">\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12 bg-light\">\r\n                    <strong> Address Information</strong>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tr>\r\n                            <td width=\"40%\">Bill To Name</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.bill_name\"\r\n                                name=\"q_bill_name\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Bill To Street</td>\r\n                            <td><textarea  class=\"form-control form-modal\" [(ngModel)]=\"model.bill_street1\"\r\n                                    name=\"q_bill_street1\"> </textarea> </td>\r\n                        </tr>\r\n                      \r\n                        <tr>\r\n                            <td>Bill To City</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.bill_city\"\r\n                                    name=\"q_bill_city\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Bill To State /Province</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.bill_state\"\r\n                                    name=\"q_bill_state\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Bill To Postal Code</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.bill_code\"\r\n                                    name=\"q_bill_code\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Bill To Country</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.country\"\r\n                                    name=\"q_bill_code\"></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tr>\r\n                            <td width=\"40%\">Ship To Name</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.ship_name\"\r\n                                name=\"q_ship_name\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Ship To Street</td>\r\n                            <td><textarea   class=\"form-control form-modal\" [(ngModel)]=\"model.ship_street1\"\r\n                                    name=\"q_ship_street1\"></textarea></td>\r\n                        </tr>\r\n                      \r\n\r\n                        <tr>\r\n                            <td>Ship To City</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.ship_city\"\r\n                                    name=\"q_ship_city\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Ship To State /Province</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.ship_state\"\r\n                                    name=\"q_ship_state\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Ship To Postal Code</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.ship_code\"\r\n                                    name=\"q_ship_code\"></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td>Ship To Country</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.country\"\r\n                                    name=\"q_ship_code\"></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n     \r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-outline-dark\" (click)=\"close()\">Closed</button>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!modalForm.form.valid\">Submit</button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-detail/sales-order-detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-detail/sales-order-detail.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/salesOrder' ]\">Sales Orders</a> / <a\r\n          [routerLink]=\"[ '/salesOrder',id ]\">{{items.name}}</a></small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid border-bottom\">\r\n  <!-- Menu & Information -->\r\n  <div class=\"row  \">\r\n    <!-- Header & button -->\r\n    <div class=\"col-3 bg-light py-2\">\r\n      <div class=\"module-name\">\r\n        <strong>SALES ORDERS</strong>\r\n        <b class=\"text-primary\">{{items.name}}</b>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col-9  bg-light py-2 text-right\">\r\n      <div [hidden]=\"!isReadOnly\">\r\n\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [hidden]=\"items.editable\"    (click)=\"uploadERP();\"> <i class=\"fas fa-upload\"></i>\r\n          Upload to ERP </button>\r\n \r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" [hidden]=\"!items.editable\"  (click)=\"isReadOnly=false\"> <i\r\n            class=\"fas fa-edit\"></i>\r\n          Edit </button>\r\n \r\n       \r\n        <button type=\"button\" class=\"btn btn-classic btn-sm\" [routerLink]=\"[ '/salesOrder' ]\" title=\"back\"> <i\r\n            class=\"fas fa-times\"></i> </button>\r\n\r\n      </div>\r\n\r\n      <div [hidden]=\"isReadOnly\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"isReadOnly=true\" title=\"Done\"> Cancel </button>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Infromation -->\r\n    <div class=\"col-12 py-2\">\r\n      <table class=\"table-p0\">\r\n        <tr>\r\n          <td> <small> Sales Order No.</small> </td>\r\n          <td> <small> Company </small> </td>\r\n          <td> <small> Order Date </small> </td>\r\n          \r\n          <td> <small> Grand Total </small></td> \r\n          <td [hidden]=\"!isReadOnly\"> <small> Status </small> </td>\r\n          \r\n        </tr>\r\n\r\n        <tr>\r\n          <td> <b class=\"text-primary\">{{items.quotes_number}} </b> </td>\r\n          <td> <b class=\"text-primary\">{{items.company}} </b> </td>\r\n          \r\n          <td> <b class=\"text-primary\">\r\n              {{quoteModel.expirationDate.day}}/{{quoteModel.expirationDate.month}}/{{quoteModel.expirationDate.year}}\r\n            </b> </td>\r\n         \r\n          <td> <b class=\"text-primary\"> {{items.currency}} {{pricing.grand_total | number}} </b> </td>\r\n         \r\n          <td [hidden]=\"!isReadOnly\">\r\n              \r\n            <div class=\"dropdown\" >\r\n                <button class=\"btn btn-danger btn-sm dropdown-toggle px-3\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                 <b>  {{items.sales_order_status}}</b>\r\n                </button>\r\n                <div class=\"dropdown-menu  dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                  <a class=\"dropdown-item\" href=\"javascript:;\" *ngFor=\"let x of sales_order_status\" (click)=\"fn_update_status(x.id);\">{{x.name}}</a> \r\n                </div>\r\n              </div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n \r\n \r\n</div>\r\n\r\n\r\n\r\n\r\n<form (ngSubmit)=\"fn_updateSO()\" #quoteForm=\"ngForm\">\r\n\r\n  <div class=\"container-fluid  bg-white\">\r\n\r\n    <div class=\"row\">\r\n      <!-- Left side-->\r\n      <div class=\"col-12 col-md-8\">\r\n \r\n        <!-- Product  line |  Detail  -->\r\n        <div class=\"row my-2\">\r\n\r\n          <div class=\"col-12\">\r\n\r\n            <ngb-tabset type=\"pills\">\r\n\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <div class=\"px-3\">Related</div>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"border-top mt-2\">\r\n                    <div class=\"row py-2\">\r\n                      <div class=\"col-6\">\r\n                        <strong>Product Items ({{total}})</strong>\r\n                      </div>\r\n                      <div class=\"col-6 text-right\" [hidden]=\"isReadOnly\">\r\n                        <button type=\"button\" class=\"btn btn-light btn-sm border mr-1\" (click)=\"open(pricelist);\"> <i\r\n                            class=\"fas fa-plus\"></i>\r\n                          Add Items </button>\r\n\r\n                        <button type=\"button\" class=\"btn btn-light btn-sm  border mr-1\" (click)=\"open(sorting);\"> <i\r\n                            class=\"fas fa-bars\"></i>\r\n                          Sort Items </button>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <table class=\"table table-list table-bordered table-striped\">\r\n                      <thead class=\"thead-light border-top-yellowgreen\">\r\n                        <tr>\r\n\r\n                          <th width=\"400\">PRODUCT NAME</th>\r\n                          <th class=\"text-right\" width=\"150\">PRICE</th>\r\n                          <th class=\"text-right\" width=\"80\">QTY </th>\r\n                          <th class=\"text-right\" width=\"80\">ADDITIONAL DISC </th>\r\n                          <th class=\"text-right\" width=\"150\">NET TOTAL </th>\r\n                          <th width=\"20\"> </th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody class=\"\">\r\n                        <tr *ngFor=\"let x of quote_item; let i = index\" id=\"{{x.id}}\">\r\n\r\n                          <td> {{x.product}}\r\n\r\n                            <div [hidden]=\"!isReadOnly\">\r\n                              <small [hidden]=\"x.hide_description\" style=\" white-space: pre-line;\"> {{x.description}}\r\n                              </small>\r\n\r\n                              <div [hidden]=\"!x.hide_description\"><a href=\"javascript:;\"\r\n                                  (click)=\"show_description(x);\"><small>Show detail</small></a>\r\n                              </div>\r\n\r\n                              <div [hidden]=\"x.hide_description\"><a href=\"javascript:;\"\r\n                                  (click)=\"hide_description(x);\"><small>Hide detail</small></a>\r\n                              </div>\r\n\r\n                            </div>\r\n\r\n                            <textarea [hidden]=\"isReadOnly\" class=\"form-control form-control-sm w-100 form-description\"\r\n                              [(ngModel)]=\"x.description\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"fn_updateQuoteitem(x)\"> </textarea>\r\n                          </td>\r\n\r\n                          <td class=\"text-right\">{{items.currency}} {{x.price | number}}</td>\r\n                          <td class=\"text-right\">\r\n                            <span [hidden]=\"!isReadOnly\"> {{x.qty}}\r\n                            </span>\r\n                            <input [hidden]=\"isReadOnly\" type=\"number\" class=\"form-control-sm border pr-0 text-right\"\r\n                              style=\"width: 80px;\" [(ngModel)]=\"x.qty\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"fn_updateQuoteitem(x)\">\r\n                          </td>\r\n                          <td class=\"text-right\">\r\n                            <span [hidden]=\"!isReadOnly\"> {{x.discount}} </span>\r\n\r\n                            <input [hidden]=\"isReadOnly\" type=\"number\" class=\"form-control-sm border pr-0 text-right\"\r\n                              style=\"width: 50px;\" [(ngModel)]=\"x.discount\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"fn_updateQuoteitem(x)\">\r\n                            %</td>\r\n                          <td class=\"text-right\">{{items.currency}} {{x.total | number}}</td>\r\n                          <td>\r\n\r\n                            <span [hidden]=\"isReadOnly\"> <a href=\"javascript:;\" class=\"px-1\"\r\n                                (click)=\"fn_removeQuoteitem(x);\"> <i class=\"fas fa-trash-alt\"></i> </a> </span>\r\n\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n                      </tbody>\r\n                      <tfoot class=\"d-none\">\r\n\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">Total</td>\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.total | number}}</td>\r\n                          <td></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">Discount {{items.discount}} %</td>\r\n\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.discount | number}} </td>\r\n                          <td></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">Tax {{items.tax}} %</td>\r\n\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.tax | number}} </td>\r\n                          <td></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">shipping and handling</td>\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.shipping | number}} </td>\r\n                          <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td colspan=\"4\" class=\"text-right\">Final Total</td>\r\n                          <td class=\"text-right\">{{items.currency}} {{pricing.grand_total | number}} </td>\r\n                          <td></td>\r\n                        </tr>\r\n\r\n\r\n                      </tfoot>\r\n                    </table>\r\n\r\n\r\n                    <table class=\"table table-list table-bordered\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"20%\"> <b> Total</b></td>\r\n                          <td width=\"20%\"> <b> Discount {{items.discount}} % </b> </td>\r\n                          <td width=\"20%\"><b> Tax  {{items.tax}} % </b></td>\r\n                          <td width=\"20%\"><b> Shipping and handling </b> </td>\r\n                          <td width=\"20%\"> <b> Final Total</b> </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td> {{items.currency}} {{pricing.total | number}}</td>\r\n                          <td>{{items.currency}} {{pricing.discount | number}} </td>\r\n                          <td>{{items.currency}} {{pricing.tax | number}} </td>\r\n                          <td>{{items.currency}} {{pricing.shipping | number}} </td>\r\n                          <td>{{items.currency}} {{pricing.grand_total | number}} </td>\r\n                        </tr>\r\n\r\n                      </tbody>\r\n\r\n                    </table>\r\n\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle>\r\n                  <div class=\"px-3\">Details </div>\r\n                </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"border-top py-2 my-2\">\r\n \r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong>Sales Order Information</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Sales Order Name</td>\r\n                            <td>\r\n                              <input type=\"text\" class=\"form-control form-modal\" id=\"name\" required\r\n                                [(ngModel)]=\"quoteModel.name\" name=\"name\" #name=\"ngModel\" [readonly]=\"isReadOnly\">\r\n                              <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                                Name is required\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        \r\n                          <tr>\r\n                            <td>Company Name</td>\r\n                            <td> <b>{{items.company}} </b> </td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td>Account Manager</td>\r\n                            <td> <select class=\"form-control form-modal\" [disabled]=\"isReadOnly\" [(ngModel)]=\"quoteModel.id_user\" [ngModelOptions]=\"{standalone: true}\">\r\n                                <option value=\"{{x.id}}\" *ngFor=\"let x of user\">{{x.name}}</option> \r\n                              </select> </td>\r\n                          </tr>\r\n                        </table>\r\n\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Expiration Date</td>\r\n                            <td>\r\n                              <span [hidden]=\"!isReadOnly\">\r\n                                {{quoteModel.expirationDate.day}}/{{quoteModel.expirationDate.month}}/{{quoteModel.expirationDate.year}}\r\n                              </span>\r\n\r\n                              <span [hidden]=\"isReadOnly\">\r\n                                <input type=\"text\" class=\"form-control form-modal\" placeholder=\"yyyy-mm-dd\"\r\n                                  (click)=\"d.toggle()\" readonly name=\"d\" [(ngModel)]=\"quoteModel.expirationDate\"\r\n                                  ngbDatepicker #d=\"ngbDatepicker\" required>\r\n                              </span>\r\n\r\n                            </td>\r\n                          </tr>\r\n\r\n\r\n                          <tr>\r\n                            <td>Description</td>\r\n                            <td>\r\n                              <textarea class=\"form-control form-modal\" [(ngModel)]=\"quoteModel.description\"\r\n                                name=\"description\" [readonly]=\"isReadOnly\" rows=\"4\"></textarea>\r\n\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong> Total</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Discount (%)</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"\" style=\"width:40%\"\r\n                                maxlength=\"4\" [(ngModel)]=\"quoteModel.discount\" name=\"discount\" [readonly]=\"isReadOnly\">\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Tax (%)</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\" style=\"width:40%\" maxlength=\"4\"\r\n                                [(ngModel)]=\"quoteModel.tax\" name=\"tax\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Shipping and Handing</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal text-right\" currencyMask \r\n                                [(ngModel)]=\"quoteModel.shipping\" name=\"shipping\" [readonly]=\"isReadOnly\"> </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Grand Total</td>\r\n                            <td> <b>{{items.currency}} {{pricing.grand_total | number}},-</b></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong> Prepared For</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Contact Name</td>\r\n                            <td><select class=\"form-control form-modal\" [disabled]=\"isReadOnly\" [(ngModel)]=\"quoteModel.id_contact\" [ngModelOptions]=\"{standalone: true}\">\r\n                                <option *ngFor=\"let x of contact\" value=\"{{x.id}}\"> {{x.name}} </option>\r\n                              </select></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Email</td>\r\n                            <td>\r\n                              <input type=\"text\" class=\"form-control form-modal\" id=\"\" [(ngModel)]=\"quoteModel.email\"\r\n                                name=\"email\" [readonly]=\"isReadOnly\">\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Phone</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"\" [(ngModel)]=\"quoteModel.phone\"\r\n                                name=\"phone\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Fax</td>\r\n                            <td> <input type=\"text\" class=\"form-control form-modal\" id=\"\" [(ngModel)]=\"quoteModel.fax\"\r\n                                name=\"fax\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 bg-light\">\r\n                        <strong> Address Information</strong>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Bill To Name</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_name\" name=\"bill_name\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Bill To Street 1</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_street1\" name=\"bill_street1\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Bill To Street 2</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_street2\" name=\"bill_street2\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td>Bill To City</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_city\" name=\"bill_city\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Bill To State /Province</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_state\" name=\"bill_state\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Bill To Postal Code</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.bill_code\" name=\"bill_code\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <table class=\"table table-borderless\">\r\n                          <tr>\r\n                            <td width=\"40%\">Ship To Name</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_name\" name=\"ship_name\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Ship To Street 1</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_street1\" name=\"ship_street1\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Ship To Street 2</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_street2\" name=\"ship_street2\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n\r\n                          <tr>\r\n                            <td>Ship To City</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_city\" name=\"ship_city\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Ship To State /Province</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_state\" name=\"ship_state\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Ship To Postal Code</td>\r\n                            <td><input type=\"text\" class=\"form-control form-modal\" id=\"\"\r\n                                [(ngModel)]=\"quoteModel.ship_code\" name=\"ship_code\" [readonly]=\"isReadOnly\"></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!-- End detail-->\r\n\r\n\r\n\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n\r\n\r\n\r\n            </ngb-tabset>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Attachment Title -->\r\n        <div class=\"row my-2\">\r\n          <div class=\"col-6\">\r\n            <strong>Attachment</strong>\r\n          </div>\r\n          <div class=\"col-4 text-right\" [hidden]=\"isReadOnly\">\r\n\r\n            <input class=\"form-control form-control-sm\" type=\"file\" (change)=\"onFileSelected($event)\">\r\n\r\n          </div>\r\n          <div class=\"col-2\" [hidden]=\"isReadOnly\">\r\n            <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"onUpload();\">Upload</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!-- Attachments -->\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <table class=\"table table-list table-bordered table-striped\">\r\n              <thead class=\"thead-light border-top-brown\">\r\n                <tr>\r\n                  <th>Files</th>\r\n                  <th width=\"100\">Size</th>\r\n                  <th width=\"50\"></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let x of attachment\">\r\n                  <td>\r\n                    <a href=\"{{x.url}}\" target=\"_blank\"> {{x.file_name}}</a>\r\n                  </td>\r\n                  <td>\r\n                    {{x.size }}\r\n                  </td>\r\n                  <td>\r\n                    <div [hidden]=\"isReadOnly\">\r\n                      <a href=\"javascript:;\" (click)=\"fn_attach_delete(x);\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n\r\n\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- right side-->\r\n      <div class=\"col-12 col-md-4 border border-top-0\">\r\n          <!-- SEMENTARA KOSONG-->\r\n          <div class=\"row py-3\">\r\n            <div class=\"col-12\">\r\n              <strong>History Process</strong>\r\n            </div> \r\n          </div>\r\n\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <div class=\"border-bottom p-1\" *ngFor=\"let x of sales_order_log\">\r\n                <b> {{x.status}}</b>\r\n                <div> <small>{{x.input_date | date:'medium'}}</small></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <!-- end right side-->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div [hidden]=\"isReadOnly\"><br><br></div>\r\n\r\n  <div class=\"footer-menu bg-white shadow border-top\" [hidden]=\"isReadOnly\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"offset-1 col-10 text-center p-1\">\r\n          <a class=\"btn btn-outline-secondary m-1\" (click)=\"isReadOnly=true\">Close</a>\r\n          <button type=\"submit\" class=\"btn btn-primary m-1\" [disabled]=\"!quoteForm.form.valid\">Save</button>\r\n        </div>\r\n        <div class=\"col-1\">\r\n          <div class=\"py-3\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<ng-template #pricelist let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Price List </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <app-price-list-modal (uploaded)=\"requestEmit($event)\"></app-price-list-modal>\r\n\r\n</ng-template>\r\n\r\n<ng-template #sorting let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">Sort Items </strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-light p-0\">\r\n\r\n\r\n    <div class=\"text-center py-2\"> Drag the items into the order you want. It will save. <i\r\n        class=\"fas fa-exclamation-circle\"></i> </div>\r\n\r\n    <table class=\"table border bg-white table-hover\" [sortablejs]=\"quote_item\" [sortablejsOptions]=\"eventOptions\">\r\n      <tr *ngFor=\"let x of quote_item\">\r\n        <td width=\"20\"> <i class=\"fas fa-bars\"></i> </td>\r\n        <td> {{ x.product }} </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-sm btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n\r\n<div class=\"error-container\">\r\n  <div class=\"container bg-white-transparent border rounded-sm shadow-lg \">\r\n    <div class=\"row \">\r\n      <div class=\"col-12 p-3 \">\r\n        <div class=\"error-log\">\r\n        log error \r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"\"><small>  Send feedback to Support Now !</small></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-print/sales-order-print.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-print/sales-order-print.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <p>print Sales Order preview <a href=\"javascript:;\" (click)=\"print();\"><i class=\"fas fa-print\"></i>  Print</a> \r\n        <a href=\"javascript:;\" (click)=\"close();\"> Closed </a>\r\n    </p> \r\n\r\n    <p [innerHTML]=\"test\"></p>\r\n    <code>\r\n        {{items |json}}\r\n    </code>  \r\n    <hr>\r\n    <code>\r\n        {{quote_item |json}}\r\n    </code>  \r\n</div>\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/salesOrder' ]\">Sales Orders</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid  bg-white pb-3\">\r\n\r\n  <div class=\"container-header\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <div class=\"module-name\">\r\n          <h5>SALES ORDERS</h5>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-8 text-right\">\r\n        <button type=\"button\" class=\"btn btn-classic btn-sm  mr-1\" (click)=\"open(createSO)\"><i\r\n            class=\"fas fa-dollar-sign\"></i> Create Sales Order </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\" bg-light  border border-top-brown rounded p-1\">\r\n\r\n    <table id=\"dtable\" class=\"table table-hover border bg-white border-top border-bottom pointer\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n\r\n          <th  width=\"50\">ID</th>\r\n          <th>SO Number</th>\r\n          <th>Name</th>\r\n          <th scope=\"col\" class=\"select-filter\">Company</th>\r\n          <th scope=\"col\">Total</th>\r\n\r\n          <th scope=\"col\">Commitment Date</th>\r\n          <th scope=\"col\"  class=\"select-filter\">Status</th>\r\n          <th scope=\"col\" class=\"select-filter\">Account Manager</th>\r\n\r\n\r\n\r\n        </tr>\r\n      </thead>\r\n\r\n      <tfoot>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n\r\n        </tr>\r\n      </tfoot>\r\n\r\n    </table>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<ng-template #createSO let-modal>\r\n  <app-sales-order-create (uploaded)=\"requestEmit($event)\"></app-sales-order-create>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <small> You are here : <a [routerLink]=\"[ '/User' ]\">Users</a> </small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container my-5\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12 border shadow-sm rounded\">\r\n\r\n            <form (ngSubmit)=\"fn_update()\" #modalForm=\"ngForm\">\r\n\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-6\"> \r\n                        <h4 id=\"modal-basic-title\">User Detail </h4> \r\n                    </div>\r\n\r\n                    <div class=\"col-6 text-right\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-outline-dark mx-2\"\r\n                            [routerLink]=\"[ '/user' ]\">Back</button>\r\n\r\n                        <button type=\"submit\" class=\"btn btn-sm  btn-primary\"\r\n                            [disabled]=\"!modalForm.form.valid\">Update</button>\r\n\r\n                        \r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"modal-body bg-white\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 bg-light\">\r\n                            <h5>Information</h5>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <table class=\"table table-borderless\">\r\n                                <tr>\r\n                                    <td>ID Parent</td>\r\n                                    <td>\r\n                                        <select class=\"form-control form-modal\" [(ngModel)]=\"model.id_parent\"\r\n                                            id=\"id_parent\" name=\"id_parent\" required\r\n                                            [ngModelOptions]=\"{standalone: true}\">\r\n                                            <option value=\"{{x.id}}\" *ngFor=\"let x of parent\">{{x.name}}\r\n                                            </option>\r\n                                        </select>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td width=\"40%\">First Name</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control form-modal\"\r\n                                            [(ngModel)]=\"model.first_name\" id=\"first_name\" name=\"first_name\"\r\n                                            #first_name=\"ngModel\" required>\r\n                                        <div [hidden]=\"first_name.valid || first_name.pristine\"\r\n                                            class=\"alert alert-danger\">First Name is required</div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Last Name</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.last_name\"\r\n                                            id=\"last_name\" name=\"last_name\" #last_name=\"ngModel\">\r\n                                        <div [hidden]=\"last_name.valid || last_name.pristine\"\r\n                                            class=\"alert alert-danger\">Last Name is required</div>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>Email</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.email\"\r\n                                            id=\"email\" name=\"email\" #email=\"ngModel\" required>\r\n                                        <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                                            Email is required</div>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>Max discount (%)</td>\r\n                                    <td>\r\n                                        <input type=\"number\" class=\"form-control form-modal w-25\"\r\n                                            [(ngModel)]=\"model.max_discount\" id=\"max_discount\" name=\"max_discount\"\r\n                                            required>\r\n\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <table class=\"table table-borderless\">\r\n                                <tr>\r\n                                    <td>User Code</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.code\"\r\n                                            id=\"code\" name=\"code\" #code=\"ngModel\" required>\r\n                                        <div [hidden]=\"code.valid || code.pristine\" class=\"alert alert-danger\">\r\n                                            Code is required</div>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>User Access</td>\r\n                                    <td>\r\n                                        <select class=\"form-control form-modal\" [(ngModel)]=\"model.id_user_access\"\r\n                                            id=\"id_user_access\" name=\"id_user_access\" required\r\n                                            [ngModelOptions]=\"{standalone: true}\">\r\n                                            <option value=\"{{x.id}}\" *ngFor=\"let x of user_access\">{{x.name}}\r\n                                            </option>\r\n                                        </select>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>User Group</td>\r\n                                    <td>\r\n                                        <select class=\"form-control form-modal\" [(ngModel)]=\"model.id_user_group\"\r\n                                            id=\"id_user_group\" name=\"id_user_group\" required\r\n                                            [ngModelOptions]=\"{standalone: true}\">\r\n                                            <option value=\"{{x.id}}\" *ngFor=\"let x of user_group\">{{x.name}}\r\n                                            </option>\r\n                                        </select>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr width=\"40%\">\r\n                                    <td>Status </td>\r\n                                    <td>\r\n                                        <select class=\"form-control form-modal\" [(ngModel)]=\"model.status\" id=\"status\"\r\n                                            name=\"id_user_access\" required>\r\n                                            <option value=\"0\">False</option>\r\n                                            <option value=\"1\">True</option>\r\n                                        </select>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td> Password </td>\r\n                                    <td> <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.pass\" id=\"pass\"\r\n                                            name=\"pass\"> </td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 bg-light\">\r\n                            <h5>Target per year</h5>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <table class=\"table my-2 border\" [hidden]=\"user_target.length == 0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th> Years </th>\r\n                                        <th> Amount </th>\r\n                                        <th> Leads (Qty) </th>\r\n                                        <th> Opportunities (Qty) </th>\r\n                                        <th> Quotes (Qty) </th>\r\n                                        <th width=\"10\"> <i class=\"far fa-trash-alt\"></i> </th>\r\n\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n\r\n                                    <tr *ngFor=\"let x of user_target\">\r\n                                        <td> <input type=\"number\" class=\"form-control form-control-sm w-75\"\r\n                                                [(ngModel)]=\"x.year\" [ngModelOptions]=\"{standalone: true}\"> </td>\r\n                                        <td> <input type=\"text\" class=\"form-control form-control-sm w-100\"\r\n                                                [(ngModel)]=\"x.amount\" currencyMask\r\n                                                [ngModelOptions]=\"{standalone: true}\"> </td>\r\n\r\n                                        <td> <input type=\"number\" class=\"form-control form-control-sm  w-75 text-right\"\r\n                                                [(ngModel)]=\"x.leads\" [ngModelOptions]=\"{standalone: true}\"> </td>\r\n                                        <td> <input type=\"number\" class=\"form-control form-control-sm  w-75 text-right\"\r\n                                                [(ngModel)]=\"x.opportunities\" [ngModelOptions]=\"{standalone: true}\">\r\n                                        </td>\r\n                                        <td> <input type=\"number\" class=\"form-control form-control-sm  w-75 text-right\"\r\n                                                [(ngModel)]=\"x.quotes\" [ngModelOptions]=\"{standalone: true}\"> </td>\r\n                                        <td>\r\n                                            <a href=\"javascript:;\" (click)=\"fn_delete(x.id);\"><i\r\n                                                    class=\"far fa-trash-alt\"></i></a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n\r\n\r\n                            </table>\r\n\r\n                            <div class=\"mt-5\">\r\n\r\n                                <h5>Create new target</h5>\r\n                                <table class=\"table border bg-light\">\r\n\r\n                                    <tr>\r\n                                        <th>Year</th>\r\n                                        <th>Amount</th>\r\n                                        <th>Leads</th>\r\n                                        <th>Opportunities</th>\r\n                                        <th>Quotes</th>\r\n                                    </tr>\r\n                                    <tr>\r\n\r\n                                        <td> <input type=\"number\" maxlength=\"4\" class=\"form-control form-control-sm\"\r\n                                                [(ngModel)]=\"newTargetAmount.year\"\r\n                                                [ngModelOptions]=\"{standalone: true}\">\r\n                                        </td>\r\n\r\n\r\n                                        <td> <input type=\"text\" class=\"form-control form-control-sm\" currencyMask\r\n                                                [(ngModel)]=\"newTargetAmount.amount\"\r\n                                                [ngModelOptions]=\"{standalone: true}\">\r\n                                        </td>\r\n\r\n                                        <td> <input type=\"text\" class=\"form-control form-control-sm\"\r\n                                                [(ngModel)]=\"newTargetAmount.leads\"\r\n                                                [ngModelOptions]=\"{standalone: true}\">\r\n                                        </td>\r\n\r\n\r\n                                        <td> <input type=\"text\" class=\"form-control form-control-sm\"\r\n                                                [(ngModel)]=\"newTargetAmount.opportunities\"\r\n                                                [ngModelOptions]=\"{standalone: true}\">\r\n                                        </td>\r\n\r\n\r\n                                        <td> <input type=\"text\" class=\"form-control form-control-sm\"\r\n                                                [(ngModel)]=\"newTargetAmount.quotes\"\r\n                                                [ngModelOptions]=\"{standalone: true}\">\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                </table>\r\n\r\n                                <div class=\"text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n                                        (click)=\"fn_insertTargetAmount()\">\r\n                                        Add Target </button>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </form>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<app-navigator></app-navigator>\r\n\r\n<div class=\"container-fluid bg-light border-bottom py-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <small> You are here : <a [routerLink]=\"[ '/user' ]\">Users</a> </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid border shadow-sm bg-white\">\r\n\r\n  <div class=\"row py-3\">\r\n    <div class=\"col-6 \">\r\n      <div class=\"module-name\">\r\n        <h5>USERS</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 text-right\">\r\n      <button type=\"button\" class=\"btn btn-classic  btn-sm\" (click)=\"open(newUser)\"><i class=\"fas fa-plus\"></i>\r\n        New User</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\" bg-light  border border-top-brown rounded p-1 my-3\">\r\n\r\n     \r\n\r\n\r\n    <div class=\"scroll-x scroll-style-2 bg-white border userItems\">\r\n\r\n      <div>\r\n\r\n        <div class=\"itemInfo itemInfoHeader px-2 py-1 text-right mr-3\">\r\n          <span class=\"itemInfoName\">Name / Email</span>\r\n          <span class=\"text-left w100\"> Access</span>\r\n          <span class=\"text-left w100\">Group</span>\r\n          <span class=\"text-right w100\"> target amount year</span>\r\n    \r\n          \r\n          <span>Leads</span>\r\n          <span>Opportunities</span>\r\n          <span>Quotes</span>\r\n          <span class=\"text-right\"> discount</span>\r\n          <span><strong> Status </strong> </span>\r\n        </div>\r\n      </div>\r\n\r\n      <ul>\r\n        <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ $implicit: items }\"></ng-container>\r\n      </ul>\r\n\r\n      <ng-template #recursiveListTmpl let-items>\r\n        <li *ngFor=\"let item of items\" class=\"border-top py-1 liUser\">\r\n          <div class=\"name\">\r\n            <a [routerLink]=\"[ '/user/',item.id]\"> <b> {{item.name}} </b></a>\r\n            <div>{{item.email}}</div>\r\n          </div>\r\n          <div class=\"  itemInfo p-2 text-right mr-3\">\r\n\r\n\r\n            <span class=\"text-left w100\">{{item.user_access.name}}</span>\r\n            <span class=\"text-left w100\">{{item.user_group.name}}</span>\r\n            <span class=\"text-right w100\"> {{item.currency}} {{item.target_amount_year | number}}</span>\r\n \r\n\r\n            <span>{{item.target_leads | number}}</span>\r\n            <span>{{item.target_opportunities | number}}</span>\r\n            <span>{{item.target_quotes | number}}</span>\r\n            <span class=\"text-right\">{{item.max_discount}} %</span>\r\n            <span><strong> {{item.status}} </strong> </span>\r\n          </div>\r\n\r\n\r\n          <ul *ngIf=\"item.child.length > 0\">\r\n            <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ $implicit: item.child }\"></ng-container>\r\n          </ul>\r\n        </li>\r\n      </ng-template>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<ng-template #markUpdate let-modal>\r\n  <div class=\"modal-header\">\r\n    <strong class=\"modal-title\" id=\"modal-basic-title\">{{modalTitle}}</strong>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white\">\r\n\r\n    <div [hidden]=\"!itemsSelected.length\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-3\">\r\n          <div class=\"text-danger\">\r\n            Delete selected Contact ?\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"fn_delete();\">Yes</button>\r\n          <button type=\"button\" class=\"btn btn-classic btn-sm\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table border table-hover  table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>ID</th>\r\n            <th>Contact</th>\r\n            <th>Company</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let x of itemsSelected; let i = index\">\r\n            <td>{{ i + 1}}</td>\r\n            <td>{{x.id}}</td>\r\n            <td>{{x.name}}</td>\r\n            <td>{{x.company}}</td>\r\n            <th> <a href=\"javascript:;\" (click)=\"fn_removeItemSelected(x)\"><i class=\"fas fa-times\"></i></a> </th>\r\n          </tr>\r\n        </tbody>\r\n\r\n\r\n      </table>\r\n    </div>\r\n    <div [hidden]=\"itemsSelected.length\">\r\n      <div class=\"text-center\">\r\n        Empty data.\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n\r\n<ng-template #newUser let-modal>\r\n  <form (ngSubmit)=\"fn_insert()\" #modalForm=\"ngForm\">\r\n    <div class=\"modal-header\">\r\n      <strong class=\"modal-title\" id=\"modal-basic-title\">Create New User</strong>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body bg-white\">\r\n\r\n      <table class=\"table table-borderless\">\r\n\r\n\r\n\r\n        <tr>\r\n          <td>Parent User</td>\r\n          <td>\r\n            <select class=\"form-control form-modal\" [(ngModel)]=\"model.id_parent\" id=\"firstid_parent_name\"\r\n              name=\"id_parent\">\r\n              <option> - </option>\r\n              <option value=\"{{x.id}}\" *ngFor=\"let x of parent\"> {{x.name}} </option>\r\n            </select>\r\n\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td width=\"40%\">First Name</td>\r\n          <td>\r\n            <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.first_name\" id=\"first_name\"\r\n              name=\"first_name\" #first_name=\"ngModel\" required>\r\n            <div [hidden]=\"first_name.valid || first_name.pristine\" class=\"alert alert-danger\">First Name is required\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Last Name</td>\r\n          <td>\r\n            <input type=\"text\" class=\"form-control form-modal\" [(ngModel)]=\"model.last_name\" id=\"last_name\"\r\n              name=\"last_name\" #last_name=\"ngModel\">\r\n            <div [hidden]=\"last_name.valid || last_name.pristine\" class=\"alert alert-danger\">Last Name is required</div>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Email</td>\r\n          <td>\r\n            <input type=\"email\" class=\"form-control form-modal\" [(ngModel)]=\"model.email\" id=\"email\" name=\"email\"\r\n              #email=\"ngModel\" required [email]=\"true\">\r\n            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n              Email is required</div>\r\n\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Password</td>\r\n          <td>\r\n            <input type=\"password\" class=\"form-control form-modal\" [(ngModel)]=\"model.password\" id=\"password\"\r\n              name=\"password\" required>\r\n\r\n          </td>\r\n        </tr>\r\n      </table> \r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Cancel</button>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!modalForm.form.valid\">Submit</button>\r\n    </div>\r\n  </form>\r\n\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"text-center\">\r\n                <h1>Warning on {{path}}</h1>\r\n                <h4 class=\"text-danger\">You cannot access {{target}} pages or data is not found.</h4>\r\n                <a [routerLink]=\"[ '/' ]\">Back Home</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/access-data/access-data.component.css":
/*!*******************************************************!*\
  !*** ./src/app/access-data/access-data.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/access-data/access-data.component.ts":
/*!******************************************************!*\
  !*** ./src/app/access-data/access-data.component.ts ***!
  \******************************************************/
/*! exports provided: AccessDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDataComponent", function() { return AccessDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let AccessDataComponent = class AccessDataComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.itemDetail = [];
        this.loading = true;
        this.newName = "";
        this.isReadonly = true;
        this.isUpdate = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'access_data', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            console.log(data);
            this.loading = false;
        });
    }
    update(x) {
        this.isUpdate = true;
        console.log(x);
        this.http.post(this.configService.base_url() + 'access_data/update', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
            this.isUpdate = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    insert() {
        if (this.newName != "") {
            this.http.post(this.configService.base_url() + 'access_data/insert', {
                "name": this.newName
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.httpGet();
                this.newName = "";
            }, error => {
                // console.log(error);
                // console.log(error.error.text);
            });
        }
    }
    fn_delete(x) {
        this.http.post(this.configService.base_url() + 'access_data/fn_delete', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
};
AccessDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AccessDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./access-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/access-data/access-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./access-data.component.css */ "./src/app/access-data/access-data.component.css")).default]
    })
], AccessDataComponent);



/***/ }),

/***/ "./src/app/access-right/access-right-detail/access-right-detail.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/access-right/access-right-detail/access-right-detail.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/access-right/access-right-detail/access-right-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/access-right/access-right-detail/access-right-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AccessRightDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRightDetailComponent", function() { return AccessRightDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let AccessRightDetailComponent = class AccessRightDetailComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.loading = true;
        this.accessRules = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'access_right/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.items = data['result'];
            this.loading = false;
        });
    }
    sync() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'access_right/sync/', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
            console.log(data);
        });
    }
    update() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'access_right/update', {
            "name": this.items['name'],
            "id": this.items['id_user_access'],
            "data": this.items['user_access_rules']
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            if (data['error'] == 0) {
                localStorage.setItem('crm3ng8Rules', JSON.stringify(data));
            }
            console.log(data);
            this.loading = false;
        }, error => {
            this.loading = false;
            console.log(error);
            console.log(error.error.text);
        });
    }
};
AccessRightDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AccessRightDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access-right-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./access-right-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/access-right/access-right-detail/access-right-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./access-right-detail.component.css */ "./src/app/access-right/access-right-detail/access-right-detail.component.css")).default]
    })
], AccessRightDetailComponent);



/***/ }),

/***/ "./src/app/access-right/access-right.component.css":
/*!*********************************************************!*\
  !*** ./src/app/access-right/access-right.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/access-right/access-right.component.ts":
/*!********************************************************!*\
  !*** ./src/app/access-right/access-right.component.ts ***!
  \********************************************************/
/*! exports provided: AccessRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRightComponent", function() { return AccessRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _access_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access-right */ "./src/app/access-right/access-right.ts");







let AccessRightComponent = class AccessRightComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.loading = true;
        this.accessRules = [];
        this.model = new _access_right__WEBPACK_IMPORTED_MODULE_6__["NewAccessRight"]('');
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'access_right/', {
            headers: this.configService.headers()
        }).subscribe(data => {
            //  console.log(data);
            this.items = data['result']['user_access'];
            this.loading = false;
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    onSubmit() {
        this.http.post(this.configService.base_url() + 'access_right/onSubmit', {
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            //  console.log(data);
            this.model = new _access_right__WEBPACK_IMPORTED_MODULE_6__["NewAccessRight"]('');
            this.router.navigate(['/accessRight/', data['result']['id']]);
            this.modalService.dismissAll();
        }, error => {
            //  console.log(error);
            //  console.log(error.error.text);
        });
    }
};
AccessRightComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AccessRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access-right',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./access-right.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/access-right/access-right.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./access-right.component.css */ "./src/app/access-right/access-right.component.css")).default]
    })
], AccessRightComponent);



/***/ }),

/***/ "./src/app/access-right/access-right.ts":
/*!**********************************************!*\
  !*** ./src/app/access-right/access-right.ts ***!
  \**********************************************/
/*! exports provided: AccessRight, NewAccessRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRight", function() { return AccessRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccessRight", function() { return NewAccessRight; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AccessRight {
    constructor() { }
}
class NewAccessRight {
    constructor(name) {
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account */ "./src/app/account/account.ts");






let AccountComponent = class AccountComponent {
    constructor(http, router, configService) {
        this.http = http;
        this.router = router;
        this.configService = configService;
        this.items = [];
        this.loading = true;
        this.model = new _account__WEBPACK_IMPORTED_MODULE_5__["EditAccount"]('', '', '', '', '', '', '', '');
        this.user = [];
        this.isReadonly = true;
        this.isUpdate = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'account', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            this.user = data['result']['user'];
            this.model = new _account__WEBPACK_IMPORTED_MODULE_5__["EditAccount"](data['result']['data']['id'], data['result']['data']['id_user'], data['result']['data']['company'], data['result']['data']['address'], data['result']['data']['key'], data['result']['data']['uniqueMachineID'], data['result']['data']['start_date'], data['result']['data']['expired_date']);
            // console.log(data);
            this.loading = false;
        });
    }
    onSubmit() {
        this.isUpdate = true;
        this.loading = true;
        this.http.post(this.configService.base_url() + 'account/fnUpdate', {
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.isUpdate = false;
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/account/account.ts":
/*!************************************!*\
  !*** ./src/app/account/account.ts ***!
  \************************************/
/*! exports provided: EditAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccount", function() { return EditAccount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EditAccount {
    constructor(id, id_user, company, address, key, uniqueMachineID, start_date, expired_date) {
        this.id = id;
        this.id_user = id_user;
        this.company = company;
        this.address = address;
        this.key = key;
        this.uniqueMachineID = uniqueMachineID;
        this.start_date = start_date;
        this.expired_date = expired_date;
    }
}


/***/ }),

/***/ "./src/app/activity/activity.component.css":
/*!*************************************************!*\
  !*** ./src/app/activity/activity.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/activity/activity.component.ts":
/*!************************************************!*\
  !*** ./src/app/activity/activity.component.ts ***!
  \************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _widget_activity_widget_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget-activity/widget-activity.component */ "./src/app/activity/widget-activity/widget-activity.component.ts");







let ActivityComponent = class ActivityComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.user = [];
        this.itemsSelected = [];
        this.loading = true;
        this.newContact = false;
        this.modalTitle = "";
        this.filter = {
            id_user: "0",
            id_activity_type: "0",
            date_select: "0",
            id_related: "0",
            comments: false,
        };
        this.showActivity = false;
        this.parentMessage = "message from parent";
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
        var objFilter = this.activatedRoute.snapshot.params.filter;
        if (objFilter) {
            objFilter = JSON.parse(atob(objFilter));
            this.filter['id_user'] = objFilter['id_user'];
            this.filter['id_activity_type'] = objFilter['id_activity_type'];
            this.filter['date_select'] = objFilter['date_select'];
            this.filter['id_related'] = objFilter['id_related'];
            this.filter['comments'] = objFilter['comments'];
        }
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'activity', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.user = data['result']['user'];
            this.loading = false;
        });
    }
    fn_filter() {
        var obj = btoa(JSON.stringify(this.filter));
        this.childcomp.httpHistoryFilter(obj);
        this.router.navigate(['/activity/', obj]);
    }
};
ActivityComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_widget_activity_widget_activity_component__WEBPACK_IMPORTED_MODULE_6__["WidgetActivityComponent"], { static: true })
], ActivityComponent.prototype, "childcomp", void 0);
ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activity/activity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity.component.css */ "./src/app/activity/activity.component.css")).default]
    })
], ActivityComponent);



/***/ }),

/***/ "./src/app/activity/activity.ts":
/*!**************************************!*\
  !*** ./src/app/activity/activity.ts ***!
  \**************************************/
/*! exports provided: Activity, GetSelected, WidgetActivty, widgetList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSelected", function() { return GetSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetActivty", function() { return WidgetActivty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetList", function() { return widgetList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Activity {
    constructor(id, activity_type, subject, due_date, description, start_date, start_time, end_date, end_time, log, person, show, id_module, input_date, input_by, update_date, update_by) {
        this.id = id;
        this.activity_type = activity_type;
        this.subject = subject;
        this.due_date = due_date;
        this.description = description;
        this.start_date = start_date;
        this.start_time = start_time;
        this.end_date = end_date;
        this.end_time = end_time;
        this.log = log;
        this.person = person;
        this.show = show;
        this.id_module = id_module;
        this.input_date = input_date;
        this.input_by = input_by;
        this.update_date = update_date;
        this.update_by = update_by;
    }
}
class GetSelected {
}
class WidgetActivty {
    constructor(id_activity_type, id_user, id_person, id_module, subject, description, due_date, start_date, end_date, start_time, end_time, id_company, id_opportunity, amount) {
        this.id_activity_type = id_activity_type;
        this.id_user = id_user;
        this.id_person = id_person;
        this.id_module = id_module;
        this.subject = subject;
        this.description = description;
        this.due_date = due_date;
        this.start_date = start_date;
        this.end_date = end_date;
        this.start_time = start_time;
        this.end_time = end_time;
        this.id_company = id_company;
        this.id_opportunity = id_opportunity;
        this.amount = amount;
    }
}
class widgetList {
}


/***/ }),

/***/ "./src/app/activity/widget-activity/widget-activity.component.css":
/*!************************************************************************!*\
  !*** ./src/app/activity/widget-activity/widget-activity.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  .inline-text { width:100%; text-align:center; border-bottom: 1px solid #ccc; line-height:0.1em; margin:10px 0 20px; } \r\n  .inline-text span { background:#fff; padding:0 10px; } \r\n  .position-ontop{\r\n    position: fixed;\r\n    top: 41px;\r\n    left: 0px;\r\n    z-index: 999;\r\n    max-width:900px;\r\n    width: 100%;\r\n}\r\n");

/***/ }),

/***/ "./src/app/activity/widget-activity/widget-activity.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/activity/widget-activity/widget-activity.component.ts ***!
  \***********************************************************************/
/*! exports provided: WidgetActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetActivityComponent", function() { return WidgetActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _service_errorhandle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../service/errorhandle.service */ "./src/app/service/errorhandle.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _activity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../activity */ "./src/app/activity/activity.ts");









let WidgetActivityComponent = class WidgetActivityComponent {
    constructor(route, http, router, activatedRoute, configService, errorhandleService, modalService, config) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.errorhandleService = errorhandleService;
        this.modalService = modalService;
        this.loading = false;
        this.items = [];
        this.date = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()
        };
        this.activity = [];
        this.history = [];
        this.id_activity_type = "100";
        this.model = [];
        this.user = [];
        this.showNewActivity = false;
        this.activityLatest = [];
        this.activityHistory = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        // console.log( this.route.snapshot);
        this.module = this.route.snapshot.url[0].path;
        this.id = "false";
        if (this.route.snapshot.url[1]) {
            this.id = this.route.snapshot.url[1].path;
        }
        this.httpGet();
        this.httpHistory();
    }
    httpHistory() {
        this.loading = true;
        var link;
        if (this.module == "activity") {
            link = this.configService.base_url() + 'activity/httpHistory/' + this.module + '/?f=' + this.id;
        }
        else {
            link = this.configService.base_url() + 'activity/httpHistory/' + this.module + '/' + this.id;
        }
        //console.log( this.id);
        this.http.get(link, {
            headers: this.configService.headers()
        }).subscribe(data => {
            // console.log(data);
            this.loading = false;
            this.activityLatest = data['result']['latest'];
            this.activityHistory = data['result']['history'];
        }, error => {
            this.errorhandleService.log(error.error.text);
        });
    }
    httpHistoryFilter(obj) {
        this.loading = true;
        var link = this.configService.base_url() + 'activity/httpHistory/' + this.module + '/?f=' + obj;
        //console.log( this.id);
        this.http.get(link, {
            headers: this.configService.headers()
        }).subscribe(data => {
            //console.log(data);
            this.id_user = data['result']['id_user'];
            this.loading = false;
            this.activityLatest = data['result']['latest'];
            this.activityHistory = data['result']['history'];
        }, error => {
            console.log(error);
        });
    }
    httpGet() {
        var link;
        if (this.module == "activity") {
            link = this.configService.base_url() + 'activity/httpGet/' + this.module + '/?f=' + this.id;
        }
        else {
            link = this.configService.base_url() + 'activity/httpGet/' + this.module + '/' + this.id;
        }
        // console.log('link',link, this.module );
        this.http.get(link, {
            headers: this.configService.headers()
        }).subscribe(data => {
            // console.log(data);
            this.loading = false;
            this.items = data['result']['data'];
            this.model = new _activity__WEBPACK_IMPORTED_MODULE_7__["WidgetActivty"](this.id_activity_type, this.id_user, "", "0", '', '', this.date, this.date, this.date, "00:00", "00:00", data['result']['data']['id_company'], data['result']['data']['id_opporunty'], 0);
            this.model['id_user'] = data['result']['data']['id_user'];
            this.model['id_person'] = data['result']['data']['person'][0]['id'];
            this.model['id_module'] = data['result']['data']['id_module'];
            this.id_user = data['result']['id_user'];
            this.user = data['result']['user'];
        }, error => {
            // console.log(error);
        });
    }
    onInsert() {
        this.http.post(this.configService.base_url() + 'activity/onInsert', {
            "data": this.model,
            "id": this.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.model['subject'] = null;
            this.model['description'] = null;
            this.model['amount'] = 0;
            // this.httpHistory();   
            if (Array.isArray(data['result']['latest']) == false) {
                this.activityLatest.unshift(data['result']['latest']);
            }
            if (Array.isArray(data['result']['history']) == false) {
                this.activityHistory.unshift(data['result']['history']);
            }
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    tabEvent($event) {
        this.model['id_activity_type'] = $event.nextId;
    }
    fn_comments(comments, id, index, closed) {
        // console.log(comments, id, index);
        this.http.post(this.configService.base_url() + 'activity/fn_comments', {
            "id_activity": id,
            "comments": comments,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            // console.log(data);
            if (closed == 0) {
                // console.log(closed);
                this.activityLatest[index]['activity_comment'].push(data['result']['data']);
            }
            else if (closed == 1) {
                // console.log(closed);
                this.activityHistory[index]['activity_comment'].push(data['result']['data']);
            }
            //  this.activityHistory.unshift(data['result']['data']);
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    fn_closed_area(i) {
        if (this.activityLatest[i]['closed_area'] == false) {
            this.activityLatest[i]['closed_area'] = true;
        }
        else {
            this.activityLatest[i]['closed_area'] = false;
        }
    }
    fn_closed(x) {
        var objIndex = this.activityLatest.findIndex((obj => obj.id == x.id));
        this.activityLatest.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'activity/fn_closed', {
            "id": x.id,
            "data": x,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.activityHistory.unshift(data['result']['data']);
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    fn_remove(x) {
        var objIndex = this.activityLatest.findIndex((obj => obj.id == x.id));
        this.activityLatest.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'activity/fn_remove', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    showHistory(i) {
        if (this.activityHistory[i]['show'] == false) {
            this.activityHistory[i]['show'] = true;
        }
        else {
            this.activityHistory[i]['show'] = false;
        }
    }
    showLatest(i) {
        if (this.activityLatest[i]['show'] == false) {
            this.activityLatest[i]['show'] = true;
        }
        else {
            this.activityLatest[i]['show'] = false;
        }
    }
};
WidgetActivityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _service_errorhandle_service__WEBPACK_IMPORTED_MODULE_5__["ErrorhandleService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"] }
];
WidgetActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-activity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activity/widget-activity/widget-activity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-activity.component.css */ "./src/app/activity/widget-activity/widget-activity.component.css")).default]
    })
], WidgetActivityComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lead_lead_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead/lead.component */ "./src/app/lead/lead.component.ts");
/* harmony import */ var _lead_lead_detail_lead_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lead/lead-detail/lead-detail.component */ "./src/app/lead/lead-detail/lead-detail.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/activity/activity.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact-detail/contact-detail.component */ "./src/app/contact/contact-detail/contact-detail.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/company-detail/company-detail.component */ "./src/app/company/company-detail/company-detail.component.ts");
/* harmony import */ var _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./opportunity/opportunity.component */ "./src/app/opportunity/opportunity.component.ts");
/* harmony import */ var _opportunity_opportunity_detail_opportunity_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./opportunity/opportunity-detail/opportunity-detail.component */ "./src/app/opportunity/opportunity-detail/opportunity-detail.component.ts");
/* harmony import */ var _opportunity_opportunity_edit_opportunity_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./opportunity/opportunity-edit/opportunity-edit.component */ "./src/app/opportunity/opportunity-edit/opportunity-edit.component.ts");
/* harmony import */ var _opportunity_opportunity_new_opportunity_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./opportunity/opportunity-new/opportunity-new.component */ "./src/app/opportunity/opportunity-new/opportunity-new.component.ts");
/* harmony import */ var _deal_deal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deal/deal.component */ "./src/app/deal/deal.component.ts");
/* harmony import */ var _deal_deal_detail_deal_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./deal/deal-detail/deal-detail.component */ "./src/app/deal/deal-detail/deal-detail.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./quote/quote-detail/quote-detail.component */ "./src/app/quote/quote-detail/quote-detail.component.ts");
/* harmony import */ var _price_list_price_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./price-list/price-list.component */ "./src/app/price-list/price-list.component.ts");
/* harmony import */ var _price_list_price_list_product_price_list_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./price-list/price-list-product/price-list-product.component */ "./src/app/price-list/price-list-product/price-list-product.component.ts");
/* harmony import */ var _price_list_price_list_modal_price_list_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./price-list/price-list-modal/price-list-modal.component */ "./src/app/price-list/price-list-modal/price-list-modal.component.ts");
/* harmony import */ var _quote_quote_print_quote_print_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./quote/quote-print/quote-print.component */ "./src/app/quote/quote-print/quote-print.component.ts");
/* harmony import */ var _guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guard/active-guard.guard */ "./src/app/guard/active-guard.guard.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/warning/warning.component.ts");
/* harmony import */ var _access_right_access_right_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./access-right/access-right.component */ "./src/app/access-right/access-right.component.ts");
/* harmony import */ var _access_right_access_right_detail_access_right_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./access-right/access-right-detail/access-right-detail.component */ "./src/app/access-right/access-right-detail/access-right-detail.component.ts");
/* harmony import */ var _customer_class_class_price_list_class_price_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customer-class/class-price-list/class-price-list.component */ "./src/app/customer-class/class-price-list/class-price-list.component.ts");
/* harmony import */ var _price_list_price_list_detail_price_list_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./price-list/price-list-detail/price-list-detail.component */ "./src/app/price-list/price-list-detail/price-list-detail.component.ts");
/* harmony import */ var _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sales-order/sales-order.component */ "./src/app/sales-order/sales-order.component.ts");
/* harmony import */ var _sales_order_sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sales-order/sales-order-detail/sales-order-detail.component */ "./src/app/sales-order/sales-order-detail/sales-order-detail.component.ts");
/* harmony import */ var _sales_order_sales_order_create_sales_order_create_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sales-order/sales-order-create/sales-order-create.component */ "./src/app/sales-order/sales-order-create/sales-order-create.component.ts");
/* harmony import */ var _sales_order_sales_order_print_sales_order_print_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sales-order/sales-order-print/sales-order-print.component */ "./src/app/sales-order/sales-order-print/sales-order-print.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/user-detail/user-detail.component */ "./src/app/user/user-detail/user-detail.component.ts");
/* harmony import */ var _lead_lead_converd_lead_converd_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./lead/lead-converd/lead-converd.component */ "./src/app/lead/lead-converd/lead-converd.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _master_industry_master_industry_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./master-industry/master-industry.component */ "./src/app/master-industry/master-industry.component.ts");
/* harmony import */ var _master_lead_source_master_lead_source_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./master-lead-source/master-lead-source.component */ "./src/app/master-lead-source/master-lead-source.component.ts");
/* harmony import */ var _access_data_access_data_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./access-data/access-data.component */ "./src/app/access-data/access-data.component.ts");
/* harmony import */ var _master_class_master_class_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./master-class/master-class.component */ "./src/app/master-class/master-class.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _lead_converted_converted_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./lead/converted/converted.component */ "./src/app/lead/converted/converted.component.ts");
/* harmony import */ var _reports_sales_target_sales_target_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./reports/sales-target/sales-target.component */ "./src/app/reports/sales-target/sales-target.component.ts");
/* harmony import */ var _master_opportunity_closed_master_opportunity_closed_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./master-opportunity-closed/master-opportunity-closed.component */ "./src/app/master-opportunity-closed/master-opportunity-closed.component.ts");
/* harmony import */ var _lost_lost_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./lost/lost.component */ "./src/app/lost/lost.component.ts");
/* harmony import */ var _lost_lost_detail_lost_detail_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./lost/lost-detail/lost-detail.component */ "./src/app/lost/lost-detail/lost-detail.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _master_currency_master_currency_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./master-currency/master-currency.component */ "./src/app/master-currency/master-currency.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");


















































const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["DashboardComponent"], data: { title: 'Dashboard' } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_48__["LoginComponent"], data: { title: 'Login' } },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["DashboardComponent"], data: { title: 'Dashboard' } },
    { path: 'dashboard/:period', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["DashboardComponent"], data: { title: 'Dashboard' } },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"], data: { title: 'My Profile' } },
    { path: 'accessRight', component: _access_right_access_right_component__WEBPACK_IMPORTED_MODULE_24__["AccessRightComponent"], data: { title: 'Access Right' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: 'accessRight/:id', component: _access_right_access_right_detail_access_right_detail_component__WEBPACK_IMPORTED_MODULE_25__["AccessRightDetailComponent"], data: { title: 'Access Right' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: 'accessData', component: _access_data_access_data_component__WEBPACK_IMPORTED_MODULE_38__["AccessDataComponent"], data: { title: 'Access Data Level' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "activity", component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_5__["ActivityComponent"], data: { title: 'Activities' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "activity/:filter", component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_5__["ActivityComponent"], data: { title: 'Activities By Filter' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: 'lead', component: _lead_lead_component__WEBPACK_IMPORTED_MODULE_3__["LeadComponent"], data: { title: 'Leads' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: 'lead/converted', component: _lead_converted_converted_component__WEBPACK_IMPORTED_MODULE_41__["ConvertedComponent"], data: { title: 'Conversion Leads' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: 'lead/converted/:id', component: _lead_lead_converd_lead_converd_component__WEBPACK_IMPORTED_MODULE_34__["LeadConverdComponent"], data: { title: 'Conversion Leads Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: 'lead/:id', component: _lead_lead_detail_lead_detail_component__WEBPACK_IMPORTED_MODULE_4__["LeadDetailComponent"], data: { title: 'Leads Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], data: { title: 'Contacts' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "contact/:id", component: _contact_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailComponent"], data: { title: 'Contacts' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "contact/filter/:filter", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], data: { title: 'Contacts Filter' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "company", component: _company_company_component__WEBPACK_IMPORTED_MODULE_8__["CompanyComponent"], data: { title: 'Companies' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "company/:id", component: _company_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_9__["CompanyDetailComponent"], data: { title: 'Company Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "CCPriceList", component: _customer_class_class_price_list_class_price_list_component__WEBPACK_IMPORTED_MODULE_26__["ClassPriceListComponent"], data: { title: 'Price by Class' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "CCPriceList/:id", component: _customer_class_class_price_list_class_price_list_component__WEBPACK_IMPORTED_MODULE_26__["ClassPriceListComponent"], data: { title: 'Price by Class' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "opportunity", component: _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_10__["OpportunityComponent"], data: { title: 'Opportunities' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "opportunity/:id", component: _opportunity_opportunity_detail_opportunity_detail_component__WEBPACK_IMPORTED_MODULE_11__["OpportunityDetailComponent"], data: { title: 'Opportunity Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "opportunity/edit/:id", component: _opportunity_opportunity_edit_opportunity_edit_component__WEBPACK_IMPORTED_MODULE_12__["OpportunityEditComponent"], data: { title: 'Contact' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "opportunity/new/:id_company/:id_contact", component: _opportunity_opportunity_new_opportunity_new_component__WEBPACK_IMPORTED_MODULE_13__["OpportunityNewComponent"], data: { title: 'New Opportunity' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "deal", component: _deal_deal_component__WEBPACK_IMPORTED_MODULE_14__["DealComponent"], data: { title: 'Deals' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "deal/:id", component: _deal_deal_detail_deal_detail_component__WEBPACK_IMPORTED_MODULE_15__["DealDetailComponent"], data: { title: 'Deal Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "lost", component: _lost_lost_component__WEBPACK_IMPORTED_MODULE_44__["LostComponent"], data: { title: 'Lost' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "lost/:id", component: _lost_lost_detail_lost_detail_component__WEBPACK_IMPORTED_MODULE_45__["LostDetailComponent"], data: { title: 'Lost Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "quote", component: _quote_quote_component__WEBPACK_IMPORTED_MODULE_16__["QuoteComponent"], data: { title: 'Quotations' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "quote/:id", component: _quote_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_17__["QuoteDetailComponent"], data: { title: 'Quotation Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "quote/print/:id", component: _quote_quote_print_quote_print_component__WEBPACK_IMPORTED_MODULE_21__["QuotePrintComponent"], data: { title: 'Print Quotation' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "salesOrder", component: _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_28__["SalesOrderComponent"], data: { title: 'Sales Order' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "salesOrder/modal/create", component: _sales_order_sales_order_create_sales_order_create_component__WEBPACK_IMPORTED_MODULE_30__["SalesOrderCreateComponent"], data: { title: 'Create Sales Order' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "salesOrder/:id", component: _sales_order_sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_29__["SalesOrderDetailComponent"], data: { title: 'Sales Order' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "salesOrder/print/:id", component: _sales_order_sales_order_print_sales_order_print_component__WEBPACK_IMPORTED_MODULE_31__["SalesOrderPrintComponent"], data: { title: 'Print Sales Order' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "user", component: _user_user_component__WEBPACK_IMPORTED_MODULE_32__["UserComponent"], data: { title: 'Users' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "user/:id", component: _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_33__["UserDetailComponent"], data: { title: 'Users Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "priceList", component: _price_list_price_list_component__WEBPACK_IMPORTED_MODULE_18__["PriceListComponent"], data: { title: 'Products' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "priceList/modal/:module", component: _price_list_price_list_modal_price_list_modal_component__WEBPACK_IMPORTED_MODULE_20__["PriceListModalComponent"], data: { title: 'Products List' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "priceList/:id", component: _price_list_price_list_detail_price_list_detail_component__WEBPACK_IMPORTED_MODULE_27__["PriceListDetailComponent"], data: { title: 'Product Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "priceList/product/:id", component: _price_list_price_list_product_price_list_product_component__WEBPACK_IMPORTED_MODULE_19__["PriceListProductComponent"], data: { title: 'Product Detail' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "master/currency", component: _master_currency_master_currency_component__WEBPACK_IMPORTED_MODULE_47__["MasterCurrencyComponent"], data: { title: 'Master Currency' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "master/industry", component: _master_industry_master_industry_component__WEBPACK_IMPORTED_MODULE_36__["MasterIndustryComponent"], data: { title: 'Master Industry' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "master/leadSource", component: _master_lead_source_master_lead_source_component__WEBPACK_IMPORTED_MODULE_37__["MasterLeadSourceComponent"], data: { title: 'Master Lead Source' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "master/class", component: _master_class_master_class_component__WEBPACK_IMPORTED_MODULE_39__["MasterClassComponent"], data: { title: 'Master Class' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "master/opportunityClosed", component: _master_opportunity_closed_master_opportunity_closed_component__WEBPACK_IMPORTED_MODULE_43__["MasterOpportunityClosedComponent"], data: { title: 'Master Opportunities Closed ' }, canActivate: [_guard_active_guard_guard__WEBPACK_IMPORTED_MODULE_22__["ActiveGuardGuard"]] },
    { path: "master/account", component: _account_account_component__WEBPACK_IMPORTED_MODULE_46__["AccountComponent"], data: { title: 'Account' } },
    //  { path: "master/group", component: MasterLeadSourceComponent, data: { title: 'Master Lead Source' }, },
    { path: "reports/salesTarget", component: _reports_sales_target_sales_target_component__WEBPACK_IMPORTED_MODULE_42__["SalesTargetComponent"], data: { title: 'Sales Target' } },
    { path: "warning/:path/:target", component: _warning_warning_component__WEBPACK_IMPORTED_MODULE_23__["WarningComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_49__["NotfoundComponent"], data: { title: '' } },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        console.log('Ng ' + _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>',
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: CustomCurrencyMaskConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCurrencyMaskConfig", function() { return CustomCurrencyMaskConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm2015/ngx-loading.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-currency-mask/src/currency-mask.config */ "./node_modules/ng2-currency-mask/src/currency-mask.config.js");
/* harmony import */ var ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lead_lead_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lead/lead.component */ "./src/app/lead/lead.component.ts");
/* harmony import */ var _lead_lead_detail_lead_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lead/lead-detail/lead-detail.component */ "./src/app/lead/lead-detail/lead-detail.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/activity/activity.component.ts");
/* harmony import */ var _activity_widget_activity_widget_activity_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./activity/widget-activity/widget-activity.component */ "./src/app/activity/widget-activity/widget-activity.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./company/company-detail/company-detail.component */ "./src/app/company/company-detail/company-detail.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact/contact-detail/contact-detail.component */ "./src/app/contact/contact-detail/contact-detail.component.ts");
/* harmony import */ var _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./opportunity/opportunity.component */ "./src/app/opportunity/opportunity.component.ts");
/* harmony import */ var _opportunity_opportunity_detail_opportunity_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./opportunity/opportunity-detail/opportunity-detail.component */ "./src/app/opportunity/opportunity-detail/opportunity-detail.component.ts");
/* harmony import */ var _opportunity_opportunity_edit_opportunity_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./opportunity/opportunity-edit/opportunity-edit.component */ "./src/app/opportunity/opportunity-edit/opportunity-edit.component.ts");
/* harmony import */ var _opportunity_opportunity_new_opportunity_new_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./opportunity/opportunity-new/opportunity-new.component */ "./src/app/opportunity/opportunity-new/opportunity-new.component.ts");
/* harmony import */ var _opportunity_modal_opportunity_modal_opportunity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./opportunity/modal-opportunity/modal-opportunity.component */ "./src/app/opportunity/modal-opportunity/modal-opportunity.component.ts");
/* harmony import */ var _price_list_price_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./price-list/price-list.component */ "./src/app/price-list/price-list.component.ts");
/* harmony import */ var _price_list_price_list_catalog_price_list_catalog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./price-list/price-list-catalog/price-list-catalog.component */ "./src/app/price-list/price-list-catalog/price-list-catalog.component.ts");
/* harmony import */ var _price_list_price_list_modal_price_list_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./price-list/price-list-modal/price-list-modal.component */ "./src/app/price-list/price-list-modal/price-list-modal.component.ts");
/* harmony import */ var _price_list_price_list_product_price_list_product_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./price-list/price-list-product/price-list-product.component */ "./src/app/price-list/price-list-product/price-list-product.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _deal_deal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./deal/deal.component */ "./src/app/deal/deal.component.ts");
/* harmony import */ var _deal_deal_detail_deal_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./deal/deal-detail/deal-detail.component */ "./src/app/deal/deal-detail/deal-detail.component.ts");
/* harmony import */ var _quote_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./quote/quote-detail/quote-detail.component */ "./src/app/quote/quote-detail/quote-detail.component.ts");
/* harmony import */ var _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./navigator/navigator.component */ "./src/app/navigator/navigator.component.ts");
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-sortablejs */ "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js");
/* harmony import */ var _quote_quote_print_quote_print_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./quote/quote-print/quote-print.component */ "./src/app/quote/quote-print/quote-print.component.ts");
/* harmony import */ var _contact_contact_new_contact_new_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./contact/contact-new/contact-new.component */ "./src/app/contact/contact-new/contact-new.component.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/warning/warning.component.ts");
/* harmony import */ var _access_right_access_right_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./access-right/access-right.component */ "./src/app/access-right/access-right.component.ts");
/* harmony import */ var _access_right_access_right_detail_access_right_detail_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./access-right/access-right-detail/access-right-detail.component */ "./src/app/access-right/access-right-detail/access-right-detail.component.ts");
/* harmony import */ var _customer_class_customer_class_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./customer-class/customer-class.component */ "./src/app/customer-class/customer-class.component.ts");
/* harmony import */ var _customer_class_class_price_list_class_price_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./customer-class/class-price-list/class-price-list.component */ "./src/app/customer-class/class-price-list/class-price-list.component.ts");
/* harmony import */ var _price_list_price_list_detail_price_list_detail_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./price-list/price-list-detail/price-list-detail.component */ "./src/app/price-list/price-list-detail/price-list-detail.component.ts");
/* harmony import */ var _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./sales-order/sales-order.component */ "./src/app/sales-order/sales-order.component.ts");
/* harmony import */ var _sales_order_sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./sales-order/sales-order-detail/sales-order-detail.component */ "./src/app/sales-order/sales-order-detail/sales-order-detail.component.ts");
/* harmony import */ var _sales_order_sales_order_create_sales_order_create_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sales-order/sales-order-create/sales-order-create.component */ "./src/app/sales-order/sales-order-create/sales-order-create.component.ts");
/* harmony import */ var _sales_order_sales_order_print_sales_order_print_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./sales-order/sales-order-print/sales-order-print.component */ "./src/app/sales-order/sales-order-print/sales-order-print.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./user/user-detail/user-detail.component */ "./src/app/user/user-detail/user-detail.component.ts");
/* harmony import */ var _lead_lead_converd_lead_converd_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./lead/lead-converd/lead-converd.component */ "./src/app/lead/lead-converd/lead-converd.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _master_industry_master_industry_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./master-industry/master-industry.component */ "./src/app/master-industry/master-industry.component.ts");
/* harmony import */ var _master_lead_source_master_lead_source_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./master-lead-source/master-lead-source.component */ "./src/app/master-lead-source/master-lead-source.component.ts");
/* harmony import */ var _access_data_access_data_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./access-data/access-data.component */ "./src/app/access-data/access-data.component.ts");
/* harmony import */ var _master_class_master_class_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./master-class/master-class.component */ "./src/app/master-class/master-class.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _lead_converted_converted_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./lead/converted/converted.component */ "./src/app/lead/converted/converted.component.ts");
/* harmony import */ var _reports_sales_target_sales_target_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./reports/sales-target/sales-target.component */ "./src/app/reports/sales-target/sales-target.component.ts");
/* harmony import */ var _master_opportunity_closed_master_opportunity_closed_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./master-opportunity-closed/master-opportunity-closed.component */ "./src/app/master-opportunity-closed/master-opportunity-closed.component.ts");
/* harmony import */ var _lost_lost_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./lost/lost.component */ "./src/app/lost/lost.component.ts");
/* harmony import */ var _lost_lost_detail_lost_detail_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./lost/lost-detail/lost-detail.component */ "./src/app/lost/lost-detail/lost-detail.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _master_currency_master_currency_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./master-currency/master-currency.component */ "./src/app/master-currency/master-currency.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");

































































const CustomCurrencyMaskConfig = {
    align: "right",
    allowNegative: false,
    decimal: ",",
    precision: 0,
    prefix: "Rp ",
    suffix: "",
    thousands: "."
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _lead_lead_component__WEBPACK_IMPORTED_MODULE_12__["LeadComponent"],
            _lead_lead_detail_lead_detail_component__WEBPACK_IMPORTED_MODULE_13__["LeadDetailComponent"],
            _activity_activity_component__WEBPACK_IMPORTED_MODULE_14__["ActivityComponent"],
            _activity_widget_activity_widget_activity_component__WEBPACK_IMPORTED_MODULE_15__["WidgetActivityComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_16__["CompanyComponent"],
            _company_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_17__["CompanyDetailComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
            _contact_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_19__["ContactDetailComponent"],
            _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_20__["OpportunityComponent"],
            _opportunity_opportunity_detail_opportunity_detail_component__WEBPACK_IMPORTED_MODULE_21__["OpportunityDetailComponent"],
            _opportunity_opportunity_edit_opportunity_edit_component__WEBPACK_IMPORTED_MODULE_22__["OpportunityEditComponent"],
            _opportunity_opportunity_new_opportunity_new_component__WEBPACK_IMPORTED_MODULE_23__["OpportunityNewComponent"],
            _opportunity_modal_opportunity_modal_opportunity_component__WEBPACK_IMPORTED_MODULE_24__["ModalOpportunityComponent"],
            _price_list_price_list_component__WEBPACK_IMPORTED_MODULE_25__["PriceListComponent"],
            _price_list_price_list_catalog_price_list_catalog_component__WEBPACK_IMPORTED_MODULE_26__["PriceListCatalogComponent"],
            _price_list_price_list_modal_price_list_modal_component__WEBPACK_IMPORTED_MODULE_27__["PriceListModalComponent"],
            _price_list_price_list_product_price_list_product_component__WEBPACK_IMPORTED_MODULE_28__["PriceListProductComponent"],
            _quote_quote_component__WEBPACK_IMPORTED_MODULE_29__["QuoteComponent"],
            _deal_deal_component__WEBPACK_IMPORTED_MODULE_30__["DealComponent"],
            _deal_deal_detail_deal_detail_component__WEBPACK_IMPORTED_MODULE_31__["DealDetailComponent"],
            _quote_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_32__["QuoteDetailComponent"],
            _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_33__["NavigatorComponent"],
            _quote_quote_print_quote_print_component__WEBPACK_IMPORTED_MODULE_35__["QuotePrintComponent"],
            _contact_contact_new_contact_new_component__WEBPACK_IMPORTED_MODULE_36__["ContactNewComponent"],
            _warning_warning_component__WEBPACK_IMPORTED_MODULE_37__["WarningComponent"],
            _access_right_access_right_component__WEBPACK_IMPORTED_MODULE_38__["AccessRightComponent"],
            _access_right_access_right_detail_access_right_detail_component__WEBPACK_IMPORTED_MODULE_39__["AccessRightDetailComponent"],
            _customer_class_customer_class_component__WEBPACK_IMPORTED_MODULE_40__["CustomerClassComponent"],
            _customer_class_class_price_list_class_price_list_component__WEBPACK_IMPORTED_MODULE_41__["ClassPriceListComponent"],
            _price_list_price_list_detail_price_list_detail_component__WEBPACK_IMPORTED_MODULE_42__["PriceListDetailComponent"],
            _sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_43__["SalesOrderComponent"],
            _sales_order_sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_44__["SalesOrderDetailComponent"],
            _sales_order_sales_order_create_sales_order_create_component__WEBPACK_IMPORTED_MODULE_45__["SalesOrderCreateComponent"],
            _sales_order_sales_order_print_sales_order_print_component__WEBPACK_IMPORTED_MODULE_46__["SalesOrderPrintComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_47__["UserComponent"],
            _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_48__["UserDetailComponent"],
            _lead_lead_converd_lead_converd_component__WEBPACK_IMPORTED_MODULE_49__["LeadConverdComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_50__["DashboardComponent"],
            _master_industry_master_industry_component__WEBPACK_IMPORTED_MODULE_51__["MasterIndustryComponent"],
            _master_lead_source_master_lead_source_component__WEBPACK_IMPORTED_MODULE_52__["MasterLeadSourceComponent"],
            _access_data_access_data_component__WEBPACK_IMPORTED_MODULE_53__["AccessDataComponent"],
            _master_class_master_class_component__WEBPACK_IMPORTED_MODULE_54__["MasterClassComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_55__["ProfileComponent"], _lead_converted_converted_component__WEBPACK_IMPORTED_MODULE_56__["ConvertedComponent"], _reports_sales_target_sales_target_component__WEBPACK_IMPORTED_MODULE_57__["SalesTargetComponent"],
            _master_opportunity_closed_master_opportunity_closed_component__WEBPACK_IMPORTED_MODULE_58__["MasterOpportunityClosedComponent"], _lost_lost_component__WEBPACK_IMPORTED_MODULE_59__["LostComponent"], _lost_lost_detail_lost_detail_component__WEBPACK_IMPORTED_MODULE_60__["LostDetailComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_61__["AccountComponent"],
            _master_currency_master_currency_component__WEBPACK_IMPORTED_MODULE_62__["MasterCurrencyComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_63__["LoginComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_64__["NotfoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_sortablejs__WEBPACK_IMPORTED_MODULE_34__["SortablejsModule"],
            ngx_loading__WEBPACK_IMPORTED_MODULE_7__["NgxLoadingModule"].forRoot({
                animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_7__["ngxLoadingAnimationTypes"].wanderingCubes,
                backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                backdropBorderRadius: '4px',
                primaryColour: '#ffffff',
                secondaryColour: '#ffffff',
                tertiaryColour: '#ffffff'
            }),
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"]
        ],
        providers: [
            { provide: ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_10__["CURRENCY_MASK_CONFIG"], useValue: CustomCurrencyMaskConfig }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/branch/branch.ts":
/*!**********************************!*\
  !*** ./src/app/branch/branch.ts ***!
  \**********************************/
/*! exports provided: Branch, NewBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branch", function() { return Branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBranch", function() { return NewBranch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Branch {
}
class NewBranch {
    constructor(id_company, branchName, status, phone, email, code, address_street, address_city, address_state, address_code) {
        this.id_company = id_company;
        this.branchName = branchName;
        this.status = status;
        this.phone = phone;
        this.email = email;
        this.code = code;
        this.address_street = address_street;
        this.address_city = address_city;
        this.address_state = address_state;
        this.address_code = address_code;
    }
}


/***/ }),

/***/ "./src/app/company/company-detail/company-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/company/company-detail/company-detail.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/company/company-detail/company-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/company/company-detail/company-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: CompanyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailComponent", function() { return CompanyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../company */ "./src/app/company/company.ts");
/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../contact/contact */ "./src/app/contact/contact.ts");
/* harmony import */ var _branch_branch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../branch/branch */ "./src/app/branch/branch.ts");









let CompanyDetailComponent = class CompanyDetailComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.myContact = [];
        this.loading = true;
        this.modalTitle = "";
        this.isReadOnly = true;
        this.industry = [];
        this.user = [];
        this.company_class = [];
        this.deal = [];
        this.archived = [];
        this.allow_access_data = false;
        this.myBranch = [];
        this.myOpportunity = [];
        this.priceList = [];
        this.attachment = [];
        this.selected = [];
        this.submit = false;
        this.selectedFile = null;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.modelContact = new _contact_contact__WEBPACK_IMPORTED_MODULE_7__["NewContact"]('0', '', '', '', '', '0', "1", this.id, '', '');
        this.modelBranch = new _branch_branch__WEBPACK_IMPORTED_MODULE_8__["NewBranch"](this.id, '', '1', '', '', '', '', '', '', '');
        this.httpSelected();
        this.httpGet();
    }
    requestEmit(event) {
        console.log('requestEmit cd : ', event);
        if (event == 'fn_newOpportunity') {
            this.httpGet();
        }
        else if (event == 'contact') {
            this.httpGet();
        }
        this.modalService.dismissAll();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'company/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.allow_access_data = data['result']['allow_access_data'];
            this.items = data['result']['data'];
            this.myContact = data['result']['contact'];
            this.myOpportunity = data['result']['opportunity'];
            this.deal = data['result']['deal'];
            this.archived = data['result']['archived'];
            this.industry = data['result']['industry'];
            this.user = data['result']['user'];
            this.company_class = data['result']['company_class'];
            this.attachment = data['result']['attachment'];
            this.modealCompany = new _company__WEBPACK_IMPORTED_MODULE_6__["UpdateCompany"](data['result']['data']['bill_country'], data['result']['data']['bill_city'], data['result']['data']['bill_code'], data['result']['data']['bill_state'], data['result']['data']['bill_street1'], data['result']['data']['ship_country'], data['result']['data']['ship_city'], data['result']['data']['ship_code'], data['result']['data']['ship_state'], data['result']['data']['ship_street1'], data['result']['data']['email'], data['result']['data']['fax'], data['result']['data']['id_industry'], data['result']['data']['name'], data['result']['data']['phone'], data['result']['data']['website'], data['result']['data']['id_user'], data['result']['data']['id_company_class'], data['result']['data']['code_number']);
            this.myBranch = data['result']['branch'];
            this.priceList = data['result']['priceList'];
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    httpSelected() {
        this.http.get(this.configService.base_url() + 'company/selected', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.selected = data['result'];
        });
    }
    open(content) {
        this.modalService.open(content, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    fn_delete() {
        if (confirm('Delete this company ?')) {
            this.http.post(this.configService.base_url() + 'company/fn_deleteSolo', {
                "id": this.id
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.router.navigate(['/company/']);
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    fn_update() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'company/update', {
            "id": this.id,
            "data": this.modealCompany
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    onSubmitContact() {
        this.submit = true;
        this.http.post(this.configService.base_url() + 'contact/insert', {
            "id": this.id,
            "data": this.modelContact
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.submit = false;
            this.httpGet();
            this.modelContact = new _contact_contact__WEBPACK_IMPORTED_MODULE_7__["NewContact"]('0', '', '', '', '', '0', "1", this.id, '', '');
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    onSubmitBranch() {
        this.submit = true;
        this.http.post(this.configService.base_url() + 'branch/insert', {
            "id": this.id,
            "data": this.modelBranch
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.submit = false;
            this.httpGet();
            this.modelBranch = new _branch_branch__WEBPACK_IMPORTED_MODULE_8__["NewBranch"](this.id, '', '1', '', '', '', '', '', '', '');
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload(target) {
        const fd = new FormData();
        fd.append('files', this.selectedFile, this.selectedFile.name);
        fd.append('token', this.configService.token());
        fd.append('module', target);
        fd.append('id', this.id);
        console.log(fd, this.configService.token());
        this.http.post(this.configService.base_url() + 'upload/attachment', fd, {
        //    reportProgress: true,
        //  observe: 'events'
        })
            .subscribe(
        /*  event => {
            if(event.type === HttpEventType.UploadProgress){
              console.log(event ); // handle event here
            }else if( event.type === HttpEventType.Response ){
              console.log(event ); // handle event here
            }
           
          },*/
        data => {
            // console.log(data); 
            this.attachment = data['result']['attachment'];
            this.httpGet();
            this.selectedFile = "";
        });
    }
    fn_attach_delete(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'pricelist/fn_attach_delete', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
            this.attachment.splice(objIndex, 1);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
CompanyDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
CompanyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-detail/company-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-detail.component.css */ "./src/app/company/company-detail/company-detail.component.css")).default]
    })
], CompanyDetailComponent);



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company */ "./src/app/company/company.ts");







let CompanyComponent = class CompanyComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.itemsSelected = [];
        this.loading = true;
        this.loadingSelected = true;
        this.selected = [];
        this.newContact = false;
        this.modalTitle = "";
        this.selectModal = "0";
        this.id_user = "1";
        this.total = "";
        this.model = new _company__WEBPACK_IMPORTED_MODULE_6__["NewCompany"]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
        this.dbCompany = false;
        this.selectedCompany = [];
        this.user = [];
        this.company_class = [];
        this.submit = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpSelected();
        this.httpGet();
    }
    httpGet() {
        this.loading = false;
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "company/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[1, "asc"]],
            columnDefs: [{
                    "targets": 1,
                    "render": function (data, type, row, meta) {
                        return '<a href="#/company/' + row[0] + '"><b>' + data + '</b></a>';
                    }
                }],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value=""> - Show All - </option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
    httpSelected() {
        this.http.get(this.configService.base_url() + 'company/selected', {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.id_user = data['result']['id_user'];
            this.model['id_user'] = data['result']['id_user'];
            this.user = data['result']['user'];
            this.company_class = data['result']['company_class'];
            this.loadingSelected = false;
            this.selected = data['result'];
            //  console.log(this.selected);
        });
    }
    onSubmit(value = "") {
        this.submit = true;
        this.http.post(this.configService.base_url() + 'company/insert', {
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            //  console.log(data);
            this.submit = false;
            if (value == 'next') {
                this.httpGet();
                this.model = new _company__WEBPACK_IMPORTED_MODULE_6__["NewCompany"]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
                this.model['id_user'] = this.id_user;
            }
            else {
                this.router.navigate(['/company/', data['result']['id']]);
                this.modalService.dismissAll();
            }
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    get diagnostic() { return JSON.stringify(this.model); }
    fn_delete() {
        this.http.post(this.configService.base_url() + 'company/fn_delete', {
            "data": this.itemsSelected
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            //  console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    copyAddress() {
        this.model['ship_street'] = this.model['bill_street'];
        this.model['ship_city'] = this.model['bill_city'];
        this.model['ship_state'] = this.model['bill_state'];
        this.model['ship_code'] = this.model['bill_code'];
        this.model['ship_country'] = this.model['bill_country'];
    }
    fn_check(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == true) {
            this.items[this.objIndex]['check'] = false;
        }
        else {
            this.items[this.objIndex]['check'] = true;
        }
        var object = {
            'id': x.id,
            'name': x.name,
        };
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (objectSelect == -1) {
            this.itemsSelected.push(object);
        }
        else {
            this.itemsSelected.splice(objectSelect, 1);
        }
        //  console.log(this.itemsSelected);
    }
    fn_removeItemSelected(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == false) {
            this.items[this.objIndex]['check'] = true;
        }
        else {
            this.items[this.objIndex]['check'] = false;
        }
        this.itemsSelected.splice(objectSelect, 1);
    }
};
CompanyComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")).default]
    })
], CompanyComponent);



/***/ }),

/***/ "./src/app/company/company.ts":
/*!************************************!*\
  !*** ./src/app/company/company.ts ***!
  \************************************/
/*! exports provided: Company, Selected, CompanyDetail, NewCompany, CompanyEdit, UpdateCompany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selected", function() { return Selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetail", function() { return CompanyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCompany", function() { return NewCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEdit", function() { return CompanyEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompany", function() { return UpdateCompany; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Company {
}
class Selected {
}
class CompanyDetail {
}
class NewCompany {
    constructor(name, website, phone, mobile, email, fax, id_industry, id_company_class, id_user, bill_street, bill_city, bill_state, bill_code, bill_country, ship_street, ship_city, ship_state, ship_code, ship_country) {
        this.name = name;
        this.website = website;
        this.phone = phone;
        this.mobile = mobile;
        this.email = email;
        this.fax = fax;
        this.id_industry = id_industry;
        this.id_company_class = id_company_class;
        this.id_user = id_user;
        this.bill_street = bill_street;
        this.bill_city = bill_city;
        this.bill_state = bill_state;
        this.bill_code = bill_code;
        this.bill_country = bill_country;
        this.ship_street = ship_street;
        this.ship_city = ship_city;
        this.ship_state = ship_state;
        this.ship_code = ship_code;
        this.ship_country = ship_country;
    }
}
class CompanyEdit {
}
class UpdateCompany {
    constructor(bill_country, bill_city, bill_code, bill_state, bill_street1, ship_country, ship_city, ship_code, ship_state, ship_street1, email, fax, id_industry, name, phone, website, id_user, id_company_class, code_number) {
        this.bill_country = bill_country;
        this.bill_city = bill_city;
        this.bill_code = bill_code;
        this.bill_state = bill_state;
        this.bill_street1 = bill_street1;
        this.ship_country = ship_country;
        this.ship_city = ship_city;
        this.ship_code = ship_code;
        this.ship_state = ship_state;
        this.ship_street1 = ship_street1;
        this.email = email;
        this.fax = fax;
        this.id_industry = id_industry;
        this.name = name;
        this.phone = phone;
        this.website = website;
        this.id_user = id_user;
        this.id_company_class = id_company_class;
        this.code_number = code_number;
    }
}


/***/ }),

/***/ "./src/app/contact/contact-detail/contact-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/contact/contact-detail/contact-detail.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/contact/contact-detail/contact-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/contact/contact-detail/contact-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../contact */ "./src/app/contact/contact.ts");
/* harmony import */ var _opportunity_opportunity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../opportunity/opportunity */ "./src/app/opportunity/opportunity.ts");








let ContactDetailComponent = class ContactDetailComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.company = [];
        this.lead_source = [];
        this.title = [];
        this.user = [];
        this.items = [];
        this.loading = true;
        this.newContact = false;
        this.selectedCompany = [];
        this.model = [];
        this.dataOpportunity = [];
        this.dataOpportunityStage = [];
        this.loadingSelected = false;
        this.selected = [];
        this.isReadOnly = true;
        this.attachment = [];
        this.selectedFile = null;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    requestEmit(event) {
        if (event == 'fn_newOpportunity') {
            this.httpGet();
        }
        this.modalService.dismissAll();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'contact/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            if (data['error'] != 0) {
                this.router.navigate(['warning/access/user']);
            }
            else {
                this.items = data['result']['data'];
                this.company = data['result']['company'];
                this.lead_source = data['result']['lead_source'];
                this.title = data['result']['title'];
                this.user = data['result']['user'];
                this.dataOpportunity = data['result']['opportunity'];
                this.dataOpportunityStage = data['result']['stage'];
                this.attachment = data['result']['attachment'];
                this.newOpportunity = new _opportunity_opportunity__WEBPACK_IMPORTED_MODULE_7__["NewOpportunity"](data['result']['data']['id_user'], '', '', this.id, data['result']['data']['id_company'], [], "", "");
                this.model = new _contact__WEBPACK_IMPORTED_MODULE_6__["UpdateContact"](data['result']['data']['id_company'], data['result']['data']['email'], data['result']['data']['first_name'], data['result']['data']['id_lead_source'], data['result']['data']['id_title'], data['result']['data']['id_user'], data['result']['data']['last_name'], data['result']['data']['mobile'], data['result']['data']['phone'], data['result']['data']['position'], data['result']['data']['department']);
                console.log(this.model);
                console.log(data);
                this.loading = false;
            }
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    fn_update() {
        this.loading = true;
        console.log(this.model);
        this.http.post(this.configService.base_url() + 'contact/update', {
            "id": this.id,
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_delete() {
        if (confirm('Delete this Contact ?')) {
            this.http.post(this.configService.base_url() + 'contact/fn_deleteSolo', {
                "id": this.id
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.router.navigate(['/contact/']);
            }, error => {
                // console.log(error);
                // console.log(error.error.text);
            });
        }
    }
    fn_newOpportunity() {
        this.loading = true;
        console.log(this.model);
        this.http.post(this.configService.base_url() + 'opportunity/fn_newOpportunity', {
            "id": this.id,
            "data": this.newOpportunity
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload(target) {
        const fd = new FormData();
        fd.append('files', this.selectedFile, this.selectedFile.name);
        fd.append('token', this.configService.token());
        fd.append('module', target);
        fd.append('id', this.id);
        console.log(fd, this.configService.token());
        this.http.post(this.configService.base_url() + 'upload/attachment', fd, {
        //    reportProgress: true,
        //  observe: 'events'
        })
            .subscribe(
        /*  event => {
            if(event.type === HttpEventType.UploadProgress){
              console.log(event ); // handle event here
            }else if( event.type === HttpEventType.Response ){
              console.log(event ); // handle event here
            }
           
          },*/
        data => {
            // console.log(data); 
            this.attachment = data['result']['attachment'];
            this.httpGet();
            this.selectedFile = "";
        });
    }
    fn_attach_delete(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'pricelist/fn_attach_delete', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
            this.attachment.splice(objIndex, 1);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
ContactDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
ContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-detail/contact-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-detail.component.css */ "./src/app/contact/contact-detail/contact-detail.component.css")).default]
    })
], ContactDetailComponent);



/***/ }),

/***/ "./src/app/contact/contact-new/contact-new.component.css":
/*!***************************************************************!*\
  !*** ./src/app/contact/contact-new/contact-new.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/contact/contact-new/contact-new.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contact/contact-new/contact-new.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactNewComponent", function() { return ContactNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../contact */ "./src/app/contact/contact.ts");






let ContactNewComponent = class ContactNewComponent {
    constructor(http, router, activatedRoute, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.uploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = true;
        this.module = this.activatedRoute.snapshot.url[0].path;
        this.saveLabel = "Save";
        this.lead_source = [];
        this.company = [];
        this.title = [];
        this.user = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.modelContact = new _contact__WEBPACK_IMPORTED_MODULE_5__["NewContact"]('', '', '', '', '', '', '', '', '', '');
        if (this.module == 'contact') {
            this.saveLabel = "Save & Go Detail";
        }
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        var url = this.configService.base_url() + 'contact/widget_new_contact/' + this.module + '/' + this.id;
        console.log(url);
        this.http.get(url, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.lead_source = data['result']['lead_source'];
            this.company = data['result']['company'];
            this.title = data['result']['title'];
            this.user = data['result']['user'];
            this.modelContact = new _contact__WEBPACK_IMPORTED_MODULE_5__["NewContact"]('', '', '', '', '', '', data['result']['data']['id_user'], data['result']['data']['id_company'], '', '');
            console.log(data);
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    onSubmit() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'contact/insert', {
            "data": this.modelContact
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            if (this.module == 'company') {
                this.uploaded.emit('contact');
            }
            else {
                this.uploaded.emit(data['result']['id']);
            }
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    close() {
        this.uploaded.emit();
    }
};
ContactNewComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactNewComponent.prototype, "uploaded", void 0);
ContactNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-new/contact-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-new.component.css */ "./src/app/contact/contact-new/contact-new.component.css")).default]
    })
], ContactNewComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let ContactComponent = class ContactComponent {
    constructor(http, router, modalService, config, configService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.itemsSelected = [];
        this.loading = true;
        this.loadingSelected = true;
        this.selected = [];
        this.newContact = false;
        this.modalTitle = "";
        this.selectModal = "0";
        this.id_user = "1";
        this.dbCompany = false;
        this.selectedCompany = [];
        this.companies = [];
        this.id_company = "0";
        this.filter = "";
        this.submit = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.filter = this.activatedRoute.snapshot.params.filter;
        this.httpSelected();
        this.httpGet();
    }
    httpGet() {
        this.loading = false;
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "contact/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[1, "asc"]],
            columnDefs: [
                {
                    "targets": 1,
                    "render": function (data, type, row, meta) {
                        return '<a href="#/contact/' + row[0] + '"><b>' + data + '</b></a>';
                    }
                },
            ],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value="">Show all</option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
    fnFilterDecode() {
        if (this.filter) {
            var filter = JSON.parse(atob(this.filter));
            console.log('fnFilterDecode');
            this.id_company = filter['id_company'];
        }
    }
    fnFilterByCompanies(e) {
        console.log(e.target.value);
        var filter = {
            id_company: e.target.value
        };
        this.filter = btoa(JSON.stringify(filter));
        this.router.navigate(['contact/filter/', this.filter]);
        this.httpGet();
    }
    requestEmit(event) {
        if (event) {
            this.router.navigate(['contact', event]);
        }
        this.modalService.dismissAll();
    }
    httpSelected() {
        this.http.get(this.configService.base_url() + 'contact/selected', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loadingSelected = false;
            this.selected = data['result'];
            //  console.log(this.selected);
        });
    }
    fn_delete() {
        this.http.post(this.configService.base_url() + 'contact/fn_delete', {
            "data": this.itemsSelected
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            //  console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
        }, error => {
            //  console.log(error);
            //  console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_check(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == true) {
            this.items[this.objIndex]['check'] = false;
        }
        else {
            this.items[this.objIndex]['check'] = true;
        }
        var object = {
            'id': x.id,
            'name': x.name,
            'company': x.company,
        };
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (objectSelect == -1) {
            this.itemsSelected.push(object);
        }
        else {
            this.itemsSelected.splice(objectSelect, 1);
        }
        //  console.log(this.itemsSelected);
    }
    fn_removeItemSelected(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == false) {
            this.items[this.objIndex]['check'] = true;
        }
        else {
            this.items[this.objIndex]['check'] = false;
        }
        this.itemsSelected.splice(objectSelect, 1);
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/contact/contact.ts":
/*!************************************!*\
  !*** ./src/app/contact/contact.ts ***!
  \************************************/
/*! exports provided: Contact, Selectedcompany, ContactDetail, NewContact, updateContact, ContactEdit, UpdateContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selectedcompany", function() { return Selectedcompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetail", function() { return ContactDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContact", function() { return NewContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContact", function() { return updateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEdit", function() { return ContactEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContact", function() { return UpdateContact; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Contact {
}
class Selectedcompany {
}
class ContactDetail {
}
class NewContact {
    constructor(id_title, first_name, last_name, mobile, phone, id_lead_source, id_user, id_company, position, department) {
        this.id_title = id_title;
        this.first_name = first_name;
        this.last_name = last_name;
        this.mobile = mobile;
        this.phone = phone;
        this.id_lead_source = id_lead_source;
        this.id_user = id_user;
        this.id_company = id_company;
        this.position = position;
        this.department = department;
    }
}
class updateContact {
    constructor(id_title, first_name, last_name, mobile, phone, id_lead_source, id_user, id_company) {
        this.id_title = id_title;
        this.first_name = first_name;
        this.last_name = last_name;
        this.mobile = mobile;
        this.phone = phone;
        this.id_lead_source = id_lead_source;
        this.id_user = id_user;
        this.id_company = id_company;
    }
}
class ContactEdit {
}
class UpdateContact {
    constructor(id_company, email, first_name, id_lead_source, id_title, id_user, last_name, mobile, phone, position, department) {
        this.id_company = id_company;
        this.email = email;
        this.first_name = first_name;
        this.id_lead_source = id_lead_source;
        this.id_title = id_title;
        this.id_user = id_user;
        this.last_name = last_name;
        this.mobile = mobile;
        this.phone = phone;
        this.position = position;
        this.department = department;
    }
}


/***/ }),

/***/ "./src/app/customer-class/class-price-list/class-price-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/customer-class/class-price-list/class-price-list.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bodyarea{\r\n    overflow-y: auto;\r\n    height: 56vh;\r\n}\r\n\r\n.addlist{\r\n    display: inline-block;\r\n}");

/***/ }),

/***/ "./src/app/customer-class/class-price-list/class-price-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/customer-class/class-price-list/class-price-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClassPriceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPriceListComponent", function() { return ClassPriceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");





let ClassPriceListComponent = class ClassPriceListComponent {
    constructor(http, router, activatedRoute, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.catalog = [];
        this.pricelist = [];
        this.loading = false;
        this.company_class = [];
        this.loading_productlist = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'company_class/', {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.company_class = data['result']['data'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    productlist() {
        this.loading_productlist = true;
        this.http.get(this.configService.base_url() + 'company_class/price_list/' + this.id_company_class, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loading_productlist = false;
            this.pricelist = data['result']['data'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    update(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'company_class/update_price', {
            "id": this.id_company_class,
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loading = false;
        }, error => {
            this.loading = false;
            console.log(error);
            console.log(error.error.text);
        });
    }
    erase(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'company_class/erase_price', {
            "id": this.id_company_class,
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loading = false;
        }, error => {
            this.loading = false;
            console.log(error);
            console.log(error.error.text);
        });
    }
};
ClassPriceListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
ClassPriceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-class-price-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./class-price-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-class/class-price-list/class-price-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./class-price-list.component.css */ "./src/app/customer-class/class-price-list/class-price-list.component.css")).default]
    })
], ClassPriceListComponent);



/***/ }),

/***/ "./src/app/customer-class/customer-class.component.css":
/*!*************************************************************!*\
  !*** ./src/app/customer-class/customer-class.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/customer-class/customer-class.component.ts":
/*!************************************************************!*\
  !*** ./src/app/customer-class/customer-class.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerClassComponent", function() { return CustomerClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerClassComponent = class CustomerClassComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-class/customer-class.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-class.component.css */ "./src/app/customer-class/customer-class.component.css")).default]
    })
], CustomerClassComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-y{\r\n    overflow-y: auto;\r\n    max-height: 200px;\r\n}\r\n\r\n.scroll-y th{\r\n    background: #fff;\r\n}");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");





let DashboardComponent = class DashboardComponent {
    constructor(http, activatedRoute, router, configService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.configService = configService;
        this.loading = true;
        this.datasetsLeadPerDistribution = [];
        this.datasetsLeadPerIndustry = [];
        this.event = [];
        this.visit = [];
        this.recentwins = [];
        this.user = [];
        this.recentQuotation = [];
        this.lead = {
            today: "0",
            month: "0",
            quarter: "0",
            year: "0",
        };
        this.id = "0";
        this.period = '';
        this.currency = '';
        this.account_manager = [];
        this.target = [];
        this.id_user_select = '';
        this.totalLS = 0;
        this.totalLI = 0;
    }
    ngOnInit() {
        this.period = this.activatedRoute.snapshot.params.period;
        if (!this.activatedRoute.snapshot.params.period) {
            this.period = 'quarter';
        }
        this.httpGet(0);
    }
    onPeriod(period) {
        //this.period = period;
        //this.httpGet(this.id);
        this.loading = true;
        this.router.navigate(['/dashboard/', period]);
        setInterval(function () {
            window.location.reload();
        }, 300);
    }
    onUser(id) {
        this.id = id;
        this.httpGet(id);
    }
    httpGet(id) {
        this.loading = true;
        var url = this.configService.base_url() + 'dashboard/index/?id=' + id + "&period=" + this.period;
        this.http.get(url, {
            headers: this.configService.headers()
        }).subscribe((data) => {
            this.currency = data['result']['currency'];
            this.id_user_select = id;
            this.target = data['result']['target'];
            this.account_manager = data['result']['account_manager'];
            this.lead = data['result']['lead'];
            this.user = data['result']['user'];
            this.event = data['result']['event'];
            this.visit = data['result']['visit'];
            this.recentwins = data['result']['recentwins'];
            this.recentQuotation = data['result']['recentQuotation'];
            this.funnel(data['result']['funnel']);
            this.leadPerDistribution(data['result']['leadPerDistribution']);
            this.totalLS = data['result']['totalLS'];
            this.leadPerIndustry(data['result']['leadPerIndustry']);
            this.totalLI = data['result']['totalLI'];
            var chartColors = {
                style1a: 'rgb(30, 178, 166)',
                style1b: 'rgb(212, 248, 232)',
                style2a: 'rgb(246, 200, 159)',
                style2b: 'rgb(255, 231, 209)',
                style3a: 'rgb(50, 130, 184)',
                style3b: 'rgb(187, 225, 250)',
                style4a: 'rgb(74, 105, 187)',
                style4b: 'rgb(154, 206, 255)',
            };
            var barChartDataQty = {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4',],
                datasets: [
                    {
                        label: 'Leads Achieve ',
                        backgroundColor: chartColors.style1a,
                        stack: 'leads',
                        data: [
                            23, 24, 25, 25,
                        ]
                    }, {
                        label: 'Leads Target',
                        backgroundColor: chartColors.style1b,
                        stack: 'leads',
                        data: [
                            323, 324, 325, 225,
                        ]
                    },
                    {
                        label: 'Opportunities Achieve ',
                        backgroundColor: chartColors.style2a,
                        stack: 'opportunities',
                        data: [
                            23, 24, 25, 25,
                        ]
                    }, {
                        label: 'Opportunities Target',
                        backgroundColor: chartColors.style2b,
                        stack: 'opportunities',
                        data: [
                            323, 324, 325, 325,
                        ]
                    },
                    {
                        label: 'Quotes Achieve ',
                        backgroundColor: chartColors.style3a,
                        stack: 'quote',
                        data: [
                            23, 24, 25, 26, 26,
                        ]
                    }, {
                        label: 'Quotes Target',
                        backgroundColor: chartColors.style3b,
                        stack: 'quote',
                        data: [
                            323, 324, 325, 326, 326,
                        ]
                    },
                ]
            };
            console.log(data['result']['barChartDataAmount'], data['result']['barChartDataQty']);
            this.salesTarget(data['result']['barChartDataAmount'], data['result']['barChartDataQty'], data['result']['currency']);
            this.loading = false;
        });
    }
    leadPerIndustry(leadPerIndustry) {
        // this.datasetsLeadPerIndustry = []; 
        var ctx = document.getElementById('leadPerIndustry');
        new Chart(ctx, {
            type: 'pie',
            data: leadPerIndustry,
            options: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: '#fff',
                },
            }
        });
    }
    leadPerDistribution(leadPerDistribution) {
        var ctx = document.getElementById('leadPerDistribution');
        new Chart(ctx, {
            type: 'pie',
            data: leadPerDistribution,
            options: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: '#fff',
                },
            }
        });
    }
    funnel(dataFunnel) {
        const options = {
            block: {
                dynamicHeight: true,
                minHeight: 15,
                highlight: true,
                barOverlay: true,
            },
            chart: {
                bottomPinch: true,
                curve: {
                    enabled: true,
                }
            }
        };
        const chart = new D3Funnel('#funnel');
        chart.draw(dataFunnel, options);
    }
    salesTarget(barChartDataAmount, barChartDataQty, currency) {
        var formatter = new Intl.NumberFormat('en-US');
        var ctx = document.getElementById('targetSalesAmount');
        new Chart(ctx, {
            type: 'bar',
            data: barChartDataAmount,
            options: {
                title: {
                    display: false,
                    text: 'Target Per Years'
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            console.log(data);
                            var label = data.datasets[tooltipItem.datasetIndex].label || '';
                            if (label) {
                                label += ' : ' + currency + ' thousand million';
                            }
                            label += formatter.format(Math.round(tooltipItem.yLabel * 100) / 100);
                            console.log(label);
                            return label;
                        }
                    }
                },
                responsive: true,
                scales: {
                    xAxes: [{
                            stacked: true,
                        }],
                    yAxes: [{
                            stacked: true,
                            ticks: {
                                // Include a dollar sign in the ticks
                                callback: function (value, index, values) {
                                    return currency + ' ' + formatter.format(value);
                                },
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        var ctx2 = document.getElementById('targetSalesQty');
        new Chart(ctx2, {
            type: 'bar',
            data: barChartDataQty,
            options: {
                title: {
                    display: false,
                    text: 'Target Per Years'
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                            stacked: true,
                        }],
                    yAxes: [{
                            stacked: true,
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/deal/deal-detail/deal-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/deal/deal-detail/deal-detail.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/deal/deal-detail/deal-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/deal/deal-detail/deal-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: DealDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealDetailComponent", function() { return DealDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let DealDetailComponent = class DealDetailComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.myContact = [];
        this.loading = true;
        this.stage = [];
        this.currentDate = new Date();
        this.editable = false;
        this.product = [];
        this.isReadOnly = true;
        this.myBranch = [];
        this.user = [];
        this.finish = false;
        this.quoteModel = [];
        this.quotes = [];
        this.business = [];
        this.model = [];
        this.lead_source = [];
        this.contact = [];
        this.sales_order = [];
        this.attachment = [];
        this.attachmentPO = [];
        this.showUpdateStage = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.items = {
            name: "",
            start_date: "",
            closed_date: "",
            expecting_closing_date: "",
            quote: {
                id: "0",
                quote_number: null,
                name: null,
                grand_total: null,
                contact: "  ",
                user: false,
            }
        };
        this.httpGet();
    }
    requestEmit(event) {
        this.modalService.dismissAll();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'deal/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            if (data['result']['data']['closed'] == false) {
                this.router.navigate(['opportunity/', this.id]);
            }
            this.items = data['result']['data'];
            this.stage = data['result']['stage'];
            this.quotes = data['result']['quotes'];
            this.width = data['result']['width'];
            this.id_stage = data['result']['data']['id_stage'];
            this.product = data['result']['product'];
            this.business = data['result']['business'];
            //    var objIndex = this.stage.findIndex((obj => obj.id == this.id_stage));
            //   console.log(' this.stageNotes ', this.stageNotes );
            //     this.stageNotes = this.stage[objIndex]['notes'];
            this.contact = data['result']['contact'];
            this.user = data['result']['user'];
            this.loading = false;
            this.sales_order = data['result']['sales_order'];
            this.lead_source = data['result']['lead_source'];
            this.attachment = data['result']['attachment'];
            this.attachmentPO = data['result']['attachmentPO'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    rollback() {
        if (confirm("Are you sure want to rollback ?")) {
            this.loading = true;
            this.http.post(this.configService.base_url() + 'deal/rollback', {
                "id": this.id,
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.loading = false;
                console.log(data);
                this.router.navigate(['opportunity/', this.id]);
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    nextStage(x) {
        this.stageCurrent = x.name;
        this.id_stageNext = x.id;
        if (this.items["id_stage"] == x.id) {
            this.showUpdateStage = false;
        }
        else if (this.items["id_stage"] != x.id) {
            this.showUpdateStage = true;
        }
        this.stageNotes = x.notes;
        this.id_stage = x.id;
        this.stage.map(a => a.current = false);
        var objIndex = this.stage.findIndex((obj => obj.id == x.id));
        this.stage[objIndex]['current'] = "current";
    }
    updateStage() {
        this.http.post(this.configService.base_url() + 'opportunity/updateStage', {
            "id": this.id,
            "id_stage": this.id_stageNext
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.showUpdateStage = false;
            this.httpGet();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    doneStage(x) {
        var objIndex = this.stage.findIndex((obj => obj.id == x.id));
        if (x.done === false) {
            this.stage[objIndex]['done'] = "done";
        }
        else {
            this.stage[objIndex]['done'] = false;
        }
        this.http.post(this.configService.base_url() + 'opportunity/doneState', {
            "id_opportunity": this.id,
            "id_stage": this.stage[objIndex]['id'],
            "done": this.stage[objIndex]['done'],
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_delete() {
        if (confirm('Delete this Opportunity ?')) {
            this.http.post(this.configService.base_url() + 'opportunity/fn_deleteSolo', {
                "id": this.id
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.router.navigate(['/opportunity/']);
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    fn_newQuote() {
        console.log(this.quoteModel);
        this.loading = true;
        this.http.post(this.configService.base_url() + 'opportunity/fn_newQuote', {
            "id": this.id,
            "data": this.quoteModel
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.router.navigate(['/quote/', data['result']['id']]);
            this.modalService.dismissAll();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
DealDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
DealDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deal-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deal-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deal/deal-detail/deal-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deal-detail.component.css */ "./src/app/deal/deal-detail/deal-detail.component.css")).default]
    })
], DealDetailComponent);



/***/ }),

/***/ "./src/app/deal/deal.component.css":
/*!*****************************************!*\
  !*** ./src/app/deal/deal.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/deal/deal.component.ts":
/*!****************************************!*\
  !*** ./src/app/deal/deal.component.ts ***!
  \****************************************/
/*! exports provided: DealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealComponent", function() { return DealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let DealComponent = class DealComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.itemsSelected = [];
        this.loading = true;
        this.loadingSelected = true;
        this.selected = [];
        this.newContact = false;
        this.selectModal = "0";
        this.id_user = "1";
        this.dbCompany = false;
        this.selectedCompany = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    requestEmit(event) {
        if (event) {
            this.router.navigate(['opportunity', event]);
        }
        this.modalService.dismissAll();
    }
    httpGet() {
        this.loading = false;
        var formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "deal/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[1, "asc"]],
            columnDefs: [
                {
                    "targets": 1,
                    "render": function (data, type, row, meta) {
                        return '<a href="#/deal/' + row[0] + '"><b>' + data + '</b></a>';
                    }
                },
                {
                    "targets": 3,
                    "render": function (data, type, row, meta) {
                        return '<div class="text-right">' + formatter.format(data) + '</div>';
                    },
                }
            ],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value=""> - Show All - </option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
    fn_delete() {
        this.http.post(this.configService.base_url() + 'opportunity/fn_delete', {
            "data": this.itemsSelected
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            //  console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    fn_check(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == true) {
            this.items[this.objIndex]['check'] = false;
        }
        else {
            this.items[this.objIndex]['check'] = true;
        }
        var object = {
            'id': x.id,
            'name': x.name,
            'contact': x.contact,
            'company': x.company,
        };
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (objectSelect == -1) {
            this.itemsSelected.push(object);
        }
        else {
            this.itemsSelected.splice(objectSelect, 1);
        }
        //  console.log(this.itemsSelected);
    }
    fn_removeItemSelected(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == false) {
            this.items[this.objIndex]['check'] = true;
        }
        else {
            this.items[this.objIndex]['check'] = false;
        }
        this.itemsSelected.splice(objectSelect, 1);
    }
    fn_next() {
    }
};
DealComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
DealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deal/deal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deal.component.css */ "./src/app/deal/deal.component.css")).default]
    })
], DealComponent);



/***/ }),

/***/ "./src/app/guard/active-guard.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guard/active-guard.guard.ts ***!
  \*********************************************/
/*! exports provided: ActiveGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveGuardGuard", function() { return ActiveGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/config.service */ "./src/app/service/config.service.ts");




let ActiveGuardGuard = class ActiveGuardGuard {
    constructor(router, configService) {
        this.router = router;
        this.configService = configService;
    }
    canActivate(route, state) {
        if (this.configService.token()) {
            // console.log(   this.configService.access_rules(route.url[0].path)  );  
            // console.warn("route.url[0].path : "+route.url[0].path);
            if (this.configService.access_rules(route.url[0].path)) {
                console.warn("ENABLE");
                return true;
            }
            else {
                console.warn("DISABLE");
                this.router.navigate(['/warning/access/', route.url[0].path]);
                return false;
            }
        }
        else {
            console.warn("YOUR ARE NOT LOGGED!");
            // not logged in so redirect to login page with the return url
            // this.router.navigate(['/login']);
            return true;
        }
    }
};
ActiveGuardGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
ActiveGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ActiveGuardGuard);



/***/ }),

/***/ "./src/app/lead/converted/converted.component.css":
/*!********************************************************!*\
  !*** ./src/app/lead/converted/converted.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/lead/converted/converted.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/lead/converted/converted.component.ts ***!
  \*******************************************************/
/*! exports provided: ConvertedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertedComponent", function() { return ConvertedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let ConvertedComponent = class ConvertedComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.loading = true;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id_user = this.configService.id_user();
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'converted', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.total = data['result']['total'];
            this.items = data['result']['data'];
            this.items.sort(function (a, b) {
                if (a.lead < b.lead) {
                    return -1;
                }
                if (a.lead > b.lead) {
                    return 1;
                }
                return 0;
            });
            this.loading = false;
        });
    }
};
ConvertedComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
ConvertedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-converted',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./converted.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lead/converted/converted.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./converted.component.css */ "./src/app/lead/converted/converted.component.css")).default]
    })
], ConvertedComponent);



/***/ }),

/***/ "./src/app/lead/lead-converd/lead-converd.component.css":
/*!**************************************************************!*\
  !*** ./src/app/lead/lead-converd/lead-converd.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/lead/lead-converd/lead-converd.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/lead/lead-converd/lead-converd.component.ts ***!
  \*************************************************************/
/*! exports provided: LeadConverdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadConverdComponent", function() { return LeadConverdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/config.service */ "./src/app/service/config.service.ts");





let LeadConverdComponent = class LeadConverdComponent {
    constructor(http, router, activatedRoute, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.items = {
            user: {
                id: "", name: "",
            },
            lead: {
                id: "", name: "",
            },
            company: {
                id: "", name: "",
            },
            contact: {
                id: "", name: "",
            },
            opportunity: {
                id: "", name: "",
            },
            convert: {
                date: "",
                id_user: "",
                user: "",
            },
        };
        this.loading = true;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.http.get(this.configService.base_url() + 'lead/converted/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.items = data['result']['data'];
            this.loading = false;
        });
    }
};
LeadConverdComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
LeadConverdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lead-converd',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lead-converd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead-converd/lead-converd.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lead-converd.component.css */ "./src/app/lead/lead-converd/lead-converd.component.css")).default]
    })
], LeadConverdComponent);



/***/ }),

/***/ "./src/app/lead/lead-detail/lead-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/lead/lead-detail/lead-detail.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  ");

/***/ }),

/***/ "./src/app/lead/lead-detail/lead-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lead/lead-detail/lead-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: LeadDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadDetailComponent", function() { return LeadDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _lead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../lead */ "./src/app/lead/lead.ts");







let LeadDetailComponent = class LeadDetailComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.loading = true;
        this.newContact = false;
        this.modalTitle = "";
        this.isReadOnly = true;
        this.lead = [];
        this.lead_status = [];
        this.customer_class = [];
        this.title = [];
        this.lead_source = [];
        this.industry = [];
        this.showNewActivity = false;
        this.activity = [];
        this.opportunity_stage = [];
        this.leadConvert = [];
        this.loadingConvert = false;
        this.company = [];
        this.user = [];
        this.contacts = [];
        this.attachment = [];
        this.company_class = [];
        this.product = [];
        this.accessRules = [];
        this.selectedFile = null;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.accessRules = this.configService.access_right();
        console.log('accessRules', this.accessRules);
        this.httpGet();
    }
    httpGet() {
        this.items = {
            company: {
                new: false,
                id: "",
                name: "",
            },
            lead_status: {
                id: "",
                name: "",
                color: "",
            }
        };
        this.loading = true;
        this.http.get(this.configService.base_url() + 'lead/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            if (data['error'] != 0) {
                this.router.navigate(['warning/access/user']);
            }
            else {
                this.items = data['result']['lead'];
                this.title = data['result']['title'];
                this.lead_source = data['result']['lead_source'];
                this.industry = data['result']['industry'];
                this.user = data['result']['user'];
                this.lead_status = data['result']['lead_status'];
                this.product = data['result']['product'];
                this.customer_class = data['result']['customer_class'];
                this.opportunity_stage = data['result']['opportunity_stage'];
                this.company = data['result']['company'];
                this.company_class = data['result']['company_class'];
                this.attachment = data['result']['attachment'];
                this.lead = new _lead__WEBPACK_IMPORTED_MODULE_6__["UpdateLead"](data['result']['lead']['id_user'], data['result']['lead']['id_title'], data['result']['lead']['id_lead_source'], data['result']['lead']['id_industry'], data['result']['lead']['first_name'], data['result']['lead']['last_name'], data['result']['lead']['email'], data['result']['lead']['mobile'], data['result']['lead']['phone'], data['result']['lead']['company'], data['result']['lead']['website'], data['result']['lead']['address_street'], data['result']['lead']['address_city'], data['result']['lead']['address_state'], data['result']['lead']['address_code'], data['result']['lead']['address_country'], data['result']['lead']['opportunity'], data['result']['lead']['position'], data['result']['lead']['amount'], data['result']['lead']['id_company_class'], data['result']['lead']['department'], data['result']['lead']['fax'], data['result']['lead']['sex'], data['result']['lead']['birthdate']);
                this.leadConvert = new _lead__WEBPACK_IMPORTED_MODULE_6__["LeadConvert"](data['result']['lead']['isDuplicate'], data['result']['lead']['company'], data['result']['lead']['id_company'], data['result']['lead']['id_company_class'], data['result']['lead']['first_name'], data['result']['lead']['last_name'], data['result']['lead']['opportunity'], data['result']['lead']['amount'], data['result']['lead']['id_user'], []);
            }
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_selectContact(id) {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'lead/selectContact/' + id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.contacts = data['result']['contacts'];
            this.loading = false;
        });
    }
    onChangeLeadStatus(id) {
        id = id.replace(/ +/g, "");
        var res = id.split(":");
        this.http.post(this.configService.base_url() + 'lead/onChangeLeadStatus', {
            "id_lead": this.id,
            "id_lead_status": res[1]
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items['lead_status']['color'] = data['result']['data']['color'];
            this.items['lead_status']['name'] = data['result']['data']['name'];
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: "lg" });
    }
    fn_delete() {
        if (confirm('Delete this lead ?')) {
            this.http.post(this.configService.base_url() + 'lead/fn_deleteSolo', {
                "id_lead": this.id
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.router.navigate(['/lead/']);
            }, error => {
                // console.log(error);
                // console.log(error.error.text);
            });
        }
    }
    fn_deleteProduct(x) {
        var objIndex = this.product.findIndex((obj => obj.id == x.id));
        this.product.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'lead/fn_deleteProduct', {
            "id": x.id
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    onConvert() {
        this.loading = true;
        this.loadingConvert = true;
        this.http.post(this.configService.base_url() + 'lead/convert', {
            "id": this.id,
            "data": this.leadConvert
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loadingConvert = false;
            this.loading = false;
            this.modalService.dismissAll('just closed');
            this.router.navigate(['/lead/converted/', this.id]);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_update() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'lead/update', {
            "id_lead": this.id,
            "data": this.lead
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            this.loading = false;
            console.log(error);
            console.log(error.error.text);
        });
    }
    requestEmit(event) {
        this.httpGet();
        this.modalService.dismissAll();
    }
    fn_newActivity() {
        this.showNewActivity = true;
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload(target) {
        const fd = new FormData();
        fd.append('files', this.selectedFile, this.selectedFile.name);
        fd.append('token', this.configService.token());
        fd.append('module', target);
        fd.append('id', this.id);
        console.log(fd, this.configService.token());
        this.http.post(this.configService.base_url() + 'upload/attachment', fd, {
        //    reportProgress: true,
        //  observe: 'events'
        })
            .subscribe(
        /*  event => {
            if(event.type === HttpEventType.UploadProgress){
              console.log(event ); // handle event here
            }else if( event.type === HttpEventType.Response ){
              console.log(event ); // handle event here
            }
           
          },*/
        data => {
            // console.log(data); 
            this.attachment = data['result']['attachment'];
            this.httpGet();
            this.selectedFile = "";
        });
    }
    fn_attach_delete(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'pricelist/fn_attach_delete', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
            this.attachment.splice(objIndex, 1);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
LeadDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
LeadDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lead-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lead-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead-detail/lead-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lead-detail.component.css */ "./src/app/lead/lead-detail/lead-detail.component.css")).default]
    })
], LeadDetailComponent);



/***/ }),

/***/ "./src/app/lead/lead.component.css":
/*!*****************************************!*\
  !*** ./src/app/lead/lead.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" ");

/***/ }),

/***/ "./src/app/lead/lead.component.ts":
/*!****************************************!*\
  !*** ./src/app/lead/lead.component.ts ***!
  \****************************************/
/*! exports provided: LeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadComponent", function() { return LeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _lead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lead */ "./src/app/lead/lead.ts");







let LeadComponent = class LeadComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.itemsSelected = [];
        this.loading = true;
        this.loadingSelected = true;
        this.selected = [];
        this.newContact = false;
        this.modalTitle = "";
        this.selectModal = "0";
        this.leadStatus = "0";
        this.id_lead_status = "1";
        this.dbCompany = false;
        this.selectedCompany = [];
        this.submit = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id_user = this.configService.id_user();
        this.model = new _lead__WEBPACK_IMPORTED_MODULE_6__["Newlead"](this.id_user, '1', '1', '0', '', '', '', '', '', '', '', '', '', '', '', '', '0', '1', "", "", "", "", "1", { "year": 1980,
            "month": 3,
            "day": 5 }, false);
        this.httpGet();
        this.httpSelected();
    }
    httpGet() {
        this.loading = false;
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "lead/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[2, "asc"]],
            columnDefs: [
                {
                    "targets": 0,
                    "render": function (data, type, row, meta) {
                        return data + ' <span class="ml-2 text-white text-' + row[8] + '"><i class="fas fa-circle"></i></span>';
                    }
                },
                {
                    "targets": 1,
                    "render": function (data, type, row, meta) {
                        return data;
                    }
                },
                {
                    "targets": 2,
                    "render": function (data, type, row, meta) {
                        return '<a href="#/lead/' + row[0] + '"><b>' + data + '</b></a>';
                    }
                },
            ],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value="">Show all</option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
    httpSelected() {
        this.http.get(this.configService.base_url() + 'lead/selected', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.configService.errorToken(data);
            this.loadingSelected = false;
            this.selected = data['result'];
            // console.log(this.selected);
        });
    }
    httpCompany() {
        // console.log("httpCompany");
        this.loadingSelected = false;
        this.http.get(this.configService.base_url() + 'lead/getCompany', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loadingSelected = false;
            this.selectedCompany = data['result']['data'];
            // console.log(this.selectedCompany);
        });
    }
    fnRequestCompanyData() {
        console.log(this.model['id_company']);
        this.loading = true;
        this.http.get(this.configService.base_url() + 'lead/getCompany/?id=' + this.model['id_company'], {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loading = false;
            console.log(data);
            this.model['isDuplicate'] = true;
            this.model['website'] = data['result']['data'][0]['website'];
            this.model['phone'] = data['result']['data'][0]['phone'];
            this.model['fax'] = data['result']['data'][0]['fax'];
            this.model['website'] = data['result']['data'][0]['website'];
            this.model['id_company_class'] = data['result']['data'][0]['id_company_class'];
            this.model['address_street'] = data['result']['data'][0]['bill_street1'];
            this.model['address_city'] = data['result']['data'][0]['bill_city'];
            this.model['address_state'] = data['result']['data'][0]['bill_state'];
            this.model['address_code'] = data['result']['data'][0]['bill_code'];
            this.model['address_country'] = data['result']['data'][0]['bill_country'];
            // this.selectedCompany = data['result']['data'];
            // console.log(this.selectedCompany);
        });
    }
    onSubmit(value = "") {
        this.submit = true;
        this.http.post(this.configService.base_url() + 'lead/insert', {
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            // console.log(data);
            this.submit = false;
            if (value == 'next') {
                this.httpGet();
                this.model = new _lead__WEBPACK_IMPORTED_MODULE_6__["Newlead"](this.id_user, '1', '1', '0', '', '', '', '', '', '', '', '', '', '', '', '', '0', '1', "", "", "", "", '1', { "year": 1980,
                    "month": 3,
                    "day": 5 }, false);
            }
            else {
                this.router.navigate(['/lead/', data['result']['id_lead']]);
                this.modalService.dismissAll();
            }
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_updateLeadStatus() {
        this.http.post(this.configService.base_url() + 'lead/fn_updateLeadStatus', {
            "data": this.itemsSelected,
            "id_lead_status": this.id_lead_status
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            // console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    fn_delete() {
        this.http.post(this.configService.base_url() + 'lead/fn_delete', {
            "data": this.itemsSelected
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            // console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_check(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == true) {
            this.items[this.objIndex]['check'] = false;
        }
        else {
            this.items[this.objIndex]['check'] = true;
        }
        var object = {
            'id': x.id,
            'name': x.name,
            'company': x.company,
        };
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (objectSelect == -1) {
            this.itemsSelected.push(object);
        }
        else {
            this.itemsSelected.splice(objectSelect, 1);
        }
        // console.log(this.itemsSelected);
    }
    fn_removeItemSelected(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == false) {
            this.items[this.objIndex]['check'] = true;
        }
        else {
            this.items[this.objIndex]['check'] = false;
        }
        this.itemsSelected.splice(objectSelect, 1);
    }
};
LeadComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
LeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lead',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lead.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lead/lead.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lead.component.css */ "./src/app/lead/lead.component.css")).default]
    })
], LeadComponent);



/***/ }),

/***/ "./src/app/lead/lead.ts":
/*!******************************!*\
  !*** ./src/app/lead/lead.ts ***!
  \******************************/
/*! exports provided: Lead, LeadDetail, Company, Selected, Newlead, LeadEdit, LeadConvert, UpdateLead, Opportunity, SelectUser, leadConvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lead", function() { return Lead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadDetail", function() { return LeadDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selected", function() { return Selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newlead", function() { return Newlead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadEdit", function() { return LeadEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadConvert", function() { return LeadConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLead", function() { return UpdateLead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opportunity", function() { return Opportunity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUser", function() { return SelectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leadConvert", function() { return leadConvert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Lead {
}
class LeadDetail {
}
class Company {
}
class Selected {
}
class Newlead {
    constructor(id_user, id_title, id_lead_source, id_industry, first_name, last_name, email, mobile, phone, company, website, address_street, address_city, address_state, address_code, address_country, id_company, id_lead_status, id_company_class, position, department, fax, sex, birthdate, isDuplicate) {
        this.id_user = id_user;
        this.id_title = id_title;
        this.id_lead_source = id_lead_source;
        this.id_industry = id_industry;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.mobile = mobile;
        this.phone = phone;
        this.company = company;
        this.website = website;
        this.address_street = address_street;
        this.address_city = address_city;
        this.address_state = address_state;
        this.address_code = address_code;
        this.address_country = address_country;
        this.id_company = id_company;
        this.id_lead_status = id_lead_status;
        this.id_company_class = id_company_class;
        this.position = position;
        this.department = department;
        this.fax = fax;
        this.sex = sex;
        this.birthdate = birthdate;
        this.isDuplicate = isDuplicate;
    }
}
class LeadEdit {
}
class LeadConvert {
    constructor(isDuplicate, newCompany, cl_id_company, cl_id_company_class, lc_first_name, lc_last_name, opportunity, amount, id_user, expecting_closing_date) {
        this.isDuplicate = isDuplicate;
        this.newCompany = newCompany;
        this.cl_id_company = cl_id_company;
        this.cl_id_company_class = cl_id_company_class;
        this.lc_first_name = lc_first_name;
        this.lc_last_name = lc_last_name;
        this.opportunity = opportunity;
        this.amount = amount;
        this.id_user = id_user;
        this.expecting_closing_date = expecting_closing_date;
    }
}
class UpdateLead {
    constructor(id_user, id_title, id_lead_source, id_industry, first_name, last_name, email, mobile, phone, company, website, address_street, address_city, address_state, address_code, address_country, opportunity, position, amount, id_company_class, department, fax, sex, birthdate) {
        this.id_user = id_user;
        this.id_title = id_title;
        this.id_lead_source = id_lead_source;
        this.id_industry = id_industry;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.mobile = mobile;
        this.phone = phone;
        this.company = company;
        this.website = website;
        this.address_street = address_street;
        this.address_city = address_city;
        this.address_state = address_state;
        this.address_code = address_code;
        this.address_country = address_country;
        this.opportunity = opportunity;
        this.position = position;
        this.amount = amount;
        this.id_company_class = id_company_class;
        this.department = department;
        this.fax = fax;
        this.sex = sex;
        this.birthdate = birthdate;
    }
}
class Opportunity {
    constructor(opportunityName, id_user) {
        this.opportunityName = opportunityName;
        this.id_user = id_user;
    }
}
class SelectUser {
}
class leadConvert {
}


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let LoginComponent = class LoginComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.username = '';
        this.password = '';
        this.isLoading = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        // kalau sudah ada token, langsung redirect ke halaman utama
        const token = localStorage.getItem('tokenCrmCoId');
        if (token) {
            console.log("Token OK", token);
            this.router.navigate(['/dashboard']);
        }
    }
    onSubmit() {
        this.errorMessage = '';
        if (!this.username || !this.password) {
            this.errorMessage = 'Username dan password wajib diisi.';
            return;
        }
        this.isLoading = true;
        const payload = {
            username: this.username,
            password: this.password
        };
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api}auth/login`, payload)
            .subscribe((res) => {
            console.log(res);
            this.isLoading = false;
            if (res && res.token) {
                localStorage.setItem('tokenCrmCoId', res.token);
                //   localStorage.setItem('user', JSON.stringify(res.user || {}));
                // this.router.navigate(['/dashboard']);
            }
            else {
                this.errorMessage = 'Login gagal, response tidak valid.';
            }
        }, (err) => {
            console.log(err);
            this.isLoading = false;
            if (err.status === 401 || err.status === 400) {
                this.errorMessage = 'Username atau password salah.';
            }
            else {
                this.errorMessage = 'Terjadi kesalahan pada server. Coba lagi nanti.';
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/lost/lost-detail/lost-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/lost/lost-detail/lost-detail.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/lost/lost-detail/lost-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lost/lost-detail/lost-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: LostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostDetailComponent", function() { return LostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let LostDetailComponent = class LostDetailComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.myContact = [];
        this.loading = true;
        this.stage = [];
        this.currentDate = new Date();
        this.editable = false;
        this.product = [];
        this.isReadOnly = true;
        this.myBranch = [];
        this.user = [];
        this.finish = false;
        this.quoteModel = [];
        this.quotes = [];
        this.business = [];
        this.model = [];
        this.lead_source = [];
        this.contact = [];
        this.sales_order = [];
        this.attachment = [];
        this.attachmentPO = [];
        this.showUpdateStage = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.items = {
            name: "",
            start_date: "",
            closed_date: "",
            expecting_closing_date: "",
            quote: {
                id: "0",
                quote_number: null,
                name: null,
                grand_total: null,
                contact: "  ",
                user: false,
            }
        };
        this.httpGet();
    }
    requestEmit(event) {
        this.modalService.dismissAll();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'deal/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            if (data['result']['data']['closed'] == false) {
                this.router.navigate(['opportunity/', this.id]);
            }
            this.items = data['result']['data'];
            this.stage = data['result']['stage'];
            this.quotes = data['result']['quotes'];
            this.width = data['result']['width'];
            this.id_stage = data['result']['data']['id_stage'];
            this.product = data['result']['product'];
            this.business = data['result']['business'];
            //    var objIndex = this.stage.findIndex((obj => obj.id == this.id_stage));
            //   console.log(' this.stageNotes ', this.stageNotes );
            //     this.stageNotes = this.stage[objIndex]['notes'];
            this.contact = data['result']['contact'];
            this.user = data['result']['user'];
            this.loading = false;
            this.sales_order = data['result']['sales_order'];
            this.lead_source = data['result']['lead_source'];
            this.attachment = data['result']['attachment'];
            this.attachmentPO = data['result']['attachmentPO'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    rollback() {
        if (confirm("Are you sure want to rollback ?")) {
            this.loading = true;
            this.http.post(this.configService.base_url() + 'deal/rollback', {
                "id": this.id,
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.loading = false;
                console.log(data);
                this.router.navigate(['opportunity/', this.id]);
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    nextStage(x) {
        this.stageCurrent = x.name;
        this.id_stageNext = x.id;
        if (this.items["id_stage"] == x.id) {
            this.showUpdateStage = false;
        }
        else if (this.items["id_stage"] != x.id) {
            this.showUpdateStage = true;
        }
        this.stageNotes = x.notes;
        this.id_stage = x.id;
        this.stage.map(a => a.current = false);
        var objIndex = this.stage.findIndex((obj => obj.id == x.id));
        this.stage[objIndex]['current'] = "current";
    }
    updateStage() {
        this.http.post(this.configService.base_url() + 'opportunity/updateStage', {
            "id": this.id,
            "id_stage": this.id_stageNext
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.showUpdateStage = false;
            this.httpGet();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    doneStage(x) {
        var objIndex = this.stage.findIndex((obj => obj.id == x.id));
        if (x.done === false) {
            this.stage[objIndex]['done'] = "done";
        }
        else {
            this.stage[objIndex]['done'] = false;
        }
        this.http.post(this.configService.base_url() + 'opportunity/doneState', {
            "id_opportunity": this.id,
            "id_stage": this.stage[objIndex]['id'],
            "done": this.stage[objIndex]['done'],
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_delete() {
        if (confirm('Delete this Opportunity ?')) {
            this.http.post(this.configService.base_url() + 'opportunity/fn_deleteSolo', {
                "id": this.id
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.router.navigate(['/opportunity/']);
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    fn_newQuote() {
        console.log(this.quoteModel);
        this.loading = true;
        this.http.post(this.configService.base_url() + 'opportunity/fn_newQuote', {
            "id": this.id,
            "data": this.quoteModel
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.router.navigate(['/quote/', data['result']['id']]);
            this.modalService.dismissAll();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
LostDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
LostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lost-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lost-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lost/lost-detail/lost-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lost-detail.component.css */ "./src/app/lost/lost-detail/lost-detail.component.css")).default]
    })
], LostDetailComponent);



/***/ }),

/***/ "./src/app/lost/lost.component.css":
/*!*****************************************!*\
  !*** ./src/app/lost/lost.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/lost/lost.component.ts":
/*!****************************************!*\
  !*** ./src/app/lost/lost.component.ts ***!
  \****************************************/
/*! exports provided: LostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostComponent", function() { return LostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");





let LostComponent = class LostComponent {
    constructor(http, router, configService) {
        this.http = http;
        this.router = router;
        this.configService = configService;
        this.loading = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = false;
        var formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "lost/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[1, "asc"]],
            columnDefs: [
                {
                    "targets": 2,
                    "render": function (data, type, row, meta) {
                        return '<a href="#/lost/' + row[0] + '"><b>' + data + '</b></a>';
                    }
                },
                {
                    "targets": 4,
                    "render": function (data, type, row, meta) {
                        return '<div class="text-right">' + formatter.format(data) + '</div>';
                    },
                }
            ],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value="">Show all</option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
};
LostComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
LostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lost',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lost.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lost/lost.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lost.component.css */ "./src/app/lost/lost.component.css")).default]
    })
], LostComponent);



/***/ }),

/***/ "./src/app/master-class/master-class.component.css":
/*!*********************************************************!*\
  !*** ./src/app/master-class/master-class.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/master-class/master-class.component.ts":
/*!********************************************************!*\
  !*** ./src/app/master-class/master-class.component.ts ***!
  \********************************************************/
/*! exports provided: MasterClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterClassComponent", function() { return MasterClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let MasterClassComponent = class MasterClassComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.itemDetail = [];
        this.loading = true;
        this.newName = "";
        this.isReadonly = true;
        this.isUpdate = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'classmaster', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            console.log(data);
            this.loading = false;
        });
    }
    update(x) {
        this.isUpdate = true;
        console.log(x);
        this.http.post(this.configService.base_url() + 'classmaster/update', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.isUpdate = false;
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    insert() {
        if (this.newName != "") {
            this.http.post(this.configService.base_url() + 'classmaster/insert', {
                "name": this.newName
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.httpGet();
                this.newName = "";
            }, error => {
                // console.log(error);
                // console.log(error.error.text);
            });
        }
    }
    fn_delete(x) {
        this.http.post(this.configService.base_url() + 'classmaster/fn_delete', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
};
MasterClassComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
MasterClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-class/master-class.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master-class.component.css */ "./src/app/master-class/master-class.component.css")).default]
    })
], MasterClassComponent);



/***/ }),

/***/ "./src/app/master-currency/master-currency.component.css":
/*!***************************************************************!*\
  !*** ./src/app/master-currency/master-currency.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/master-currency/master-currency.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/master-currency/master-currency.component.ts ***!
  \**************************************************************/
/*! exports provided: MasterCurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCurrencyComponent", function() { return MasterCurrencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let MasterCurrencyComponent = class MasterCurrencyComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.itemDetail = [];
        this.loading = true;
        this.newName = "";
        this.isReadonly = true;
        this.isUpdate = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'currency', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            console.log(data);
            this.loading = false;
        });
    }
    update(x) {
        this.isUpdate = true;
        console.log(x);
        this.http.post(this.configService.base_url() + 'currency/update', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.isUpdate = false;
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    insert() {
        if (this.newName != "") {
            this.http.post(this.configService.base_url() + 'currency/insert', {
                "name": this.newName
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.httpGet();
                this.newName = "";
            }, error => {
                // console.log(error);
                // console.log(error.error.text);
            });
        }
    }
    fn_delete(x) {
        this.http.post(this.configService.base_url() + 'currency/fn_delete', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
};
MasterCurrencyComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
MasterCurrencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master-currency',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master-currency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-currency/master-currency.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master-currency.component.css */ "./src/app/master-currency/master-currency.component.css")).default]
    })
], MasterCurrencyComponent);



/***/ }),

/***/ "./src/app/master-industry/master-industry.component.css":
/*!***************************************************************!*\
  !*** ./src/app/master-industry/master-industry.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/master-industry/master-industry.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/master-industry/master-industry.component.ts ***!
  \**************************************************************/
/*! exports provided: MasterIndustryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterIndustryComponent", function() { return MasterIndustryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let MasterIndustryComponent = class MasterIndustryComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.itemDetail = [];
        this.loading = true;
        this.newName = "";
        this.isReadonly = true;
        this.isUpdate = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'industry', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            console.log(data);
            this.loading = false;
        });
    }
    update(x) {
        this.isUpdate = true;
        console.log(x);
        this.http.post(this.configService.base_url() + 'industry/update', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.isUpdate = false;
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    insert() {
        if (this.newName != "") {
            this.http.post(this.configService.base_url() + 'industry/insert', {
                "name": this.newName
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.httpGet();
                this.newName = "";
            }, error => {
                // console.log(error);
                // console.log(error.error.text);
            });
        }
    }
    fn_delete(x) {
        this.http.post(this.configService.base_url() + 'industry/fn_delete', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
};
MasterIndustryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
MasterIndustryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master-industry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master-industry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-industry/master-industry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master-industry.component.css */ "./src/app/master-industry/master-industry.component.css")).default]
    })
], MasterIndustryComponent);



/***/ }),

/***/ "./src/app/master-lead-source/master-lead-source.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/master-lead-source/master-lead-source.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/master-lead-source/master-lead-source.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/master-lead-source/master-lead-source.component.ts ***!
  \********************************************************************/
/*! exports provided: MasterLeadSourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterLeadSourceComponent", function() { return MasterLeadSourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let MasterLeadSourceComponent = class MasterLeadSourceComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.itemDetail = [];
        this.loading = true;
        this.newName = "";
        this.isReadonly = true;
        this.isUpdate = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'leadsource', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            console.log(data);
            this.loading = false;
        });
    }
    update(x) {
        this.isUpdate = true;
        console.log(x);
        this.http.post(this.configService.base_url() + 'leadsource/update', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.isUpdate = false;
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    insert() {
        if (this.newName != "") {
            this.http.post(this.configService.base_url() + 'leadsource/insert', {
                "name": this.newName
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.httpGet();
                this.newName = "";
            }, error => {
                // console.log(error);
                // console.log(error.error.text);
            });
        }
    }
    fn_delete(x) {
        this.http.post(this.configService.base_url() + 'leadsource/fn_delete', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
};
MasterLeadSourceComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
MasterLeadSourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master-lead-source',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master-lead-source.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-lead-source/master-lead-source.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master-lead-source.component.css */ "./src/app/master-lead-source/master-lead-source.component.css")).default]
    })
], MasterLeadSourceComponent);



/***/ }),

/***/ "./src/app/master-opportunity-closed/master-opportunity-closed.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/master-opportunity-closed/master-opportunity-closed.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/master-opportunity-closed/master-opportunity-closed.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/master-opportunity-closed/master-opportunity-closed.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MasterOpportunityClosedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterOpportunityClosedComponent", function() { return MasterOpportunityClosedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let MasterOpportunityClosedComponent = class MasterOpportunityClosedComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.itemDetail = [];
        this.loading = true;
        this.newName = "";
        this.newClosed_win = "1";
        this.isReadonly = true;
        this.isUpdate = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'opportunity_closed_reason', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            console.log(data);
            this.loading = false;
        });
    }
    update(x) {
        this.isUpdate = true;
        console.log(x);
        this.http.post(this.configService.base_url() + 'opportunity_closed_reason/update', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.isUpdate = false;
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    insert() {
        if (this.newName != "") {
            this.http.post(this.configService.base_url() + 'opportunity_closed_reason/insert', {
                "note": this.newName,
                "closed_win": this.newClosed_win
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.httpGet();
                this.newName = "";
            }, error => {
                // console.log(error);
                // console.log(error.error.text);
            });
        }
    }
    fn_delete(x) {
        this.http.post(this.configService.base_url() + 'opportunity_closed_reason/fn_delete', {
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
};
MasterOpportunityClosedComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
MasterOpportunityClosedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master-opportunity-closed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master-opportunity-closed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master-opportunity-closed/master-opportunity-closed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master-opportunity-closed.component.css */ "./src/app/master-opportunity-closed/master-opportunity-closed.component.css")).default]
    })
], MasterOpportunityClosedComponent);



/***/ }),

/***/ "./src/app/navigator/navigator.component.css":
/*!***************************************************!*\
  !*** ./src/app/navigator/navigator.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/navigator/navigator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/navigator/navigator.component.ts ***!
  \**************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let NavigatorComponent = class NavigatorComponent {
    constructor(http, activatedRoute, configService, router, titleService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.router = router;
        this.titleService = titleService;
        this.loading = true;
        this.nav = [];
        this.accessRight = [];
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.titleService.setTitle(data['title']);
        });
        this.username = this.configService.username();
        this.nav = this.activatedRoute.snapshot.routeConfig.path.split("/");
        this.current = this.nav[0];
        this.accessRight = this.configService.access_right();
        console.log(this.accessRight);
        console.log(this.configService.access_right());
    }
    signout() {
        window.location.href = this.configService.base_url() + 'login/signout';
    }
};
NavigatorComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
];
NavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigator.component.css */ "./src/app/navigator/navigator.component.css")).default]
    })
], NavigatorComponent);



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")).default]
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/opportunity/modal-opportunity/modal-opportunity.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/opportunity/modal-opportunity/modal-opportunity.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/opportunity/modal-opportunity/modal-opportunity.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/opportunity/modal-opportunity/modal-opportunity.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalOpportunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOpportunityComponent", function() { return ModalOpportunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalOpportunityComponent = class ModalOpportunityComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModalOpportunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-opportunity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-opportunity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/modal-opportunity/modal-opportunity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-opportunity.component.css */ "./src/app/opportunity/modal-opportunity/modal-opportunity.component.css")).default]
    })
], ModalOpportunityComponent);



/***/ }),

/***/ "./src/app/opportunity/opportunity-detail/opportunity-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/opportunity/opportunity-detail/opportunity-detail.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Global CSS, you probably don't need that */\r\n\r\n.clearfix:after {\r\n    clear: both;\r\n    content: \"\";\r\n    display: block;\r\n    height: 0;\r\n  }\r\n\r\n.pull-right {\r\n  float: right;\r\n  }\r\n\r\n/* Breadcrups CSS */\r\n\r\n.arrow-steps .step {\r\n  font-size: 14px;\r\n  text-align: center;\r\n  color: #666;\r\n  cursor: default;\r\n  margin: 0 3px;\r\n  padding: 8px 10px 7px 30px;\r\n  /*min-width: 19%;*/\r\n  float: left;\r\n  position: relative;\r\n  background-color: #d9e3f7;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none; \r\n  -webkit-transition: background-color 0.2s ease; \r\n  transition: background-color 0.2s ease;\r\n  cursor: pointer;\r\n  }\r\n\r\n.arrow-steps .step:after,\r\n  .arrow-steps .step:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  right: -17px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 19px solid transparent;\r\n  border-bottom: 17px solid transparent;\r\n  border-left: 17px solid #d9e3f7;\t\r\n  z-index: 2;\r\n  -webkit-transition: border-color 0.2s ease;\r\n  transition: border-color 0.2s ease;\r\n  }\r\n\r\n.arrow-steps .step:before {\r\n  right: auto;\r\n  left: 0;\r\n  border-left: 17px solid #fff;\t\r\n  z-index: 0;\r\n  }\r\n\r\n.arrow-steps .step:first-child:before {\r\n  border: none;\r\n  }\r\n\r\n.arrow-steps .step:first-child {\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n  }\r\n\r\n.arrow-steps .step span {\r\n  position: relative;\r\n  }\r\n\r\n.arrow-steps .step span:before {\r\n   \r\n  }\r\n\r\n.arrow-steps .step.done span:before {\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.3s ease 0.5s;\r\n  transition: opacity 0.3s ease 0.5s;\r\n  }\r\n\r\n.arrow-steps .step.done {\r\n  color: #fff;\r\n  background-color: #4BCA81; \r\n  }\r\n\r\n.arrow-steps .step.done:after {\r\n  border-left: 17px solid #4BCA81;\t\r\n  }\r\n\r\n.arrow-steps .step.current {\r\n  color: #fff;\r\n  background-color: #0070D2;\r\n  }\r\n\r\n.arrow-steps .step.current:after {\r\n  border-left: 17px solid #0070D2;\t\r\n  }\r\n  \r\n  ");

/***/ }),

/***/ "./src/app/opportunity/opportunity-detail/opportunity-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/opportunity/opportunity-detail/opportunity-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: OpportunityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityDetailComponent", function() { return OpportunityDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _quote_quote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../quote/quote */ "./src/app/quote/quote.ts");
/* harmony import */ var _opportunity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../opportunity */ "./src/app/opportunity/opportunity.ts");








let OpportunityDetailComponent = class OpportunityDetailComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.myContact = [];
        this.loading = true;
        this.stage = [];
        this.currentDate = new Date();
        this.editable = false;
        this.product = [];
        this.isReadOnly = true;
        this.myBranch = [];
        this.user = [];
        this.finish = false;
        this.quoteModel = [];
        this.business = [];
        this.reason = "";
        this.reason_win = [];
        this.reason_lose = [];
        this.model = [];
        this.lead_source = [];
        this.updateOpportunity = [];
        this.contact = [];
        this.showUpdateStage = false;
        this.loadingUpdateQuiz = "";
        this.attachment = [];
        this.attachmentPO = [];
        this.selectedFile = null;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.items = {
            name: "",
            start_date: {
                year: 0,
                month: 0,
                day: 0,
            },
            expecting_closing_date: {
                year: 0,
                month: 0,
                day: 0,
            }
        };
        this.httpGet();
    }
    requestEmit(event) {
        this.httpGet();
        this.modalService.dismissAll();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'opportunity/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loading = false;
            if (data['error'] != 0) {
                this.router.navigate(['warning/access/user']);
            }
            else {
                if (data['result']['data']['closed'] == true) {
                    if (data['result']['data']['id_stage'] == 1000) {
                        this.router.navigate(['deal/', this.id]);
                    }
                    else if (data['result']['data']['id_stage'] == 3000) {
                        this.router.navigate(['lose/', this.id]);
                    }
                }
                this.items = data['result']['data'];
                this.stage = data['result']['stage'];
                this.quotes = data['result']['quotes'];
                this.width = data['result']['width'];
                this.id_stage = data['result']['data']['id_stage'];
                this.product = data['result']['product'];
                this.business = data['result']['business'];
                this.contact = data['result']['contact'];
                this.user = data['result']['user'];
                this.quoteModel = new _quote_quote__WEBPACK_IMPORTED_MODULE_6__["Newquote"](data['result']['data']['name'], [], "", data['result']['data']['id_user'], data['result']['data']['id_contact'], data['result']['data']['contact']['email'], data['result']['data']['contact']['phone'], data['result']['information']['fax'], data['result']['information']['bill_name'], data['result']['information']['bill_street1'], data['result']['information']['bill_city'], data['result']['information']['bill_state'], data['result']['information']['bill_code'], data['result']['information']['bill_country'], data['result']['information']['ship_name'], data['result']['information']['ship_street1'], data['result']['information']['ship_city'], data['result']['information']['ship_state'], data['result']['information']['ship_code'], data['result']['information']['ship_country'], false);
                this.reason_win = data['result']['reason_win'];
                this.reason_lose = data['result']['reason_lose'];
                this.lead_source = data['result']['lead_source'];
                this.attachment = data['result']['attachment'];
                this.attachmentPO = data['result']['attachmentPO'];
                this.updateOpportunity = new _opportunity__WEBPACK_IMPORTED_MODULE_7__["UpdateOpportunity"](data['result']['data']['id_user'], data['result']['data']['id_opportunity_business'], data['result']['data']['id_lead_source'], data['result']['data']['name'], data['result']['data']['amount'], data['result']['data']['closed_date'], data['result']['data']['start_date'], data['result']['data']['id_contact'], data['result']['data']['expecting_closing_date'], data['result']['data']['budget'], data['result']['data']['comparison_with_competitor'], data['result']['data']['competitor'], data['result']['data']['critical_point'], data['result']['data']['our_proposal'], data['result']['data']['po'], data['result']['data']['notes1'], data['result']['data']['notes2'], data['result']['data']['notes3'], data['result']['data']['id_quote']);
                this.model = new _opportunity__WEBPACK_IMPORTED_MODULE_7__["OpportunityUpdate"](data['result']['data']['name'], data['result']['data']['id_lead_source'], data['result']['data']['id_user'], data['result']['data']['id_contact']);
            }
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    onClosed(i) {
        if (i == 'win') {
            var data = this.modelClosedWin;
        }
        else if (i == 'lose') {
            var data = this.modelClosedLose;
        }
        this.http.post(this.configService.base_url() + 'opportunity/updateClosed', {
            "id": this.id,
            "data": data,
            "status": i
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            if (i == 'win') {
                this.router.navigate(['/deal/', this.id]);
            }
            else if (i == 'lose') {
                this.router.navigate(['/lose/', this.id]);
            }
            this.finish = true;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    lookingContact(e) {
        console.log(e.target.value);
        console.log(this.contact);
        var objIndex = this.contact.findIndex((obj => obj.id == e.target.value));
        this.quoteModel['phone'] = this.contact[objIndex]['phone'];
        this.quoteModel['email'] = this.contact[objIndex]['email'];
    }
    fn_editable() {
    }
    updateStep(id, closed = 0) {
        console.log(id);
        console.log(closed);
        console.log(this.stage);
        console.log(this.id_stage);
        if (closed < 999) {
            var objIndex = this.stage.findIndex((obj => obj.id == id));
            this.stage[objIndex]['current'] = false;
            var id_next = this.stage[objIndex]['id_next'];
            var objIndex2 = this.stage.findIndex((obj => obj.id == id_next));
            this.stage[objIndex2]['current'] = "current";
        }
        this.loading = true;
        this.http.post(this.configService.base_url() + 'opportunity/updateStep', {
            "id_opportunity": this.id,
            "id_stage": this.id_stage,
            "closed": closed,
            "data": this.updateOpportunity,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loading = false;
            console.log(data);
            if (closed == 1000) {
                this.router.navigate(['deal/', this.id]);
            }
            else if (closed == 3000) {
                this.router.navigate(['lose/', this.id]);
            }
            else {
                this.id_stage = id_next;
                this.stage[objIndex]['done'] = "done";
            }
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    closeOpportunity(id) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'opportunity/closeOpportunity', {
            "id_opportunity": this.id,
            "id_stage": this.id_stage,
            "id_closed_reason": this.id_closed_reason,
            "data": this.updateOpportunity,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loading = false;
            console.log(data);
            if (data['result']['id_stage'] == 1000) {
                this.router.navigate(['deal/', this.id]);
            }
            else if (data['result']['id_stage'] == 3000) {
                this.router.navigate(['lost/', this.id]);
            }
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    nextStage(x) {
        console.log(x);
        this.stageCurrent = x.name;
        this.id_stageNext = x.id;
        if (this.items["id_stage"] == x.id) {
            this.showUpdateStage = false;
        }
        else if (this.items["id_stage"] != x.id) {
            this.showUpdateStage = true;
        }
        this.stageNotes = x.notes;
        this.id_stage = x.id;
        this.stage.map(a => a.current = false);
        var objIndex = this.stage.findIndex((obj => obj.id == x.id));
        this.stage[objIndex]['current'] = "current";
    }
    fn_delete_prorduct(data) {
        var objIndex = this.product.findIndex((obj => obj.id == data.id));
        this.product.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'opportunity/fn_delete_prorduct', {
            "id_opportunity": this.id,
            "data": data,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content);
    }
    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_closed(id_stage) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'opportunity/fn_closed', {
            "id_opportunity": this.id,
            "id_stage": id_stage,
            "data": this.updateOpportunity,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loading = false;
            console.log(data);
            this.router.navigate(['deal/', this.id]);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_delete() {
        if (confirm('Delete this Opportunity ?')) {
            this.http.post(this.configService.base_url() + 'opportunity/fn_deleteSolo', {
                "id": this.id
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                this.router.navigate(['/opportunity/']);
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    fn_newQuote() {
        console.log(this.quoteModel);
        this.loading = true;
        this.http.post(this.configService.base_url() + 'opportunity/fn_newQuote', {
            "id": this.id,
            "data": this.quoteModel
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.router.navigate(['/quote/', data['result']['id']]);
            this.modalService.dismissAll();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    updateQuiz() {
        this.loadingUpdateQuiz = "Saving...";
        this.http.post(this.configService.base_url() + 'opportunity/update', {
            "id": this.id,
            "data": this.updateOpportunity
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.loadingUpdateQuiz = "";
            console.log(data);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_update() {
        this.http.post(this.configService.base_url() + 'opportunity/update', {
            "id": this.id,
            "data": this.updateOpportunity
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_sales_order() {
        var objIndex = this.quotes.findIndex((obj => obj.id == this.modelClosedWin.id_quote));
        console.log(this.quotes[objIndex]);
        this.modelClosedWin['sales_order'] = this.quotes[objIndex]['quotes_number'];
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload(target) {
        const fd = new FormData();
        fd.append('files', this.selectedFile, this.selectedFile.name);
        fd.append('token', this.configService.token());
        fd.append('module', target);
        fd.append('id', this.id);
        console.log(fd, this.configService.token());
        this.http.post(this.configService.base_url() + 'upload/attachment', fd, {
        //    reportProgress: true,
        //  observe: 'events'
        })
            .subscribe(
        /*  event => {
            if(event.type === HttpEventType.UploadProgress){
              console.log(event ); // handle event here
            }else if( event.type === HttpEventType.Response ){
              console.log(event ); // handle event here
            }
           
          },*/
        data => {
            // console.log(data); 
            this.attachment = data['result']['attachment'];
            this.httpGet();
            this.selectedFile = "";
        });
    }
    fn_attach_delete(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'pricelist/fn_attach_delete', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
            this.attachment.splice(objIndex, 1);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
OpportunityDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
OpportunityDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opportunity-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./opportunity-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-detail/opportunity-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./opportunity-detail.component.css */ "./src/app/opportunity/opportunity-detail/opportunity-detail.component.css")).default]
    })
], OpportunityDetailComponent);



/***/ }),

/***/ "./src/app/opportunity/opportunity-edit/opportunity-edit.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/opportunity/opportunity-edit/opportunity-edit.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/opportunity/opportunity-edit/opportunity-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/opportunity/opportunity-edit/opportunity-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: OpportunityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityEditComponent", function() { return OpportunityEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _opportunity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../opportunity */ "./src/app/opportunity/opportunity.ts");






let OpportunityEditComponent = class OpportunityEditComponent {
    constructor(http, router, activatedRoute, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.company = [];
        this.lead_source = [];
        this.contact = [];
        this.user = [];
        this.items = [];
        this.loading = true;
        this.newContact = false;
        this.selectedCompany = [];
        this.model = [];
        this.loadingSelected = false;
        this.selected = [];
        this.submit = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'opportunity/edit/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            this.lead_source = data['result']['lead_source'];
            this.contact = data['result']['contact'];
            this.user = data['result']['user'];
            this.model = new _opportunity__WEBPACK_IMPORTED_MODULE_5__["OpportunityUpdate"](data['result']['data']['name'], data['result']['data']['id_lead_source'], data['result']['data']['id_user'], data['result']['data']['id_contact']);
            console.log(data);
            console.log(this.model);
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    onSubmit() {
        this.submit = true;
        console.log(this.model);
        this.http.post(this.configService.base_url() + 'opportunity/update', {
            "id": this.id,
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.submit = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
OpportunityEditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
OpportunityEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opportunity-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./opportunity-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-edit/opportunity-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./opportunity-edit.component.css */ "./src/app/opportunity/opportunity-edit/opportunity-edit.component.css")).default]
    })
], OpportunityEditComponent);



/***/ }),

/***/ "./src/app/opportunity/opportunity-new/opportunity-new.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/opportunity/opportunity-new/opportunity-new.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/opportunity/opportunity-new/opportunity-new.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/opportunity/opportunity-new/opportunity-new.component.ts ***!
  \**************************************************************************/
/*! exports provided: OpportunityNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityNewComponent", function() { return OpportunityNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _opportunity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../opportunity */ "./src/app/opportunity/opportunity.ts");






let OpportunityNewComponent = class OpportunityNewComponent {
    constructor(http, router, activatedRoute, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.uploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = true;
        this.module = this.activatedRoute.snapshot.url[0].path;
        this.company = [];
        this.contact = [];
        this.user = [];
        this.lead_source = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.model = new _opportunity__WEBPACK_IMPORTED_MODULE_5__["NewOpportunity"]('', '', '', '', '', [], '', '');
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        var url = this.configService.base_url() + 'opportunity/widget_new_opportunity/' + this.module + '/' + this.id;
        console.log(url);
        this.http.get(url, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.stage = data['result']['stage'];
            this.company = data['result']['company'];
            this.contact = data['result']['contact'];
            this.user = data['result']['user'];
            this.lead_source = data['result']['lead_source'];
            this.model = new _opportunity__WEBPACK_IMPORTED_MODULE_5__["NewOpportunity"](data['result']['data']['id_user'], '', '', data['result']['data']['id_contact'], data['result']['data']['id_company'], [], '', '');
            console.log(data);
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_newOpportunity() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'opportunity/fn_newOpportunity', {
            "id": this.id,
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            if (this.module == 'opportunity') {
                this.uploaded.emit(data['result']['id']);
            }
            else {
                this.uploaded.emit('fn_newOpportunity');
            }
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    updateContact() {
        if (this.module == 'opportunity') {
            console.log(this.model['id_company']);
            this.loading = true;
            this.http.get(this.configService.base_url() + 'opportunity/contact/' + this.model['id_company'], {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.contact = data['result']['contact'];
                this.loading = false;
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    close() {
        this.uploaded.emit();
    }
};
OpportunityNewComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OpportunityNewComponent.prototype, "uploaded", void 0);
OpportunityNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opportunity-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./opportunity-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity-new/opportunity-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./opportunity-new.component.css */ "./src/app/opportunity/opportunity-new/opportunity-new.component.css")).default]
    })
], OpportunityNewComponent);



/***/ }),

/***/ "./src/app/opportunity/opportunity.component.css":
/*!*******************************************************!*\
  !*** ./src/app/opportunity/opportunity.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/opportunity/opportunity.component.ts":
/*!******************************************************!*\
  !*** ./src/app/opportunity/opportunity.component.ts ***!
  \******************************************************/
/*! exports provided: OpportunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityComponent", function() { return OpportunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let OpportunityComponent = class OpportunityComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.itemsSelected = [];
        this.loading = true;
        this.loadingSelected = true;
        this.selected = [];
        this.newContact = false;
        this.selectModal = "0";
        this.id_user = "1";
        this.dbCompany = false;
        this.selectedCompany = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    requestEmit(event) {
        if (event) {
            this.router.navigate(['opportunity', event]);
        }
        this.modalService.dismissAll();
    }
    httpGet() {
        this.loading = false;
        var formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "opportunity/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[1, "asc"]],
            columnDefs: [
                {
                    "targets": 1,
                    "render": function (data, type, row, meta) {
                        return '<a href="#/opportunity/' + row[0] + '"><b>' + data + '</b></a>';
                    }
                },
                {
                    "targets": 5,
                    "render": function (data, type, row, meta) {
                        return '<div class="text-right">' + formatter.format(data) + '</div>';
                    },
                }
            ],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value=""> - Show All - </option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
    fn_delete() {
        this.http.post(this.configService.base_url() + 'opportunity/fn_delete', {
            "data": this.itemsSelected
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            //  console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_check(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == true) {
            this.items[this.objIndex]['check'] = false;
        }
        else {
            this.items[this.objIndex]['check'] = true;
        }
        var object = {
            'id': x.id,
            'name': x.name,
            'contact': x.contact,
            'company': x.company,
        };
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (objectSelect == -1) {
            this.itemsSelected.push(object);
        }
        else {
            this.itemsSelected.splice(objectSelect, 1);
        }
        //  console.log(this.itemsSelected);
    }
    fn_removeItemSelected(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == false) {
            this.items[this.objIndex]['check'] = true;
        }
        else {
            this.items[this.objIndex]['check'] = false;
        }
        this.itemsSelected.splice(objectSelect, 1);
    }
};
OpportunityComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
OpportunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opportunity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./opportunity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./opportunity.component.css */ "./src/app/opportunity/opportunity.component.css")).default]
    })
], OpportunityComponent);



/***/ }),

/***/ "./src/app/opportunity/opportunity.ts":
/*!********************************************!*\
  !*** ./src/app/opportunity/opportunity.ts ***!
  \********************************************/
/*! exports provided: Opportunity, OpportunityDetail, OpportunityContact, OpportunityEdit, OpportunityNew, OpportunityUpdate, OpportunityInsert, OpportunityClosedLose, OpportunityClosedWin, NewOpportunity, UpdateOpportunity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opportunity", function() { return Opportunity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityDetail", function() { return OpportunityDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityContact", function() { return OpportunityContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityEdit", function() { return OpportunityEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityNew", function() { return OpportunityNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityUpdate", function() { return OpportunityUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityInsert", function() { return OpportunityInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityClosedLose", function() { return OpportunityClosedLose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityClosedWin", function() { return OpportunityClosedWin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOpportunity", function() { return NewOpportunity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOpportunity", function() { return UpdateOpportunity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Opportunity {
}
class OpportunityDetail {
}
class OpportunityContact {
}
class OpportunityEdit {
}
class OpportunityNew {
}
class OpportunityUpdate {
    constructor(name, id_lead_source, id_user, id_contact) {
        this.name = name;
        this.id_lead_source = id_lead_source;
        this.id_user = id_user;
        this.id_contact = id_contact;
    }
}
class OpportunityInsert {
    constructor(opportunity, id_lead_source, id_user, id_company, id_contact, id_title, first_name, last_name, insertContact) {
        this.opportunity = opportunity;
        this.id_lead_source = id_lead_source;
        this.id_user = id_user;
        this.id_company = id_company;
        this.id_contact = id_contact;
        this.id_title = id_title;
        this.first_name = first_name;
        this.last_name = last_name;
        this.insertContact = insertContact;
    }
}
class OpportunityClosedLose {
    constructor(notes, date, id_user) {
        this.notes = notes;
        this.date = date;
        this.id_user = id_user;
    }
}
class OpportunityClosedWin {
    constructor(notes, date, id_user, id_quote, sales_order, amount) {
        this.notes = notes;
        this.date = date;
        this.id_user = id_user;
        this.id_quote = id_quote;
        this.sales_order = sales_order;
        this.amount = amount;
    }
}
class NewOpportunity {
    constructor(id_user, name, amount, id_contact, id_company, expecting_closing_date, id_stage, id_lead_source) {
        this.id_user = id_user;
        this.name = name;
        this.amount = amount;
        this.id_contact = id_contact;
        this.id_company = id_company;
        this.expecting_closing_date = expecting_closing_date;
        this.id_stage = id_stage;
        this.id_lead_source = id_lead_source;
    }
}
class UpdateOpportunity {
    constructor(id_user, id_opportunity_business, id_lead_source, name, amount, start_date, closed_date, id_contact, expecting_closing_date, budget, 
    //CUSTOME
    comparison_with_competitor, competitor, critical_point, our_proposal, po, notes1, notes2, notes3, id_quote) {
        this.id_user = id_user;
        this.id_opportunity_business = id_opportunity_business;
        this.id_lead_source = id_lead_source;
        this.name = name;
        this.amount = amount;
        this.start_date = start_date;
        this.closed_date = closed_date;
        this.id_contact = id_contact;
        this.expecting_closing_date = expecting_closing_date;
        this.budget = budget;
        this.comparison_with_competitor = comparison_with_competitor;
        this.competitor = competitor;
        this.critical_point = critical_point;
        this.our_proposal = our_proposal;
        this.po = po;
        this.notes1 = notes1;
        this.notes2 = notes2;
        this.notes3 = notes3;
        this.id_quote = id_quote;
    }
}


/***/ }),

/***/ "./src/app/price-list/price-list-catalog/price-list-catalog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/price-list/price-list-catalog/price-list-catalog.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/price-list/price-list-catalog/price-list-catalog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/price-list/price-list-catalog/price-list-catalog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PriceListCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListCatalogComponent", function() { return PriceListCatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _price_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../price-list */ "./src/app/price-list/price-list.ts");







let PriceListCatalogComponent = class PriceListCatalogComponent {
    constructor(http, router, modalService, config, configService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.editable = false;
        this.submit = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
        this.model = new _price_list__WEBPACK_IMPORTED_MODULE_6__["Newcataloglist"](this.id, '', '', '1');
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'pricelist/catalog/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.configService.errorToken(data);
            this.items = data['result']['data'];
            this.pricelist = data['result']['pricelist'];
            this.loading = false;
        });
    }
    onSubmit(value = "") {
        this.submit = true;
        this.http.post(this.configService.base_url() + 'pricelist/insert_catalog', {
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            // console.log(data);
            this.submit = false;
            if (value == 'next') {
                this.model = new _price_list__WEBPACK_IMPORTED_MODULE_6__["Newcataloglist"](this.id, '', '', '1');
                this.httpGet();
            }
            else {
                this.router.navigate(['/priceList/product/', data['result']['id']]);
                this.modalService.dismissAll();
            }
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    modal(content) {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
PriceListCatalogComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PriceListCatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-price-list-catalog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./price-list-catalog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-catalog/price-list-catalog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./price-list-catalog.component.css */ "./src/app/price-list/price-list-catalog/price-list-catalog.component.css")).default]
    })
], PriceListCatalogComponent);



/***/ }),

/***/ "./src/app/price-list/price-list-detail/price-list-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/price-list/price-list-detail/price-list-detail.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/price-list/price-list-detail/price-list-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/price-list/price-list-detail/price-list-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PriceListDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListDetailComponent", function() { return PriceListDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _price_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../price-list */ "./src/app/price-list/price-list.ts");







let PriceListDetailComponent = class PriceListDetailComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.loading = true;
        this.isReadOnly = true;
        this.accessRules = [];
        this.product_location = [];
        this.product_type = [];
        this.priceListUpdate = [];
        this.attachment = [];
        this.selectedFile = null;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.accessRules = this.configService.access_right();
        console.log('accessRules', this.accessRules);
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'pricelist/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            this.product_location = data['result']['product_location'];
            this.product_type = data['result']['product_type'];
            this.attachment = data['result']['attachment'];
            this.priceListUpdate = new _price_list__WEBPACK_IMPORTED_MODULE_6__["PriceListUpdate"](data['result']['data']['name'], data['result']['data']['sku'], data['result']['data']['id_product_type'], data['result']['data']['price'], data['result']['data']['description']);
            console.log(data);
            this.loading = false;
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload() {
        const fd = new FormData();
        fd.append('files', this.selectedFile, this.selectedFile.name);
        fd.append('token', this.configService.token());
        fd.append('id_module', this.id);
        console.log(fd, this.configService.token());
        this.http.post(this.configService.base_url() + 'upload/priceList_attachment', fd, {
        //    reportProgress: true,
        //  observe: 'events'
        })
            .subscribe(
        /*  event => {
            if(event.type === HttpEventType.UploadProgress){
              console.log(event ); // handle event here
            }else if( event.type === HttpEventType.Response ){
              console.log(event ); // handle event here
            }
           
          },*/
        data => {
            // console.log(data); 
            this.attachment = data['result']['attachment'];
            this.httpGet();
        });
    }
    fn_attach_delete(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'pricelist/fn_attach_delete', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
            this.attachment.splice(objIndex, 1);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_update() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'pricelist/update', {
            "id": this.id,
            "data": this.priceListUpdate
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            this.loading = false;
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_delete() {
        if (confirm('Delete this Product ?')) {
            this.http.post(this.configService.base_url() + 'pricelist/fn_deleteSolo', {
                "id": this.id
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.router.navigate(['/priceList/']);
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    fn_updateLocation(x) {
        console.log(x);
        this.http.post(this.configService.base_url() + 'pricelist/fn_updateLocation', {
            "id": x.id,
            "location": x.location,
            "qty": x.qty,
            "location_code": x.location_code,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
        }, error => {
            this.loading = false;
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_addProduct_location() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'pricelist/fn_addProduct_location', {
            "id": this.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.httpGet();
            //this.product_location = data['result']['product_location'];
        }, error => {
            this.loading = false;
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_deleteProduct_location(x) {
        var objIndex = this.product_location.findIndex((obj => obj.id == x.id));
        this.product_location.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'pricelist/fn_deleteProduct_location', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
        }, error => {
            this.loading = false;
            console.log(error);
            console.log(error.error.text);
        });
    }
};
PriceListDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
PriceListDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-price-list-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./price-list-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-detail/price-list-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./price-list-detail.component.css */ "./src/app/price-list/price-list-detail/price-list-detail.component.css")).default]
    })
], PriceListDetailComponent);



/***/ }),

/***/ "./src/app/price-list/price-list-modal/price-list-modal.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/price-list/price-list-modal/price-list-modal.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bodyarea{\r\n    overflow-y: auto;\r\n    height: 270px;;\r\n}\r\n\r\n.addlist{\r\n    display: inline-block;\r\n}");

/***/ }),

/***/ "./src/app/price-list/price-list-modal/price-list-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/price-list/price-list-modal/price-list-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: PriceListModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListModalComponent", function() { return PriceListModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");





let PriceListModalComponent = class PriceListModalComponent {
    constructor(http, router, activatedRoute, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.uploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.catalog = [];
        this.pricelist = [];
        this.items = [];
        this.loading_productlist = false;
        this.myContact = [];
        this.loading = true;
        this.isReadOnly = true;
        this.step = 1;
        this.module = this.activatedRoute.snapshot.url[0].path;
        this.total = 0;
        this.addProduct = [];
        this.i = 1;
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.url[0].path);
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'pricelist/modal/' + this.module + '/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.items = data['result']['data'];
            this.pricelist = data['result']['data'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    addList(x) {
        var temp = {
            id: this.i++,
            id_product: x.id,
            name: x.name,
            price: x.price
        };
        this.addProduct.push(temp); // from top as bottom
        this.total = this.addProduct.length;
        console.log(this.addProduct);
    }
    removeList(x) {
        console.log(x);
        var objIndex = this.addProduct.findIndex((obj => obj.id == x.id));
        this.addProduct.splice(objIndex, 1);
        this.total = this.addProduct.length;
    }
    save() {
        console.log(this.id);
        this.loading = true;
        this.http.post(this.configService.base_url() + 'pricelist/insermodule/', {
            "id": this.id,
            "module": this.module,
            "data": this.addProduct,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.uploaded.emit('complete');
            //  location.reload();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
PriceListModalComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PriceListModalComponent.prototype, "uploaded", void 0);
PriceListModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-price-list-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./price-list-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-modal/price-list-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./price-list-modal.component.css */ "./src/app/price-list/price-list-modal/price-list-modal.component.css")).default]
    })
], PriceListModalComponent);



/***/ }),

/***/ "./src/app/price-list/price-list-product/price-list-product.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/price-list/price-list-product/price-list-product.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/price-list/price-list-product/price-list-product.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/price-list/price-list-product/price-list-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PriceListProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListProductComponent", function() { return PriceListProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _price_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../price-list */ "./src/app/price-list/price-list.ts");







let PriceListProductComponent = class PriceListProductComponent {
    constructor(http, router, modalService, config, configService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.editable = false;
        this.selectProduct = [];
        this.hideDesc = true;
        this.addPricelist = {
            id_product: "",
            price: "",
            description: "",
        };
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'pricelist/productlist/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.configService.errorToken(data);
            this.id_pricelist = data['result']['id_pricelist'];
            this.model = new _price_list__WEBPACK_IMPORTED_MODULE_6__["Newproductlist"](this.id, 1, 1, '1', '', '');
            this.items = data['result']['data'];
            this.catalog = data['result']['catalog'];
            this.selectProduct = data['result']['selectProduct'];
            this.pricelist = data['result']['pricelist'];
            this.loading = false;
        });
    }
    insertProductPrice() {
        console.log(this.addPricelist);
        if (this.addPricelist['id_product'] && this.addPricelist['price']) {
            this.http.post(this.configService.base_url() + 'pricelist/insertProductPrice/', {
                "id": this.id,
                "data": this.addPricelist
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.httpGet();
                this.note = "";
                this.hideDesc = true;
                this.addPricelist = {
                    price: "",
                    description: "",
                };
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
        else {
            this.note = "Please add product and price first !";
        }
    }
    fn_edit() {
        if (this.editable == false) {
            this.editable = true;
        }
        else {
            this.editable = false;
        }
    }
    fnDelete(x) {
        var objIndex = this.items.findIndex((obj => obj.id == x.id));
        this.items.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'pricelist/deleteProductPrice/', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    update(x) {
        console.log(x);
        var objIndex = this.items.findIndex((obj => obj.id == x.id));
        this.items[objIndex]['product'] = 'Saving...!';
        if (x.id) {
            this.http.post(this.configService.base_url() + 'pricelist/updateProductPrice/', {
                "id": x.id,
                "data": x
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.items[objIndex]['product'] = data['result']['update']['product'];
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
        else {
            this.note = "Please add product and price first !";
        }
    }
};
PriceListProductComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PriceListProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-price-list-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./price-list-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list-product/price-list-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./price-list-product.component.css */ "./src/app/price-list/price-list-product/price-list-product.component.css")).default]
    })
], PriceListProductComponent);



/***/ }),

/***/ "./src/app/price-list/price-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/price-list/price-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/price-list/price-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/price-list/price-list.component.ts ***!
  \****************************************************/
/*! exports provided: PriceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListComponent", function() { return PriceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _price_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./price-list */ "./src/app/price-list/price-list.ts");







let PriceListComponent = class PriceListComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.loading = true;
        this.objIndex = [];
        this.itemsSelected = [];
        this.submit = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.model = new _price_list__WEBPACK_IMPORTED_MODULE_6__["Newpricelist"]('', "10", '', '', '');
        this.itemsSelected = [];
        this.httpGet();
    }
    httpGet() {
        this.loading = false;
        var formatter = new Intl.NumberFormat('id-ID');
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "pricelist/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[2, "asc"]],
            columnDefs: [
                {
                    "targets": 1,
                    "render": function (data, type, row, meta) {
                        return '<a href="#/priceList/' + row[0] + '"><b>' + data + '</b></a>';
                    }
                },
                {
                    "targets": 3,
                    "bSortable": false,
                },
                {
                    "targets": 4,
                    "render": function (data, type, row, meta) {
                        return '<div class="text-right">' + formatter.format(data) + '</div>';
                    },
                }
            ],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value="">Show all</option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
    onSubmit(value = "") {
        this.submit = true;
        this.http.post(this.configService.base_url() + 'pricelist/insert_pricelist', {
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            //  console.log(value);
            this.submit = false;
            // if (value == 'next') {
            //   this.model = new Newpricelist('',"10",'','','');
            //   this.httpGet(); 
            // }
            // else {
            this.router.navigate(['/priceList/', data['result']['id']]);
            this.modalService.dismissAll();
            //}
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_check(x) {
        //  console.log(x);
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == true) {
            this.items[this.objIndex]['check'] = false;
        }
        else {
            this.items[this.objIndex]['check'] = true;
        }
        var object = {
            'id': x.id,
            'name': x.name,
        };
        //  console.log(object);
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (objectSelect == -1) {
            this.itemsSelected.push(object);
        }
        else {
            this.itemsSelected.splice(objectSelect, 1);
        }
        // console.log(this.itemsSelected);
    }
    fn_removeItemSelected(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == false) {
            this.items[this.objIndex]['check'] = true;
        }
        else {
            this.items[this.objIndex]['check'] = false;
        }
        this.itemsSelected.splice(objectSelect, 1);
    }
    fn_delete() {
        this.http.post(this.configService.base_url() + 'product/fn_delete', {
            "data": this.itemsSelected
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            // console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
        }, error => {
            // console.log(error);
            // console.log(error.error.text);
        });
    }
};
PriceListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
PriceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-price-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./price-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/price-list/price-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./price-list.component.css */ "./src/app/price-list/price-list.component.css")).default]
    })
], PriceListComponent);



/***/ }),

/***/ "./src/app/price-list/price-list.ts":
/*!******************************************!*\
  !*** ./src/app/price-list/price-list.ts ***!
  \******************************************/
/*! exports provided: PriceList, PriceListUpdate, Newpricelist, Newcataloglist, Newproductlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceList", function() { return PriceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListUpdate", function() { return PriceListUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newpricelist", function() { return Newpricelist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newcataloglist", function() { return Newcataloglist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newproductlist", function() { return Newproductlist; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PriceList {
}
class PriceListUpdate {
    constructor(name, sku, id_product_type, price, description) {
        this.name = name;
        this.sku = sku;
        this.id_product_type = id_product_type;
        this.price = price;
        this.description = description;
    }
}
class Newpricelist {
    constructor(name, id_product_type, price, description, status) {
        this.name = name;
        this.id_product_type = id_product_type;
        this.price = price;
        this.description = description;
        this.status = status;
    }
}
class Newcataloglist {
    constructor(id_price_list, name, description, status) {
        this.id_price_list = id_price_list;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}
class Newproductlist {
    constructor(id_price_list, id_price_list_catalog, id_product, name, description, status) {
        this.id_price_list = id_price_list;
        this.id_price_list_catalog = id_price_list_catalog;
        this.id_product = id_product;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userItems li{\r\n    position: relative;\r\n}\r\n\r\n.userItems .itemInfoHeader{ \r\n    font-family: 'Source Sans Pro', sans-serif !important;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n}\r\n\r\nol {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    margin-left: 24px;\r\n}\r\n\r\n.name{\r\n    \r\n    font-size: 13px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.userItems li .itemInfo{\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n    min-width: 600px; \r\n    font-size: 13px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.itemInfo .itemInfoName{      left: 27px;\r\n    position: absolute; }\r\n\r\n.itemInfo span{   min-width: 100px;   display: inline-block;}\r\n\r\n.itemInfo .w200{  min-width: 150px; }\r\n\r\n.itemInfo .w100{  min-width: 100px; }");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: EditUser, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUser", function() { return EditUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../user/user */ "./src/app/user/user.ts");







class EditUser {
    constructor(first_name, last_name, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
    }
}
let ProfileComponent = class ProfileComponent {
    constructor(http, activatedRoute, router, configService, modalService, config) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.configService = configService;
        this.modalService = modalService;
        this.itemsSelected = [];
        this.loading = true;
        this.model = [];
        this.items = [];
        this.data = [];
        this.target = [];
        this.list = [];
        this.user_access = [];
        this.user_group = [];
        this.user_target = [];
        this.newTargetAmount = new _user_user__WEBPACK_IMPORTED_MODULE_6__["NewTargetAmount"]('', '0', '0', '0', '0');
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'profile/', {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.data = data['result']['data'];
            this.items = data['result']['list'];
            this.target = data['result']['target'];
            this.totalTeamTarget = data['result']['totalTeamTarget'];
            this.model = new EditUser(data['result']['data']['first_name'], data['result']['data']['last_name'], "");
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_update() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'profile/fn_update', {
            "id": this.id,
            "data": this.model,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fnOpen(id_user) {
        this.id_user = id_user;
        this.user_target = [];
        this.loading = true;
        this.http.get(this.configService.base_url() + 'profile/user_target/' + id_user, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.user_name = data['result']['user_name'];
            this.user_target = data['result']['user_target'];
            this.modalService.open(this.content, { size: 'lg' });
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_insertTargetAmount() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'profile/fn_insertTargetAmount', {
            "id": this.id_user,
            "data": this.newTargetAmount,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_targetUpdate() {
        console.log(this.id_user, this.user_target);
        this.loading = true;
        this.http.post(this.configService.base_url() + 'profile/fn_targetUpdate', {
            "id": this.id_user,
            "user_target": this.user_target,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_tergetDelete(id) {
        var objIndex = this.user_target.findIndex((obj => obj.id == id));
        this.user_target.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'user/fn_deleteTarget', {
            "id": id
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true })
], ProfileComponent.prototype, "content", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/quote/quote-detail/quote-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/quote/quote-detail/quote-detail.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description{\r\n    line-height: 130%;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .form-control{\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n  }\r\n\r\n  .list-1{\r\n    list-style: none;\r\n    padding: 5px 0px;\r\n    margin: 0px;;\r\n\r\n  }\r\n\r\n  .list-1 li{ \r\n    \r\n    margin: 0px;;\r\n    line-height: 110%;\r\n\r\n  }\r\n\r\n  .history{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n  .history  li{\r\n  list-style: none;\r\n}\r\n\r\n  .clearfix:after {\r\n  clear: both;\r\n  content: \"\";\r\n  display: block;\r\n  height: 0;\r\n}\r\n\r\n  .pull-right {\r\nfloat: right;\r\n}\r\n\r\n  /* Breadcrups CSS */\r\n\r\n  .arrow-steps a{\r\n  color: #333;\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  font-size: 12px;\r\n  letter-spacing: 0.5px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n\r\n  .arrow-steps  .current a{\r\n  color: #fff;\r\n}\r\n\r\n  .arrow-steps .step {\r\nfont-size: 14px;\r\ntext-align: center;\r\ncolor: #666;\r\ncursor: default;\r\nmargin: 0 3px;\r\npadding: 8px 10px 7px 30px;\r\n/*min-width: 19%;*/\r\nfloat: left;\r\nposition: relative;\r\nbackground-color: #d9e3f7;\r\n-webkit-user-select: none;\r\n-moz-user-select: none;\r\n-ms-user-select: none;\r\nuser-select: none; \r\n-webkit-transition: background-color 0.2s ease; \r\ntransition: background-color 0.2s ease;\r\ncursor: pointer;\r\n}\r\n\r\n  .arrow-steps .step:after,\r\n.arrow-steps .step:before {\r\ncontent: \" \";\r\nposition: absolute;\r\ntop: 0;\r\nright: -17px;\r\nwidth: 0;\r\nheight: 0;\r\nborder-top: 19px solid transparent;\r\nborder-bottom: 17px solid transparent;\r\nborder-left: 17px solid #d9e3f7;\t\r\nz-index: 2;\r\n-webkit-transition: border-color 0.2s ease;\r\ntransition: border-color 0.2s ease;\r\n}\r\n\r\n  .arrow-steps .step:before {\r\nright: auto;\r\nleft: 0;\r\nborder-left: 17px solid #fff;\t\r\nz-index: 0;\r\n}\r\n\r\n  .arrow-steps .step:first-child:before {\r\nborder: none;\r\n}\r\n\r\n  .arrow-steps .step:first-child {\r\nborder-top-left-radius: 4px;\r\nborder-bottom-left-radius: 4px;\r\n}\r\n\r\n  .arrow-steps .step span {\r\nposition: relative;\r\n}\r\n\r\n  .arrow-steps .step span:before {\r\n \r\n}\r\n\r\n  .arrow-steps .step.done span:before {\r\nopacity: 1;\r\n-webkit-transition: opacity 0.3s ease 0.5s;\r\ntransition: opacity 0.3s ease 0.5s;\r\n}\r\n\r\n  .arrow-steps .step.done {\r\ncolor: #fff;\r\nbackground-color: #4BCA81; \r\n}\r\n\r\n  .arrow-steps .step.done:after {\r\nborder-left: 17px solid #4BCA81;\t\r\n}\r\n\r\n  .arrow-steps .step.current {\r\ncolor: #fff;\r\nbackground-color: #0070D2;\r\n}\r\n\r\n  .arrow-steps .step.current:after {\r\nborder-left: 17px solid #0070D2;\t\r\n}\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/quote/quote-detail/quote-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/quote/quote-detail/quote-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: QuoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailComponent", function() { return QuoteDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../quote */ "./src/app/quote/quote.ts");







//declare var $: any;
let QuoteDetailComponent = class QuoteDetailComponent {
    constructor(http, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.quote_item = [];
        this.myContact = [];
        this.loading = true;
        this.quoteModel = [];
        this.isReadOnly = true;
        this.pricing = [];
        this.faC = '<i class="far fa-check-square"></i>';
        this.faUC = '<i class="far fa-square"></i>';
        this.quote_status = [];
        this.activity = [];
        this.attachment = [];
        this.contact = [];
        this.user = [];
        this.profile = [];
        this.fileOutput = [];
        //https://github.com/SortableJS/ngx-sortablejs
        this.eventOptions = {
            onUpdate: () => {
                console.log(this.quote_item);
                this.loading = true;
                this.http.post(this.configService.base_url() + 'quote/fn_sortable_item', {
                    "data": this.quote_item
                }, {
                    headers: this.configService.headers()
                }).subscribe(data => {
                    console.log(data);
                    this.loading = false;
                }, error => {
                    console.log(error);
                    console.log(error.error.text);
                });
            },
        };
        this.selectedFile = null;
        this.uploadLoading = false;
        this.test = "";
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.quoteModel = {
            expirationDate: {
                year: 0,
                month: 0,
                day: 0,
            }
        };
        this.items = {
            status: {
                id: "",
                notes: "",
            }
        };
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'quote/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.items = data['result']['data'];
            this.quote_item = data['result']['quote_item'];
            this.pricing = data['result']['pricing'];
            this.loading = false;
            this.profile = data['result']['profile'];
            this.contact = data['result']['contact'];
            this.quote_status = data['result']['quote_status'];
            this.total = data['result']['total'];
            this.activity = data['result']['activity'];
            this.attachment = data['result']['attachment'];
            this.user = data['result']['user'];
            this.fileOutput = data['result']['fileOutput'];
            this.quoteModel = new _quote__WEBPACK_IMPORTED_MODULE_6__["Editquote"](data['result']['data']['name'], data['result']['data']['expired_date'], data['result']['data']['id_quote_status'], data['result']['data']['description'], data['result']['data']['discount'], data['result']['data']['tax'], data['result']['data']['shipping'], data['result']['data']['id_user'], data['result']['data']['email'], data['result']['data']['phone'], data['result']['data']['fax'], data['result']['data']['bill_name'], data['result']['data']['bill_street1'], data['result']['data']['bill_street2'], data['result']['data']['bill_city'], data['result']['data']['bill_state'], data['result']['data']['bill_code'], data['result']['data']['country'], data['result']['data']['ship_name'], data['result']['data']['ship_street1'], data['result']['data']['ship_street2'], data['result']['data']['ship_city'], data['result']['data']['ship_state'], data['result']['data']['ship_code'], data['result']['data']['country'], data['result']['data']['syncing'], data['result']['data']['contact']['id']);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_sync(status) {
        var note;
        if (status == true) {
            note = "Do you want syncing with Opportunity ? ";
        }
        else if (status == false) {
            note = "Do you want disable syncing with Opportunity ? ";
        }
        if (confirm(note)) {
            this.loading = true;
            this.http.post(this.configService.base_url() + 'quote/fn_sync', {
                "id": this.id,
                "status": status
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.loading = false;
                this.items['syncing'] = status;
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    fn_updateQuote() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'quote/fn_updateQuote', {
            "id": this.id,
            "data": this.quoteModel
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.httpGet();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    requestEmit(event) {
        this.httpGet();
        this.modalService.dismissAll();
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_max_discount() {
        if (this.quoteModel['discount'] > this.profile['max_discount']) {
            alert("Your maximum discount is " + this.profile['max_discount'] + " %");
            this.httpGet();
        }
    }
    fn_removeQuoteitem(x) {
        this.loading = true;
        var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
        this.quote_item.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'quote/fn_removeQuoteitem', {
            "id": x.id,
            "id_quote": this.id
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.quote_item = data['result']['quote_item'];
            this.pricing = data['result']['pricing'];
            this.total = data['result']['total'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_updateQuoteitem(x) {
        if (x.discount > this.profile['max_discount']) {
            alert("Your maximum discount is " + this.profile['max_discount'] + " %");
            this.httpGet();
        }
        else {
            this.loading = true;
            this.http.post(this.configService.base_url() + 'quote/fn_updateQuoteitem', {
                "id": this.id,
                "data": x
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.loading = false;
                this.quote_item = data['result']['quote_item'];
                this.pricing = data['result']['pricing'];
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    fn_update_status(id_quote_status) {
        if (id_quote_status != this.items['id_quote_status']) {
            this.loading = true;
            this.http.post(this.configService.base_url() + 'quote/fn_update_status', {
                "id": this.id,
                "id_quote_status": id_quote_status
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.loading = false;
                this.items['id_quote_status'] = id_quote_status;
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload() {
        const fd = new FormData();
        fd.append('files', this.selectedFile, this.selectedFile.name);
        fd.append('token', this.configService.token());
        fd.append('id_module', this.id);
        this.uploadLoading = true;
        console.log(fd, this.configService.token());
        this.http.post(this.configService.base_url() + 'upload/quotes_attachment', fd)
            .subscribe(data => {
            this.uploadLoading = false;
            console.log(data);
            this.attachment = data['result']['attachment'];
            this.selectedFile = "";
        });
    }
    fn_attach_delete(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'quote/fn_attach_delete', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
            this.attachment.splice(objIndex, 1);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    show_description(x) {
        var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
        this.quote_item[objIndex]['hide_description'] = false;
    }
    hide_description(x) {
        var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
        this.quote_item[objIndex]['hide_description'] = true;
    }
    approved(id_quote_status) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'quote/approved', {
            "id": this.id,
            "id_quote_status": id_quote_status,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    generate() {
        this.http.get(this.configService.base_url() + 'output/quote/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
            var url = data['url'];
            window.open(url, '_blank').focus();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    send() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'quote/send', {
            "id": this.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.httpGet();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
QuoteDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
QuoteDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-detail/quote-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote-detail.component.css */ "./src/app/quote/quote-detail/quote-detail.component.css")).default]
    })
], QuoteDetailComponent);



/***/ }),

/***/ "./src/app/quote/quote-print/quote-print.component.css":
/*!*************************************************************!*\
  !*** ./src/app/quote/quote-print/quote-print.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/quote/quote-print/quote-print.component.ts":
/*!************************************************************!*\
  !*** ./src/app/quote/quote-print/quote-print.component.ts ***!
  \************************************************************/
/*! exports provided: QuotePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotePrintComponent", function() { return QuotePrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");





let QuotePrintComponent = class QuotePrintComponent {
    constructor(http, activatedRoute, configService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.items = [];
        this.quote_item = [];
        this.myContact = [];
        this.loading = true;
        this.quoteModel = [];
        this.isReadOnly = true;
        this.pricing = [];
        this.test = "gagagg";
        this.quote_status = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.quoteModel = {
            expirationDate: {
                year: 0,
                month: 0,
                day: 0,
            }
        };
        this.httpGet();
    }
    httpGet() {
        this.http.get(this.configService.base_url() + 'quote/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.items = data['result']['data'];
            this.quote_item = data['result']['quote_item'];
            this.pricing = data['result']['pricing'];
            this.quote_status = data['result']['quote_status'];
            this.total = data['result']['total'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    close() {
        window.close();
    }
    print() {
        window.print();
    }
};
QuotePrintComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
QuotePrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-print',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-print/quote-print.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote-print.component.css */ "./src/app/quote/quote-print/quote-print.component.css")).default]
    })
], QuotePrintComponent);



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");





let QuoteComponent = class QuoteComponent {
    constructor(http, activatedRoute, configService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.loading = true;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = false;
        var formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        var vers;
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "quote/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[1, "asc"]],
            columnDefs: [
                {
                    "targets": 1,
                    "render": function (data, type, row, meta) {
                        vers = row[7] != '0' ? 'ver ' + row[7] : "";
                        return '<a href="#/quote/' + row[0] + '"><b>' + data + ' ' + vers + '</b></a><div>' + row[8] + '</div>';
                    }
                },
                {
                    "targets": 3,
                    "render": function (data, type, row, meta) {
                        return '<div class="text-right">' + formatter.format(data) + '</div>';
                    },
                }
            ],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value="">Show all</option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
};
QuoteComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")).default]
    })
], QuoteComponent);



/***/ }),

/***/ "./src/app/quote/quote.ts":
/*!********************************!*\
  !*** ./src/app/quote/quote.ts ***!
  \********************************/
/*! exports provided: Quote, Newquote, Editquote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newquote", function() { return Newquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editquote", function() { return Editquote; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Quote {
}
class Newquote {
    constructor(name, expirationDate, description, id_user, id_contact, email, phone, fax, bill_name, bill_street1, bill_city, bill_state, bill_code, bill_country, ship_name, ship_street1, ship_city, ship_state, ship_code, ship_country, syncing) {
        this.name = name;
        this.expirationDate = expirationDate;
        this.description = description;
        this.id_user = id_user;
        this.id_contact = id_contact;
        this.email = email;
        this.phone = phone;
        this.fax = fax;
        this.bill_name = bill_name;
        this.bill_street1 = bill_street1;
        this.bill_city = bill_city;
        this.bill_state = bill_state;
        this.bill_code = bill_code;
        this.bill_country = bill_country;
        this.ship_name = ship_name;
        this.ship_street1 = ship_street1;
        this.ship_city = ship_city;
        this.ship_state = ship_state;
        this.ship_code = ship_code;
        this.ship_country = ship_country;
        this.syncing = syncing;
    }
}
class Editquote {
    constructor(name, expirationDate, id_quote_status, description, discount, tax, shipping, id_user, email, phone, fax, bill_name, bill_street1, bill_street2, bill_city, bill_state, bill_code, bill_country, ship_name, ship_street1, ship_street2, ship_city, ship_state, ship_code, ship_country, syncing, id_contact) {
        this.name = name;
        this.expirationDate = expirationDate;
        this.id_quote_status = id_quote_status;
        this.description = description;
        this.discount = discount;
        this.tax = tax;
        this.shipping = shipping;
        this.id_user = id_user;
        this.email = email;
        this.phone = phone;
        this.fax = fax;
        this.bill_name = bill_name;
        this.bill_street1 = bill_street1;
        this.bill_street2 = bill_street2;
        this.bill_city = bill_city;
        this.bill_state = bill_state;
        this.bill_code = bill_code;
        this.bill_country = bill_country;
        this.ship_name = ship_name;
        this.ship_street1 = ship_street1;
        this.ship_street2 = ship_street2;
        this.ship_city = ship_city;
        this.ship_state = ship_state;
        this.ship_code = ship_code;
        this.ship_country = ship_country;
        this.syncing = syncing;
        this.id_contact = id_contact;
    }
}


/***/ }),

/***/ "./src/app/reports/sales-target/sales-target.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/reports/sales-target/sales-target.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userItems li{\r\n    position: relative;\r\n}\r\n\r\n.userItems .itemInfoHeader{ \r\n    font-family: 'Source Sans Pro', sans-serif !important;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n}\r\n\r\nol {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    margin-left: 24px;\r\n}\r\n\r\n.w125{\r\n    width: 150px;\r\n}\r\n\r\n.name{\r\n    \r\n    font-size: 13px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.userItems li .itemInfo{\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n    min-width: 600px; \r\n    font-size: 13px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.itemInfo .itemInfoName{      left: 0px;\r\n    position: absolute; }\r\n\r\n.itemInfo span{   min-width: 100px;   display: inline-block;}\r\n\r\n.itemInfo .w200{  min-width: 200px; }\r\n\r\n.itemInfo .w100{  min-width: 150px; }");

/***/ }),

/***/ "./src/app/reports/sales-target/sales-target.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/reports/sales-target/sales-target.component.ts ***!
  \****************************************************************/
/*! exports provided: SalesTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesTargetComponent", function() { return SalesTargetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let SalesTargetComponent = class SalesTargetComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.loading = true;
        this.id_user = "1";
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        console.log(this.items);
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'report_sales_target', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            this.year = data['result']['year'];
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
};
SalesTargetComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
SalesTargetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-target',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-target.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/sales-target/sales-target.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-target.component.css */ "./src/app/reports/sales-target/sales-target.component.css")).default]
    })
], SalesTargetComponent);



/***/ }),

/***/ "./src/app/sales-order/sales-order-create/sales-order-create.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-create/sales-order-create.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/sales-order/sales-order-create/sales-order-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-create/sales-order-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: SalesOrderCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderCreateComponent", function() { return SalesOrderCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _sales_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../sales-order */ "./src/app/sales-order/sales-order.ts");






let SalesOrderCreateComponent = class SalesOrderCreateComponent {
    constructor(http, router, activatedRoute, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.uploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.model = [];
        this.loading = true;
        this.module = this.activatedRoute.snapshot.url[0].path;
        this.contact = [];
        this.user = [];
        this.company = [];
        this.opportunity = [];
        this.quotes = [];
        this.related = false;
    }
    ngOnInit() {
        if (this.module == 'deal') {
            this.related = true;
        }
        this.id = this.activatedRoute.snapshot.params.id ? this.activatedRoute.snapshot.params.id : "";
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        // var url = this.configService.base_url() + 'create/opportunity/' + this.id;
        var url = this.configService.base_url() + 'sales_order/create/' + this.module + '/' + this.id;
        console.log(url);
        this.http.get(url, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.contact = data['result']['contact'];
            this.quotes = data['result']['quotes'];
            this.user = data['result']['user'];
            this.company = data['result']['company'];
            this.opportunity = data['result']['opportunity'];
            this.model = new _sales_order__WEBPACK_IMPORTED_MODULE_5__["SalesOrderNew"](data['result']['data']['id_quote'], data['result']['data']['id_opportunity'], data['result']['data']['id_company'], data['result']['data']['id_contact'], data['result']['data']['name'], '', '', data['result']['data']['description'], data['result']['data']['discount'], data['result']['data']['tax'], data['result']['data']['shipping'], data['result']['data']['id_user'], data['result']['data']['email'], data['result']['data']['phone'], data['result']['data']['fax'], data['result']['data']['bill']['bill_name'], data['result']['data']['bill']['bill_street1'], data['result']['data']['bill']['bill_street2'], data['result']['data']['bill']['bill_city'], data['result']['data']['bill']['bill_state'], data['result']['data']['bill']['bill_code'], data['result']['data']['bill']['bill_country'], data['result']['data']['ship']['ship_name'], data['result']['data']['ship']['ship_street1'], data['result']['data']['ship']['ship_street2'], data['result']['data']['ship']['ship_city'], data['result']['data']['ship']['ship_state'], data['result']['data']['ship']['ship_code'], data['result']['data']['ship']['ship_country']);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_updateContact() {
        console.log(this.model['id_company']);
        this.loading = true;
        var url = this.configService.base_url() + 'contact/index/' + this.model['id_company'];
        console.log(url);
        this.http.get(url, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.contact = data['result']['data'];
            var objIndex = this.company.findIndex((obj => obj.id == this.model['id_company']));
            console.log(this.company[objIndex]['bill_city']);
            this.model['email'] = this.company[objIndex]['email'];
            this.model['phone'] = this.company[objIndex]['phone'];
            this.model['fax'] = this.company[objIndex]['fax'];
            this.model['bill_name'] = this.company[objIndex]['bill_name'];
            this.model['bill_street1'] = this.company[objIndex]['bill_street1'];
            this.model['bill_street2'] = this.company[objIndex]['bill_street2'];
            this.model['bill_city'] = this.company[objIndex]['bill_city'];
            this.model['bill_state'] = this.company[objIndex]['bill_state'];
            this.model['bill_code'] = this.company[objIndex]['bill_code'];
            this.model['bill_country'] = this.company[objIndex]['bill_country'];
            this.model['ship_name'] = this.company[objIndex]['ship_name'];
            this.model['ship_street1'] = this.company[objIndex]['ship_street1'];
            this.model['ship_street2'] = this.company[objIndex]['ship_street2'];
            this.model['ship_city'] = this.company[objIndex]['ship_city'];
            this.model['ship_state'] = this.company[objIndex]['ship_state'];
            this.model['ship_code'] = this.company[objIndex]['ship_code'];
            this.model['ship_country'] = this.company[objIndex]['ship_country'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_submit() {
        this.loading = true;
        console.log(this.model);
        this.http.post(this.configService.base_url() + 'sales_order/fn_insertSalesOrder', {
            "data": this.model,
            "module": this.module
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.router.navigate(['/salesOrder/', data['result']['id']]);
            this.uploaded.emit();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    close() {
        this.uploaded.emit();
    }
};
SalesOrderCreateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SalesOrderCreateComponent.prototype, "uploaded", void 0);
SalesOrderCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-order-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-order-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-create/sales-order-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-order-create.component.css */ "./src/app/sales-order/sales-order-create/sales-order-create.component.css")).default]
    })
], SalesOrderCreateComponent);



/***/ }),

/***/ "./src/app/sales-order/sales-order-detail/sales-order-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-detail/sales-order-detail.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/sales-order/sales-order-detail/sales-order-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-detail/sales-order-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: SalesOrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderDetailComponent", function() { return SalesOrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _sales_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../sales-order */ "./src/app/sales-order/sales-order.ts");







let SalesOrderDetailComponent = class SalesOrderDetailComponent {
    constructor(http, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.quote_item = [];
        this.myContact = [];
        this.loading = true;
        this.quoteModel = [];
        this.isReadOnly = true;
        this.pricing = [];
        this.faC = '<i class="far fa-check-square"></i>';
        this.faUC = '<i class="far fa-square"></i>';
        this.sales_order_status = [];
        this.activity = [];
        this.attachment = [];
        this.user = [];
        this.contact = [];
        this.sales_order_log = [];
        //https://github.com/SortableJS/ngx-sortablejs
        this.eventOptions = {
            onUpdate: () => {
                console.log(this.quote_item);
                this.loading = true;
                this.http.post(this.configService.base_url() + 'sales_order/fn_sortable_item', {
                    "data": this.quote_item
                }, {
                    headers: this.configService.headers()
                }).subscribe(data => {
                    console.log(data);
                    this.loading = false;
                }, error => {
                    console.log(error);
                    console.log(error.error.text);
                });
            },
        };
        this.selectedFile = null;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.quoteModel = {
            expirationDate: {
                year: 0,
                month: 0,
                day: 0,
            }
        };
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.configService.base_url() + 'sales_order/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.items = data['result']['data'];
            this.quote_item = data['result']['quote_item'];
            this.pricing = data['result']['pricing']['pricing'];
            this.loading = false;
            this.sales_order_status = data['result']['sales_order_status'];
            this.total = data['result']['total'];
            this.activity = data['result']['activity'];
            this.attachment = data['result']['attachment'];
            this.contact = data['result']['contact'];
            this.user = data['result']['user'];
            this.sales_order_log = data['result']['sales_order_log'];
            this.quoteModel = new _sales_order__WEBPACK_IMPORTED_MODULE_6__["EditSalesOrder"](data['result']['data']['name'], data['result']['data']['expired_date'], data['result']['data']['id_quote_status'], data['result']['data']['description'], data['result']['data']['discount'], data['result']['data']['tax'], data['result']['data']['shipping'], data['result']['data']['id_user'], data['result']['data']['email'], data['result']['data']['phone'], data['result']['data']['fax'], data['result']['data']['bill_name'], data['result']['data']['bill_street1'], data['result']['data']['bill_street2'], data['result']['data']['bill_city'], data['result']['data']['bill_state'], data['result']['data']['bill_code'], data['result']['data']['country'], data['result']['data']['ship_name'], data['result']['data']['ship_street1'], data['result']['data']['ship_street2'], data['result']['data']['ship_city'], data['result']['data']['ship_state'], data['result']['data']['ship_code'], data['result']['data']['country'], data['result']['data']['contact']['id']);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_updateSO() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'sales_order/fn_updateSO', {
            "id": this.id,
            "data": this.quoteModel
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.httpGet();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    requestEmit(event) {
        this.httpGet();
        this.modalService.dismissAll();
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_removeQuoteitem(x) {
        this.loading = true;
        var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
        this.quote_item.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'sales_order/fn_removeQuoteitem', {
            "id": x.id,
            "id_quote": this.id
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.quote_item = data['result']['quote_item'];
            this.pricing = data['result']['pricing'];
            this.total = data['result']['total'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_updateQuoteitem(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'sales_order/fn_updateQuoteitem', {
            "id": this.id,
            "data": x
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.quote_item = data['result']['quote_item'];
            this.pricing = data['result']['pricing'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_update_status(id_sales_order_status) {
        if (id_sales_order_status != this.items['id_sales_order_status']) {
            this.loading = true;
            this.http.post(this.configService.base_url() + 'sales_order/fn_update_status', {
                "id": this.id,
                "id_sales_order_status": id_sales_order_status
            }, {
                headers: this.configService.headers()
            }).subscribe(data => {
                console.log(data);
                this.httpGet();
            }, error => {
                console.log(error);
                console.log(error.error.text);
            });
        }
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload() {
        const fd = new FormData();
        fd.append('files', this.selectedFile, this.selectedFile.name);
        fd.append('token', this.configService.token());
        fd.append('id_module', this.id);
        console.log(fd, this.configService.token());
        this.http.post(this.configService.base_url() + 'upload/quotes_attachment', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                console.log(event); // handle event here
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                console.log(event); // handle event here
            }
        }, data => {
            console.log(data);
            this.attachment = data['result']['attachment'];
        });
    }
    fn_attach_delete(x) {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'sales_order/fn_attach_delete', {
            "id": x.id,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
            this.attachment.splice(objIndex, 1);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    show_description(x) {
        var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
        this.quote_item[objIndex]['hide_description'] = false;
    }
    hide_description(x) {
        var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
        this.quote_item[objIndex]['hide_description'] = true;
    }
    print() {
        var url = 'salesOrder/print/' + this.id;
        window.open(url, '_blank');
    }
    uploadERP() {
        alert('this CRM doesn\'t support connection to ERP, Please contact your developer first !');
    }
};
SalesOrderDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
SalesOrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-order-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-order-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-detail/sales-order-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-order-detail.component.css */ "./src/app/sales-order/sales-order-detail/sales-order-detail.component.css")).default]
    })
], SalesOrderDetailComponent);



/***/ }),

/***/ "./src/app/sales-order/sales-order-print/sales-order-print.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-print/sales-order-print.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/sales-order/sales-order-print/sales-order-print.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-print/sales-order-print.component.ts ***!
  \******************************************************************************/
/*! exports provided: SalesOrderPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderPrintComponent", function() { return SalesOrderPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");





let SalesOrderPrintComponent = class SalesOrderPrintComponent {
    constructor(http, activatedRoute, configService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.items = [];
        this.quote_item = [];
        this.myContact = [];
        this.loading = true;
        this.quoteModel = [];
        this.isReadOnly = true;
        this.pricing = [];
        this.test = "gagagg";
        this.quote_status = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.quoteModel = {
            expirationDate: {
                year: 0,
                month: 0,
                day: 0,
            }
        };
        this.httpGet();
    }
    httpGet() {
        this.http.get(this.configService.base_url() + 'sales_order/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.items = data['result']['data'];
            this.quote_item = data['result']['quote_item'];
            this.pricing = data['result']['pricing'];
            this.quote_status = data['result']['quote_status'];
            this.total = data['result']['total'];
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    close() {
        window.close();
    }
    print() {
        window.print();
    }
};
SalesOrderPrintComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
SalesOrderPrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-order-print',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-order-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order-print/sales-order-print.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-order-print.component.css */ "./src/app/sales-order/sales-order-print/sales-order-print.component.css")).default]
    })
], SalesOrderPrintComponent);



/***/ }),

/***/ "./src/app/sales-order/sales-order.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sales-order/sales-order.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/sales-order/sales-order.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sales-order/sales-order.component.ts ***!
  \******************************************************/
/*! exports provided: SalesOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderComponent", function() { return SalesOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");






let SalesOrderComponent = class SalesOrderComponent {
    constructor(http, router, activatedRoute, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.configService = configService;
        this.loading = true;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    requestEmit(event) {
        this.modalService.dismissAll();
    }
    httpGet() {
        this.loading = false;
        var formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        $('#dtable').DataTable({
            //  stateSave: true,
            ajax: {
                url: this.configService.base_url() + "sales_order/index/",
                type: 'GET',
                headers: {
                    'Key': this.configService.key(),
                    'Token': this.configService.token(),
                    'Content-Type': 'application/json'
                },
            },
            aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
            lengthMenu: [50, 100, 200],
            order: [[1, "asc"]],
            columnDefs: [
                {
                    "targets": 1,
                    "render": function (data, type, row, meta) {
                        return '<a href="#/salesOrder/' + row[0] + '"><b>' + data + '</b></a>';
                    }
                },
                {
                    "targets": 4,
                    "render": function (data, type, row, meta) {
                        return '<div class="text-right">' + formatter.format(data) + '</div>';
                    },
                }
            ],
            initComplete: function () {
                this.api().columns('.select-filter').every(function () {
                    var column = this;
                    var select = $('<select><option value="">Show all</option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            }
        });
    }
    open(content) {
        this.modalService.open(content);
    }
};
SalesOrderComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
SalesOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-order/sales-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-order.component.css */ "./src/app/sales-order/sales-order.component.css")).default]
    })
], SalesOrderComponent);



/***/ }),

/***/ "./src/app/sales-order/sales-order.ts":
/*!********************************************!*\
  !*** ./src/app/sales-order/sales-order.ts ***!
  \********************************************/
/*! exports provided: SalesOrder, SalesOrderNew, EditSalesOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrder", function() { return SalesOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderNew", function() { return SalesOrderNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSalesOrder", function() { return EditSalesOrder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SalesOrder {
}
class SalesOrderNew {
    constructor(id_quote, id_opportunity, id_company, id_contact, name, expirationDate, status, description, discount, tax, shipping, id_user, email, phone, fax, bill_name, bill_street1, bill_street2, bill_city, bill_state, bill_code, bill_country, ship_name, ship_street1, ship_street2, ship_city, ship_state, ship_code, ship_country) {
        this.id_quote = id_quote;
        this.id_opportunity = id_opportunity;
        this.id_company = id_company;
        this.id_contact = id_contact;
        this.name = name;
        this.expirationDate = expirationDate;
        this.status = status;
        this.description = description;
        this.discount = discount;
        this.tax = tax;
        this.shipping = shipping;
        this.id_user = id_user;
        this.email = email;
        this.phone = phone;
        this.fax = fax;
        this.bill_name = bill_name;
        this.bill_street1 = bill_street1;
        this.bill_street2 = bill_street2;
        this.bill_city = bill_city;
        this.bill_state = bill_state;
        this.bill_code = bill_code;
        this.bill_country = bill_country;
        this.ship_name = ship_name;
        this.ship_street1 = ship_street1;
        this.ship_street2 = ship_street2;
        this.ship_city = ship_city;
        this.ship_state = ship_state;
        this.ship_code = ship_code;
        this.ship_country = ship_country;
    }
}
class EditSalesOrder {
    constructor(name, expirationDate, id_quote_status, description, discount, tax, shipping, id_user, email, phone, fax, bill_name, bill_street1, bill_street2, bill_city, bill_state, bill_code, bill_country, ship_name, ship_street1, ship_street2, ship_city, ship_state, ship_code, ship_country, id_contact) {
        this.name = name;
        this.expirationDate = expirationDate;
        this.id_quote_status = id_quote_status;
        this.description = description;
        this.discount = discount;
        this.tax = tax;
        this.shipping = shipping;
        this.id_user = id_user;
        this.email = email;
        this.phone = phone;
        this.fax = fax;
        this.bill_name = bill_name;
        this.bill_street1 = bill_street1;
        this.bill_street2 = bill_street2;
        this.bill_city = bill_city;
        this.bill_state = bill_state;
        this.bill_code = bill_code;
        this.bill_country = bill_country;
        this.ship_name = ship_name;
        this.ship_street1 = ship_street1;
        this.ship_street2 = ship_street2;
        this.ship_city = ship_city;
        this.ship_state = ship_state;
        this.ship_code = ship_code;
        this.ship_country = ship_country;
        this.id_contact = id_contact;
    }
}


/***/ }),

/***/ "./src/app/service/config.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




let ConfigService = class ConfigService {
    constructor(http) {
        this.http = http;
        this.varKey = "mXTSxrEKSErYnZb33LyBus5RpVtGNfcgEBqxp5Unk5azj4ZgdWfhkfVDKJ3KSLFG7DtecSehXe7Q67NGFWGehU3ANexas3ZbrkfU";
        this.varToken = "";
        this.varHeaders = [];
        this.varData = [];
        this.varToken = localStorage.getItem("tokenCrmCoId");
        if (this.varToken) {
            try {
                const token = this.parseJwt(this.varToken);
                console.log("varData:", token);
                this.varData = token;
                // optional: cek token sudah expired atau belum
                if (this.varData.exp && Date.now() / 1000 > this.varData.exp) {
                    throw new Error("Token expired");
                }
            }
            catch (e) {
                console.error("Invalid or expired token, redirecting to login...", e);
                // localStorage.removeItem('cmr3ng8Token');
                // window.location.href = environment.login;
            }
        }
        else {
            // Belum login atau session expired
            console.log("Belum login atau session expired");
            // window.location.href = environment.login;
        }
    }
    parseJwt(token) {
        if (!token) {
            return null;
        }
        const parts = token.split(".");
        if (parts.length !== 3) {
            throw new Error("Format token tidak valid");
        }
        const payload = parts[1];
        // base64url -> base64 standar
        const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
        // padding kalau perlu
        const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
        const decoded = atob(padded);
        return JSON.parse(decoded);
    }
    // UNTUK NAVIGATOR & ACTIVE GUARD
    access_rules(module) {
        console.log(this.varData);
        return this.varData["data"]["access_rules"]['result']['access_rules'][module]["access"];
    }
    username() {
        return this.varData["data"]["access_rules"]['result']["name"];
    }
    // UNTUK ACTION BUTTON
    access_right() {
        return this.varData["data"]["access_rules"]['result']['access_rules'];
    }
    base_url() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api;
    }
    headers() {
        return (this.varHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "Token": this.varToken,
        }));
    }
    key() {
        return this.varKey;
    }
    token() {
        return this.varToken;
    }
    id_user() {
        return this.varToken;
    }
    login() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].login;
    }
    errorToken(data) {
        if (data["error"] == 400) {
            //  window.location.href = "login";
        }
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ConfigService);



/***/ }),

/***/ "./src/app/service/errorhandle.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/errorhandle.service.ts ***!
  \************************************************/
/*! exports provided: ErrorhandleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorhandleService", function() { return ErrorhandleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorhandleService = class ErrorhandleService {
    constructor() { }
    log(e) {
        console.log(e);
    }
};
ErrorhandleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorhandleService);



/***/ }),

/***/ "./src/app/user/user-detail/user-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/user/user-detail/user-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../user */ "./src/app/user/user.ts");






let UserDetailComponent = class UserDetailComponent {
    constructor(http, activatedRoute, router, configService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.configService = configService;
        this.itemsSelected = [];
        this.loading = true;
        this.model = [];
        this.newTargetAmount = new _user__WEBPACK_IMPORTED_MODULE_5__["NewTargetAmount"]('', '0', '0', '0', '0');
        this.user_access = [];
        this.user_group = [];
        this.user_target = [];
        this.parent = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.itemsSelected = [];
        this.http.get(this.configService.base_url() + 'user/detail/' + this.id, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.model = new _user__WEBPACK_IMPORTED_MODULE_5__["EditUser"](data['result']['data']['id_parent'], data['result']['data']['first_name'], data['result']['data']['last_name'], data['result']['data']['id_user_access'], data['result']['data']['id_user_group'], data['result']['data']['code'], data['result']['data']['max_discount'], data['result']['data']['email'], data['result']['data']['status'], "", data['result']['data']['target_amount_year']);
            this.parent = data['result']['parent'];
            this.user_access = data['result']['user_access'];
            this.user_group = data['result']['user_group'];
            this.user_target = data['result']['user_target'];
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_update() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'user/fn_update', {
            "id": this.id,
            "data": this.model,
            "user_target": this.user_target,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_delete(id) {
        var objIndex = this.user_target.findIndex((obj => obj.id == id));
        this.user_target.splice(objIndex, 1);
        this.http.post(this.configService.base_url() + 'user/fn_deleteTarget', {
            "id": id
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_insertTargetAmount() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'user/fn_insertTargetAmount', {
            "id": this.id,
            "data": this.newTargetAmount,
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
};
UserDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user/user-detail/user-detail.component.css")).default]
    })
], UserDetailComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userItems li{\r\n    position: relative;\r\n}\r\n\r\n.userItems .itemInfoHeader{ \r\n    font-family: 'Source Sans Pro', sans-serif !important;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n}\r\n\r\nul {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.name{\r\n    \r\n    font-size: 13px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.userItems li .itemInfo{\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n    min-width: 600px; \r\n    font-size: 13px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.itemInfo .itemInfoName{      left: 27px;\r\n    position: absolute; }\r\n\r\n.itemInfo span{   min-width: 100px;   display: inline-block;}\r\n\r\n.itemInfo .w200{  min-width: 200px; }\r\n\r\n.itemInfo .w100{  min-width: 150px; }");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user */ "./src/app/user/user.ts");







let UserComponent = class UserComponent {
    constructor(http, router, modalService, config, configService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.configService = configService;
        this.items = [];
        this.itemsSelected = [];
        this.loading = true;
        this.loadingSelected = true;
        this.selected = [];
        this.newContact = false;
        this.modalTitle = "";
        this.selectModal = "0";
        this.id_user = "1";
        this.dbCompany = false;
        this.selectedCompany = [];
        this.model = new _user__WEBPACK_IMPORTED_MODULE_6__["NewUser"]("", "", "", "", "");
        this.parent = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.itemsSelected = [];
        this.http.get(this.configService.base_url() + 'user', {
            headers: this.configService.headers()
        }).subscribe(data => {
            this.items = data['result']['data'];
            this.parent = data['result']['parent'];
            // this.modelContact = new NewContact('0', '', '', '', '', '0', this.id_user,'0');
            console.log(data);
            this.loading = false;
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    requestEmit(event) {
        if (event) {
            this.router.navigate(['contact', event]);
        }
        this.modalService.dismissAll();
    }
    fn_insert() {
        this.loading = true;
        this.http.post(this.configService.base_url() + 'user/insert', {
            "data": this.model
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.loading = false;
            this.router.navigate(['/user/', data['result']['id']]);
            this.modalService.dismissAll();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    fn_delete() {
        this.http.post(this.configService.base_url() + 'contact/fn_delete', {
            "data": this.itemsSelected
        }, {
            headers: this.configService.headers()
        }).subscribe(data => {
            console.log(data);
            this.httpGet();
            this.modalService.dismissAll();
        }, error => {
            console.log(error);
            console.log(error.error.text);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fn_check(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == true) {
            this.items[this.objIndex]['check'] = false;
        }
        else {
            this.items[this.objIndex]['check'] = true;
        }
        var object = {
            'id': x.id,
            'name': x.name,
            'company': x.company,
        };
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (objectSelect == -1) {
            this.itemsSelected.push(object);
        }
        else {
            this.itemsSelected.splice(objectSelect, 1);
        }
        console.log(this.itemsSelected);
    }
    fn_removeItemSelected(x) {
        this.objIndex = this.items.findIndex((obj => obj.id == x.id));
        var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
        if (this.items[this.objIndex]['check'] == false) {
            this.items[this.objIndex]['check'] = true;
        }
        else {
            this.items[this.objIndex]['check'] = false;
        }
        this.itemsSelected.splice(objectSelect, 1);
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);

class ItemsClass {
}
class NavigationModel {
}


/***/ }),

/***/ "./src/app/user/user.ts":
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/*! exports provided: User, NewUser, EditUser, NewTargetAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUser", function() { return NewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUser", function() { return EditUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTargetAmount", function() { return NewTargetAmount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}
class NewUser {
    constructor(id_parent, first_name, last_name, email, password) {
        this.id_parent = id_parent;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
}
class EditUser {
    constructor(id_parent, first_name, last_name, id_user_access, id_user_group, code, max_discount, email, status, pass, target_amount_year) {
        this.id_parent = id_parent;
        this.first_name = first_name;
        this.last_name = last_name;
        this.id_user_access = id_user_access;
        this.id_user_group = id_user_group;
        this.code = code;
        this.max_discount = max_discount;
        this.email = email;
        this.status = status;
        this.pass = pass;
        this.target_amount_year = target_amount_year;
    }
}
class NewTargetAmount {
    constructor(year, amount, leads, opportunities, quotes) {
        this.year = year;
        this.amount = amount;
        this.leads = leads;
        this.opportunities = opportunities;
        this.quotes = quotes;
    }
}


/***/ }),

/***/ "./src/app/warning/warning.component.css":
/*!***********************************************!*\
  !*** ./src/app/warning/warning.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/warning/warning.component.ts":
/*!**********************************************!*\
  !*** ./src/app/warning/warning.component.ts ***!
  \**********************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WarningComponent = class WarningComponent {
    constructor(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.path = this.activatedRoute.snapshot.params.path;
        this.target = this.activatedRoute.snapshot.params.target;
    }
};
WarningComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
WarningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warning',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./warning.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./warning.component.css */ "./src/app/warning/warning.component.css")).default]
    })
], WarningComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    domain: "https://www.crm.co.id",
    root: "http://localhost:4200/home",
    api: "http://localhost:7344/crm.co.id/api-v1/",
    //api : "https://s02.crm.co.id/api-v1/",
    login: "http://localhost:4200/error"
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp7433\htdocs\crm.co.id\crm3-ng8\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);