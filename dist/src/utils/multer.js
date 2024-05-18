"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueFileName = void 0;
const multer_1 = __importDefault(require("multer"));
// Konfigurasi penyimpanan untuk multer
const storage = multer_1.default.memoryStorage();
// Fungsi untuk memeriksa apakah tipe file yang diunggah adalah gambar
// const fileFilter = (req: any, file: any, cb: any) => {
//   // Daftar tipe file yang diizinkan
//   const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
//   const res: Response = req.res;
//   let error = null;
//   // Periksa apakah tipe file yang diunggah termasuk dalam daftar tipe yang diizinkan
//   console.log(file);
//   if (file.length > 1) {
//     const error = res.status(400).json({
//       status: 400,
//       message: 'Hanya diperbolehkan mengunggah satu file gambar',
//     });
//   }
//   //   cb(error, false);
//   // }
//   if (allowedMimeTypes.includes(file.mimetype)) {
//     cb(null, true); // Izinkan pengunggahan file gambar
//   } else {
//     error = res.status(400).json({
//       status: 400,
//       message:
//         'Hanya diperbolehkan untuk mengunggah file gambar (JPG, PNG, GIF)!',
//     });
//     cb(error, false); // Menolak pengunggahan file dan mengirimkan respons
//   }
// };
const fileFilter = (req, file, cb) => {
    // Daftar tipe file yang diizinkan
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const res = req.res;
    // Periksa jumlah file yang diunggah
    if (req.files && req.files.length > 1) {
        const error = res.status(400).json({
            status: 400,
            message: 'Hanya diperbolehkan mengunggah satu file gambar',
        });
        cb(error, false);
    }
    else {
        // Periksa apakah tipe file yang diunggah termasuk dalam daftar tipe yang diizinkan
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true); // Izinkan pengunggahan file gambar
        }
        else {
            const error = res.status(400).json({
                status: 400,
                message: 'Hanya diperbolehkan untuk mengunggah file gambar (JPG, PNG, GIF)!',
            });
            cb(error, false); // Menolak pengunggahan file dan mengirimkan respons
        }
    }
};
const upload = (0, multer_1.default)({ storage, fileFilter });
exports.default = upload;
// Fungsi untuk menghasilkan nama file acak
function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
// Fungsi untuk mengambil ekstensi file
function getFileExtension(fileName) {
    return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);
}
// Fungsi untuk membuat nama file unik dengan waktu saat diunggah dan kode acak
function generateUniqueFileName(fileName) {
    const timestamp = new Date().getTime();
    const randomCode = generateRandomCode(8);
    const fileExtension = getFileExtension(fileName);
    return `${timestamp}_${randomCode}.${fileExtension}`;
}
exports.generateUniqueFileName = generateUniqueFileName;
