"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: 'test',
    username: 'postgres',
    password: '12345',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres', // PostgreSQL veritabanı türü
});
exports.sequelize = sequelize;
