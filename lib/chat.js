var extend = require('xtend'),
    irc = require('irc'),
    util = require('util'),
    eventEmitter = require('events').EventEmitter;

function OsuChat (options) {
  // Bunch of default settings
  var settings = {
    server: 'irc.ppy.sh',
    port: 6667,
    username: null,
    password: null,
    channels: []
  };

  // "Extend" the user's ones in and set them into 'this' scope
  settings = extend(settings, options);
  this.settings = settings;

  // Init event emitter
  eventEmitter.call(this);

  // Init IRC client, ready to connect on call
  var ircOptions = {
    autoConnect: false,
    port: this.settings.port,
    userName: this.settings.username,
    realName: this.settings.username,
    channels: this.settings.channels,
    password: this.settings.password
  };
  this.client = new irc.Client(this.settings.server, this.settings.username, ircOptions);
}

// Inherit the event emitter so we can emit events on message
util.inherits(OsuChat, eventEmitter);

OsuChat.prototype.connect = function() {
  this.client.connect();

  var self = this;
  // Setup event listeners to be emitted over local events to library user
  this.client.addListener('registered', function (message) {
    self.emit('connected', {message: message});
  });

  this.client.addListener('message', function (from, to, message) {
    self.emit('message', {from: from, to: to, message: message});
  });

  this.client.addListener('action', function (from, to, text, message) {
    self.emit('action', {from: from, to: to, text: text, message: message});
  });

  this.client.addListener('pm', function (from, message) {
    self.emit('pm', {from: from, message: message});
  });

  this.client.addListener('error', function(message) {
    self.emit('error', {message: message});
  });
};

module.exports = OsuChat;