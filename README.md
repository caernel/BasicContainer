## Custom Widget for [Wakanda](http://wakanda.org)
The __BasicContainer__ widget allows you to create a container widget in the Wakanda framework

### Properties
This widget has the following properties: 

* __width__: The width of the container
* __height__: The height of your container

### Goals
The __BasicContainer__ shows how simple is to create a new container widget on Wakanda. 

To have a container behavior, the framework make available to the widget the waf-behavior/layout/container :
BasicContainer.inherit(WAF.require('waf-behavior/layout/container')); 
(check the widget.js file for further details) 


### CSS
The __BasicContainer__ will be displayed first in green. You can adjust the widget color by changing directly in the Style panel of your Wakanda  Studio OR by changing the /css/widget.css file.  


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.


