const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM shopping_list`;
    pool.query(sqlText)
        .then((result) => {
            console.log(result.rows)
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.post('/', (req,res)=> {
   /*  const newListItem = req.body; */
    const name = req.body.name
    const quantity = req.body.quantity
    const unit = req.body.unit
    
    let sqlText = `INSERT INTO shopping_list (name, quantity, unit) VALUES ($1, $2, $3)`;

    pool.query(sqlText, [name, quantity, unit])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    });
});

router.put(`/:id`, (req, res) => {
    console.log('Recieved PUT request..');
    let itemId = req.params.id;
    const queryText = 
        `UPDATE shopping_list SET "isPurchased"='true' WHERE id=$1`;
    pool.query(queryText, [itemId])
    .then((result) => {
            console.log('Updated succesfully!');
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error making query ${queryText}`, err);
            res.sendStatus(500);
        });
}); // END PUT route
module.exports = router;