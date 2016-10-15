# riotux <br/>
[![npm package](https://img.shields.io/badge/npm-2.0-blue.svg)](https://www.npmjs.com/package/riotux) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/luisvinicius167/riotux)
> A reactive centralized state management for Javascript Apps.

## Intro
**riotux** is a reactive centralized state management for Javascript applications. It is inspired by Flux and Redux, but with simplified concepts.

### Install
* Npm: ``` npm install riotux ```
* Bower: ``` bower install riotux ```

Demo: <a href="http://riotux-preact.surge.sh/">riotux 2.0 with Preact.js</a>

### Whats new on riotux 2.0?
Trigger actions and do something when the state was changed. You just use { dispatch } method to trigger actions for change the Appliaction Store State. 
When the State changes, you will receive the new state data, that contain the State value and Action Name.


### Very simple to use.
Sometimes, to better deal with shared state in large applications, we need to differentiate between Component local state and Application level state. Application state does not belong to a specific Component, but our Components can still observe it for reactive DOM updates.


## API
#### dispatch Trigger some action for change the state.
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
#### setActions
```javascript
// actions/index.js
import {setActions} from 'riotux';
setActions({
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
#### setState
```javascript
// store/index.js
import {setState} from 'riotux';
setState({
  count: 1
});
```

#### store.subscribe/unsubscribe
```javascript
// components/app/index.js
import {store, getState} from 'riotux';
		componentWillMount(){
      // when some state change, do something.
      store.subscribe(this, ( data ) => {
        // this.forceUpdate();
        this.setState({count: getState('count')})
      });
    }
    componentWillUnmount(){
      // remove this component for observe the changes on the state
      store.unsubscribe(this)
    }
```
### License
MIT License.
