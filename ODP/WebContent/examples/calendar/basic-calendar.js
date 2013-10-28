Ext.Loader.setConfig({
    enabled         : true,
    disableCaching  : false,
    paths: {
        'Ext'           : '../extnd.nsf/extjs/src',
        'Extnd'         : '../extnd.nsf/extnd/src',
        'Ext.calendar'  : 'src'
    }
});

Ext.require([
    'Ext.calendar.CalendarPanel'
]);

Ext.onReady(function () {

    var model = Ext.define('ChartModel', {
        extend: 'Extnd.data.ViewModel',
        fields: [
            {
                //name    : 'date',
                name    : 'StartDate',
                mapping : 'entrydata[name=date]',
                type    : 'date',
                convert : function (v) {
                    var tmpDateFmt;

                    if (v.indexOf('T') > 0) {
                        tmpDateFmt = 'YmdTHis,uZ';
                    } else {
                        tmpDateFmt = 'Ymd';
                    }
                    return Ext.Date.parse(v, tmpDateFmt);
                }
            },
            {
                name    : 'EndDate',
                mapping : 'entrydata[name=date]',
                type    : 'date',
                convert : function (v) {
                    var tmpDateFmt;

                    if (v.indexOf('T') > 0) {
                        tmpDateFmt = 'YmdTHis,uZ';
                    } else {
                        tmpDateFmt = 'Ymd';
                    }
                    return Ext.Date.add(Ext.Date.parse(v, tmpDateFmt), Ext.Date.MINUTE, 60);
                }
            },
            {
                //name    : 'subject',
                name    : 'Title',
                mapping : 'entrydata[name=subject]'
            }
        ]
    });

    // create a store instead of letting Extnd.UIView create one automatically
    // we do this so we can share this store with the UIView and the Chart
    var store = Ext.create('Extnd.data.ViewStore', {
        model       : model,
        //dbPath      : Extnd.session.currentDatabase.webFilePath,
        viewUrl     : '../../calBasic?readviewentries&Grid=4&Date=2013-03-01',
        autoLoad    : true,
        remoteSort  : false
    });

    Ext.create('Ext.Viewport', {
        layout: 'fit',
        items: [
            {
                xtype       : 'calendarpanel',
                eventStore  : store
            }
        ]
    });

});
