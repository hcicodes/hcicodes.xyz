let settings = {
    DEBUG: false,
    SERVER_ORIGIN: '',
}

function initSettings() {
    require('dotenv').config();

    let debug;
    if (process.env.REACT_APP_DEBUG === 'true')
        debug = true;
    else
        debug = false;

    settings = {
        ...settings,
        DEBUG: debug
    }

    if (settings.DEBUG) {
        settings = {
            ...settings,
            SERVER_ORIGIN: 'http://localhost:8080'
        }
    } else {
        settings = {
            ...settings,
            SERVER_ORIGIN: 'https://hcicodes-server.herokuapp.com'
        }
    }
}

export { settings, initSettings }