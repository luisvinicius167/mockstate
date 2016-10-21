<img width="260" src="https://raw.githubusercontent.com/luisvinicius167/mockstate/master/img/logo_h_small.png"/> 

Mockstate is a centralized state management for Javascript applications. It provides more control of your state application with a simple and efficiently API and keep the state safe, when the user connection goes offline the state is saved in localStorage to be picked up when the connection back. <br/>

### :information_desk_person: See the [React.js Todo ➞](http://mockstate-react.surge.sh/)<br/>
[![npm package](https://img.shields.io/badge/npm-0.0.2-blue.svg)](https://www.npmjs.com/package/state)

## Demos

[React.js Todo with Mockstate ➞](http://mockstate-react.surge.sh/)<br/>
[Preact.js + Mockstate ➞](http://mockstate-preact.surge.sh/)

### Influences
Mockstate provides more control of your application state. It's envolve ideas of Redux and Flux, but explores all power of Promises, doing the work with async action easy.

## Getting Started

### Install
* Npm: ``` npm install mockstate ```
* Bower: ``` bower install mockstate ```

### Why you should be using Mockstate?
 * More control of you application state.
 * Safe State. 
 * It's pure flux, the flow is unidirectional.
 * Tiny API.
 * Actively maintained and being used in production.
 
### The Gist
The application state is stored in an object tree inside a single store.
The only way to change the state tree is to emit an action, that always return a Promise.
You can receive the result of your action using ``.then`` after your ``dispatch`` call.

That's it!

```javascript
import { setState, setActions, subscribe, dispatch } from 'mockstate';

/**
 * Set your store state in a single object.
 */
setState({
 count: 0
})

/**
 * Set your store state in a single object,
 * that always receive the store state as first argument.
 */
setActions({
  increment: ( state, n ) => {
    return new Promise(( resolve, reject ) => {
      let count = state.count += n
      resolve(count);
    });
  }
});

/**
 * You can use subscribe() to update your UI in response to state changes.
 * `${this}` can be your UI component, where the subscribe handler will be applied.
 */
subscribe( this, ( data ) => {
  console.log(`Some action was called, do something. Action name: ${data.action} Action Value: ${data.value}.`);
})

/**
 * The only way to mutate the internal state is to dispatch an action.
 * You can receive the response of your action and do something, or not.
 */
dispatch('increment', 1).then( data => {
    console.log(`The result of this action ${data.action} is: ${data.value}`);
})
//1
dispatch('increment', 1);
//2
dispatch('increment', 1);
//3
```

### Simple and efficiently API.

Dispatch
 * Trigger some action for do something. A Promise will be returned, that contain an Object with the keys ``action`` and ``value`` of your correspondent action response.
```javascript
/**
 * @name dispatch
 * @description Trigger some action.
 * @param {string} actionName Action name
 * @param { arguments } Arguments You can pass the arguments after the actionName
 * @return {Promise} Return a Promise with an Object that contain the value of the action and the action name. 
 * {value, action} = data;
 */

// On your component
import {dispatch} from 'mockstate';

// You can receive the response of your action and do something, or not.
// If you whant, you can chaining the dispatch Promises.
dispatch('increment', 1)
  .then( data => {
    console.log(`The action will be called. The result is: ${data.value}`);
    return data.value;
  })
  .then( value => {
    console.log(`The response is: ${value}`);
  })
```

Actions
 * Set your actions functions. Your actions always needs to return a Promise and receive the state as first argument.
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
  // each action receive the state as first argument
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
 * Set a middleware function, that will be triggered after the action calls.
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
 * Subscribe some UI Component for trigger the handler function when some action are trigger. 
 * Unsubscribe when you don't wnat to trigger the handler function.
```javascript
/**
 * @name subscribe
 * @description Subscribe some UI Component for trigger the handler function when some action calls.
 * @param { object } BindComponent The UI element that the handler function will be applied.
 * @param { handler } handler Your function that will be triggered when some state change.
 */
 
// components/app/index.js
import {subscribe, unsubscribe, getState} from 'mockstate';
  
  componentWillMount(){
     // when some state change, do something.
     subscribe(this, ( data ) => {
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
