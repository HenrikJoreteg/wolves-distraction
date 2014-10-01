var Hapi = require('hapi');
var server = Hapi.createServer(3000, 'localhost');
var moonboots = require('moonboots_hapi');


server.pack.register({
    plugin: moonboots,
    options: {
        appPath: '/{p*}',
        moonboots: {
            main: __dirname + '/client/app.js',
            developmentMode: true
        }
    }
}, function () {
    server.start();
    console.log('server running at http://localhost:3000');
});
