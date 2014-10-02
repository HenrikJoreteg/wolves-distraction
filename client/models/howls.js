var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');
var playAudio = require('howlinfool');


module.exports = Collection.extend({
    url: 'http://wolves.technology/howls',
    model: Howl,
    initialize: function () {
        this.fetch();
        this.fetchRealtime();
    },
    comparator: function (model) {
        return -1 * model.createdAt.valueOf();
    },
    fetchRealtime: function () {
        var self = this;
        var socket = new WebSocket('ws://wolves.technology');

        socket.onmessage = function (event) {
            var data = JSON.parse(event.data);

            if (data.channel === self.url && data.action === 'update') {
                playAudio();
                console.log('Got a howl with id', data.id);
                self.fetchById(data.id);
            }
        };
    }
});
