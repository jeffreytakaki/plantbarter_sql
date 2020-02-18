const express = require('express');
const router = express.Router();
const connection = require('../database/database_connect');
const passport = require('passport');
const Plant = require("../models/Plant");

// Create Plant
router.post('/', function (req, res) {
    let insert_plant = `INSERT INTO plants(name, species, image_url) VALUES('${req.body.name}', '${req.body.species}', '${req.body.image_url}');`;
    let insert_usersplant = `INSERT INTO users_plants(user_id, plant_id) VALUES(${req.user}, LAST_INSERT_ID());`; 

    connection.query(insert_plant, (error, results) => {
        console.log('plants result', results)
        if(error) res.json(error);

        connection.query(insert_usersplant, (error, results) => {
            console.log('users_plants result', results)
            if(error) res.json(error);

            res.json(results);
        })
    });
});

// update a plant 
router.put('/:plant_id', (req, res) => {
    connection.query(`SELECT * FROM plants WHERE plant_id = ${req.params.plant_id}`, (error, results) => {
        if (error) res.json(error);

        let updateColumns = [];
        for (const item in req.body) {
            if(item == 'name' || item == 'species') {
                updateColumns.push(`${item} = '${req.body[item]}'`);
            }
        }

        const valuesQuery = updateColumns.toString();
        connection.query(`UPDATE plants SET ${valuesQuery} WHERE plant_id = ${req.params.plant_id};`, (error, results) => {
            console.log('results', results)
            res.json(results)
        })
    });
});

// delete a plant
router.delete('/:plant_id', function (req, res) {
    const delete_plant = `DELETE FROM plants WHERE plant_id = ${req.body.plant_id} CASCADE;`;
    connection.query(delete_plant, (error, results) => {
        console.log('plants DELETE', results)
        if(error) res.json(error);
        res.json(results);
    });
});



module.exports = router;