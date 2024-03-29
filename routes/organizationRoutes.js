// routes/organizationRoutes.js
import { Router } from 'express';
import { getAllOrganizations } from '../controllers/organizationController.js';

const router = Router();

/**
 * @swagger
 * /organizations:
 *   get:
 *     summary: Retrieves a list of organizations
 *     description: Fetches all the organizations from the database
 *     responses:
 *       200:
 *         description: A list of organizations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organization'
 *       500:
 *         description: An error occurred while fetching organizations
 */
router.get('/organizations', getAllOrganizations);

export default router;
