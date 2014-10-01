var Model = require('ampersand-model');


module.exports = Model.extend({
    props: {
        id: 'string',
        username: 'string'
    },
    session: {
        token: ['string', false, '']
    },
    derived: {
        isLoggedIn: {
            deps: ['token'],
            fn: function () {
                if (this.token) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
});
