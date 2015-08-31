var OsuApi = require('./index.js');

var osu = new OsuApi({
  apiKey: 'your_key_here'
});

osu.raw('/get_user', 'u=Nexerq', function(err, response) {
  if (!err) {
    console.log(response);
    return;
  };
  console.log(err);
});
