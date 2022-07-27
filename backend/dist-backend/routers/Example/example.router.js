"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleRouter = void 0;
const express_1 = require("express");
const Route = (0, express_1.Router)();
exports.ExampleRouter = Route;
Route.get('/test', (req, res) => {
    res.json({ message: 'success' });
});
