/**
 * This view is an example list of people.
 */
Ext.define('Alegra.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Alegra.store.Personnel'
    ],

    title: 'Contactos',

    store: {
        type: 'personnel'
    },

    columns: [
        {
            text: 'Nombre', 
            dataIndex: 'name', 
            width: '25%', 
            field: {
                xtype: 'textfield'
            }
        },
        {
            text: 'NIT', 
            dataIndex: 'identification', 
            width: '20%', 
            field: {
                xtype: 'textfield'
            }
        },
        {
            text: 'Teléfono 1', 
            dataIndex: 'phonePrimary', 
            width: '20%', 
            field: {
                xtype: 'textfield'
            }
        },
        {
            text: 'Observaciones', 
            dataIndex: 'observations', 
            width: '20%' , 
            field: {
                xtype: 'textfield'
            }
        },
        {
            text: 'Acciones', 
            width: '10%'
        }
    ],

    /*componentLayout: [
        { text: 'Editar', action: 'edit', iconCls: 'icon-edit' },
        { text: 'Eliminar', action: 'destroy', iconCls: 'icon-delete' }
    ],*/

    listeners: {
        select: 'onItemSelected'
    },

    renderTo: document.body,

    plugins: {
        rowediting: {
            listeners: {
                cancelEdit: function(rowEditing, context) {
                    // Canceling editing of a locally added, unsaved record: remove it
                    if (context.record.phantom) {
                        store.remove(context.record);
                    }
                }
            }
        }
    },

    frame: true,
    iconCls: 'icon-user',

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            iconCls: 'icon-add',
            handler: function(){
                // empty record
                var rec = new Person();
                var rowEditing = grid.findPlugin('rowediting');
                store.insert(0, rec);
                rowEditing.startEdit(rec, 0);
            }
        }, '-', {
            itemId: 'delete',
            text: 'Delete',
            iconCls: 'icon-delete',
            disabled: true,
            handler: function(){
                var selection = grid.getView().getSelectionModel().getSelection()[0];
                if (selection) {
                    store.remove(selection);
                }
            }
        }]
    }],
});
