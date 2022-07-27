"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionRouter = void 0;
const express_1 = require("express");
const Route = (0, express_1.Router)();
exports.ExceptionRouter = Route;
Route.use((req, res, next) => {
    const error = { status: 404, message: 'Not Found' };
    next(error);
});
Route.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message,
    });
});
