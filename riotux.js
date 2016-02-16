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

;(function( window ) {
  var Riotux = {
    separate: ':',
    centralDispatcher: new GlobalObserver(),
    stores: {},
    addStore: function (storeName, store) {
      this.stores[storeName] = store;
    },
    getStores: function ( ) {
      return this.stores;
    },
    removeStores: function () {
      this.stores = {};
    }
  };

  var _riot_methods = ['on','one','off','trigger'];
  // provides riot observable api for Riotux
  _riot_methods.forEach(function ( api ) {
    Riotux[api] = function ( ) {
      var args = [].slice.call(arguments);
      var names = args[0].split(this.separate);
      this.centralDispatcher[api].apply(null, args);
    }
  })

  function GlobalObserver () {
    riot.observable(this);
  }

  if ( !window.Riotux ) {
    window.Riotux = Riotux;
  }
  if (typeof(module) !== 'undefined')  module.exports = Riotux;
}(window));
