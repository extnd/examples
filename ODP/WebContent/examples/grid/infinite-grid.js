Ext.onReady(function () {

    var description = [
        '<p>',
        'If a Domino view is extremely large or if you simply do not want to use a paging toolbar, then you may want to use a buffered Store.',
        '</p>',
        '<p>',
        'To configure an Extnd.UIView to use a buffered store all you need to do is pass \'buffered: true\' to the store you create or in the storeConfig object.',
        '</p>'
    ].join('');

    Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [
            {
                xtype   : 'demos-description-panel',
                title   : 'Infinite scrolling grid using buffered grid plugin',
                html    : description
            },
            {
                xtype               : 'xnd-uiview',
                region              : 'center',
                margins             : '0 5 5 5',
                dbPath              : '/A55DE6/FakeNames.nsf/',
                viewName            : 'ByName',
                showPagingToolbar   : false,
                storeConfig: {
                    // here we add buffered: true to configure our store as a 'buffered' store
                    // so that it can prefetch and cache pages of data
                    buffered    : true,
                    // make sure our pageSize is something reasonable
                    pageSize    : 50
                },
                // here we add the bufferedrender plugin but we don't have to
                // when you set the buffered config on the store to true a bufferedrenderer
                // is automatically added to the grid
                plugins: {
                    ptype: 'bufferedrenderer'
                }
            }
        ]
    });

});
