nodesu!
======

An API wrapper for the [osu! api](https://github.com/ppy/osu-api/wiki), written for and in [node.js](https://nodejs.org/).
(node + osu = nodesu!)

## Setup for your project
```
# In your project directory
$ npm install --save nicholastay/nodesu
```

## Usage
Included in example.js, it will be updated as we go as more modules get added.
Basic raw get from osu! api, but using JS objects for parameters.
```javascript
var OsuApi = require('nodesu');

var osu = new OsuApi({
  apiKey: 'your_key_here'
});

// Still heavily in development, will be updating this readme as we go
osu.raw('/get_user', {u: "Nexerq"}, function(err, response) {
  if (!err) {
    console.log(response);
    return;
  };
  console.log(err);
});
// Raw /get_user call with a name and basic callback.
```

## Setup for development
```
$ git clone https://github.com/nicholastay/nodesu.git && cd nodesu # or use a fork
# work on it...
# submit a pr maybe? or shoot an issue through??
# ???
# Profit?!
```
