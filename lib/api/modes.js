var modes = {
  standard: '0',
  taiko: '1',
  ctb: '2',
  mania: '3',
  all: null, // Convenience variable for reading so you don't have to write null to define 'all'
  default: null, // Same as above, but this is for get_user_best as the default 'm' value is NOT all, it denotes standard. Another ease of reading thing.

  // Now the other way around, incase want to lookup mode by ID
  0: 'osu!standard',
  1: 'Taiko',
  2: 'Catch the Beat',
  3: 'osu!mania'
};

module.exports = modes;
