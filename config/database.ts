import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: 'test', // Veritabanı adı
    username: 'postgres', // PostgreSQL kullanıcı adı
    password: '12345', // PostgreSQL şifre
    host: 'localhost', // PostgreSQL sunucu adresi
    port: 5432, // PostgreSQL sunucu portu
    dialect: 'postgres', // PostgreSQL veritabanı türü
});

export { sequelize };
