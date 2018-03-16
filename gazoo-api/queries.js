var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
//var connectionString = 'postgresql://pg-client1.cluster-cz4eha3eldmc.us-east-1.rds.amazonaws.com:5432/dev';
//var connectionString = 'postgres://66.198.240.39:5432/gbgagolf_gazoo';
//var db = pgp(connectionString);

var cn = {
  host: '66.198.240.39', // server name or IP address;
  port: 5432,
  database: 'gbgagolf_gazoo',
  user: 'gbgagolf_db',
  password: '1245KKoo@'
};
// alternative:
// var cn = 'postgres://username:password@host:port/database';

var db = pgp(cn); // database instance;

// select and return user name from id:
// db.any('SELECT * FROM player')
//   .then(user => {
//       console.log(user.name); // print user name;
//   })
//   .catch(error => {
//       console.log(error); // print the error;
//   });


function getAllPlayers(req, res, next) {
  db.any('select * from player')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllPuppies: getAllPuppies
};