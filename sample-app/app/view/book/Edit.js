Ext.define('ST.view.book.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.bookedit',

	title: 'Edit Book',
	layout: 'fit',
	autoShow: 'true',

	initComponent: function() {
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype: 'textfield',
						name: 'name',
						fieldLabel: 'Name'
					},
					{
						xtype: 'textfield',
						name: 'author',
						fieldLabel: 'Author'
					}
				]
			}
		];

		this.buttons = [
			{
				text: 'Save',
				action: 'save'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];

		this.callParent(arguments);
	}

});