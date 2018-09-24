let express = require('express');
let router = express.Router();
const { getSummoner, getMatchesBySummoner, getMatch } = require('../lolclient');

/* GET users listing. */
router.get('/summoner/:summonerName/:serverName', function(req, res) {
  let serverName = req.params.serverName;
  let summonerName = req.params.summonerName;

  getSummoner(serverName, summonerName)
    .then(summoner => res.json(summoner))
    .catch(err => {
      res.status(err.statusCode ? err.statusCode : 404);
      res.json("Could not get Summoner data");
    });
});

/* GET matches listing. */
router.get('/matches/:accountId/:serverName', function(req, res) {
  let serverName = req.params.serverName;
  let accountId = req.params.accountId;

  getMatchesBySummoner(serverName, accountId)
    .then(matches => res.json(matches))
    .catch(err => {
      res.status(err.statusCode ? err.statusCode : 404);
      res.json("Could not get Match List data");
    });
});

router.get('/match/:matchId/:serverName', function(req, res) {
  let serverName = req.params.serverName;
  let matchId = req.params.matchId;

  getMatch(serverName, matchId)
    .then(match => res.json(match))
    .catch(err => {
      res.status(err.statusCode ? err.statusCode : 404);
      res.json("Could not get Match data");
    });
});

module.exports = router;
