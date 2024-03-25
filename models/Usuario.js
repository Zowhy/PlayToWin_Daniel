const db = require("../db/conn");
const { DataTypes } = require("sequelize");

const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extend: true,
  })
);

const Usuario = db.define("Usuario", {
  nickname: {
    type: DataTypes.STRING,
    required: true,
  },
  nome: {
    type: DataTypes.STRING,
    required: true,
  },
});

modedule.exports = Usuario;
