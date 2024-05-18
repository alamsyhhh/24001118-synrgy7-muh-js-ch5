"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRoutes = void 0;
const express_1 = __importDefault(require("express"));
const carsController_1 = __importDefault(require("../controllers/carsController"));
const multer_1 = __importDefault(require("../middlewares/multer"));
const router = express_1.default.Router();
exports.carRoutes = router;
router.get('/getAllCars', carsController_1.default.getAllCars);
router.get('/getDetailCar/:id', carsController_1.default.getCarById);
router.post('/createCar', multer_1.default.single('image'), carsController_1.default.createCar);
router.put('/updateCar/:id', multer_1.default.single('image'), carsController_1.default.updateCar);
router.delete('/deleteCar/:id', carsController_1.default.deleteCar);
