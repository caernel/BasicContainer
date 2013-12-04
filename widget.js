WAF.define('BasicContainer', function() {
	
    var Widget = WAF.require('waf-core/widget'),
    
    BasicContainer = Widget.create('BasicContainer');

    BasicContainer.inherit(WAF.require('waf-behavior/layout/container')); 
    
    return BasicContainer;

});
