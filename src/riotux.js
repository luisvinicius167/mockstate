(function(root, factory){
	if (typeof define === "function" && define.amd) {
        define([], factory());
    } else if (typeof exports === "object") {
        module.exports = {
        	dispatch: factory().store.dispatch
          , getState: factory().store.get
          , setState: factory().store.setState
          , setActions:factory().store.setActions
          , subscribe: factory().store.subscribe
          , unsubscribe: factory().store.unsubscribe
        }
    } else {
        root.Riotux = factory().store;
    }
}(this, function(){
	'use strict';

/**
 * @name riotux
 * @description The object that will manage all application state
 */
let riotux = {
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
    components: []
  },
  /**
   * @name store
   * @description Public Store
   */
  store: {
    subscribe: (component, handler) => {
      riotux._store.components.push({ component, handler });
    },
    unsubscribe: (component) => {
      riotux._store.components.forEach(el, index => {
        if (el === component) {
          riotux._store.components.splice(index, 1);
        }
      });
    },
    /**
     * @name dispatch
     * @description Dispatch an action to change
     * the store state
     * @param { string } action The action name
     * @param { any } args Arguments sended to the action
     */
    dispatch: (action, ...args) => {
      let state;
      let updateStoreData = () => {
        let updateStoreState = Promise.resolve(
          riotux._store.actions[action].apply
            (
            null,
            [].concat(riotux._store.state, args)
            )
        )
          .then(value => {
            let component = riotux._store.components
            state = { action, value }
            component.forEach((el, i) => {
              if (el.component !== undefined && typeof el.handler === "function") {
                el.handler(state)
              }
            })
          })
          .then(() => {
            return state;
          });
        return updateStoreState;
      };
      return updateStoreData()
    },
    /**
     * @name setState
     * @description Sets the application data state
     * @param {object} data Simple Object that contain the State
     */
    setState: (data) => {
      Object.assign(riotux._store.state, data);
    },
    /**
     * @name get
     * @param {string} stateName The Store state name
     */
    get: (stateName) => {
      return riotux._store.state[stateName];
    },
    /**
     * @name setActions
     * @description Sets the application Actions
     * that will change the Store state
     */
    setActions: (data) => {
      Object.assign(riotux._store.actions, data);
    }
  }
};

return riotux;
}))
