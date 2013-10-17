(function() {
	
	// inheriting from the Studio behavior, so we can manipulate the widget in the Wakanda Studio
    var BasicContainer = Widget.BasicContainer.inherit(WAF.require('waf-behavior/studio'));

	// adding the list of attributes available in your property panel
    BasicContainer.addAttributes([{
    	'name':'data-width',
    	'description':'Width',
    	'defaultValue': '250px'
    },{
    	'name':'data-height',
    	'description':'Height',
    	'defaultValue': '250px'
    }]);  
      
    // adding the action when we Resize the widget, so we will also update the 
    // property panel to reflect the current size of the widget  
    BasicContainer.on('Resize', function(event) {
    	this.studioCss('height', event.size.height);
    	this.studioCss('width', event.size.width); 
    	this.studioVal('data-width', event.size.width + 'px');
    	this.studioVal('data-height', event.size.height + 'px');	 	
	 	this.studioPanelRefresh();
    });
    

    // adding the action when the widget is displayed in the Wakanda Studio 
	BasicContainer.on('Display', function (attributes) {
		//display width and height
	 	this.studioCss('width', attributes['data-width']); 	
	 	this.studioCss('height', attributes['data-height']); 		  
	 });

 
})();

