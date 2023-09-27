"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const mainHost = '/api/users';
const users = [];
for (let i = 1; i <= 20; i++) {
    const user = {
        id: i,
        name: "User" + i,
        surname: "Surname" + i,
        age: Math.floor(Math.random() * 30) + 20,
        email: "user" + i + "@example.com"
    };
    users.push(user);
}
app.get(`${mainHost}`, (req, res) => {
    res.send(users);
});
app.get(`${mainHost}:id`, (req, res) => {
    const id = req.params.id;
    const findUser = users.find(user => user.id === Number(id));
    if (findUser) {
        res.send(findUser);
    }
    res.send("User not found");
});
app.post(`${mainHost}/new`, (req, res) => {
    const { name, surname, email, age, id } = req.body;
    if (!name || !surname || !email || !age || !id) {
        return res.status(400).send('Tüm alanlar gereklidir.');
    }
    const newUser = {
        name,
        surname,
        age,
        email,
        id
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
app.listen(port, () => {
    console.log(port);
});
