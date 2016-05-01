#riotux [![npm package](https://img.shields.io/badge/npm-1.0.2-blue.svg)](https://www.npmjs.com/package/riotux)
> Flux and Redux inspired Application Architecture for Riot.js.

## Intro 
riotux is an application architecture for centralized state management in Riot.js applications. It is inspired by Flux and Redux, but with simplified concepts.

### Examples:
<a href="https://front-sale.firebaseapp.com/">Brazilian Point of Sale with Riot.js and riotux</a><br>
<a href="http://luisvinicius167.github.io/riot-riotux-blog">Blog example with Riot.js and riotux</a><br>
<a href="https://medium.com/@luisvinicius/riotux-event-controller-inspired-in-flux-8deaea738305#.ehsjexxl1"> A brief introduction about riotux</a>

### Install
Requires Riot 2.0+

* Npm: ``` npm install riotux ```
* Bower: ``` bower install riotux ```

### Why you need riotux?
If your app is simple enough, you probably don't need riotux. Don't apply it prematurely. But if you are building a medium-to-large-scale SPA, chances are you have run into situations that make you think about how to better structure things outside of your Riot components. This is where riotux comes into play.


### Stores: 
The **store** is basically a container that holds your application state. There are two things that makes a riotux store different:

 * The store are **reactive**. Your component can observe changes in the store state, and when the state is changed, your component will be updated.
 
 * You cannot directly mutate the store's **state**. The only way to change a store's state is by explicitly dispatching mutations.

Creating a riotux store is pretty straightforward - just provide an initial state object, and some mutations:

```javascript
var store = riotux.Store({
  state: {
    count: 1,
    title: 'riotux is nice!'
  },
  mutations: {  
    increment: function ( state ) {
      state.count += 1; 
    },
    changeTitle: function ( state, newTitle ) {
      state.title = newTitle;
    }
  }
});
```

### Mutations
The mutations are essentially events: each mutation has a name and a callback. In riotux the callback function will receive the state as the first argument:

```javascript
var store = riotux.Store({
  state: {
    count: 1,
  },
  mutations: {  
    increment: function ( state ) {
      state.count += 1;
    }
  }
});
```

You cannot directly call a mutation callback. When an increment event is dispatched, the callback is triggered. To invoke a mutation callback, you need to dispatch a mutation event:

```javascript
  store.dispatch('increment');
```

#### Dispatch with Arguments

```javascript
var store = riotux.Store({
  state: {
    count: 1,
  },
  mutations: {  
    increment: function ( state, value ) {
      state.count += value;
    }
  }
});
```

```javascript
  store.dispatch('increment', 2); //  log-> 3;
```
### Actions
Actions are just functions that dispatch mutations. The actions will be called from components.

Creating an action:
```javascript
var action = riotux.Actions({
  add: function ( number ) {
    store.dispatch('changeTitle', title);
    // if you don't have a store instance in your application
    // riotux.store.dispatch('increment', 1);
  }
}); 
```
#### Calling an action on your component

```javascript
  riotux.emit('count', 'increment', 10);
```

The ```emit``` recieves the **state** that you wants to change as first argument, the ***mutation event name** as the second argument and the values you nedd to pass like arguments to the mutation callback.
### Data Flow
In riotux data flow is unidirectional, as it should be in Flux:

* The component triggers action calls;
* Actions dispatch mutations that change the state;
* Changes in state flow from the store back into the component via riotux obervables.

### Application Structure

### License
MIT License.
