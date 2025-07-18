"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFetchError = void 0;
class customFetchError extends Error {
    constructor(status, statusText) {
        super(message);
        this.status = status;
        this.statusText = statusText;
    }
}
exports.customFetchError = customFetchError;
