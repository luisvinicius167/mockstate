# riotux

>Simple Event Controller / Dispatcher for Riot.js.

riotux follows the riot.js principle, be simple. You have Stores that trigger and listen methods for other Stores. And you have the Dispatcher, that connects your Views with other Views and Stores.

## Install
Requires Riot 2.0+

``` npm install riotux ```

## Manual install
Just include ``` dist/riotux.min.js``` file in your project.

Store Data-Flow example:
```javascript
// Your Car Store
function CarStore ( ) {
  riot.observable(this);
  
  // listen to 'start' event
  this.on('start', function ( person ) {
    // Emmit the method for view that listen to
    riotux.emmit('carMoving', person);
  });
};

var carStore = new CarStore();
riotux.addStore('carStore', carStore);
```

```javascript
// Your Other Store
function PersonStore ( ) {
  riot.observable(this);
 
  // listen to 'startCar' event
  this.on('startCar', function ( person ) {
    riotux.trigger('carStore', 'start', person);
  });
};

var personStore = new PersonStore();
riotux.addStore('personStore', personStore);
```

```javascript
// The Person will start the Car

riotux.trigger('personStore', 'startCar', 'You');

// >output: Jhon Doe started the car.
```

Dispatcher Data-Flow example in View:


```html
<!-- In your .tag component -->
<h1 if="{!name}">Who started the car?</h1>
<h1 if = { name }>{ name } started the Car</h1>

<script>
    var self = this; 
    self.status = false;
    
    self.on('mount', function(){
      riotux.trigger('personStore', 'startCar', 'Luis Vinicius');  
    });
   
    riotux.listen('carMoving', function ( person ) {
      self.name = person;
      setTimeout(function(){
        self.update();
      }, 2000);
    });  
  </script>
```

The Dispatcher connects the Views with other Views and Stores. If you need to call a method present in your Store inside your View, you need register this using the method 'listen, that will register your method inside the Dispatcher. For trigger you can use 'trigger' method to Stores and use the 'emmit' method passing the event name for the method that you want to call in other View.

#### API
The Stores are a riot.observable(). All stores should be created and registered before the Riot app is mounted to works fine.

Add an Store:
 * ```riotux.addStore(storeName, Store)```
 
Apply to Store: The method will applied for the Store that you pass in the event. If you have two methods with the same name, the method that will be call is the method to the store that you pass.
 
 * Like riot on: ```riotux.on(storeName, event, callback)```
 
 * Like riot trigger: ```riotux.trigger(storeName, event [, args])```
 
 * Like riot one: ```riotux.one(storeName, event, callback)```
 
 * Like riot off: ```riotux.off(storeName, event [, callback])```


Registering methods on Dispatcher:
 
 * Like riot on: ```riotux.listen(event, callback)```
 
 * Like riot trigger: ```riotux.emmit(event [, args])```
 
 * Like riot one: ```riotux.listenOne(event, callback)```
 
 * Like riot off: ```riotux.cancel(event [, callback])```

Helper methods:
 
 * Return all events registered in the Dispatcher: ```riotux.getDispatcherEvents( )```

#### License
MIT License.
