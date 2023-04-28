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

router.put('/:id', (req, res) => {

    let listId = req.params.id;
    console.log('here is our id', req.params.id);
    let bought = req.body.is_purchased;
    console.log('This should always be complete', req.body.status);
    let sqlText = `
        UPDATE "shopping_list"
        SET "is_purchased"=$1
        WHERE "id"=$2;
        `
    let sqlValues = [bought, listId];
      
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
        res.sendStatus(200);
        })
        .catch((dbErr) => {
        console.log('PUT /shoppingList/:id fail:', dbErr);
        res.sendStatus(500);
          })
    })

    router.delete('/:id', (req, res) => {
        console.log(req.params);
        
        let listId = req.params.id;
      
        let sqlText = `
          DELETE FROM "shopping_list"
            WHERE "id"=$1;
        `
        let sqlValues = [listId]
      
        pool.query(sqlText, sqlValues)
          .then((dbRes) => {
   
            res.sendStatus(200);
          })
          .catch((dbErr) => {
            console.log('delete /creatures error:', dbErr);
          
            res.sendStatus(500);
          })
      })
module.exports = router;