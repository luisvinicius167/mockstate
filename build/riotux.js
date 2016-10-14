'use strict';
var _this = this;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
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
      riotux._store.components.push({ component, handler });
    },
    unsubscribe: component => {
      riotux._store.components.forEach(el, index => {
        if (el === component) {
          Array.prototype.splice(_this, index);
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
      let updateStoreData = (() => {
        var _ref = _asyncToGenerator(function* () {
          let updateStoreState = yield Promise.resolve(riotux._store.mutators[action].apply(null, [].concat(riotux._store.state, args))).then(function (stateValue) {
            let component = riotux._store.components[0];
            state = { action, stateValue };

            if (component !== undefined && component.handler === "function") {
              return component.handler(state);
            } else {
              return state;
            }
          }).then(function () {
            return state;
          });
          return updateStoreState;
        });

        return function updateStoreData() {
          return _ref.apply(this, arguments);
        };
      })();
      return updateStoreData();
    },
    /**
     * @name setState
     * @description Sets the application data state
     */
    setState: data => {
      Object.assign(riotux._store.state, data);
    },
    get: stateName => {
      return riotux._store.state[stateName];
    },
    /**
     * @name setMutators
     * @description Sets the application data mutators
     * that will change the _store state
     */
    setMutators: data => {
      Object.assign(riotux._store.mutators, data);
    }
  }
};
let store = riotux.store,
dispatch = riotux.store.dispatch;
export { store, dispatch };