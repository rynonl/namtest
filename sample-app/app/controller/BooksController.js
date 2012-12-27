Ext.define('ST.controller.BooksController', {
    extend: 'Ext.app.Controller',

    views: [
    	'book.List',
    	'book.Edit'
    ],

    stores: ['Books'],

    models: ['Book'],

    init: function() {
        this.control({
        	'booklist': {
        		itemdblclick: this.editBook
        	},
        	'bookedit button[action=save]': {
        		click: this.updateBook
        	}
        });
    },

    editBook: function(grid, record) {
    	var view = Ext.widget('bookedit');

    	view.down('form').loadRecord(record);
    },

    updateBook: function(button){
    	var win = button.up('window'),
    			form = win.down('form'),
    			record = form.getRecord(),
    			values = form.getValues();
    	record.set(values);
    	win.close();
    	this.getBooksStore().sync();
    }
});