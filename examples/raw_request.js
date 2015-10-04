var Osu = require('../lib/index.js');

var osuApi = new Osu.api({
  apiKey: 'your_api_key_here'
});

osuApi.request('/get_user', {u: "Nexerq"}, function(err, response) {
  if (!err) {
    console.log(response);
    return;
  }
  return console.log(err);
});
