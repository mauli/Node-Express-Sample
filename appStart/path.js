const path = require('path');

module.exports = function(global) {

    var path = require('path');

    global.rootRequire = function(name) {
        var fileLocation = __dirname + '/../' + name;
        var fileInfo = path.normalize(__dirname + '/../' + name);

        if (!fileInfo) {
           console.log('Cannot load file at the specified path', name)
        }

        return require(fileInfo);
    };

};

