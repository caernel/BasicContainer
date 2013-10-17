(function() {
	
	//Defining the base architecture based on the waf-core/widget class
    var widget = WAF.require('waf-core/widget');
 
 	// Creating the Basic Container widget 
    var BasicContainer = widget.create('BasicContainer');
	
	// Adding the behavior layout container, which grants to the widget all the methods available in waf-behavior/layout/container 
	BasicContainer.inherit(WAF.require('waf-behavior/layout/container')); 
	
	
})();
