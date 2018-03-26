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

// var db = pgp(cn);

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword",
//   database: "mydb"
// });
function getAllPlayers(){
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name FROM player", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}

// function getAllPlayers(req, res, next) {
//   db.any('SELECT name FROM player')
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           players: data,
//           message: 'Retrieved all players'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }


module.exports = {
  getAllPlayers: getAllPlayers
  //getSinglePuppy: getSinglePuppy,
  //createPuppy: createPuppy,
  //updatePuppy: updatePuppy,
  //removePuppy: removePuppy
};


