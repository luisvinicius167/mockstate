# riotux

>Simple Event Controller / Dispatcher for Riot.js.

riotux is designed thinking in simple. You have Stores that trigger and listen methods for other Stores. And you have the Dispatcher, that connects your Views with your Stores.

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
    console.log(person + ' started the car.')
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
    riotux.trigger('car', 'start', person);
  });
};

var person = new PersonStore();
riotux.addStore('personStore', personStore);
```

```javascript
// The Person will start the Car

riotux.trigger('personStore', 'startCar', 'Jhon Doe');

// >output: Jhon Doe started the car.
```

Dispatcher Data-Flow example:


```html
<!-- In your .tag component -->
<button name="start-car" onclick = { startCar }>Start the Car</button>

<script>
  var self = this;
  self.name = "Foo Bar";
  
  // Register the listener on the Dispatcher
  riotux.listen('startCar', function ( person ){
    riotux.trigger('personStore', 'startCar', person);
  });
  
  // The function that will be triggered when the button is clicked
  self.startCar = function ( ) {
    riotux.emmit('startCar', self.name);
  };
  // >output: Foo Bar started the car.
</script>

```

The Dispatcher connects the Views with Stores, or View to other Views. If you need to call a method present in your Store inside your View,
you need register this using the method 'listen, that will register your method inside the Dispatcher. For trigger, you just use the 'emmit' method passing the event name for the method that you want to call.

#### API
The Stores are a riot.observable(). All stores should be created and registered before the Riot app is mounted to works fine.

Add an Store:
 * ```riotux.addStore(storeName, Store)```
 
Store to Store methods: The method will applied for the Store that you pass in the event. If you have two methods with the same name, the method that will be call is the method to the store that you pass.
 
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