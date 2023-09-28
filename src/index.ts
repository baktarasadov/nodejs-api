import express, { Request, Response } from 'express';
import { sequelize } from '../config/database';
import userRoutes from './routes/userRoutes';
const dotenv = require("dotenv");
const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());

// Kullanıcı rotası
app.use('/api', userRoutes);

// Express.js sunucusunu başlatma
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Sequelize ile PostgreSQL'e bağlantı yapma
sequelize
    .sync()
    .then(() => {
        console.log('PostgreSQL database connected');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
