import express from 'express';
import { getUsers, saveUser } from '../controllers/userController';

const router = express.Router();

// Kullanıcı rotası
router.get('/users', getUsers);
router.post('/users', saveUser)

export default router;
