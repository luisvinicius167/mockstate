/*!
   --------------------------------
   Riotux.js
   --------------------------------
   + https://github.com/luisvinicius167/Riotux
   + version 0.0.1
   + Copyright 2016 Luis Vinícius
   + Licensed under the MIT license
   + Documentation: https://github.com/luisvinicius167/Riotux
*/

;(function ( window, riot ) {
  
  function riotux ( ) {
    this.stores = {};
    this.events = {};
  }
 
  riotux.prototype = {
    addStore: function ( name, store ){
      this.stores[name] = store;
    },
    
    on: function ( store, event, callback ) {
      this.stores[store].on(event, callback);
    },
    
    trigger: function ( store, event, callback ) {
      this.stores[store].trigger(event, callback);
    },
    
    one: function ( store, event, callback ) {
      this.stores[store].one(event, callback);
    },
    
    off: function ( store, event, callback ) {
      this.stores[store].off(event, callback);
    },
    
    listen: function ( event, callback ) {
      this.Dispatcher.on(event, callback);
    },
    
    emmit: function ( event, args ) {
      this.Dispatcher.trigger(event, args);
    }
  };
  
  function Dispatcher ( ) {
    riot.observable(this);
  }
  
  if (!window.riotux) {
    window.riotux = new riotux;
    window.riotux.Dispatcher = new Dispatcher();
  }
}(window, riot));