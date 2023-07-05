const express = require('express');
const router = express.Router();


//routes
//Index Route
router.get('/', (req,res) => {
    res.status(200).json({status: 'Success', msg: 'Show all bootcamps'})
})

//New Route
router.get('/new', (req,res) => {
    res.status(200).json({status: 'Success', msg: 'New bootcamps'})
})

//Delete Route
router.delete('/:id', (req,res) => {
    res.status(200).json({status: 'Success', msg: `Delete BootCamp at ${req.params.id}`})
})

//Update Route
router.put('/:id', (req,res) => {
    res.status(200).json({status: 'Success', msg: `Update Bootcamp at ${req.params.id}`})
});

//Create route
router.post('/', (req,res) => {
    res.status(200).json({status: 'Success', msg: 'Create Bootcamp'})
})

//Edit Route
router.get('/:id', (req,res) => {
    res.status(200).json({status: 'Success', msg: `Edit Bootcamp at ${req.params.id}`})
});

//Show Route
router.get('/:id', (req,res) => {
    res.status(200).json({status: 'Success', msg: `Show Bootcamp at ${req.params.id}`})
});


module.exports = router