const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');



const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listing', onListing);
console.log('API rodando na porta' + port);


/**
 * Noramalize Port Server
 * @param {*} val 
 */
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}


/**
 * Gerenciando Erros do Servidor
 * @param {*} error 
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Init Debug function()
 * API NodeJs
 */
function onListing() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listing on ' + bind);
}