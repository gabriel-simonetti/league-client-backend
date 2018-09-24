const Q = require('q');
const https = require('https');
const config = require('./config');
const { Kayn } = require('kayn');

const kayn = Kayn(process.env.RIOT_API_KEY)();

module.exports =
{
  getSummoner: (serverName, summonerName) => {
    let server = config.servers[process.env.DEFAULT_SERVER];
    if(config.allowedServers.indexOf(serverName) !== -1){
      server = config.servers[serverName];
    }
    return kayn.Summoner.by.name(summonerName)
      .region(server)
  },

  getMatchesBySummoner: (serverName, accountId) => {
    let server = config.servers[process.env.DEFAULT_SERVER];
    if(config.allowedServers.indexOf(serverName) !== -1){
      server = config.servers[serverName];
    }
    return kayn.Matchlist.by.accountID(accountId)
      .region(server)
  },

  getMatch: (serverName, matchId) => {
    let server = config.servers[process.env.DEFAULT_SERVER];
    if(config.allowedServers.indexOf(serverName) !== -1){
      server = config.servers[serverName];
    }
    return kayn.Match.get(matchId)
      .region(server)
  }
};