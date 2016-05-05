riotux.Actions({
  increment_counter: function ( n, b, c ) {
    store.dispatch('increment_counter', n, b, c);
  },
  increment: function ( n ) {
    store.dispatch('increment', n);
  }
});