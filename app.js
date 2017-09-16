/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Alegra.Application',

    name: 'Alegra',

    requires: [
        // This will automatically load all classes in the Alegra namespace
        // so that application classes do not need to require each other.
        'Alegra.*'
    ],

    // The name of the initial view to create.
    mainView: 'Alegra.view.main.Main'
});
