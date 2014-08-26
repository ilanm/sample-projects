/*
 * File: app/view/Navigation.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AR.view.Navigation', {
    extend: 'Ext.navigation.View',
    alias: 'widget.arnavigation',

    requires: [
        'AR.view.Tabpanel',
        'Ext.NavigationView',
        'Ext.navigation.View'
    ],

    config: {
        navigationBar: {
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    id: 'appmenu',
                    itemId: 'mybutton',
                    iconCls: 'menu'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    hidden: true,
                    id: 'saveBtn',
                    itemId: 'saveBtn',
                    ui: 'round',
                    text: 'Save'
                }
            ]
        },
        items: [
            {
                xtype: 'artabpanel'
            }
        ],
        listeners: [
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#appmenu'
            }
        ]
    },

    onMybuttonTap: function(button, e, eOpts) {
        var menu =Ext.create('AR.view.OverFlowMenu');


        Ext.Viewport.setMenu(menu, {
             side: 'right',
             reveal: false,
            cover:true
         });

        Ext.Viewport.toggleMenu('right');
    }

});