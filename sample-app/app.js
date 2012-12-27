Ext.application({
    name: 'ST',
    appFolder: 'app',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'booklist'
                    //,title: 'Test'
                    //,html: 'bla'
                }
            ]
        });
    },
    controllers: [
        'BooksController'
    ]
});