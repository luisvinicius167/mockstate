riotux.Actions({
  increment_counter: function ( store, n ) {
    console.log(store);
    store.dispatch('increment_counter', n);
  },
  increment: function ( store, n ) {
    store.dispatch('increment', n);
  }
});