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
// ... see docs - typical usage = api.<component>.<function>();
```


## Links
* **Main repository**: https://github.com/nicholastay/nodesu/
* **Documentation**: https://nicholastay.github.io/nodesu/


## Contributing
Contributions are much welcome via issues or pull requests.


## License
Zlib/libpng license. Full text in the root of this repository.