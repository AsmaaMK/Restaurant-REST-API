const express = require('express');
const router = express.Router();
const Client = require('./client');
const Meal = require('./meal');
const Order = require('./order');

// meal routs
router.get('/meal', Meal.get);
router.post('/meal', Meal.post);
router.put('/meal/:id', Meal.put);
router.delete('/meal/:id', Meal.delete);

// client routs
router.get('/client', Client.get);
router.post('/client', Client.post);
router.put('/client/:id', Client.put);
router.delete('/client/:id', Client.delete);

// order routs
router.get('/order', Order.get);
router.post('/order', Order.post);
router.put('/order/:id', Order.put);
router.delete('/order/:id', Order.delete);

module.exports = router;