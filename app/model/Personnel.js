Ext.define('Alegra.model.Personnel', {
    extend: 'Alegra.model.Base',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'identification', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phonePrimary', type: 'string' },
        { name: 'phoneSecondary', type: 'string' },
        { name: 'fax', type: 'string' },
        { name: 'mobile', type: 'string' },
        { name: 'observations', type: 'string' }
    ],

    validators: [
        { type: 'length', field: 'name', min: 1 }
    ]
});
