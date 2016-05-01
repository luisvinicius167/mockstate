  /*!
    --------------------------------
    riotux.js
    --------------------------------
    + https://luisvinicius167.github.io/riotux/
    + Copyright 2016 Luis Vinícius
    + Licensed under the MIT license
    + Documentation: https://github.com/luisvinicius167/riotux
  */
  ;(function ( window, riot ) {
    'use strict';
  
    /**
     * @desc Event Controller for Riot.js
     * @function riotux
     */
    function riotux ( ) {
      riot.observable(this);
      var self = this;
      this.store = {
        dispatch: function ( type ) {
          var _slice = Array.prototype.slice.call(arguments, 1)
            , state = [this.state]
            , args = state.concat(_slice)
            , current = type
          ;
          return new Promise( function ( resolve, reject ) {
            resolve(self.store.mutations[type].apply(null, args));
          }).then(function ( result ) {
            self.trigger(self.currentState, result);
            self.currentState = '';
          });
        }
      };
      this.actions = {};
    };

    riotux.prototype = {
      
      createStore: function ( obj ) {
        this.store = Object.assign(this.store, obj);
        return this.store;
      },

      createActions: function ( data ) {
        this.actions = data;
        return this.actions;
      },

      action: function ( ) {
        var args = Array.prototype.slice.call(arguments, 2);
        this.currentState = arguments[0];
        this.actions[arguments[1]].apply(null, args);
      }
    };

    if ( !window.riotux ) {
      window.riotux = new riotux;
    };
    
    if ( typeof(module) !== "undefined" ) {
      module.exports = riotux;
    };
  }( window, riot ));