import express, { Router } from 'express';
import carController from '../controllers/carsController';
import upload from '../middlewares/multer';

const router: Router = express.Router();

router.get('/getAllCars', carController.getAllCars);
router.get('/getDetailCar/:id', carController.getCarById);
router.post('/createCar', upload.single('image'), carController.createCar);
router.put('/updateCar/:id', upload.single('image'), carController.updateCar);
router.delete('/deleteCar/:id', carController.deleteCar);

export { router as carRoutes };
