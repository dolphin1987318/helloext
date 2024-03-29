//Ext.require('Ext.container.Viewport');

/*
Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello Ext',
                    html : 'Hello! Welcome to Ext JS.'
                }
            ]
        });
    }
});
*/


Ext.application({
    //requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

	controllers: [
        'Users'
    ],

	
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
			items: {
                xtype: 'userlist'
            }
        });
    }
});