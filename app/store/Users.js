Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,         //means the Store will ask its Proxy to load that data immediately.

    proxy: {                //Proxies are the way to load and save data from a Store or a Model in Ext JS 4.  There are proxies for AJAX, JSON-P and HTML5 localStorage among others.
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/update_callback.php'
        },
        reader: {           //The reader is responsible for decoding the server response into a format the Store can understand.
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});