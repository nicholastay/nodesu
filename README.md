<div align="center">
<h1>nodesu!</h1>
a node.js osu! api wrapper.

<p>

[![NPM](https://nodei.co/npm/nodesu.png?downloads=true&stars=true)](https://nodei.co/npm/nodesu/)

</p>

</div>



## Installing
**node.js >=4.0.0** must be used for this library to work!


```
$ npm install nodesu

# or install from GitHub
$ npm install nicholastay/nodesu
```

*note!: nodesu has been rewritten from the ground up since v0.6.0. All sections of programs which utilize this library probably have to be rewritten if migrating from previous versions!*



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
Most of what you want to find should be under the "Client" class, or the Modules section (categorized classes).



## Contributing
Contributions are much welcome via issues or pull requests.



## License
Zlib/libpng license. Full text in the root of this repository.