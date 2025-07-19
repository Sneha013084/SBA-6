"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFetchError = void 0;
var customFetchError = /** @class */ (function (_super) {
    __extends(customFetchError, _super);
    // construter with passing arguments
    function customFetchError(message, status) {
        // passing just one argument for super error class
        var _this = _super.call(this, message) || this;
        _this.status = status;
        //setting error name
        _this.name = 'FetchError';
        return _this;
    }
    return customFetchError;
}(Error));
exports.customFetchError = customFetchError;
