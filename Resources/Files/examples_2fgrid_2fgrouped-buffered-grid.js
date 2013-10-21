Ext.onReady(function () {

    Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [
            {
                title               : 'Grouped buffered grid',
                region              : 'north',
                collapsible         : true,
                autoScroll          : true,
                margins             : '5 5 5 5',
                bodyPadding         : 10,
                contentEl           : 'description',
                styleHtmlContent    : true,
                height              : 200,
                tbar: [{
                    xtype   : 'demos-view-source-btn',
                    code    : 'grouped-buffered-grid.js'
                }]
            },
            {
                xtype               : 'xnd-uiview',
                region              : 'center',
                margins             : '0 5 5 5',
                dbPath              : '/A55DE6/FakeNames.nsf/',
                viewName            : 'ByName',
                showPagingToolbar   : false,
                storeConfig: {
                    // predefine what our group field is so that the grid displays grouped on initial load
                    groupField  : 'state',
                    pageSize    : 2000,
                    remoteSort  : false
                },
                // to get buffered renderering on our grid, all we need to do is add this plugin
                // and add the pageSize store config setting above
                plugins: {
                    ptype: 'bufferedrenderer'
                },
                features: {
                    ftype           : 'grouping',
                    collapsilble    : true
                },
            }]
    });

});
