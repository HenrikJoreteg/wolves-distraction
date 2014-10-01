var View = require('ampersand-view');
var PageSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.body,
    autoRender: true,
    initialize: function () {
        this.listenTo(app.router, 'page', this.handleNewPage);
    },
    render: function () {
        this.renderWithTemplate(this);
        this.pages = new PageSwitcher(this.queryByHook('page-container'));
    },
    handleNewPage: function (page) {
        this.pages.set(page);
    }
});
