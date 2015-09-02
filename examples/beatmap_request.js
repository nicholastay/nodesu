var OsuApi = require('../index.js');

var osu = new OsuApi({
  apiKey: 'your_api_key_here'
});

// http://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

osu.beatmaps(osu.beatmap.byMapset(222428), osu.modes.all, function(err, response) {
  if (err) {
    return err;
  };

  console.log("Raw output:");
  console.log(JSON.stringify(response) + "\n");
  console.log("Parsed response:")
  var parseResp = "Song name: " + response[0].title + "\n" + "Artist name: " + response[0].artist + "\n" + "Mapped by: " + response[0].creator + "\n" + "[" + response[0].version + "] (" + response[0].bpm + "BPM" + ") " + round(response[0].difficultyrating, 2) + "★"
  console.log(parseResp)
  return;
});
