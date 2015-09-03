var OsuApi = require('../lib/index.js');

var osu = new OsuApi({
  apiKey: 'your_api_key_here'
});

osu.getScores(osu.beatmap.byMapID(546514), osu.scores.all, osu.mode.all, function(err, response) {
  if (err) {
    return console.log (err);
  }

  console.log("Raw output:");
  console.log(JSON.stringify(response) + "\n");
  console.log("Parsed response:");
  var parseResp = "Rank #1 globally on this map: " + response[0].username + "\nScore: " + response[0].score + "\nTimestamp achieved:" + response[0].date;
  console.log(parseResp);
  return;
});
