"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../config/database");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv = require("dotenv");
const app = (0, express_1.default)();
const port = 3000;
dotenv.config();
app.use(express_1.default.json());
// Kullanıcı rotası
app.use('/api', userRoutes_1.default);
// Express.js sunucusunu başlatma
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Sequelize ile PostgreSQL'e bağlantı yapma
database_1.sequelize
    .sync()
    .then(() => {
    console.log('PostgreSQL database connected');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
