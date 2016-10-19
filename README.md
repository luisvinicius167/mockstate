<img src="https://github.com/luisvinicius167/riotux/blob/new/img/riotux_logo.png?raw=true"/>
 > A reactive centralized state management for Javascript applications. <br/>

### :information_desk_person: Demo Project here [Preact.js + Riotux ➞](http://riotux-preact.surge.sh/)<br/>
[![npm package](https://img.shields.io/badge/npm-2.0-blue.svg)](https://www.npmjs.com/package/riotux) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/luisvinicius167/riotux)

### Install
* Npm: ``` npm install riotux ```
* Bower: ``` bower install riotux ```
* CDN : ```https://cdnjs.cloudflare.com/ajax/libs/riotux/2.0.0/riotux.min.js```

### :star: Whats new on Riotux 2.0?
- Trigger actions and do something when the state was changed. 
- You just use ``{ dispatch }`` method to trigger actions for change the Application Store state. 
- When the State changes, you will receive the new state data, that contain the State value and Action Name.


### :raised_hands: Very simple to use.
 - Dispatch actions ➞ Do something  ➞ Receive the result of your action

<p align="center">
  <img src="https://github.com/luisvinicius167/riotux/blob/new/img/react-count.gif" alt="react riotux" width="600">
</p>

---

### API

##### ``{ dispatch }``
 * Trigger some action for change the state. A Promise will be returned, that contain an Object with the keys ``action`` and ``value`` of your correspondent action response.
```javascript
/**
 * @name dispatch
 * @description Trigger some action for change the state.
 * @param {string} actionName The action name
 * @param { any } args Other Arguments
 * @return {Promise} Return a Promise with an Object that contain the stateValue and action. 
 * {stateValue, action} = data;
 */

// On your component
import {dispatch} from 'riotux';

dispatch('increment', 1)
  .then( ( data ) => {
    console.log('The state was changed.');
    // this.setState({count: data.stateValue});
  })
```
##### ``{ setActions }``
 * Set your actions functions. Your action functions always needs to return a Promise and receive the state as first argument.
```javascript
/**
 * @name setActions
 * @description Set the actions functions.
 * @param {object} state The Store State as first argument
 * @param { any } args Other Arguments
 */
 
// actions/index.js
import {setActions} from 'riotux';

setActions({
  // each function receive the state as first argument
  increment: (state, n) => {
    //Always return Promise.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = state.count += n;
        resolve(result)
      }, 2000)
    });
  }
});
```
##### ``{ setState }`` 
 * Set the application Store state
```javascript
/**
 * @name setState
 * @description Set you application store state
 * @param {object} state Your application state data
 */
 
// store/index.js
import {setState} from 'riotux';

setState({
  count: 1
});
```

##### ``{ getState }`` 
 * Get a state value of your store
```javascript
/**
 * @name getState
 * @description Get the state value
 * @param {string} stateName The state name
 */
 
// store/index.js
import {getState} from 'riotux';

let count = getState('count');
```

##### ``{ middleware }`` 
 * Set a middleware function, that will be triggered after the action changed the state.
```javascript
/**
 * @name middleware
 * @description Get the state value
 * @param {Function} callback The callback that will be triggered and
 * receives the data of your action and the all state of your store application.
 */
 
// riotux/index.js
import { middleware } from 'riotux';

middleware( (data, state) => {
    console.log('After action triggers:', data, ' and the Store State is: ', state);
})
```

##### ``{ subscribe, unsubscribe }`` 
 * Subscribe some component for trigger the handler function when some state was changed. 
 * Unsubscribe when you don't wnat to trigger the handler function.
```javascript
/**
 * @name subscribe
 * @description Subscribe some component for trigger the handler function when some state was changed.
 * @param { any } component Your component.
 * @param { handler } handler Your function that will be triggered when some state change.
 */
 
// components/app/index.js
import {subscribe, unsubscribe, getState} from 'riotux';
  
  componentWillMount(){
     // when some state change, do something.
     subscribe(this, ( data ) => {
       // this.forceUpdate();
       this.setState({count: getState('count')})
     });
  }
  
    componentWillUnmount(){
      // remove this component for observe the changes on the state
      unsubscribe(this)
    }
```

#### License
MIT License.
