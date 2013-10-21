Ext.Loader.setConfig({
    enabled         : true,
    disableCaching  : false,
    paths: {
        'Ext'   : '../extnd.nsf/extjs/src',
        'Extnd' : '../extnd.nsf/extnd/src',
        'Demos' : '.'
    }
});

Ext.require([
    'Demos.DescriptionPanel'
]);

Ext.onReady(function () {
    var id = location.hash.substring(1);
    Ext.Loader.loadScript(id + '.js');
});
