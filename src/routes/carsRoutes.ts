import express, { Router } from 'express';
import carController from '../controllers/carsController';
import upload from '../middlewares/multer';

const router: Router = express.Router();

router.get('/cars', carController.getAllCars);
router.get('/cars/:id', carController.getCarById);
router.post('/Cars', upload.single('image'), carController.createCar);
router.put('/cars/:id', upload.single('image'), carController.updateCar);
router.delete('/cars/:id', carController.deleteCar);

export { router as carRoutes };
