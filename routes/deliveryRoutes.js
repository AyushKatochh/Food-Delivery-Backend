// routes/deliveryRoutes.js
import { Router } from 'express';
import { calculateDelivery } from '../controllers/deliveryController.js';

const router = Router();

/**
 * @swagger
 * /calculate-delivery:
 *   post:
 *     summary: Calculates the delivery cost
 *     description: Calculate the delivery cost based on the provided zone, organization ID, total distance, and item type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 description: The delivery zone
 *               organizationId:
 *                 type: integer
 *                 description: The ID of the organization
 *               totalDistance:
 *                 type: number
 *                 format: float
 *                 description: The total distance of the delivery in kilometers
 *               itemType:
 *                 type: string
 *                 description: The type of item being delivered
 *             required:
 *               - zone
 *               - organizationId
 *               - totalDistance
 *               - itemType
 *     responses:
 *       200:
 *         description: The total price of the delivery
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalPrice:
 *                   type: string
 *                   description: The total delivery cost, formatted as a string to two decimal places
 *       404:
 *         description: Item type or pricing information not found
 *       500:
 *         description: An error occurred while calculating the delivery cost
 */
router.post('/calculate-delivery', calculateDelivery);

export default router;
