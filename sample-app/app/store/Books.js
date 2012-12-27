Ext.define('ST.store.Books', {
	extend: 'Ext.data.Store',
	model: 'ST.model.Book',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		api: {
			read: 'data/books.json',
			update: 'data/updateBook.json'
		},
		reader: {
			type: 'json',
			root: 'users',
			successProperty: 'success'
		}
	}
});