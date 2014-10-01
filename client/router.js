var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var HowlsPage = require('./pages/howls');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'howls': 'howls',
        'login': 'login',
        'auth/callback': 'authCallback'
    },

    home: function () {
        this.trigger('page', new HomePage());
    },

    howls: function () {
        this.trigger('page', new HowlsPage());
    },

    login: function () {
        var baseUrl = 'http://wolves.technology/authorize?redirect_uri=';

        window.location = baseUrl + encodeURIComponent(window.location.origin + '/auth/callback')
    }
});
