const config = require('./config/config');


function loadConfig(loadOptions){    
    var env = loadOptions['environment'] || 'development';
    var configEnv = config[env];

    global.envData = configEnv;
}

module.exports = {loadConfig: loadConfig};
