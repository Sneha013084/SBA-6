"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFetchError = void 0;
class customFetchError extends Error {
    // construter with passing arguments
    constructor(message, status) {
        // passing just one argument for super error class
        super(message);
        this.status = status;
        //setting error name
        this.name = 'FetchError';
    }
}
exports.customFetchError = customFetchError;
