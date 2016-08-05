var Osu = require('../lib/index.js');

var osuApi = new Osu.api({
  apiKey: 'your_api_key_here'
});

// http://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function getByCallback(cb) {
  osuApi.getBeatmaps(osuApi.beatmap.byMapset(222428), osuApi.mode.all, function(err, response) {
    if (err) {
      return console.log("Callback response err: " + err);
    }

    console.log("Callback response: ");
    console.log("Raw output:");
    console.log(JSON.stringify(response) + "\n");
    console.log("Parsed response:");
    var parseResp = "Song name: " + response[0].title + "\n" + "Artist name: " + response[0].artist + "\n" + "Mapped by: " + response[0].creator + "\n" + "[" + response[0].version + "] (" + response[0].bpm + "BPM" + ") " + round(response[0].difficultyrating, 2) + "★";
    console.log(parseResp);
    return cb();
  });
}

function getByPromise() {
  osuApi.getBeatmaps(osuApi.beatmap.byMapset(83560), osuApi.mode.all)
  .then(function(response) {
    console.log("Promise response: ");
    console.log("Raw output:");
    console.log(JSON.stringify(response) + "\n");
    console.log("Parsed response:");
    var parseResp = "Song name: " + response[0].title + "\n" + "Artist name: " + response[0].artist + "\n" + "Mapped by: " + response[0].creator + "\n" + "[" + response[0].version + "] (" + response[0].bpm + "BPM" + ") " + round(response[0].difficultyrating, 2) + "★";
    console.log(parseResp);
    console.log("Total API calls: "+osuApi.getRequestsCount());
    return;
  })
  .catch(function(err) {
    console.log("Promise response err: " + err)
  });
}

// CB first then PROMISE
getByCallback(function() {getByPromise()});
