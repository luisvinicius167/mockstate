'use strict';

let riotux = {
  /**
   * @name _store
   * @description The private store
   */
  _store: {
    state: {},
    mutators: {},  
    components: []
  },
  /**
   * @name store
   * @description Public store
   */
  store: {
  	subscribe: (component, handler) => {
  		riotux._store.components.push({component, handler});
  	},
  	unsubscribe: (component) => {
      riotux._store.components.forEach(el, index=>{
        if (el === component) {
          Array.prototype.splice(this, index);
        }
      });
    },
    /**
     * @name dispatch
     * @description Dispatch an action to change
     * the store state
     * @param { string } action The action name
     * @param { string } args Arguments sended to the action 
     */
    dispatch: (action, ...args) => {
      let state;
      let updateStoreData =  async () => {
	     let updateStoreState = await Promise
         .resolve(riotux._store.mutators[action].apply
           (
             null,
             [].concat(riotux._store.state, args))
           )
	      .then(stateValue => {
	        let component = riotux._store.components[0]
	        state = {action, stateValue}
          
	        if (component !== undefined && component.handler === "function") {
            return component.handler(state)
          } else {
            return state
          }
	      })
	      .then( () => {
	      	return state;
	      });
	      return updateStoreState;
      };
       return updateStoreData()
     },
    /**
     * @name setState
     * @description Sets the application data state
     */
    setState: (data) => {
      Object.assign(riotux._store.state, data);
    },
    get: (stateName) => {
      return riotux._store.state[stateName];
    },
    /**
     * @name setMutators
     * @description Sets the application data mutators
     * that will change the _store state
     */
    setMutators: (data) => {
      Object.assign(riotux._store.mutators, data);
    }
  }
};

let store = riotux.store
  , dispatch = riotux.store.dispatch
;

export {store, dispatch};