var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
//var connectionString = 'postgres://localhost:5432/puppies';
//var db = pgp(connectionString);
var cn = {
    host:'66.198.240.39', 
    port:5432,
    database: 'gbgagolf_gazoo',
    user: 'gbgagolf_db',
    password: '1245KKoo@'
};

var db = pgp(cn);

function getAllPlayers(req, res, next) {
  db.any('select * from player')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: JSON.parse(data),
          message: 'Retrieved ALL players'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllPlayers: getAllPlayers
  //getSinglePuppy: getSinglePuppy,
  //createPuppy: createPuppy,
  //updatePuppy: updatePuppy,
  //removePuppy: removePuppy
};


