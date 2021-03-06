"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableListComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var TableListComponent = /** @class */ (function () {
    function TableListComponent(myService) {
        this.myService = myService;
    }
    TableListComponent.prototype.ngOnInit = function () {
        this.retrieveTutorials();
    };
    TableListComponent.prototype.retrieveTutorials = function () {
        var _this = this;
        this.myService.getAll().snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (c) {
                return (__assign({ key: c.payload.key }, c.payload.val()));
            });
        })).subscribe(function (data) {
            _this.tutorials = data;
        });
    };
    TableListComponent = __decorate([
        core_1.Component({
            selector: 'app-table-list',
            templateUrl: './table-list.component.html',
            styleUrls: ['./table-list.component.css']
        })
    ], TableListComponent);
    return TableListComponent;
}());
exports.TableListComponent = TableListComponent;
