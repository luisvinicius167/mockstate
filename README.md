# Riotux
Easy Event Controller for Riot.js based in Namespaces and Stores. Tiny size: 700 bytes.  <br>
Store can listen and trigger events for other Stores and Views. Views also listen and trigger events for other Views and Stores too. 

#####``` Store -> View | View  -> Store | Store -> Store | View -> View ```

## Install
``` npm install riotux ```

## Manual install
Just include ``` dist/riotux.min.js``` file in your project.

## Usage 
Requires Riot 2.0+

## API
Riotux provides an Easy way to Dispatch events, using riot.observable like global dispaticher. 
Riotux is based on Namespaces/Observers and Stores. In the Stores you can register the methods and organize your namespaces according each store. All events is based following this structure: ``` 'namespace:event' ```

* ``` addStore ```: This method add an Store with this namespace.
* ``` getStores ```: Return all Stores who you have in your application
* ``` removeStores ```: Remove all Stores


### Store
Is a Function. You need to add the store using the method addStore, who recieves two arguments: the store name and the store.
Method: ``` Riotux.addStore(storeName, store) ```

```javascript

// Example
function ProductStore () {
  // Product is the namespace of ProductStore
  Riotux.on('Product:start', function ( name ) {
    console.log('Initied Product Store by ' + name );
  })
}
var ProductStore = new ProductStore;
Riotux.addStore('Product', ProductStore);

```
#### Trigger an Event
Just trigger the event fot the listenrs who have the namespace
``` Riotux.trigger('namespace:event', args) ```

### View
In the Riot tag View you can trigger and listen events. Listen for event, and execute callback when it is triggered. This applies just for the view or store who contains this namespace.

```javascript

// Trigger to store; inside a Riot View (tag):
Riotux.trigger('Product:start', 'Luis Vinicius')
Riotux.on(namespace:event, callback)

``` 

####Remove event listener.

```javascript
  
  Riotux.off(namespace:event);
  Riotux.off(namespace:event, callback);
```

Same as Riotux.on(), but executes once.
``` Riotux.one(namespace:event, callback) ```

#### License
MIT License.

#### Thaks to
RiotControl for the inspiration.
