Ext.define('Alegra.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    autoload: true,
    autoSync: true,

    model: 'Alegra.model.Personnel',

    proxy: {
        type: 'rest',
        url: 'http://contacts.emprendenegociosdigitales.com/api/contacts',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    },

    listeners: {
        write: function(store, operation){
            var record = operation.getRecords()[0],
                name = Ext.String.capitalize(operation.action),
                verb;
                
            if (name == 'Destroy') {
                verb = 'Destroyed';
            } else {
                verb = name + 'd';
            }

            Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));            
        }
    }
});
