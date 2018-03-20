var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/players', db.getAllPlayers);
// router.get('/api/puppies/:id', db.getSinglePuppy);
// router.post('/api/puppies', db.createPuppy);
// router.put('/api/puppies/:id', db.updatePuppy);
// router.delete('/api/puppies/:id', db.removePuppy);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'gazooapirepo'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
