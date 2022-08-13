'use strict'

const express = require('express');
const { listUsers, addUser, switchPlan, listSeries, addSerie, play } = require('../models/model');
// const { response } = require('../app')

const router = express.Router()
module.exports = router

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan

router.get("/users", (req, res) => {
 res.json(listUsers());
});

router.post("/users", (req, res) => {

  const { email, name } = req.body;

  try {
    res.status(201).json({ msg: addUser(email, name)})
  } catch (error) {
    // console.log(error);
    res.status(400).json({ error: error.message })
  }

});

router.patch("/users/plan", (req, res) => {

  const { user } = req.query;
  
  try {
    res.status(200).json({ msg: switchPlan(user)})
  } catch (error) {
    // console.log(error);
    res.status(404).json({ error: error.message })
  }

});

router.get("/series", (req, res) => {
  res.json(listSeries());
 });


router.post("/series", (req, res) => {

  const { name, seasons, category, year } = req.body;

  try {
    res.status(201).json({ msg: addSerie(name, seasons, category, year)})
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message })
  }

});

router.get('/series/:category', (req, res) => {
  const { category } = req.params;

  try {
    res.status(200).json(listSeries(category));
  } catch (error) {
    res.status(404).json({ error: error.message })
  }

});

router.get('/play/:serie', (req, res) => {

  const { serie } = req.params;
  const { user } = req.query;

 try {
  res.status(200).json({ msg: play(serie, user)});
 } catch (error) {
  res.status(404).json({ error: error.message });
 }

});








// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.