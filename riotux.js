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
  // the easy way to separate namespace to event
  separate: ':',
  centralDispatcher: new GlobalObserver(),
  namespaces: [],
  stores: {},
  addStore: function (storeName, store) {
    this.stores[storeName] = store;
  },
  addNamespace: function ( observer, method) {
    this.namespaces.push(observer + this.separate + method);
  },
  getNamespaces: function ( ) {
    return this.namespaces;
  },
  getStores: function ( ) {
     return this.stores;
  },
  removeStores: function () {
    this.stores = {};
  },
  getNamespace: function ( name ) {
    var namespaces = [];
    this.namespaces.forEach(function ( index ) {
      var split = index.split(Riotux.separate)
      if ( split[0] === name ) {
        namespaces.push(split[1]);
      }
    });
    return namespaces;
  }
};

var _riot_methods = ['on','one','off','trigger'];
// provides riot observable api for Riotux
_riot_methods.forEach(function ( api ) {
  Riotux[api] = function ( ) {
    var args = [].slice.call(arguments);
    var names = args[0].split(this.separate);
    Riotux.addNamespace(names[0], names[1]);
    this.centralDispatcher[api].apply(null, args);
  }
})

function GlobalObserver () {
  riot.observable(this);
}

if ( !window.Riotux ) {
  window.Riotux = Riotux;
}
}(window));