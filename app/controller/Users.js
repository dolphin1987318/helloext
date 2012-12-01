Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: ['Users'],
    
    views: [
        'user.List',
        'user.Edit'
    ],
    
    models: ['User'],

    init: function() {
        this.control({
            'userlist': {
                render: this.onPanelRendered,
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit');      //equals to  Ext.create('widget.useredit')
        view.down('form').loadRecord(record);   //down function: accepts a ComponentQuery selector to quickly find any child component
    },

    updateUser: function(button) {
        //console.log('clicked the Save button - id: ' + button.id);
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record.set(values);
        win.close();
        // synchronize the store after editing the record
        this.getUsersStore().sync();
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});