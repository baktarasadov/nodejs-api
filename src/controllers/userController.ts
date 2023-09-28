import { Request, Response } from 'express';
import { User } from '../models/user';
import { userSchema } from '../../config/validation';

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Kullanıcıları alırken bir hata oluştu.' });
    }
}


export async function saveUser(req: Request, res: Response) {
    const { name } = req.body;
    try {
        const { error } = userSchema.validate({ name });
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }
    } catch (error) {
        res.status(500).json({ error: 'Kullanıcıları alırken bir hata oluştu.' });
    }
}