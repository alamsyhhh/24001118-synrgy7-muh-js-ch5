"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carsRoutes_1 = require("./routes/carsRoutes");
const config_1 = require("../config/config");
const objection_1 = require("objection");
const errorUploadHandlingMiddleware_1 = __importDefault(require("./middlewares/errorUploadHandlingMiddleware"));
objection_1.Model.knex(config_1.knexInstance);
const PORT = 9000;
const app = (0, express_1.default)();
const cv1 = '/api/v1/cms';
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(`${cv1}`, carsRoutes_1.carRoutes, errorUploadHandlingMiddleware_1.default);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
