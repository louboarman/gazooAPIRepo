var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var cn = {
    host:'66.198.240.39', 
    port:5432,
    database: 'gbgagolf_gazoo',
    user: 'gbgagolf_db',
    password: '1245KKoo@'
};

var db = pgp(cn);

function getAllPlayers(req, res, next) {
  db.any('SELECT * FROM player ORDER BY team, hdcpdiff')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          players: data,
          message: 'Retrieved all players'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllSchedules(req, res, next) {
  db.any('SELECT * FROM schedule ORDER BY weekid')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          schedules: data,
          message: 'Retrieved all schedules'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getMatchMembersforMatchID(req,res,next){
  var matchID = parseInt(req.params.id);
  db.any('SELECT * FROM gbga_getmatchmembersformatch($1)', matchID)
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        schedules: data,
        message: 'Retrieved all members'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function getAllMatches(req, res, next) {
  db.any('SELECT * FROM match ORDER BY weekid')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          matches: data,
          message: 'Retrieved all matches'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getMatchDetailsforMatchID(req,res,next){
  var matchID = parseInt(req.params.id);
  db.any('SELECT * FROM gbga_getmatchdetailsformatch($1)', matchID)
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        schedules: data,
        message: 'Retrieved all details'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function getAfterGolfHoles(req,res,next){
  var players = parseInt(req.params.players);
  var nine = parseInt(req.params.nine);
  db.any('SELECT * FROM gbga_getaftergolf($1, $2)', players, nine)
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        schedules: data,
        message: 'Retrieved all details'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

module.exports = {
  getAllPlayers: getAllPlayers,
  getAllSchedules: getAllSchedules,
  getMatchMembersforMatchID:getMatchMembersforMatchID,
  getAllMatches: getAllMatches,
  getMatchDetailsforMatchID: getMatchDetailsforMatchID,
  getAfterGolfHoles: getAfterGolfHoles

};


