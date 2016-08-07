var schemaPrefix = 'osu://';

function generate(command) {
    return schemaPrefix + command + '/';
}

exports.multiplayer = function(matchId, password) {return generate('mp') + matchId + (password ? '/' + password : '');}
exports.editor = function(timings) {return generate('edit') + timings;}
exports.chatChannel = function(channel) {return generate('chan') + '#' + channel.replace('#', '');}
exports.directDownload = function(mapsetId) {return generate('dl') + mapsetId;}
exports.spectate = function(id) {return generate('spectate') + id;}