Ext.define('Demos.DescriptionPanel', {

    extend  : 'Ext.panel.Panel',
    alias   : 'widget.demos-description-panel',

    requires: [
        'Demos.ViewSourceButton'
    ],

    // defaults
    region              : 'north',
    collapsible         : true,
    autoScroll          : true,
    margins             : '5 5 5 5',
    bodyPadding         : 10,
    styleHtmlContent    : true,
    height              : 200,

    initComponent: function () {
        this.tbar = this.getTbarCfg();
        this.callParent(arguments);
    },

    getTbarCfg: function () {
        var codeUrl = this.codeUrl || (location.hash.substring(1) + '.js');

        return [
            {
                xtype   : 'demos-view-source-btn',
                code    : codeUrl
            }
        ];

    }

});
