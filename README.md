# nodesu
a node.js osu! api wrapper.

**nodesu has been rewritten from the ground up since 0.6.0. All sections of programs which utilize this library probably have to be rewritten!**

**node.js >=4.0.0 must be used for this library to work!**


## Installing
```
$ npm install nodesu

# or install from GitHub
$ npm install nicholastay/nodesu
```


## Getting Started
```js
const Nodesu = require('nodesu');

const api = new Nodesu.Client('_api-key-here_');
// ... see docs/Modules:Components - typical usage = api.<component>.<function>();
// most functions return Promise objects.

// eg: get beatmap data
api.beatmaps
    .getByBeatmapId('646609')
    .then(console.log); // outputs to stdout.
```


## Links
* **Main repository**: https://github.com/nicholastay/nodesu/
* **Documentation**: https://nicholastay.github.io/nodesu/


## Documentation note
Most of what you want to find should be on the home page, or under the Modules (categorized classes).


## Contributing
Contributions are much welcome via issues or pull requests.


## License
Zlib/libpng license. Full text in the root of this repository.