Inventory Manager
=======================================

Name: Inventory Manager

Version: 1.0.0

Type: GameObject Plugin

Author: Kiwi.js Team

Website: www.kiwijs.org

KiwiJS last version tested: 0.5.3

Tutorials for this plugin can be found on the Kiwi.JS website here:
http://www.kiwijs.org/documentation/tutorials/using-the-inventorymanager-plugin/
----------------------------------------------------------------------------------------
Versions
----------------------------------------------------------------------------------------

1.0 - Initial GameObject create. 
	-Adding default items to your inventory
	-Add further variables to all inventory items
	-Returning and setting values
	

----------------------------------------------------------------------------------------
Files:
----------------------------------------------------------------------------------------
	

----------------------------------------------------------------------------------------
Description:
----------------------------------------------------------------------------------------
The Inventory Manager is a Plugin for Kiwi.js that you can include to have a new GameObject in your Kiwi Game's that is used to manage a customized inventory.

If you have any problems then feel free to contact us via the http://www.kiwijs.org/help

----------------------------------------------------------------------------------------
How to Include: 
----------------------------------------------------------------------------------------

First Step:
- Copy either the Inventory-1.0.0.js or the Inventory-1.0.0.min.js file (they should be in the src folder) into your project directory. We recommend that you save the files under a plugin directory that lives inside of your project directory so that you can easily manage all of the plugins but that is not required.


Second Step:
- Link in the JavaScript file Inventory-1.0.0.js or the min version of the file) into your HTML file. Make sure you link it in underneath the link to the main Kiwi.js file AND underneath the Cocoon files.


----------------------------------------------------------------------------------------
How to use.
----------------------------------------------------------------------------------------

--------------------------------------------
Creating a new Object
--------------------------------------------
* To create a new Gameobject is the same as how you would a Sprite or Static Image. Create a variable for where it should be saved and instantiate the 'Kiwi.Plugins.InventoryManager' object. *
	    
var inventoryManager = Kiwi.Plugins.InventoryManager;

--------------------------------------------
Setting up your default inventory item variables manually
--------------------------------------------
* You can create a full list of variables given to each and every inventory item. By default there is a count and description for any item. Below, we add the "weight" variable.*

Kiwi.Plugins.InventoryManager.DefaultItem = {
    count: 0,
    description: 'Item description',
    weight: 0
}

--------------------------------------------
Adding an inventory item manually
--------------------------------------------
* You can alter the Kiwi.Plugins.InventoryManager.Items object directly to set up your inventory with any possible items.*

Kiwi.Plugins.InventoryManager.Items = {
    apple: {
        count: 1,
        description: 'Tasty fruit.'
    }
}
