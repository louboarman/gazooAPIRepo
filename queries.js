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
  db.any('SELECT to_json(array_agg(player)) FROM player')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: '[{"id":1,"name":"Lou Boarman","role":3,"email":"louboarman@yahoo.com","phone":"","picture":"","team":11,"teampoints":123,"scavg":37.6,"pavg":16.39,"gir":60,"psaves":48,"birdies":13,"pointswon":120,"hdcpdiff":1.02,"ghdcp":1,"whdcp":1,"bhdcp":1},{"id":2,"name":"Dave Maag","role":0,"email":"dave@prestigeinteriorsinc.com","phone":"","picture":"","team":11,"teampoints":123,"scavg":49.42,"pavg":17.12,"gir":12,"psaves":10,"birdies":3,"pointswon":54,"hdcpdiff":10.94,"ghdcp":11,"whdcp":12,"bhdcp":12},{"id":3,"name":"Walt Lawrence","role":0,"email":"walt.lawrence@sbcglobal.net","phone":"","picture":"","team":5,"teampoints":157,"scavg":42,"pavg":16.29,"gir":39,"psaves":23,"birdies":8,"pointswon":64,"hdcpdiff":5.05,"ghdcp":5,"whdcp":5,"bhdcp":6},{"id":4,"name":"Steve Pruneski","role":0,"email":"spruneski@rlbllp.com","phone":"","picture":"","team":5,"teampoints":157,"scavg":44.21,"pavg":17.65,"gir":33,"psaves":17,"birdies":3,"pointswon":68,"hdcpdiff":6.72,"ghdcp":7,"whdcp":7,"bhdcp":8},{"id":5,"name":"Test Player","role":0,"email":" ","phone":"","picture":"","team":6,"teampoints":82,"scavg":50.59,"pavg":16.81,"gir":17,"psaves":11,"birdies":1,"pointswon":50,"hdcpdiff":9.72,"ghdcp":10,"whdcp":10,"bhdcp":11},{"id":6,"name":"Test Player2","role":0,"email":"louboarman@yahoo.com","phone":"3306067926","picture":"","team":1,"teampoints":123,"scavg":37.6,"pavg":16.39,"gir":60,"psaves":48,"birdies":13,"pointswon":129,"hdcpdiff":1.02,"ghdcp":1,"whdcp":1,"bhdcp":1},{"id":7,"name":"Dan Walpole","role":0,"email":" ","phone":"","picture":"","team":2,"teampoints":217,"scavg":43.16,"pavg":16.59,"gir":29,"psaves":16,"birdies":6,"pointswon":94,"hdcpdiff":5.95,"ghdcp":6,"whdcp":6,"bhdcp":7},{"id":8,"name":"Test Player3","role":0,"email":" ","phone":"","picture":"","team":6,"teampoints":82,"scavg":50.59,"pavg":16.81,"gir":17,"psaves":11,"birdies":1,"pointswon":50,"hdcpdiff":9.72,"ghdcp":10,"whdcp":10,"bhdcp":11},{"id":9,"name":"Test Player4","role":0,"email":"louboarman@yahoo.com","phone":"3306067926","picture":"","team":1,"teampoints":123,"scavg":37.6,"pavg":16.39,"gir":60,"psaves":48,"birdies":13,"pointswon":129,"hdcpdiff":1.02,"ghdcp":1,"whdcp":1,"bhdcp":1},{"id":10,"name":"Denny Riley","role":0,"email":" ","phone":"","picture":"","team":2,"teampoints":217,"scavg":46.53,"pavg":16.21,"gir":20,"psaves":19,"birdies":0,"pointswon":66,"hdcpdiff":8.62,"ghdcp":9,"whdcp":9,"bhdcp":10},{"id":11,"name":"Reggie Lawrence","role":0,"email":" ","phone":"","picture":"","team":3,"teampoints":199,"scavg":40.7,"pavg":15.44,"gir":31,"psaves":29,"birdies":6,"pointswon":90,"hdcpdiff":4.03,"ghdcp":4,"whdcp":4,"bhdcp":5},{"id":12,"name":"Joe Moran","role":0,"email":" ","phone":"","picture":"","team":3,"teampoints":199,"scavg":46.22,"pavg":17,"gir":24,"psaves":11,"birdies":5,"pointswon":72,"hdcpdiff":7.75,"ghdcp":8,"whdcp":8,"bhdcp":9},{"id":13,"name":"Bob Fisher","role":0,"email":" ","phone":"","picture":"","team":4,"teampoints":167,"scavg":45.6,"pavg":16.8,"gir":24,"psaves":20,"birdies":1,"pointswon":68,"hdcpdiff":8.31,"ghdcp":9,"whdcp":9,"bhdcp":9},{"id":14,"name":"Chris Niekamp","role":0,"email":" ","phone":"","picture":"","team":4,"teampoints":167,"scavg":46.81,"pavg":16.44,"gir":24,"psaves":8,"birdies":6,"pointswon":64,"hdcpdiff":8.06,"ghdcp":8,"whdcp":9,"bhdcp":9},{"id":15,"name":"Todd Cerankowski","role":0,"email":" ","phone":"","picture":"","team":6,"teampoints":82,"scavg":0,"pavg":0,"gir":0,"psaves":0,"birdies":0,"pointswon":0,"hdcpdiff":8.31,"ghdcp":9,"whdcp":9,"bhdcp":9},{"id":16,"name":"Chuck Jabbour","role":0,"email":" ","phone":"","picture":"","team":6,"teampoints":82,"scavg":50.59,"pavg":16.81,"gir":17,"psaves":11,"birdies":1,"pointswon":50,"hdcpdiff":9.72,"ghdcp":10,"whdcp":10,"bhdcp":11}]',
          message: 'Retrieved all players'
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


