<img src="https://raw.githubusercontent.com/luisvinicius167/mockstate/master/img/logo_h_small.png"/> 

Mockstate is a centralized state management for Javascript applications. It makes easy the work with State of your app. Has a very simple and efficiently API. <br/>

### :information_desk_person: See the [React.js Todo ➞](http://mockstate-react.surge.sh/)<br/>
[![npm package](https://img.shields.io/badge/npm-0.0.2-blue.svg)](https://www.npmjs.com/package/state)

## Demos
---

[React.js Todo with Mockstate ➞](http://mockstate-react.surge.sh/)<br/>
[Preact.js + Mockstate ➞](http://mockstate-preact.surge.sh/)


## Getting Started
---

### Install
* Npm: ``` npm install mockstate ```
* Bower: ``` bower install mockstate ```

### :star: Why you should be using Mockstate?
 * It's pure flux, the flow is unidirectional.
 * Reactive state.
 * Small size (approximately 1.5kb)
 * Simple and efficiently API.
 * Actively maintained and being used in production.
 
### :raised_hands: Very simple to use.
 > Dispatch actions ➞ Do something  ➞ Receive the result of your action


### Simple and efficiently API.

Dispatch
 * Trigger some action for change the state. A Promise will be returned, that contain an Object with the keys ``action`` and ``value`` of your correspondent action response.
```javascript
/**
 * @name dispatch
 * @description Trigger some action for change the state.
 * @param {string} actionName The action name
 * @param { any } args Other Arguments
 * @return {Promise} Return a Promise with an Object that contain the stateValue and action. 
 * {value, action} = data;
 */

// On your component
import {dispatch} from 'mockstate';

dispatch('increment', 1)
  .then( ( data ) => {
    console.log('The state was changed.');
    // this.setState({count: data.value});
  })
```

Actions
 * Set your actions functions. Your action always needs to return a Promise and receive the state as first argument.
```javascript
/**
 * @name setActions
 * @description Set the actions functions.
 * @param {object} state The Store State as first argument
 * @param { any } args Other Arguments
 */
 
// actions/index.js
import {setActions} from 'mockstate';

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

Store State
 * Set the application Store state
```javascript
/**
 * @name setState
 * @description Set you application store state
 * @param {object} state Your application state data
 */
 
// store/index.js
import {setState} from 'mockstate';

setState({
  count: 1
});
```

Getting the Store State
 * Get a state value of your store
```javascript
/**
 * @name getState
 * @description Get the state value
 * @param {string} stateName The state name
 */
 
// store/index.js
import {getState} from 'mockstate';

let count = getState('count');
```

Middleware
 * Set a middleware function, that will be triggered after the action changed the state.
```javascript
/**
 * @name middleware
 * @description Get the state value
 * @param {Function} callback The callback that will be triggered and
 * receives the data of your action and the all state of your store application.
 */
 
// state/index.js
import { middleware } from 'mockstate';

middleware( (data, state) => {
    console.log('After action triggers:', data, ' and the Store State is: ', state);
})
```

Subscribe/Unsubscribe
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
import {subscribe, unsubscribe, getState} from 'mockstate';
  
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
