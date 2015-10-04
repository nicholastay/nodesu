var Osu = require('../lib/index.js');

var osuChat = new Osu.chat({
  username: '',
  password: ''
});

osuChat.connect();

osuChat.on('connected', function() {
  console.log('Connected to bancho IRC.');
});

osuChat.on('error', function(data) {
  console.log('IRC client error: ' + data.message);
});

osuChat.on('pm', function(data) {
  console.log('Got a private message from ' + data.from + ' saying: ' + data.message);
});