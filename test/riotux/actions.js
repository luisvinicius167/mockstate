riotux.Actions({
  change_count: function ( n, b, c ) {
    store.dispatch('increment_counter', n, b, c);
  },
  add: function ( a, b ) {
    store.dispatch('add', a, b);
  }
});