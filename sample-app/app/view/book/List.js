Ext.define('ST.view.book.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.booklist',

	title: 'All Books',

	initComponent: function() {
		this.store = {
			fields: ['name', 'author'],
			data: [
				{name: 'Coders at Work', author: 'Peter Siebel'},
				{name: 'The Art of Agile Development', author: 'Shore & Warden'}
			]
		};

		this.columns = [
			{header: 'Name', dataIndex: 'name', flex: 1},
			{header: 'Author', dataIndex: 'author', flex: 1}
		];

		this.callParent(arguments);
	}
});