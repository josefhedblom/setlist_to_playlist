"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetlistRouter = void 0;
const express_1 = require("express");
const SetlistFm_controller_1 = require("../../controllers/SetlistFm.controller");
const Route = (0, express_1.Router)();
exports.SetlistRouter = Route;
Route.get('/artists/:search', (req, res) => {
    const { search } = req.params;
    const setlist = new SetlistFm_controller_1.SetlistFm('8VGro68tXZyjgN8EYhDFynA1enBxiJgEBRC2');
    setlist
        .searchArtist(`${search}`)
        .then((data) => res.json(data))
        .catch((error) => console.log(error));
});
