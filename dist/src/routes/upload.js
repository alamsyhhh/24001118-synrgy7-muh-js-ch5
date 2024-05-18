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
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("../utils/multer"));
const cloudinary_1 = __importDefault(require("../../config/cloudinary"));
const router = express_1.default.Router();
// Endpoint untuk mengunggah gambar ke Cloudinary
router.post('/uploadImage', multer_1.default.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Mengunggah gambar ke Cloudinary
        const result = yield cloudinary_1.default.uploader.upload(req.file.path);
        // Tanggapan jika pengunggahan berhasil
        res.json({
            message: 'Image uploaded successfully',
            imageUrl: result.secure_url, // URL aman gambar yang diunggah
        });
    }
    catch (error) {
        // Tanggapan jika terjadi kesalahan
        console.error('Error uploading image:', error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}));
exports.default = router;
