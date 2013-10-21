Ext.xrm.ux.UIView = Ext.extend(Ext.nd.UIView, {
 	enableColumnHide: false,
	enableHdMenu :false ,
	showSearch:false,
	initComponent: function(){
    
       Ext.xrm.ux.UIView.superclass.initComponent.apply(this, arguments);
       this.dateTimeFormats = {
			dateFormat : Ext.DatePicker.prototype.format,
			timeFormat : 'h:i:s A',
			dateTimeFormat : Ext.DatePicker.prototype.format + ' h:i:s A'
		}
		var empty = Ext.isEmpty(this.viewTitle,true);
        if (!empty && this.viewTitle === false) {
            this.title = '';
            //this.header=false;
        }
        else {		
            if (!this.title) {
                var topWin = window.parent ? window.parent.top.ViewTitles : top.ViewTitles;
                this.title = topWin[viewName] ? topWin[viewName] : 'No Title';				
            }
        }		
    },
        refreshView: function(){
 	 this.getStore().reload();
        
    },
	// private
  openDocument: function(grid, rowIndex, e, bEditMode) {
  	var open = (this.openDocDbClick === undefined || this.openDocDbClick === null) ? true : this.openDocDbClick;
	  
	if (open) {
		var mode = (bEditMode) ? '?EditDocument' : '?OpenDocument';
		var title = "Opening...";
		var ds = grid.getStore();
		var row = grid.getSelectionModel().getSelected();
		if (row == undefined) {
			return; // can't open a doc if a row is not selected so bail
		}
		
		// we have a row so continue
		// if a unid does not exist this row is a category so bail
		if (!row.unid) {
			return;
		}
		Ext.xrm.ux.openDocInWindow(null, '', row.unid);
	}
  },
    onRender: function(){
    
        var topWin = window.parent ? window.parent.top : top;
        Ext.xrm.ux.UIView.superclass.onRender.apply(this, arguments);
    		
			
        this.on('getdesignsuccess', function(view, store, cm){
            var count = cm.getColumnCount();
            var topWin = window.parent ? window.parent.top.ViewColumnTitles : top.ViewColumnTitles;
            for (i = 0; i < count; i++) {
                var hdr = cm.getColumnHeader(i);
                var splt = hdr.split('~');
                
                hdr = topWin[splt[0]] ? topWin[splt[0]] : '';
                cm.setColumnHeader(i, hdr);
                if (splt.length > 1) {
                    cm.setHidden(i, true);
                }
            }
            
        });
      
    }
});

Ext.reg('xrm-uiview', Ext.xrm.ux.UIView);
