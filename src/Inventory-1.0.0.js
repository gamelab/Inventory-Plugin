/**
* The basic Inventory Manager Object. Contains name and version number. 
* 
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
* @class InventoryManager
*/
Kiwi.Plugins.InventoryManager = {
    name: 'InventoryManager',
    version: '1.0.0'
};

/**
*A Kiwi Plugin GameObject that can manage basic inventory items and functionality.
*
*By default, inventory items have an item description, and a count variable which keeps track of how many of the item you currently have.
*You can add other variables to inventory items with the addVariable method, for example you could add a cost value to each item.
*
* @class InventoryManager
* @extends Entity
* @namespace Kiwi.Plugins.Inventory
* @constructor
*/

Kiwi.PluginManager.register(Kiwi.Plugins.InventoryManager);

//Full list of variables every vaiable each item should have. 
//You can add further variables with the addVariable function.
Kiwi.Plugins.InventoryManager.DefaultItem = {
    count: 0,
    description: 'Item description'
}

Kiwi.Plugins.InventoryManager.Items = {
    //Generate inventory items manually below
    /*
    EXAMPLE:
    apple: {
        count: 1,
        description: 'Tasty fruit.'
    }
    */
}

/**
* A method that creates a new item type and mirrors the same variable names of existing items.
* @method createItem
* @param id {string} The name of the new item type
* @public
*/
Kiwi.Plugins.InventoryManager.createItem = function (id) {
    if(Kiwi.Plugins.InventoryManager.Items[id]!=undefined){
        console.log('Inventory Manager: Warning. Attempting to create an item that already exists.');
    }

    Kiwi.Plugins.InventoryManager.Items[id] = new Object();
    for (var i in Kiwi.Plugins.InventoryManager.DefaultItem) {
        var defaultItemVar = Kiwi.Plugins.InventoryManager.DefaultItem[i];
        Kiwi.Plugins.InventoryManager.Items[id][i] = defaultItemVar;
    }
}

/**
* Sends the current inventory list and associated variables and values to the console log.
* @method outputInventory
* @public
*/
Kiwi.Plugins.InventoryManager.outputInventory = function () {
    console.log('\n--------------\nInventory:\n--------------')
    for (var i in Kiwi.Plugins.InventoryManager.Items) {
        console.log('\n', i)
        for (var j in Kiwi.Plugins.InventoryManager.Items[i]) {
            console.log('\t', j + ':', Kiwi.Plugins.InventoryManager.Items[i][j]);
        }
    }
    console.log('\n--------------\n');
}

/**
* A method that adds a new property to all existing items and the default item object.
* @method addVariable
* @param id {string} The name of the new property
* @param defaultValue {number, boolean, or string} The starting value
* @public
*/
Kiwi.Plugins.InventoryManager.addVariable = function (id, defaultValue) {
    Kiwi.Plugins.InventoryManager.DefaultItem[id] = defaultValue;
    for (var i in Kiwi.Plugins.InventoryManager.Items) {
        Kiwi.Plugins.InventoryManager.Items[i][id] = defaultValue;
    }
}

/**
* A method that sets a specific inventory item's property
* @method setItemVariable
* @param id {string} The name of the inventory item
* @param varId {string} The property to change
* @param val {number, boolean, or string} The value to change the property to
* @public
*/
Kiwi.Plugins.InventoryManager.setItemVariable = function (id, varId, val) {
    if (Kiwi.Plugins.InventoryManager.Items[id] == undefined) {
        console.log('Inventory Manager: Error setting variable. Attempted id:', id);
        return;
    }
    Kiwi.Plugins.InventoryManager.Items[id][varId] = val;
}

/**
* A method that changes a specific inventory item's property
* @method changeItemVariable
* @param id {string} The name of the inventory item
* @param varId {string} The property to change
* @param val {number, boolean, or string} The value to change the property by
* @public
*/
Kiwi.Plugins.InventoryManager.changeItemVariable = function (id, varId, val) {
    if (Kiwi.Plugins.InventoryManager.Items[id] == undefined) {
        console.log('Inventory Manager: Error changing variable. Attempted id:', id);
        return;
    }
    Kiwi.Plugins.InventoryManager.Items[id][varId] += val;
}

/**
* A method that returns a specific inventory item's property
* @method returnItemVariable
* @param id {string} The name of the inventory item
* @param varId {string} The property to return
* @return {value} The returned value
* @public
*/
Kiwi.Plugins.InventoryManager.returnItemVariable = function (id, varId) {
    if (Kiwi.Plugins.InventoryManager.Items[id] == undefined) {
        console.log('Inventory Manager: Error returning variable. Attempted id:', id);
        return;
    }
    return Kiwi.Plugins.InventoryManager.Items[id][varId];
}

//DEFAULT VARIABLES

/**
* A method that sets a specific inventory item's count value
* @method setItemCount
* @param id {string} The name of the inventory item
* @param val {number} The value to set the count property to
* @public
*/
Kiwi.Plugins.InventoryManager.setItemCount = function (id, val) {
    if (Kiwi.Plugins.InventoryManager.Items[id] == undefined) {
        console.log('Inventory Manager: Error setting count. Attempted id:', id);
        return;
    }
    Kiwi.Plugins.InventoryManager.Items[id].count = val;
}

/**
* A method that changes a specific inventory item's count value
* @method changeItemCount
* @param id {string} The name of the inventory item
* @param val {number} The value to change the count property by
* @public
*/
Kiwi.Plugins.InventoryManager.changeItemCount = function (id, val) {
    if (Kiwi.Plugins.InventoryManager.Items[id] == undefined) {
        console.log('Inventory Manager: Error adding count. Attempted id:', id);
        return;
    }
    Kiwi.Plugins.InventoryManager.Items[id].count += val;
}

/**
* A method that returns a specific inventory item's count
* @method returnItemCount
* @param id {string} The name of the inventory item
* @return {number} The returned value
* @public
*/
Kiwi.Plugins.InventoryManager.returnItemCount = function (id) {
    if (Kiwi.Plugins.InventoryManager.Items[id] == undefined) {
        console.log('Inventory Manager: Error requesting count. Attempted id:', id);
        return;
    }
    return Kiwi.Plugins.InventoryManager.Items[id].count;
}

/**
* A method that returns a specific inventory item's description
* @method returnItemDescription
* @param id {string} The name of the inventory item
* @return {string} The inventory item's description
* @public
*/
Kiwi.Plugins.InventoryManager.returnItemDescription = function (id) {
    if (Kiwi.Plugins.InventoryManager.Items[id] == undefined) {
        console.log('Inventory Manager: Error requesting description. Attempted id:', id);
        return;
    }
    return Kiwi.Plugins.InventoryManager.Items[id].description;
}
