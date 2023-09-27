import express, { Express } from 'express';

const app: Express = express();
const port: number = 3000;
app.use(express.json());
const mainHost: string = '/api/users';

const users: User[] = [];

for (let i = 1; i <= 20; i++) {
  const user: User = {
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
  const id: string = req.params.id;
  const findUser = users.find(user => user.id === Number(id));
  if (findUser) {
    res.send(findUser);
  }
  res.send("User not found");
});

app.post(`${mainHost}/new`, (req, res) => {
  const { name, surname, email, age, id } = req.body;

  if (!name || !surname || !email || !age || !id) {
    return res.status(400).send("Eror");
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



interface User {
  id: number
  name: string;
  surname: string;
  age: number;
  email: string;
}