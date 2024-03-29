import { Router } from 'express';
import { calculateDelivery } from '../controllers/deliveryController.js';

const router = Router();

router.post('/calculate-delivery', calculateDelivery);

export default router;
