// "use strict";function _asyncToGenerator(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){function n(o,s){try{var u=r[o](s),i=u.value}catch(a){return void e(a)}return u.done?void t(i):Promise.resolve(i).then(function(t){return n("next",t)},function(t){return n("throw",t)})}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var riotux={_store:{state:{},actions:{},components:[]},store:{subscribe:function(t,r){riotux._store.components.push({component:t,handler:r})},unsubscribe:function(t){riotux._store.components.forEach(function(r,e){r.component===t&&riotux._store.components.splice(e,1)})},dispatch:function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),n=1;r>n;n++)e[n-1]=arguments[n];var o=void 0,s=function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve(riotux._store.actions[t].apply(null,[].concat(riotux._store.state,e))).then(function(r){var e=riotux._store.components;o={action:t,stateValue:r},e.forEach(function(t,r){void 0!==t&&"function"==typeof t.handler&&t.handler(o)})}).then(function(){return o});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}},n,void 0)}));return function(){return r.apply(this,arguments)}}();return s()},setState:function(t){Object.assign(riotux._store.state,t)},get:function(t){return riotux._store.state[t]},setActions:function(t){Object.assign(riotux._store.actions,t)}}},store=riotux.store,dispatch=riotux.store.dispatch;exports.store=store,exports.dispatch=dispatch;

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
      let updateStoreData = async () => {
        let updateStoreState = await Promise.resolve(
          riotux._store.actions[action].apply
            (
            null,
            [].concat(riotux._store.state, args)
          )
        )
          .then(stateValue => {
            let component = riotux._store.components
            state = { action, stateValue }
            Promise.resolve(
              component.forEach((el, i) => {
                if (el.component !== undefined && typeof el.handler === "function") {
                  el.handler(state)
                }
              })
            )
          })
          .then( ( ) => {
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

let store = riotux.store
  , dispatch = riotux.store.dispatch
  ;

export {store, dispatch};
