'use strict'

const express = require('express')
// const { response } = require('../app');
const { addUser } = require('../models/model');

const router = express.Router();
express.use(express.json);

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan

router.get("/users", (req, res) => {
  res.send(users)
});

router.post("/users", (req, res) => {
 const { email, name } = req.body;

 for (let i = 0; i < users.length; i++) {
  
  if (users[i].email === email) {
    res.sendStatus(404);
  }
  
 }

 addUser(email, name);

res.status(200).send("Usuario Cargado")

});

module.exports = router;

// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.