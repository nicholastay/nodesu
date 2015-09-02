var OsuApi = require('../lib/index.js');

var osu = new OsuApi({
  apiKey: 'your_api_key_here'
});

osu.getUser(osu.user.byUsername("Nexerq"), function(err, response) {
  if (err) {
    return err;
  }

  console.log("Raw output:");
  console.log(JSON.stringify(response) + "\n");
  console.log("Parsed response:");
  var parseResp = "Name: " + response.username + "\nRank: " + response.pp_rank + "\nCountry: " + response.country;
  console.log(parseResp);
  return;
});
