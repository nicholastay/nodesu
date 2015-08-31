var OsuApi = require('./index.js');

var osu = new OsuApi('your_api_key');

osu.raw('/get_user', 'u=Nexerq', function(err, response) {
  if (!err) {
    console.log(response)
  }
});
