var OsuApi = require('../index.js');

var osu = new OsuApi({
  apiKey: 'your_api_key_here'
});

// http://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

osu.beatmaps(osu.beatmap.byMapset(222428), osu.modes.all, function(err, response) {
  if (!err) {
    console.log("Raw output:");
    console.log(JSON.stringify(response) + "\n");
    console.log("Parsed response:")
    var parseResp = "Song name: " + response.title + "\n" + "Artist name: " + response.artist + "\n" + "Mapped by: " + response.creator + "\n" + "[" + response.version + "] (" + response.bpm + "BPM" + ") " + round(response.difficultyrating, 2) + "★"
    console.log(parseResp)
    return;
  }
  console.log(err);
});
