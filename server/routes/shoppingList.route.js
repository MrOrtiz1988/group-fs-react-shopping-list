const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
   
    const sqlText = `SELECT * FROM shopping_list ORDER BY name ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

router.post('/', (req, res) => {
    const shoppingList = req.body;

    const sqlText = `INSERT INTO shopping_list ("name", "quantity", "unit")
                     VALUES ($1, $2, $3)`;

    pool.query(sqlText, [shoppingList.item, shoppingList.quantity, shoppingList.unit])
        .then((result) => {
            console.log(`Added item to the database`, shoppingList);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


module.exports = router;