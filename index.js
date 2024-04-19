require("dotenv").config();
const express = require("express");
const conn = require("./db/conn");
const Jogo = require("./models/Jogo");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/jogo/novo", async (req, res) => {
  const dadosJogo = {
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    precoBase: req.body.precoBase
  }
  const jogo = await Jogo.create(dadosJogo);
  res.send("Jogo cadastrado com id" + jogo.id);
});

app.get("/jogo/novo", (req, res) => {
  res.sendFile(`${__dirname}/views/Jogo.html`);
});


app.listen(8000, () => {
  console.log("abriu");
});

conn
  .sync()
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((err) => {
    console.log("Ocorreu um erro: " + err);
  });