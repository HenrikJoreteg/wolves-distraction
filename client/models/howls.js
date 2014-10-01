var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');


module.exports = Collection.extend({
    url: 'http://wolves.technology/howls',
    model: Howl,
    initialize: function () {
        this.fetch();
    },
    comparator: function (model) {
        return -1 * model.createdAt.valueOf();
    }
});
