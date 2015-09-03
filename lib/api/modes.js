var modes = {
  standard: '0',
  taiko: '1',
  ctb: '2',
  mania: '3',
  all: null, // Convenience variable for reading so you don't have to write null to define 'all'
  default: null // Same as above, but this is for get_user_best as the default 'm' value is NOT all, it denotes standard. Another ease of reading thing.
};

module.exports = modes;
