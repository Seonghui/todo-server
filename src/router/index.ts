import { Router } from 'express';
import lists from '@/src/router/lists';

const router = Router();
router.use('/lists', lists);

export default router;
