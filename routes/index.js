var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/players', db.getAllPlayers);
router.get('/api/schedules', dbgetAllSchedules);
//router.get('/api/puppies/:id', db.getSinglePuppy);
// router.post('/api/puppies', db.createPuppy);
// router.put('/api/puppies/:id', db.updatePuppy);
// router.delete('/api/puppies/:id', db.removePuppy);

// application -------------------------------------------------------------
router.get('/', function (req, res) {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    //res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.render('index', {title: 'gazooapirepo'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
