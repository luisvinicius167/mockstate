var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    module.exports = {
      dispatch: factory().dispatch,
      getState: factory().getState,
      setState: factory().setState,
      setActions: factory().setActions,
      subscribe: factory().subscribe,
      middleware: factory().middleware,
      unsubscribe: factory().unsubscribe
    };
  } else {
    root.Mockstate = factory();
  }
})(this, function () {
  'use strict';
  /**
   * @name Mockstate
   * @description The object that will manage all application state
   */

  var Mockstate = {
    /**
     * @name _store
     * @description The private store
     */
    _store: {
      /**
       * @name state
       * @description The Store application state
       */
      state: {},
      /**
       * @name actions
       * @description The Functions that will change the Store state
       */
      actions: {},
      /**
       * @name state
       * @description The Components that was subscribed
       */
      components: [],
      middleware: {}
    },
    /**
     * @name store
     * @description Public Store
     */
    store: {
      /**
       * @name subscribe
       * @description Subscribe to call the handler function when the action will be triggered
       * @param {Component} component The Component
       * @param {Function} handler The function that will be called
       **/
      subscribe: function subscribe(component, handler) {
        Mockstate._store.components.push({ component: component, handler: handler });
      },
      unsubscribe: function unsubscribe(component) {
        Mockstate._store.components.forEach(el, function (index) {
          if (el === component) {
            Mockstate._store.components.splice(index, 1);
          }
        });
      },
      /**
       * @name middleware
       * @description The middleware function that will be triggered
       * every time when an action called.
       * @param {Function} callback A function that will be called 
       **/
      middleware: function middleware(callback) {
        Mockstate._store.middleware = callback;
      },
      /**
       * @name dispatch
       * @description Dispatch an action to change
       * the store state
       * @param { string } action The action name
       * @param { any } args Arguments sended to the action
       */
      dispatch: function dispatch(action) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var state = void 0;
        var updateStoreData = function updateStoreData() {
          var updateStoreState = Promise.resolve(Mockstate._store.actions[action].apply(null, [].concat(Mockstate._store.state, args))).then(function (value) {
            state = { action: action, value: value };
            /**
             * has middleware?
             **/
            if (typeof Mockstate._store.middleware === "function") {
              Mockstate._store.middleware.call(null, state, Mockstate._store.state);
            }
            var component = Mockstate._store.components;
            component.forEach(function (el, i) {
              if (el.component !== undefined && typeof el.handler === "function") {
                el.handler(state);
              }
            });
          }).then(function () {
            return state;
          });
          return updateStoreState;
        };
        return updateStoreData();
      },
      /**
       * @name setState
       * @description Sets the application data state
       * @param {object} data Simple Object that contain the State
       */
      setState: function setState(data) {
        Object.assign(Mockstate._store.state, data);
      },
      /**
       * @name get
       * @param {string} stateName The Store state name
       */
      getState: function getState(stateName) {
        return Mockstate._store.state[stateName];
      },
      /**
       * @name setActions
       * @description Sets the application Actions
       * that will change the Store state
       */
      setActions: function setActions(data) {
        Object.assign(Mockstate._store.actions, data);
      }
    }
  };
  return Mockstate.store;
});
//# sourceMappingURL=mockstate.js.map
