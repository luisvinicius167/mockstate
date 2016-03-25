/*!
   --------------------------------
   riotux.js
   --------------------------------
   + https://github.com/luisvinicius167/Riotux
   + version 1.0.0
   + Copyright 2016 Luis Vinícius
   + Licensed under the MIT license
   + Documentation: https://github.com/luisvinicius167/riotux
*/
;(function ( window, riot ) {
 
  /**
   * @desc Event Controller for Riot.js
   * @function riotux
   */
  function riotux ( ) {
    this.stores = {};
  }
 
  riotux.prototype = {
   
    /**
     * @param { string } storeName The name of your store
     * @param { object } store Your store
     */
    addStore: function ( storeName, store ){
      this.stores[storeName] = store;
    },
    /**
     * @param { string } store The name of your store
     * @param { string } event The name of your event
     * @param { function } callback function that will trigger
     */
    on: function ( store, event, callback ) {
      this.stores[store].on(event, callback);
    },
   
    /**
     * @param { string } store The name of your store
     * @param { string } event The name of your event
     * @param { function } callback function that will trigger
     */
    trigger: function ( store, event, callback ) {
      this.stores[store].trigger(event, callback);
    },
   
    /**
     * @param { string } store The name of your store
     * @param { string } event The name of your event
     * @param { function } callback function that will trigger
     */
    one: function ( store, event, callback ) {
      this.stores[store].one(event, callback);
    },
   
    /**
     * @param { string } store The name of your store
     * @param { string } event The name of your event
     * @param { function } callback function that will trigger
     */
    off: function ( store, event, callback ) {
      this.stores[store].off(event, callback);
    },
    
    /**
     * @desc Register an 'on' event in Dispatcher
     * @param { string }   event The name of your event
     * @param { function } callback function that will trigger
     */
    listen: function ( event, callback ) {
      this.Dispatcher.on(event, callback);
    },
    
    /**
     * @desc Register an 'one' event in Dispatcher and trigger just one time
     * @param { string }   event The name of your event
     * @param { function } callback function that will trigger
     */
    listenOne: function ( event, callback ) {
      this.Dispatcher.one(event, callback);
    },
        
    /**
     * @desc Trigger the event that Dispatcher listening
     * @param { string }   event The name of your event
     * @param { function } callback function that will trigger
     */
    emmit: function ( event, args ) {
      this.Dispatcher.trigger(event, args);
      this.register(event, args);
    },
    
    /**
     * @desc Cancel an event in Dispatcher
     * @param { string }   event The name of your event
     * @param { function } callback function that will trigger
     */
    cancel: function ( event, callback ) {
      this.Dispatcher.off(event, callback);
    },
    
    register: function ( eventName, callback ) {
      if ( callback !== undefined ) {
        this.Dispatcher.events[eventName] = callback;
      }
      this.Dispatcher.events[eventName] = 'No args';
    },
    
    /**
     * @return { object } All methods registered in the Dispatcher
     */
    geDispatcherEvents: function ( ) {
      return this.Dispatcher.events;
    }
  };
  
  function Dispatcher ( ) {
    riot.observable(this);
    this.events = {};
  }
  
  if (!window.riotux) {
    window.riotux = new riotux;
    window.riotux.Dispatcher = new Dispatcher();
  }
}( window, riot ));
