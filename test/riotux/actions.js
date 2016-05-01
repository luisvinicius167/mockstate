riotux.Actions({
  change_count: function ( n ) {
    store.dispatch('increment_counter', n);
  } 
});