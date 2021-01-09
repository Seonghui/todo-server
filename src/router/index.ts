import { Router } from 'express';
import api from '@/src/router/api';

const router = Router();
router.use('/api', api);

export default router;
