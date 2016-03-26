# riotux

>Simple Event Controller for Riot.js.

riotux provides more organization for datastore in your application. You have Stores, that trigger and listen methods for other Stores, and you have the Dispatcher, that connects your Views with other Views or Stores.

See the <a href="http://luisvinicius167.github.io/riotux">Demo.</a> The Data-Flow example for this Demo you find under.

#### Install
Requires Riot 2.0+

``` npm install riotux ```

#### Manual install
Just include ``` dist/riotux.min.js``` file in your project.

#### Stores: 
The Stores can listen and trigger methods for other Stores. To trigger methods to Views, you need use the Dispatcher method ```riotux.emmit```, that will call the event for Views that listen for this.

Stores Data-Flow example:
```javascript
// Your Car Store
function CarStore ( ) {
  riot.observable(this);
  
  // listen to 'start' event
  this.on('start', function ( person ) {
    console.log(person + ' started the Car.')
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

// >output: You started the Car.
```

#### Dispatcher
The Dispatcher connects the View with other Views or Stores. If you need to listen a method present in your Store inside your View, you need register this using the method ```riotux.listen```, that will register your method inside the Dispatcher. You can use the method```riotux.trigger```, to trigger for Store that listen to and use the 'riotux.emmit' method passing the event name for the method that you want to call to other View that listen to.

Dispatcher Data-Flow example in View:


```html
<!-- In your .tag component -->
<h1 if="{!name}">Who started the car?</h1>
<h1 if = { name }>{ name } started the Car</h1>

<script>
    var self = this; 
    self.status = false;
    
    self.on('mount', function(){
      riotux.trigger('personStore', 'startCar', 'You');  
    });
   
    riotux.listen('carMoving', function ( person ) {
      self.name = person;
      setTimeout(function(){
        self.update();
      }, 2000);
    });  
  </script>
```

#### API
The Stores are a riot.observable(). All stores should be created and registered before the Riot app is mounted to works fine.

Add an Store:
 * ```riotux.addStore(storeName, Store)```
 
Store: The method will applied for the Store that you pass in argument like 'storeName'. If you have two methods with the same name, the method that will be call is the method to the store that have the same name that you passed in arguments.
 
 * Listen the event for the Store that pass like storeName: ```riotux.on(storeName, event, callback)```
 
 * Trigger the event for the Store that pass like storeName: ```riotux.trigger(storeName, event [, args])```
 
 * Listen the event, just one time, for the Store that pass like storeName:  ```riotux.one(storeName, event, callback)```
 
 * Cancel the event for the Store that pass like storeName: ```riotux.off(storeName, event [, callback])```


Dispatcher:
 
 * Listen an event: ```riotux.listen(event, callback)```
 
 * Trigger an event: ```riotux.emmit(event [, args])```
 
 * Listen an event, just one time: ```riotux.listenOne(event, callback)```
 
 * Remove an event: ```riotux.cancel(event [, callback])```

Helper methods:
 
 * Return all events registered in the Dispatcher: ```riotux.getDispatcherEvents( )```

#### License
MIT License.
