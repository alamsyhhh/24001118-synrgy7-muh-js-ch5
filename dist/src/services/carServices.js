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
const carsRepository_1 = __importDefault(require("../repositories/carsRepository"));
const responseHandler_1 = require("../utils/responseHandler");
const uuid_1 = require("uuid");
const cloudinary_1 = __importDefault(require("../../config/cloudinary"));
const multer_1 = require("../middlewares/multer");
class CarService {
    getAllCars(res_1, category_1, name_1) {
        return __awaiter(this, arguments, void 0, function* (res, category, name, page = 1, pageSize = -1) {
            try {
                let cars;
                if (category || name || pageSize !== -1) {
                    // Fetch cars with the specified criteria
                    cars = yield carsRepository_1.default.getAllCars(category, name, page, pageSize);
                    if (cars.length === 0) {
                        (0, responseHandler_1.wrapErrorResponse)(res, 404, 'No cars found with the specified criteria');
                        return;
                    }
                    const totalCount = yield carsRepository_1.default.getTotalCount(category, name);
                    const totalPages = pageSize !== -1 ? Math.ceil(totalCount / pageSize) : 1;
                    (0, responseHandler_1.wrapResponse)(res, 200, 'Get all car data successfully', {
                        cars,
                        totalPages,
                    });
                }
                else {
                    // Fetch all cars without pagination
                    cars = yield carsRepository_1.default.getAllCars();
                    if (cars.length === 0) {
                        (0, responseHandler_1.wrapErrorResponse)(res, 404, 'No cars found');
                    }
                    else {
                        (0, responseHandler_1.wrapResponse)(res, 200, 'Get all car data successfully', { cars });
                    }
                }
            }
            catch (error) {
                console.error('Error getting cars:', error);
                (0, responseHandler_1.wrapErrorResponse)(res, 500, 'Internal Server Error');
            }
        });
    }
    getCarById(res, carId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const car = yield carsRepository_1.default.getCarById(carId);
                if (!car) {
                    (0, responseHandler_1.wrapErrorResponse)(res, 404, 'Car with the specified ID not found');
                }
                else {
                    (0, responseHandler_1.wrapResponse)(res, 200, 'Get car data by ID successfully', car);
                }
            }
            catch (error) {
                console.error('Error getting car by ID:', error);
                (0, responseHandler_1.wrapErrorResponse)(res, 500, 'Internal Server Error');
            }
        });
    }
    createCar(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, category, startRent, finishRent } = req.body;
            if (!req.file) {
                throw new Error('Tidak ada file gambar yang diunggah');
            }
            if (!req.file.mimetype.startsWith('image/')) {
                throw new Error('Hanya diperbolehkan mengunggah file gambar (JPG, PNG, GIF)');
            }
            const fileBase64 = req.file.buffer.toString('base64');
            const file = `data:${req.file.mimetype};base64,${fileBase64}`;
            return new Promise((resolve, reject) => {
                const uniqueFileName = (0, multer_1.generateUniqueFileName)(file);
                cloudinary_1.default.uploader.upload(file, { folder: 'challenge_5', public_id: uniqueFileName }, (error, result) => __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        reject(new Error('Gagal mengunggah gambar ke Cloudinary'));
                        return;
                    }
                    const imageUrl = result.secure_url;
                    try {
                        const newCar = yield carsRepository_1.default.createCar({
                            id: (0, uuid_1.v4)(),
                            name,
                            category,
                            price,
                            image: imageUrl,
                            startRent: startRent ? new Date(startRent) : null,
                            finishRent: finishRent ? new Date(finishRent) : null,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        });
                        resolve(newCar);
                    }
                    catch (err) {
                        console.error(err);
                        reject(new Error('Gagal menambahkan mobil ke database'));
                    }
                }));
            });
        });
    }
    updateCar(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const carId = req.params.id;
            const { name, price, category, startRent, finishRent } = req.body;
            try {
                const existingCar = yield carsRepository_1.default.getCarById(carId);
                if (!existingCar) {
                    return null;
                }
                if (req.file) {
                    const fileBase64 = req.file.buffer.toString('base64');
                    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
                    const uniqueFileName = (0, multer_1.generateUniqueFileName)(file);
                    const publicId = (0, multer_1.extractPublicId)(existingCar.image);
                    if (publicId) {
                        yield cloudinary_1.default.uploader.destroy(publicId);
                    }
                    const result = yield cloudinary_1.default.uploader.upload(file, {
                        folder: 'challenge_5',
                        public_id: uniqueFileName,
                    });
                    existingCar.image = result.secure_url;
                }
                const updatedCar = yield carsRepository_1.default.updateCar(carId, {
                    id: carId,
                    name,
                    price,
                    category,
                    image: existingCar.image,
                    startRent: startRent ? new Date(startRent) : null,
                    finishRent: finishRent ? new Date(finishRent) : null,
                    createdAt: existingCar.createdAt,
                    updatedAt: new Date(),
                });
                return updatedCar;
            }
            catch (error) {
                console.error('Error updating car:', error);
                throw new Error('Internal Server Error');
            }
        });
    }
    deleteCarById(res, carId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const car = yield carsRepository_1.default.getCarById(carId);
                if (!car) {
                    (0, responseHandler_1.wrapErrorResponse)(res, 404, 'Car with the specified ID not found');
                    return;
                }
                const imageUrl = car.image;
                const publicId = yield (0, multer_1.extractPublicId)(imageUrl);
                if (publicId) {
                    yield cloudinary_1.default.uploader.destroy(publicId);
                }
                yield carsRepository_1.default.deleteCarById(carId);
                (0, responseHandler_1.wrapErrorResponse)(res, 200, 'Data Berhasil Dihapus');
            }
            catch (error) {
                console.error('Error deleting car:', error);
                (0, responseHandler_1.wrapErrorResponse)(res, 500, 'Internal Server Error');
            }
        });
    }
}
exports.default = new CarService();
