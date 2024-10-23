
var url = 'http://mylogger.io/log';

function log(message) {
    console.log(message);
}

// making sure it can be referred to outside the modular-file
module.exports.log = log;
module.exports.endPoint = url;