(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jason/Projects/angular-budget-app/budget-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "0Wvy":
/*!***************************************************************************!*\
  !*** ./src/app/admin/pages/tables/account-type/account-type.component.ts ***!
  \***************************************************************************/
/*! exports provided: AccountTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTypeComponent", function() { return AccountTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/meta.service */ "IX8d");
/* harmony import */ var _shared_components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/pop-up/pop-up.component */ "dHfX");
/* harmony import */ var _shared_components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/simple-table/simple-table.component */ "qs3C");
/* harmony import */ var _components_forms_account_type_form_account_type_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/forms/account-type-form/account-type-form.component */ "DQCP");






const _c0 = ["PopUpRecordForm"];
const _c1 = ["RecordForm"];
const _c2 = ["PopUpConfirm"];
function AccountTypeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-account-type-form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("created", function AccountTypeComponent_ng_template_4_Template_app_account_type_form_created_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateRecord($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountTypeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountTypeComponent_ng_template_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.confirmDeleteRecord(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountTypeComponent_ng_template_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.confirmDeleteRecord(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Delete ", ctx_r5.selectedRecord == null ? null : ctx_r5.selectedRecord.name, " ?");
} }
const _c3 = function () { return ["name"]; };
class AccountTypeComponent {
    constructor(metaService) {
        this.metaService = metaService;
    }
    ngOnInit() {
        this.refreshData();
    }
    trackById(index, record) {
        if (record.id)
            return record.id;
        else
            return -1;
    }
    addRecord() {
        if (this.popupForm) {
            this.selectedRecord = undefined;
            this.popupForm.show()
                .then(() => {
                this.refreshData();
            });
        }
    }
    editRecord(id) {
        var _a;
        if (this.popupForm) {
            this.selectedRecord = this.records.filter(record => record.id == id)[0];
            (_a = this.recordForm) === null || _a === void 0 ? void 0 : _a.setRecord(this.selectedRecord);
            this.popupForm.show()
                .then(() => {
                this.selectedRecord = undefined;
                this.refreshData();
            });
        }
    }
    deleteRecord(id) {
        if (this.popupConfirm) {
            this.selectedRecord = this.records.filter(record => record.id == id)[0];
            this.popupConfirm.show()
                .then(() => {
                this.selectedRecord = undefined;
                this.refreshData();
            });
        }
    }
    confirmDeleteRecord(confirm) {
        var _a, _b;
        if (confirm && ((_a = this.selectedRecord) === null || _a === void 0 ? void 0 : _a.id)) {
            this.metaService.deleteAccountType(this.selectedRecord.id).subscribe(() => {
                this.refreshData();
            });
        }
        (_b = this.popupConfirm) === null || _b === void 0 ? void 0 : _b.close();
    }
    updateRecord(accountType) {
        var _a;
        if (accountType) {
            if (accountType.id) {
                this.metaService.updateAccountType(accountType).subscribe((accountType) => {
                    var _a;
                    (_a = this.popupForm) === null || _a === void 0 ? void 0 : _a.close();
                });
            }
            else {
                this.metaService.createAccountType(accountType).subscribe((accountType) => {
                    var _a;
                    (_a = this.popupForm) === null || _a === void 0 ? void 0 : _a.close();
                });
            }
        }
        else {
            (_a = this.popupForm) === null || _a === void 0 ? void 0 : _a.close();
        }
    }
    cancelRecord() {
        var _a;
        (_a = this.popupForm) === null || _a === void 0 ? void 0 : _a.close();
    }
    refreshData() {
        this.metaService.getAccountTypes().subscribe((accountTypes) => {
            this.records = accountTypes;
        });
    }
}
AccountTypeComponent.ɵfac = function AccountTypeComponent_Factory(t) { return new (t || AccountTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"])); };
AccountTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountTypeComponent, selectors: [["app-account-type"]], viewQuery: function AccountTypeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popupForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.recordForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popupConfirm = _t.first);
    } }, decls: 11, vars: 8, consts: [[3, "tplRef"], ["PopUpRecordForm", ""], ["PopUpConfirm", ""], ["MyFormTemplate", ""], ["ConfirmTemplate", ""], [3, "columns", "records", "addAction", "editAction", "deleteAction"], [3, "created"], ["RecordForm", ""], [3, "click"]], template: function AccountTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pop-up", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pop-up", 0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountTypeComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccountTypeComponent_ng_template_6_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Account Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-simple-table", 5);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tplRef", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tplRef", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3))("records", ctx.records)("addAction", ctx.addRecord.bind(ctx))("editAction", ctx.editRecord.bind(ctx))("deleteAction", ctx.deleteRecord.bind(ctx));
    } }, directives: [_shared_components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__["PopUpComponent"], _shared_components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_3__["SimpleTableComponent"], _components_forms_account_type_form_account_type_form_component__WEBPACK_IMPORTED_MODULE_4__["AccountTypeFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-type',
                templateUrl: './account-type.component.html',
                styleUrls: ['./account-type.component.scss']
            }]
    }], function () { return [{ type: _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"] }]; }, { popupForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['PopUpRecordForm']
        }], recordForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['RecordForm']
        }], popupConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['PopUpConfirm']
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DQCP":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/components/forms/account-type-form/account-type-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AccountTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTypeFormComponent", function() { return AccountTypeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_entities_account_type_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/entities/account-type.entity */ "rvUq");





class AccountTypeFormComponent {
    constructor() {
        this.created = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('name', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    setRecord(record) {
        this.id = record.id;
        this.formGroup.controls['name'].setValue(record.name);
    }
    update() {
        var _a;
        if ((_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.valid) {
            const rawValue = this.formGroup.getRawValue();
            for (const key of Object.keys(rawValue)) {
                rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
            }
            let accountType;
            if (this.id) {
                accountType = new _shared_entities_account_type_entity__WEBPACK_IMPORTED_MODULE_2__["AccountType"](rawValue.name, this.id);
            }
            else {
                accountType = new _shared_entities_account_type_entity__WEBPACK_IMPORTED_MODULE_2__["AccountType"](rawValue.name);
            }
            this.created.emit(accountType);
            this.formGroup.reset();
            this.id = undefined;
        }
    }
    cancel() {
        if (this.formGroup) {
            this.formGroup.reset();
        }
        this.created.emit(null);
    }
}
AccountTypeFormComponent.ɵfac = function AccountTypeFormComponent_Factory(t) { return new (t || AccountTypeFormComponent)(); };
AccountTypeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountTypeFormComponent, selectors: [["app-account-type-form"]], inputs: { updateAction: "updateAction", cancelAction: "cancelAction" }, outputs: { created: "created" }, decls: 10, vars: 1, consts: [["novalidate", "", 3, "formGroup"], ["formControlName", "name", "type", "text", "placeholder", "Name", "required", ""], ["type", "button", 3, "click"]], template: function AccountTypeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountTypeFormComponent_Template_button_click_6_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountTypeFormComponent_Template_button_click_8_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXR5cGUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountTypeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-type-form',
                templateUrl: './account-type-form.component.html',
                styleUrls: ['./account-type-form.component.scss']
            }]
    }], function () { return []; }, { created: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cancelAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "F2ms":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/side-menu-segment/side-menu-segment.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideMenuSegmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuSegmentComponent", function() { return SideMenuSegmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function SideMenuSegmentComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.title);
} }
function SideMenuSegmentComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-menu-segment", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", segment_r3);
} }
class SideMenuSegmentComponent {
    constructor() {
        this.openState = false;
    }
    ngOnInit() {
    }
    toggleView() {
        this.openState = !this.openState;
    }
}
SideMenuSegmentComponent.ɵfac = function SideMenuSegmentComponent_Factory(t) { return new (t || SideMenuSegmentComponent)(); };
SideMenuSegmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuSegmentComponent, selectors: [["app-side-menu-segment"]], inputs: { content: "content" }, decls: 5, vars: 5, consts: [[3, "click"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"], [3, "content"]], template: function SideMenuSegmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuSegmentComponent_Template_span_click_0_listener() { return ctx.toggleView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideMenuSegmentComponent_li_3_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideMenuSegmentComponent_li_4_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.openState ? "x" : "+", "", ctx.content.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@toggleBox", ctx.openState ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.content.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.content.segments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], SideMenuSegmentComponent], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  overflow: hidden;\n}\n\nli[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nli[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n\n\na[_ngcontent-%COMP%] {\n  padding: 6px 8px 6px 8px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #ffffff;\n  display: block;\n  text-align: center;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  font-size: 30px;\n  background-color: #222222;\n}\n\nspan[_ngcontent-%COMP%] {\n  padding: 6px 8px 6px 8px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #ffffff;\n  display: block;\n  text-align: center;\n}\n\n\n\nspan[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  font-size: 30px;\n  background-color: #222222;\n}\n\n\n\n@media screen and (max-height: 450px) {\n  a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpZGUtbWVudS1zZWdtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0cscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlDO0VBRUcscUJBQUE7QUFGSjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBR0UsOEJBQUE7O0FBQ0E7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRSxpRUFBQTs7QUFDRjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFLGlFQUFBOztBQUNGO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUlFOzt3Q0FBQTs7QUFHQTtFQUNFO0lBQUcsZUFBQTtFQUFMOztFQUNFO0lBQVMsZUFBQTtFQUdYO0FBQ0YiLCJmaWxlIjoic2lkZS1tZW51LXNlZ21lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxuIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIFxuIGxpIHtcbiAgIC8vICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5saTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gIC8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cbiAgYSB7XG4gICAgcGFkZGluZzogNnB4IDhweCA2cHggOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cbmE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICB9XG4gIFxuc3BhbiB7XG4gICAgcGFkZGluZzogNnB4IDhweCA2cHggOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cbnNwYW46aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICB9XG5cbiAgXG4gIC8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgXG4gIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGViYXIgXG4gIChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAgIGEge2ZvbnQtc2l6ZTogMThweDt9XG4gICAgYTpob3ZlciB7Zm9udC1zaXplOiAyMHB4O31cbiAgfSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggleBox', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: '1'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: '0',
                    height: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s')
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuSegmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-menu-segment',
                templateUrl: './side-menu-segment.component.html',
                styleUrls: ['./side-menu-segment.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggleBox', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: '1'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: '0',
                            height: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s')
                        ]),
                    ])
                ]
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IX8d":
/*!*************************************************!*\
  !*** ./src/app/shared/services/meta.service.ts ***!
  \*************************************************/
/*! exports provided: MetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaService", function() { return MetaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MetaService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/api/v1";
    }
    ////////////////////////
    // ACCOUNT TYPES
    ////////////////////////  
    getAccountTypes() {
        return this.http.get(`${this.baseUrl}/accounttypes`);
    }
    createAccountType(record) {
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json') };
        return this.http.post(`${this.baseUrl}/accounttypes`, JSON.stringify(record).replace(/"_/g, '"'), options);
    }
    updateAccountType(record) {
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json') };
        return this.http.put(`${this.baseUrl}/accounttypes/${record.id}`, JSON.stringify(record).replace(/"_/g, '"'), options);
    }
    getAccountType(id) {
        return this.http.get(`${this.baseUrl}/accounttypes/${id}`);
    }
    deleteAccountType(id) {
        return this.http.delete(`${this.baseUrl}/accounttypes/${id}`);
    }
    //////////////////////////
    // ACCOUNTS
    /////////////////////////
    getAccounts() {
        return this.http.get(`${this.baseUrl}/accounts`);
    }
    createAccount(record) {
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json') };
        return this.http.post(`${this.baseUrl}/accounts`, JSON.stringify(record).replace(/"_/g, '"'), options);
    }
    updateAccount(record) {
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json') };
        return this.http.put(`${this.baseUrl}/accounts/${record.id}`, JSON.stringify(record).replace(/"_/g, '"'), options);
    }
    getAccount(id) {
        return this.http.get(`${this.baseUrl}/accounts/${id}`);
    }
    deleteAccount(id) {
        return this.http.delete(`${this.baseUrl}/accounts/${id}`);
    }
}
MetaService.ɵfac = function MetaService_Factory(t) { return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MetaService, factory: MetaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Ki4G":
/*!*******************************************!*\
  !*** ./src/app/shared/entities/entity.ts ***!
  \*******************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
class Entity {
    constructor(id) {
        if (id) {
            this._id = id;
        }
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "vQ30");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pop-up/pop-up.component */ "dHfX");
/* harmony import */ var _components_side_menu_segment_side_menu_segment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/side-menu-segment/side-menu-segment.component */ "F2ms");
/* harmony import */ var _components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/simple-table/simple-table.component */ "qs3C");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideMenuComponent"], _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_5__["PopUpComponent"], _components_side_menu_segment_side_menu_segment_component__WEBPACK_IMPORTED_MODULE_6__["SideMenuSegmentComponent"], _components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_7__["SimpleTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]], exports: [_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideMenuComponent"], _components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_7__["SimpleTableComponent"], _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_5__["PopUpComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideMenuComponent"], _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_5__["PopUpComponent"], _components_side_menu_segment_side_menu_segment_component__WEBPACK_IMPORTED_MODULE_6__["SideMenuSegmentComponent"], _components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_7__["SimpleTableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
                ],
                exports: [_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__["SideMenuComponent"], _components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_7__["SimpleTableComponent"], _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_5__["PopUpComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Q4cx":
/*!********************************************************************!*\
  !*** ./src/app/admin/pages/summary-page/summary-page.component.ts ***!
  \********************************************************************/
/*! exports provided: SummaryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageComponent", function() { return SummaryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SummaryPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SummaryPageComponent.ɵfac = function SummaryPageComponent_Factory(t) { return new (t || SummaryPageComponent)(); };
SummaryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryPageComponent, selectors: [["admin-summary-page"]], decls: 2, vars: 0, template: function SummaryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-summary-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'admin-summary-page',
                templateUrl: './summary-page.component.html',
                styleUrls: ['./summary-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ru5I":
/*!*****************************************!*\
  !*** ./src/app/budget/budget.module.ts ***!
  \*****************************************/
/*! exports provided: BudgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetModule", function() { return BudgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/summary-page/summary-page.component */ "WR+n");




class BudgetModule {
}
BudgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BudgetModule });
BudgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BudgetModule_Factory(t) { return new (t || BudgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BudgetModule, { declarations: [_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "SiBg":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/forms/account-form/account-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AccountFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFormComponent", function() { return AccountFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_entities_account_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/entities/account.entity */ "d8GX");
/* harmony import */ var _shared_entities_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/entities/entity */ "Ki4G");
/* harmony import */ var _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/meta.service */ "IX8d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AccountFormComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const accountType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", accountType_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](accountType_r1.name);
} }
class AccountFormComponent {
    constructor(metaService) {
        this.metaService = metaService;
        this.created = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.accountTypes = [];
    }
    ngOnInit() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('name', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('accountType', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.metaService.getAccountTypes().subscribe((accountTypes) => {
            this.accountTypes = accountTypes;
        });
    }
    setRecord(record) {
        this.id = record.id;
        this.formGroup.controls['name'].setValue(record.name);
        this.formGroup.controls['accountType'].setValue(record.accountType.id);
    }
    update() {
        var _a;
        if ((_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.valid) {
            const rawValue = this.formGroup.getRawValue();
            for (const key of Object.keys(rawValue)) {
                rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
            }
            let account;
            if (this.id) {
                account = new _shared_entities_account_entity__WEBPACK_IMPORTED_MODULE_2__["Account"](rawValue.name, new _shared_entities_entity__WEBPACK_IMPORTED_MODULE_3__["Entity"](parseInt(rawValue.accountType)), this.id);
            }
            else {
                account = new _shared_entities_account_entity__WEBPACK_IMPORTED_MODULE_2__["Account"](rawValue.name, new _shared_entities_entity__WEBPACK_IMPORTED_MODULE_3__["Entity"](parseInt(rawValue.accountType)));
            }
            this.formGroup.reset();
            this.created.emit(account);
        }
    }
    cancel() {
        if (this.formGroup) {
            this.formGroup.reset();
        }
        this.created.emit(null);
    }
}
AccountFormComponent.ɵfac = function AccountFormComponent_Factory(t) { return new (t || AccountFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"])); };
AccountFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountFormComponent, selectors: [["app-account-form"]], inputs: { updateAction: "updateAction", cancelAction: "cancelAction" }, outputs: { created: "created" }, decls: 14, vars: 2, consts: [["novalidate", "", 3, "formGroup"], ["formControlName", "name", "type", "text", "placeholder", "Name", "required", ""], ["formControlName", "accountType", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "value"]], template: function AccountFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountFormComponent_option_9_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountFormComponent_Template_button_click_10_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountFormComponent_Template_button_click_12_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accountTypes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-form',
                templateUrl: './account-form.component.html',
                styleUrls: ['./account-form.component.scss']
            }]
    }], function () { return [{ type: _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"] }]; }, { created: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cancelAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/side-menu/side-menu.component */ "vQ30");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'budget-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "sidenav"], [1, "main"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular Router App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  \n  width: 160px;\n  \n  position: fixed;\n  \n  z-index: 1;\n  \n  top: 0;\n  \n  left: 0;\n  overflow-x: hidden;\n  \n  padding-top: 20px;\n  background-color: #183f1d;\n  \n  background-image: linear-gradient(#183f1d, #929c35);\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: 160px;\n  \n  padding: 0px 10px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUFjLHVEQUFBO0VBQ2QsWUFBQTtFQUFjLGlDQUFBO0VBQ2QsZUFBQTtFQUFpQiw0Q0FBQTtFQUNqQixVQUFBO0VBQVksZ0JBQUE7RUFDWixNQUFBO0VBQVEsb0JBQUE7RUFDUixPQUFBO0VBQ0Esa0JBQUE7RUFBb0IsOEJBQUE7RUFDcEIsaUJBQUE7RUFDQSx5QkFBQTtFQUFrQywrQ0FBQTtFQUNsQyxtREFBQTtBQVFGO0FBTEUsdUJBQUE7QUFDRjtFQUNJLGtCQUFBO0VBQW9CLHFDQUFBO0VBQ3BCLGlCQUFBO0FBU0o7QUFORTs7d0NBQUE7QUFHQTtFQUNFO0lBQVUsaUJBQUE7RUFVWjs7RUFURTtJQUFZLGVBQUE7RUFhZDs7RUFaRTtJQUFrQixlQUFBO0VBZ0JwQjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cbi5zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXCJhdXRvXCIgaGVpZ2h0ICovXG4gIHdpZHRoOiAxNjBweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xuICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI0LCA2MywgMjkpOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNCwgNjMsIDI5KSxyZ2IoMTQ2LCAxNTYsIDUzKSk7XG59XG4gXG4gIC8qIFN0eWxlIHBhZ2UgY29udGVudCAqL1xuLm1haW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNjBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxuICBcbiAgLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBcbiAgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZWJhciBcbiAgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxuICAgIC5zaWRlbmF2IGE6aG92ZXIge2ZvbnQtc2l6ZTogMjBweDt9XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WR+n":
/*!*********************************************************************!*\
  !*** ./src/app/budget/pages/summary-page/summary-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: SummaryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageComponent", function() { return SummaryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SummaryPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SummaryPageComponent.ɵfac = function SummaryPageComponent_Factory(t) { return new (t || SummaryPageComponent)(); };
SummaryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryPageComponent, selectors: [["budget-summary-page"]], decls: 2, vars: 0, template: function SummaryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "budget-summary-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'budget-summary-page',
                templateUrl: './summary-page.component.html',
                styleUrls: ['./summary-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _budget_budget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./budget/budget.module */ "Ru5I");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.module */ "jkDv");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"],
            _budget_budget_module__WEBPACK_IMPORTED_MODULE_4__["BudgetModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"],
        _budget_budget_module__WEBPACK_IMPORTED_MODULE_4__["BudgetModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"],
                    _budget_budget_module__WEBPACK_IMPORTED_MODULE_4__["BudgetModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "d8GX":
/*!***************************************************!*\
  !*** ./src/app/shared/entities/account.entity.ts ***!
  \***************************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "Ki4G");

class Account extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(_name, _accountType, id) {
        super(id);
        this._name = _name;
        this._accountType = _accountType;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get accountType() {
        return this._accountType;
    }
    set accountType(accountType) {
        this._accountType = accountType;
    }
}


/***/ }),

/***/ "dHfX":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/pop-up/pop-up.component.ts ***!
  \**************************************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PopUpComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngTemplateOutlet", "tplRef"]);
} }
const _c0 = ["*"];
class PopUpComponent {
    constructor() {
        this._visible = false;
    }
    ngOnInit() {
    }
    show() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._visible = true;
            let _this = this;
            return new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
            }.bind(this));
        });
    }
    close() {
        this._resolve();
        this._visible = false;
    }
}
PopUpComponent.ɵfac = function PopUpComponent_Factory(t) { return new (t || PopUpComponent)(); };
PopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopUpComponent, selectors: [["app-pop-up"]], inputs: { tplRef: "tplRef" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "cover", 3, "hidden"], [1, "pop-card"], [4, "ngTemplateOutlet"]], template: function PopUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PopUpComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx._visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.tplRef);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: [".cover[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4);\n  bottom: 0px;\n  left: 0px;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: 100;\n}\n\n.pop-card[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 150px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  margin: auto;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BvcC11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNILFNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNHLFFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0gsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0csUUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoicG9wLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG4gICAgYm90dG9tOiAwcHggO1xuXHRsZWZ0OiAwcHggO1xuXHRwb3NpdGlvbjogZml4ZWQgO1xuXHRyaWdodDogMHB4IDtcbiAgICB0b3A6IDBweCA7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG5cbi5wb3AtY2FyZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6MDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-pop-up',
                templateUrl: './pop-up.component.html',
                styleUrls: ['./pop-up.component.scss']
            }]
    }], function () { return []; }, { 
    //@ts-ignore 
    tplRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/summary-page/summary-page.component */ "Q4cx");
/* harmony import */ var _pages_tables_account_type_account_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/tables/account-type/account-type.component */ "0Wvy");
/* harmony import */ var _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/meta.service */ "IX8d");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _components_forms_account_type_form_account_type_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forms/account-type-form/account-type-form.component */ "DQCP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_tables_account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/tables/account/account.component */ "lJrl");
/* harmony import */ var _components_forms_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forms/account-form/account-form.component */ "SiBg");











class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [
        _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"],
        _pages_tables_account_type_account_type_component__WEBPACK_IMPORTED_MODULE_3__["AccountTypeComponent"],
        _components_forms_account_type_form_account_type_form_component__WEBPACK_IMPORTED_MODULE_6__["AccountTypeFormComponent"],
        _pages_tables_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
        _components_forms_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_9__["AccountFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]], exports: [_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"],
        _pages_tables_account_type_account_type_component__WEBPACK_IMPORTED_MODULE_3__["AccountTypeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"],
                    _pages_tables_account_type_account_type_component__WEBPACK_IMPORTED_MODULE_3__["AccountTypeComponent"],
                    _components_forms_account_type_form_account_type_form_component__WEBPACK_IMPORTED_MODULE_6__["AccountTypeFormComponent"],
                    _pages_tables_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
                    _components_forms_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_9__["AccountFormComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                providers: [
                    _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]
                ],
                exports: [
                    _pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"],
                    _pages_tables_account_type_account_type_component__WEBPACK_IMPORTED_MODULE_3__["AccountTypeComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lJrl":
/*!*****************************************************************!*\
  !*** ./src/app/admin/pages/tables/account/account.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/meta.service */ "IX8d");
/* harmony import */ var _shared_components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/pop-up/pop-up.component */ "dHfX");
/* harmony import */ var _shared_components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/simple-table/simple-table.component */ "qs3C");
/* harmony import */ var _components_forms_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/forms/account-form/account-form.component */ "SiBg");






const _c0 = ["PopUpRecordForm"];
const _c1 = ["RecordForm"];
const _c2 = ["PopUpConfirm"];
function AccountComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-account-form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("created", function AccountComponent_ng_template_4_Template_app_account_form_created_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateRecord($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_ng_template_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.confirmDeleteRecord(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_ng_template_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.confirmDeleteRecord(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Delete ", ctx_r5.selectedRecord == null ? null : ctx_r5.selectedRecord.name, " ?");
} }
const _c3 = function () { return ["name", "accountType.name"]; };
class AccountComponent {
    constructor(metaService) {
        this.metaService = metaService;
    }
    ngOnInit() {
        this.refreshData();
    }
    trackById(index, record) {
        if (record.id)
            return record.id;
        else
            return -1;
    }
    addRecord() {
        if (this.popupForm) {
            this.selectedRecord = undefined;
            this.popupForm.show()
                .then(() => {
                this.refreshData();
            });
        }
    }
    editRecord(id) {
        var _a;
        if (this.popupForm) {
            this.selectedRecord = this.records.filter(record => record.id == id)[0];
            (_a = this.recordForm) === null || _a === void 0 ? void 0 : _a.setRecord(this.selectedRecord);
            this.popupForm.show()
                .then(() => {
                this.selectedRecord = undefined;
                this.refreshData();
            });
        }
    }
    deleteRecord(id) {
        if (this.popupConfirm) {
            this.selectedRecord = this.records.filter(record => record.id == id)[0];
            this.popupConfirm.show()
                .then(() => {
                this.selectedRecord = undefined;
                this.refreshData();
            });
        }
    }
    confirmDeleteRecord(confirm) {
        var _a, _b;
        if (confirm && ((_a = this.selectedRecord) === null || _a === void 0 ? void 0 : _a.id)) {
            this.metaService.deleteAccount(this.selectedRecord.id).subscribe(() => {
                this.refreshData();
            });
        }
        (_b = this.popupConfirm) === null || _b === void 0 ? void 0 : _b.close();
    }
    updateRecord(account) {
        var _a;
        if (account) {
            if (account.id) {
                this.metaService.updateAccount(account).subscribe((account) => {
                    var _a;
                    (_a = this.popupForm) === null || _a === void 0 ? void 0 : _a.close();
                });
            }
            else {
                this.metaService.createAccount(account).subscribe((account) => {
                    var _a;
                    (_a = this.popupForm) === null || _a === void 0 ? void 0 : _a.close();
                });
            }
        }
        else {
            (_a = this.popupForm) === null || _a === void 0 ? void 0 : _a.close();
        }
    }
    cancelRecord() {
        var _a;
        (_a = this.popupForm) === null || _a === void 0 ? void 0 : _a.close();
    }
    refreshData() {
        this.metaService.getAccounts().subscribe((accounts) => {
            this.records = accounts;
        });
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], viewQuery: function AccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popupForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.recordForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popupConfirm = _t.first);
    } }, decls: 11, vars: 8, consts: [[3, "tplRef"], ["PopUpRecordForm", ""], ["PopUpConfirm", ""], ["MyFormTemplate", ""], ["ConfirmTemplate", ""], [3, "columns", "records", "addAction", "editAction", "deleteAction"], [3, "created"], ["RecordForm", ""], [3, "click"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pop-up", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pop-up", 0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccountComponent_ng_template_6_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-simple-table", 5);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tplRef", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tplRef", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3))("records", ctx.records)("addAction", ctx.addRecord.bind(ctx))("editAction", ctx.editRecord.bind(ctx))("deleteAction", ctx.deleteRecord.bind(ctx));
    } }, directives: [_shared_components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__["PopUpComponent"], _shared_components_simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_3__["SimpleTableComponent"], _components_forms_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_4__["AccountFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account',
                templateUrl: './account.component.html',
                styleUrls: ['./account.component.scss']
            }]
    }], function () { return [{ type: _shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"] }]; }, { popupForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['PopUpRecordForm']
        }], recordForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['RecordForm']
        }], popupConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['PopUpConfirm']
        }] }); })();


/***/ }),

/***/ "qs3C":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/simple-table/simple-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: SimpleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTableComponent", function() { return SimpleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SimpleTableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r3);
} }
function SimpleTableComponent_tr_6_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const record_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getValue(record_r4, column_r6));
} }
function SimpleTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleTableComponent_tr_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const record_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteRecord(record_r4["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Del");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleTableComponent_tr_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const record_r4 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.editRecord(record_r4["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SimpleTableComponent_tr_6_td_7_Template, 2, 1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.deleteAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.editAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
} }
function SimpleTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
class SimpleTableComponent {
    constructor() {
        this.columns = [];
        this.records = [];
    }
    ngOnInit() {
    }
    deleteRecord(id) {
        if (this.deleteAction)
            this.deleteAction(id);
    }
    editRecord(id) {
        if (this.editAction)
            this.editAction(id);
    }
    addRecord() {
        if (this.addAction)
            this.addAction();
    }
    getValue(record, column) {
        if (column.indexOf('.') > -1) {
            column.split('.').forEach(key => {
                record = record[key];
            });
            return record;
        }
        else {
            return record[column];
        }
    }
}
SimpleTableComponent.ɵfac = function SimpleTableComponent_Factory(t) { return new (t || SimpleTableComponent)(); };
SimpleTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleTableComponent, selectors: [["app-simple-table"]], inputs: { columns: "columns", records: "records", addAction: "addAction", editAction: "editAction", deleteAction: "deleteAction" }, decls: 14, vars: 8, consts: [[1, "greenTable"], [3, "hidden"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function SimpleTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SimpleTableComponent_th_4_Template, 2, 1, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimpleTableComponent_tr_6_Template, 8, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tfoot", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SimpleTableComponent_td_10_Template, 1, 0, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleTableComponent_Template_button_click_12_listener() { return ctx.addRecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.deleteAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.editAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.addAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.deleteAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.editAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns.slice(1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["table.greenTable[_ngcontent-%COMP%] {\n  font-family: Georgia, serif;\n  background-color: #D4EED1;\n  min-width: 400px;\n  text-align: left;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.greenTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #24943A;\n  padding: 3px 2px;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #24943A;\n  background: linear-gradient(to bottom, #5baf6b 0%, #3a9e4d 66%, #24943A 100%);\n  border-bottom: 0px solid #444444;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: bold;\n  color: #F0F0F0;\n  text-align: center;\n  border-left: 2px solid #24943A;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  color: #F0F0F0;\n  background: #24943A;\n  background: linear-gradient(to bottom, #5baf6b 0%, #3a9e4d 66%, #24943A 100%);\n  border-top: 1px solid #24943A;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ntable.greenTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #FFFFFF;\n  color: #24943A;\n  padding: 2px 8px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpbXBsZS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBRUEseUJBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtFQUdBLDZFQUFBO0VBQ0EsZ0NBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREU7RUFDRSxpQkFBQTtBQUlKOztBQURFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBR0EsNkVBQUE7RUFDQSw2QkFBQTtBQUlKOztBQUZFO0VBQ0UsZUFBQTtBQUtKOztBQUhFO0VBQ0UsaUJBQUE7QUFNSjs7QUFKRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU9KIiwiZmlsZSI6InNpbXBsZS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLmdyZWVuVGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcbiAgICAvL2JvcmRlcjogNnB4IHNvbGlkICMyNDk0M0E7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RUVEMTtcbiAgICAvL3dpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICB0YWJsZS5ncmVlblRhYmxlIHRkLCB0YWJsZS5ncmVlblRhYmxlIHRoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQ5NDNBO1xuICAgIHBhZGRpbmc6IDNweCAycHg7XG4gIH1cbiAgdGFibGUuZ3JlZW5UYWJsZSB0Ym9keSB0ZCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIHRhYmxlLmdyZWVuVGFibGUgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICMyNDk0M0E7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNWJhZjZiIDAlLCAjM2E5ZTRkIDY2JSwgIzI0OTQzQSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM1YmFmNmIgMCUsICMzYTllNGQgNjYlLCAjMjQ5NDNBIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1YmFmNmIgMCUsICMzYTllNGQgNjYlLCAjMjQ5NDNBIDEwMCUpO1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjNDQ0NDQ0O1xuICB9XG4gIHRhYmxlLmdyZWVuVGFibGUgdGhlYWQgdGgge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0YwRjBGMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMjQ5NDNBO1xuICB9XG4gIHRhYmxlLmdyZWVuVGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG4gIFxuICB0YWJsZS5ncmVlblRhYmxlIHRmb290IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNGMEYwRjA7XG4gICAgYmFja2dyb3VuZDogIzI0OTQzQTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM1YmFmNmIgMCUsICMzYTllNGQgNjYlLCAjMjQ5NDNBIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzViYWY2YiAwJSwgIzNhOWU0ZCA2NiUsICMyNDk0M0EgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzViYWY2YiAwJSwgIzNhOWU0ZCA2NiUsICMyNDk0M0EgMTAwJSk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyNDk0M0E7XG4gIH1cbiAgdGFibGUuZ3JlZW5UYWJsZSB0Zm9vdCB0ZCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIHRhYmxlLmdyZWVuVGFibGUgdGZvb3QgLmxpbmtzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICB0YWJsZS5ncmVlblRhYmxlIHRmb290IC5saW5rcyBhe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGNvbG9yOiAjMjQ5NDNBO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-table',
                templateUrl: './simple-table.component.html',
                styleUrls: ['./simple-table.component.scss']
            }]
    }], function () { return []; }, { columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], records: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rvUq":
/*!********************************************************!*\
  !*** ./src/app/shared/entities/account-type.entity.ts ***!
  \********************************************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "Ki4G");

class AccountType extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(_name, id) {
        super(id);
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}


/***/ }),

/***/ "vQ30":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/side-menu/side-menu.component.ts ***!
  \********************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _side_menu_segment_side_menu_segment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-menu-segment/side-menu-segment.component */ "F2ms");



class SideMenuComponent {
    constructor() {
        this.menuMain = {
            title: "Budget",
            links: [
                { url: "/summary", title: "Summary" }
            ],
            segments: []
        };
        this.menuAdmin = {
            title: "Admin",
            links: [
                { url: "/admin/summary", title: "Summary" }
            ],
            segments: [
                {
                    title: "Data",
                    links: [],
                    segments: [
                        {
                            title: "Account Details",
                            links: [
                                { url: "/admin/tables/accounttypes", title: "Account Types" },
                                { url: "/admin/tables/accounts", title: "Accounts" }
                            ]
                        },
                        {
                            title: "Transaction Details",
                            links: [
                                { url: "/admin/tables/categories", title: "Categories" },
                                { url: "/admin/tables/subcategories", title: "Sub Categories" },
                                { url: "/admin/tables/schedules", title: "Schedules" },
                                { url: "/admin/tables/plannedtransactions", title: "Planned Transactions" }
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(); };
SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["app-side-menu"]], decls: 6, vars: 2, consts: [[3, "content"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-menu-segment", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-side-menu-segment", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.menuMain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.menuAdmin);
    } }, directives: [_side_menu_segment_side_menu_segment_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuSegmentComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJzaWRlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxuIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-menu',
                templateUrl: './side-menu.component.html',
                styleUrls: ['./side-menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _budget_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget/pages/summary-page/summary-page.component */ "WR+n");
/* harmony import */ var _admin_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/pages/summary-page/summary-page.component */ "Q4cx");
/* harmony import */ var _admin_pages_tables_account_type_account_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/pages/tables/account-type/account-type.component */ "0Wvy");
/* harmony import */ var _admin_pages_tables_account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/pages/tables/account/account.component */ "lJrl");








const routes = [
    { path: 'summary', component: _budget_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageComponent"] },
    { path: 'admin/summary', component: _admin_pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_3__["SummaryPageComponent"] },
    { path: 'admin/tables/accounttypes', component: _admin_pages_tables_account_type_account_type_component__WEBPACK_IMPORTED_MODULE_4__["AccountTypeComponent"] },
    { path: 'admin/tables/accounts', component: _admin_pages_tables_account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"] },
    { path: '', redirectTo: '/summary', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map