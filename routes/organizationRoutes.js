import { Router } from 'express';
import { getAllOrganizations } from '../controllers/organizationController.js';

const router = Router();

router.get('/organizations', getAllOrganizations);

export default router;
