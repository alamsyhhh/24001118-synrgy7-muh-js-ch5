"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carsServices_1 = __importDefault(require("../services/carsServices"));
const responseHandler_1 = require("../utils/responseHandler");
class CarController {
    getAllCars(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = req.query.category;
                const name = req.query.name;
                const page = parseInt(req.query.page) || 1;
                const pageSize = parseInt(req.query.pageSize) || -1;
                yield carsServices_1.default.getAllCars(res, category, name, page, pageSize);
            }
            catch (error) {
                console.error('Error getting cars:', error);
                (0, responseHandler_1.wrapErrorResponse)(res, 500, 'Internal Server Error');
            }
        });
    }
    getCarById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carId = req.params.id;
            carsServices_1.default.getCarById(res, carId);
        });
    }
    createCar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCar = yield carsServices_1.default.createCar(req);
                if (newCar) {
                    (0, responseHandler_1.wrapResponse)(res, 201, 'Data Berhasil Disimpan', newCar);
                }
                else {
                    (0, responseHandler_1.wrapResponse)(res, 500, 'Failed to create car', newCar);
                }
            }
            catch (error) {
                console.error(error);
                (0, responseHandler_1.wrapErrorResponse)(res, 500, 'Internal Server Error');
            }
        });
    }
    updateCar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedCar = yield carsServices_1.default.updateCar(req);
                if (updatedCar) {
                    (0, responseHandler_1.wrapResponse)(res, 200, 'Car updated successfully', updatedCar);
                }
                else {
                    (0, responseHandler_1.wrapErrorResponse)(res, 404, 'Car with the specified ID not found');
                }
            }
            catch (error) {
                console.error(error);
                (0, responseHandler_1.wrapErrorResponse)(res, 500, 'Internal Server Error');
            }
        });
    }
    deleteCar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carId = req.params.id;
            carsServices_1.default.deleteCarById(res, carId);
        });
    }
}
exports.default = new CarController();
